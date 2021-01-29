import React from 'react';
import { Container } from 'reactstrap'
import Routes from './routes';
import { ContextWrapper } from './user-context'
import './App.css';

function App() {
  return (
    <ContextWrapper>
      <Container>
        <h1>WellnessLife</h1>
        <h2>Organize in-person and online classes, Build a community, Stay safe & strong!</h2>
        <div className="content">
          <Routes />
        </div>
      </Container>
    </ContextWrapper>
  );
}

export default App;