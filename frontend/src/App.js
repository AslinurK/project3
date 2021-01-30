import React from 'react';
import { Container } from 'reactstrap'
import Routes from './routes';
import { ContextWrapper } from './user-context'
import './App.css';

function App() {
  return (
    <ContextWrapper>
      <Container>
        <h1>EZ WELLNESS</h1>
        <h2>Class management for socially distanced in-person and online classes</h2>
        <div className="content">
          <Routes />
        </div>
      </Container>
    </ContextWrapper>
  );
}

export default App;