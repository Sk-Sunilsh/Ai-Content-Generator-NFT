import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <HeroSection>
        <SlideInFadeDown delay="0s">
          <h1>AI-Driven NFT Content Creation</h1>
        </SlideInFadeDown>
        <SlideInFadeDown delay="0.2s">
          <p>
            Generate unique AI-powered content for NFTs, including stories, code,
            images, articles, and poems. Elevate your NFT creations with AI!
          </p>
        </SlideInFadeDown>
        <SlideInFadeDown delay="0.4s">
          <Link to="/image-generator">
            <HeroButton>Start Creating</HeroButton>
          </Link>
        </SlideInFadeDown>
      </HeroSection>

      <FeaturesSection>
        <SlideInFadeUp>
          <h2>Our AI Tools</h2>
          <FeaturesGrid>
            <FeatureLink to="/story-generator">
              <FeatureCard $delay="0s">
                <CardContent>
                  <h3>📝 AI Story Writer</h3>
                  <p>Create compelling NFT storylines.</p>
                </CardContent>
              </FeatureCard>
            </FeatureLink>

          

            <FeatureLink to="/code-generator">
              <FeatureCard $delay="0.1s">
                <CardContent>
                  <h3>💻 AI Code Generator</h3>
                  <p>Generate smart contract code for blockchain integration.</p>
                </CardContent>
              </FeatureCard>
            </FeatureLink>

            <FeatureLink to="/image-generator">
              <FeatureCard $delay="0.2s">
                <CardContent>
                  <h3>🎨 AI Image Generator</h3>
                  <p>Generate NFT artwork effortlessly.</p>
                </CardContent>
              </FeatureCard>
            </FeatureLink>

            <FeatureLink to="/article-generator">
              <FeatureCard $delay="0.3s">
                <CardContent>
                  <h3>📰 AI Article Creator</h3>
                  <p>Generate unique NFT-related articles.</p>
                </CardContent>
              </FeatureCard>
            </FeatureLink>
            <FeatureLink to="/digital-art-generator">
              <FeatureCard $delay="0.1s">
                <CardContent>
                  <h3>🎨 AI Digital Art Generator</h3>
                  <p>Generate AI-powered digital art and tokenize it on the blockchain with smart contracts.</p>
                </CardContent>
              </FeatureCard>
            </FeatureLink>
            <FeatureLink to="/poem-generator">
              <FeatureCard $delay="0.4s">
                <CardContent>
                  <h3>✍ AI Poem Generator</h3>
                  <p>Create poetic NFT descriptions.</p>
                </CardContent>
              </FeatureCard>
            </FeatureLink>
          </FeaturesGrid>
        </SlideInFadeUp>
      </FeaturesSection>

      <HowItWorksSection>
        <SlideInFadeUp>
          <h2>How It Works</h2>
          <Steps>
            <Step $delay="0s">
              <h3>1️⃣ Select Content Type</h3>
              <p>Choose what kind of content you want to generate.</p>
            </Step>
            <Step $delay="0.2s">
              <h3>2️⃣ AI Generates Unique Content</h3>
              <p>Our AI creates a one-of-a-kind NFT asset.</p>
            </Step>
            <Step $delay="0.4s">
              <h3>3️⃣ Export & Mint</h3>
              <p>Download your content and mint it on your preferred blockchain.</p>
            </Step>
          </Steps>
        </SlideInFadeUp>
      </HowItWorksSection>

      <CallToAction>
        <SlideInFadeUp>
          <h2>Start Your AI-Powered NFT Journey Today!</h2>
          <ButtonContainer>
            <Link to="/story-generator">
              <HeroButton>Try Story Generator</HeroButton>
            </Link>
            <Link to="/article-generator">
              <HeroButton>Try Article Generator</HeroButton>
            </Link>
          </ButtonContainer>
        </SlideInFadeUp>
      </CallToAction>
    </Container>
  );
};

export default HomePage;

/* Animations */
const slideInDownFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInUpFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

/* Styled Components */
const SlideInFadeDown = styled.div`
  opacity: 0;
  animation: ${slideInDownFade} 0.8s ease forwards;
  animation-delay: ${props => props.delay};
`;

const SlideInFadeUp = styled.div`
  opacity: 0;
  animation: ${slideInUpFade} 0.8s ease forwards;
`;

const Container = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding: 20px;
  background: linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%);
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #2A2D64 0%, #1D1F4A 100%);
  color: white;
  padding: 80px 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: 'Kanit', sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    letter-spacing: -0.5px;
    background: linear-gradient(120deg, #fff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.3rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const HeroButton = styled.button`
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 20px;
  color: white;
  transition: all 0.3s ease;
  animation: ${pulseGlow} 2s infinite;

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, #FF8E53 0%, #FF6B6B 100%);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
  }
`;

const FeaturesSection = styled.div`
  margin-top: 80px;

  h2 {
    font-family: 'Kanit', sans-serif;
    font-weight: 700;
    font-size: 2.8rem;
    margin-bottom: 2rem;
    color: #2A2D64;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
`;

const CardContent = styled.div`
  transform: translateY(0);
  transition: transform 0.3s ease;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 250px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  opacity: 0;
  animation: ${slideInUpFade} 0.8s ease forwards;
  animation-delay: ${props => props.$delay};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF6B6B, #FF8E53);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  h3 {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #2A2D64;
    font-size: 1.4rem;
  }

  p {
    font-family: 'Roboto Condensed', sans-serif;
    line-height: 1.5;
    color: #666;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);

    &::before {
      transform: scaleX(1);
    }

    ${CardContent} {
      transform: translateY(-5px);
    }
  }
`;

const FeatureLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const HowItWorksSection = styled.div`
  margin-top: 80px;

  h2 {
    font-family: 'Kanit', sans-serif;
    font-weight: 700;
    font-size: 2.8rem;
    color: #2A2D64;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Steps = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const Step = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 250px;
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: ${slideInUpFade} 0.8s ease forwards;
  animation-delay: ${props => props.$delay};

  h3 {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #2A2D64;
  }

  p {
    font-family: 'Roboto Condensed', sans-serif;
    line-height: 1.5;
    color: #666;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  }
`;

const CallToAction = styled.div`
  margin-top: 80px;
  background: linear-gradient(135deg, #2A2D64 0%, #1D1F4A 100%);
  color: white;
  padding: 60px 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  h2 {
    font-family: 'Kanit', sans-serif;
    font-weight: 700;
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(120deg, #fff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;