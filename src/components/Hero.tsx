import React from 'react';

import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroButton,
  HeroImage,
} from './hero-styles';

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          Oi, eu sou a
          <p> Paulinha Carlos</p>
        </HeroTitle>
        <HeroDescription>
          Desenvolvedora Back-end
          <p>
            formada em Publicidade 🐓 pós-graduada em Arquitetura de Software 💻
            com experiência em Design Gráfico 🎨
            paixão por pessoas 🫂 e talento pra Gateira 😻.
          </p>
        </HeroDescription>
        <HeroButton>Saiba mais sobre mim</HeroButton>
      </HeroContent>
      <HeroImage>
        <img src="https://media.licdn.com/dms/image/C4E03AQFOLyAXSuBYQA/profile-displayphoto-shrink_800_800/0/1657049568618?e=1727913600&v=beta&t=HFNlDbE0-3EZhLoJSRVnenejf3_PUCxSBR8Kt4emF1c" alt="Profile" />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;
