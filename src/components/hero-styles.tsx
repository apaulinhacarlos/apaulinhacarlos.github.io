import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  padding-right: 0px;
  background-color: #f8f9fa;
`;

export const HeroContent = styled.div`
  max-width: 50%;
  text-align: left;

`;

export const HeroTitle = styled.h1`
  font-size: 2.0em;
  color: #f4acb7;
  font-weight: bold;
  p {
    font-size: 1.5em;
    color: #333;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  p {
    font-weight: normal;
    display: block;
    font-size: 0.9em;
    margin-top: 0;
  }
`;

export const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #f4acb7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const HeroImage = styled.div`
img {
  align-self: flex-end;
    max-width: 75%;
    border-radius: 10px;
  }
`;
