import styled from "styled-components";

// Page Wrapper
export const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
background: linear-gradient(to top, rgba(0, 136, 204, 0.11), rgba(240, 188, 240, 0.692));

  background: url("./styles/pexels-felixmittermeier-944130.jpg") no-repeat center center;
background-size: cover;


  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

/* Navbar */
export const Navbar = styled.nav`
   background: #4a90e2; /* Same as PageWrapper */
  backdrop-filter: blur(10px);
  color: white;
  text-align: center;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;
export const NavLink = styled.a`
  color: #ffffff; /* Changed to white for better visibility */
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffcc00; /* Bright yellow for better contrast */
  }
`;

/* Main Container */
export const Container = styled.div`
  position: relative;
  margin-top: 80px;
  width: 85%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 25px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #ffcc00;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

/* Input Box */
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border: 2px solid #ffcc00;
  }
`;

/* Button */
export const GenerateButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  background: linear-gradient(135deg, #ffcc00, #ff8800);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, #ffaa00, #ff6600);
    transform: scale(1.07);
  }
`;

/* Digital Art Display Section 
* Digital Art Display Section */
export const ImageContainer = styled.div`
  margin-top: 20px;
  width: 60%;
  height: 60%;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  min-height: 250px;
  overflow-y: auto;
  text-align: center;
  max-width: 1200px;

  /* Flexbox to center the image */
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ImageTitle = styled.h2`
  font-size: 22px;
  color: #ffcc00;
  margin-bottom: 12px;
  text-align: center;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.src ? "block" : "none")};
`;


/* Loading Text */
export const LoadingText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.visible ? "block" : "none")};
  animation: fadeInOut 1s infinite alternate;

  @keyframes fadeInOut {
    0% { opacity: 0.3; }
    100% { opacity: 1; }
  }
`;
