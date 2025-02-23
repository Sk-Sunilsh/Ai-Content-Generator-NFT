import React, { useState } from "react";
import Web3 from "web3";
import ImageNFT from "./AIContentNFT.json"; // Smart Contract ABI
import {
  Container,
  InputContainer,
  Input,
  Button,
  OutputContainer,
  ImageContainer,
  Image,
  LoadingText,
  ButtonGroup,
  HomeButton,
  ClearButton,
} from "./StyledImage";

const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your API Key
const CONTRACT_ABI = ImageNFT;
const CONTRACT_ADDRESS =process.env.REACT_APP_CONTRACT_ADDRESS; // Replace with your deployed contract address
console.log(API_KEY, CONTRACT_ADDRESS);
const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt) return alert("⚠ Please enter a text prompt.");
  
    setLoading(true);
    setImageSrc(null);
  
    try {
      // Generate image
      const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
          headers: { Authorization: `Bearer ${API_KEY}` },
          method: "POST",
          body: JSON.stringify({ inputs: prompt }),
        }
      );
  
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      setImageSrc(objectUrl);
  
      // Wait a bit for the image to be rendered on the screen
      setLoading(false);
  
      // Upload to IPFS and mint NFT only after the image is shown
      const ipfsHash = await uploadToIPFS(blob);
      if (ipfsHash) {
        await mintNFT(prompt, "Image", ipfsHash);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Failed to generate image.");
      setLoading(false);
    }
  };
  

  const uploadToIPFS = async (imageBlob) => {
    const formData = new FormData();
    formData.append("file", imageBlob, "image.png");

    try {
      const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
          pinata_api_key: "90b81923550bfb149ea9",
          pinata_secret_api_key: "9f235b3d1215543362fd22b6edeed8c39cd0c1b81419df85a37ad6f517184a89",
        },
        body: formData,
      });

      const data = await response.json();
      return data.IpfsHash;
    } catch (error) {
      console.error("IPFS Upload Error:", error);
      alert("Failed to upload image to IPFS.");
      return null;
    }
  };

  const mintNFT = async (title, contentType, ipfsHash) => {
    if (!window.ethereum) {
      return alert("⚠ MetaMask is not installed. Please install MetaMask.");
    }

    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const accounts = await web3.eth.getAccounts();
      const senderAddress = accounts[0];

      console.log("Connected Wallet:", senderAddress);

      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

      const tx = await contract.methods.mintNFT(title, contentType, ipfsHash).send({
        from: senderAddress,
        gas: 3000000,
      });

      console.log("NFT Minted:", tx);
      alert(`🎉 NFT Minted! View on IPFS: https://ipfs.io/ipfs/${ipfsHash}`);
    } catch (err) {
      console.error("Minting Error:", err);
      alert("❌ Error minting NFT. Check console for details.");
    }
  };

  const handleDownload = () => {
    if (imageSrc) {
      fetch(imageSrc)
        .then((res) => res.blob())
        .then((file) => {
          let a = document.createElement("a");
          a.href = URL.createObjectURL(file);
          a.download = "generated_image.png";
          a.click();
        })
        .catch(() => alert("❌ Failed to download image."));
    }
  };

  const resetImage = () => {
    setPrompt("");
    setImageSrc(null);
  };

  return (
    <>
      <HomeButton href="/">Home</HomeButton>
      <Container>
        <h1>🎨 AI IMAGE GENERATOR 🎨</h1>
        <InputContainer>
          <Input
            type="text"
            placeholder="Enter a text to generate the image"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button onClick={generateImage} disabled={loading}>
  {loading ? "Generating..." : "Generate Image"}
</Button>

          {prompt && (
            <ClearButton onClick={() => setPrompt("")}>Clear</ClearButton>
          )}
        </InputContainer>

        {/* Display output container only when image is generated */}
        {imageSrc && (
          <OutputContainer>
            <ImageContainer>
              {loading ? (
                <LoadingText visible={loading}>Generating Image... Please wait.</LoadingText>
              ) : (
                <Image src={imageSrc} alt="Generated" visible={!!imageSrc} />
              )}
            </ImageContainer>

            <ButtonGroup>
              <Button onClick={resetImage}>Reset</Button>
              {imageSrc && (
                <Button as="a" href={imageSrc} download="generated_image.png">
                  Download
                </Button>
              )}
            </ButtonGroup>
          </OutputContainer>
        )}
      </Container>
    </>
  );
};

export default ImageGenerator;
