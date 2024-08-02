import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HeroSection, HeroContent, HeroTitle, HeroDescription, HeroButton, HeroImage, } from './hero-styles';
const Hero = () => {
    return (_jsxs(HeroSection, { children: [_jsxs(HeroContent, { children: [_jsxs(HeroTitle, { children: ["Oi, eu sou a", _jsx("p", { children: " Paulinha Carlos" })] }), _jsxs(HeroDescription, { children: ["Desenvolvedora Back-end", _jsx("p", { children: "formada em Publicidade \uD83D\uDC13 p\u00F3s-graduada em Arquitetura de Software \uD83D\uDCBB com experi\u00EAncia em Design Gr\u00E1fico \uD83C\uDFA8 paix\u00E3o por pessoas \uD83E\uDEC2 e talento pra Gateira \uD83D\uDE3B." })] }), _jsx(HeroButton, { children: "Saiba mais sobre mim" })] }), _jsx(HeroImage, { children: _jsx("img", { src: "https://media.licdn.com/dms/image/C4E03AQFOLyAXSuBYQA/profile-displayphoto-shrink_800_800/0/1657049568618?e=1727913600&v=beta&t=HFNlDbE0-3EZhLoJSRVnenejf3_PUCxSBR8Kt4emF1c", alt: "Profile" }) })] }));
};
export default Hero;
