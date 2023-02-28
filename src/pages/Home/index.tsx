import React from 'react';

import { Container } from './styles'

interface HomeProps {
  onToggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ onToggleTheme }) => {
  return (
    <Container>
      <span>Hello World!</span>
      <button onClick={onToggleTheme}>Change Theme</button>
    </Container>
  );
}

export default Home;