import styled from "styled-components";

// Container Wrapper
export const Container = styled.div`
  width: 100%;
  height: 90%;
  background: linear-gradient(to top, rgba(0, 136, 204, 0.11), rgba(240, 188, 240, 0.692));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 2px 2px 15px rgba(0, 136, 204, 0.2), -2px -2px 15px rgba(240, 188, 240, 0.2);
  border-radius: 30px;
  padding: 10px;
  gap: 20px;
`;

// Input Box and Button Container
export const InputContainer = styled.div`
  width: 80%;
  height: 25%;
  background: linear-gradient(to right, rgb(24, 30, 36), rgb(104, 121, 183));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  font-size: 22px;
  border-radius: 25px;
  padding: 10px;
  gap: 10px;
`;

// Input Element Styling
export const Input = styled.input`
  width: 80%;
  height: 40px;
  background-color: rgba(10, 46, 49, 0.68);
  border: none;
  border-radius: 25px;
  font-size: 18px;
  color: aliceblue;
  padding: 10px 15px;
  box-shadow: 2px 2px 10px rgb(0, 136, 204), -2px -2px 10px rgba(240, 188, 240, 0.4);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

// Button Styling
export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: rgba(10, 46, 49, 0.8);
  border: none;
  border-radius: 25px;
  font-size: 18px;
  color: aliceblue;
  box-shadow: 2px 2px 10px rgb(0, 136, 204);
  transition: background 0.3s ease, transform 0.3s, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 136, 204, 0.8);
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 136, 204, 0.8);
  }
`;

// Image Display Section Styling
export const OutputContainer = styled.div`
  width: 90%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

// Image Container
export const ImageContainer = styled.div`
  width: 65%;
  height: 100%;
  background: linear-gradient(to right, rgba(10, 46, 49, 0.8), rgba(104, 121, 183, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  flex-direction: column;
  padding: 20px;
`;

// Image Element
export const Image = styled.img`
  width: 80%;
  height: auto;
  border-radius: 20px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

// Loading Text Styling
export const LoadingText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.visible ? "block" : "none")};
  transition: opacity 0.3s ease;
`;

// Button Group Styling for Reset/Download
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

// Home Button Styling
export const HomeButton = styled.a`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(10, 46, 49, 0.8);
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 2px 2px 10px rgba(0, 136, 204, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 136, 204, 0.8);
    color: white;
  }
`;
// StyledImage.js or wherever you're defining your styled components

export const ClearButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.8); /* Example red color */
  border: none;
  border-radius: 25px;
  font-size: 18px;
  color: aliceblue;
  box-shadow: 2px 2px 10px rgb(255, 0, 0);
  transition: background 0.3s ease, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(255, 0, 0, 1);
    transform: scale(1.05);
  }
`;
