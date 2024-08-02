import React from 'react';
import './App.css';

import { Header, Container, GlobalStyle } from "./styles.tsx";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>Meu Portfólio</h1>
      </Header>
      <Container>
        <main>
          <section>
            <h2>Sobre Mim</h2>
            <p>Breve descrição sobre você.</p>
          </section>
          <section>
            <h2>Projetos</h2>
            <div>
              <h3>Projeto 1</h3>
              <p>Descrição do projeto 1.</p>
            </div>
            <div>
              <h3>Projeto 2</h3>
              <p>Descrição do projeto 2.</p>
            </div>
          </section>
          <section>
            <h2>Contato</h2>
            <p>Seu e-mail ou outras informações de contato.</p>
          </section>
        </main>
      </Container>
    </>
  );
};

export default App;
