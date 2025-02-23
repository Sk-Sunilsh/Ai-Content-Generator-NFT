import React, { useState } from "react";
import Web3 from "web3";
import AiContent from "./AIContentNFT.json";
import {
  PageWrapper,
  Navbar,
  NavLink,
  Container,
  Title,
  InputBox,
  TextArea,
  GenerateButton,
  ImageContainer,
  ImagePreview,
  LoadingText,
} from "./Styleddigitalart";

const API_KEY = "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"; // Replace with your API Key
const CONTRACT_ABI = AiContent;
const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS; // Deployed contract address on Sepolia

const DigitalArtGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateArt = async () => {
    if (!prompt) return alert("⚠ Please enter an art description.");
  
    setLoading(true);
    setImageSrc(null);
  
    try {
      console.log("📡 Sending request to Hugging Face API...");
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          headers: { 
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            inputs: prompt.trim(),
            negative_prompt: "blurry, low quality, distorted",
          }),
        }
      );
  
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("❌ API Error:", response.status, response.statusText, errorDetails);
        throw new Error(`Failed to generate art: ${errorDetails.error}`);
      }
  
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      setImageSrc(objectUrl);  // Display the image
  
      // Wait for the image to load before proceeding to mint the NFT
      const imageElement = new Image();
      imageElement.src = objectUrl;
      imageElement.onload = async () => {
        console.log("🎨 Image displayed, starting NFT minting...");
        
        // Upload to IPFS & Mint NFT
        const ipfsHash = await uploadToIPFS(blob);
        if (ipfsHash) {
          await mintNFT(prompt, "Digital Art", ipfsHash);
        }
      };
    } catch (error) {
      console.error("❌ API Call Failed:", error);
      alert("❌ Failed to generate art. Check the console for more details.");
    }
  
    setLoading(false);
  };
  

  const uploadToIPFS = async (imageBlob) => {
    const formData = new FormData();
    formData.append("file", imageBlob, "digital_art.png");

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
      console.error("❌ IPFS Upload Error:", error);
      alert("Failed to upload artwork to IPFS.");
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

      console.log("🎨 Connected Wallet:", senderAddress);

      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

      const tx = await contract.methods.mintNFT(title, contentType, ipfsHash).send({
        from: senderAddress,
        gas: 3000000,
      });

      console.log("🎉 NFT Minted:", tx);
      alert(`🎨 NFT Minted! View on IPFS: https://ipfs.io/ipfs/${ipfsHash}`);
    } catch (err) {
      console.error("❌ Minting Error:", err);
      alert("❌ Error minting NFT. Check console for details.");
    }
  };

  return (
    <PageWrapper>
      {/* Navbar */}
      <Navbar>
        <NavLink href="/">𝐇𝐨𝐦𝐞</NavLink>
      </Navbar>

      {/* Digital Art Generator UI */}
      <Container>
        <Title>🎨 AI Digital Art Generator 🎨</Title>
        <InputBox>
          <TextArea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt to create AI art..."
          ></TextArea>
          <GenerateButton onClick={generateArt} disabled={loading}>
            {loading ? "Generating..." : "Generate Art"}
          </GenerateButton>
        </InputBox>
      </Container>

      {/* Generated Digital Art Section */}
      {/* Generated Digital Art Section */}
<ImageContainer visible={!!imageSrc}>
  <LoadingText visible={loading}>✨ Creating masterpiece... Please wait.</LoadingText>
  <ImagePreview src={imageSrc} alt="Generated Art" visible={!!imageSrc} />
</ImageContainer>

    </PageWrapper>
  );
};

export default DigitalArtGenerator;
