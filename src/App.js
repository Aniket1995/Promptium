import React from 'react';
import { Box } from '@mui/material';
import './App.css';
import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <Box className="app-container">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </Box>
  );
}

export default App;
