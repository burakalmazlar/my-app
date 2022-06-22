import React from 'react';
import './App.css';
import Container from './components/Container';
import { ThemeContextProvider } from './context/ThemeContext';


function App() {
  return (
    <ThemeContextProvider>
      <Container></Container>
    </ThemeContextProvider>
  );
}

export default App;
