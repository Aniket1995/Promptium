import React, { useState } from 'react';
import { Box, Button, Typography, TextField, List, ListItem, Paper, Divider, Collapse, IconButton, Tabs, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MemoryIcon from '@mui/icons-material/Memory';
import TuneIcon from '@mui/icons-material/Tune';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import logo from './logo.svg';
import './App.css';

const LeftPanel = () => {
  const [promptsOpen, setPromptsOpen] = useState(true);
  const [datasetsOpen, setDatasetsOpen] = useState(true);
  return (
    <Box className="panel left-panel" sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <img src={logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 8 }} />
        <Typography variant="h6">Promptium</Typography>
      </Box>
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setPromptsOpen(!promptsOpen)}>
            <Typography variant="subtitle1">Prompts</Typography>
            <IconButton size="small" sx={{ transform: promptsOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: '0.3s' }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Button variant="contained" size="small">+</Button>
        </Box>
        <Collapse in={promptsOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem><Typography>Prompt 1</Typography></ListItem>
            <ListItem><Typography>Prompt 2</Typography></ListItem>
          </List>
        </Collapse>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setDatasetsOpen(!datasetsOpen)}>
            <Typography variant="subtitle1">Datasets</Typography>
            <IconButton size="small" sx={{ transform: datasetsOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: '0.3s' }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Button variant="contained" size="small">+</Button>
        </Box>
        <Collapse in={datasetsOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem><Typography>Dataset 1</Typography></ListItem>
            <ListItem><Typography>Dataset 2</Typography></ListItem>
          </List>
        </Collapse>
      </Box>
    </Box>
  );
};

const MiddlePanel = () => {
  const [modelOpen, setModelOpen] = useState(true);
  const [variablesOpen, setVariablesOpen] = useState(true);
  const [systemOpen, setSystemOpen] = useState(true);
  const [userOpen, setUserOpen] = useState(true);

  return (
    <Box className="panel middle-panel" sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={() => setModelOpen(!modelOpen)} style={{ cursor: 'pointer' }}>
            <MemoryIcon sx={{ mr: 1 }} />
            <Typography variant="subtitle1">Model</Typography>
            <IconButton size="small" sx={{ transform: modelOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: '0.3s' }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Collapse in={modelOpen} timeout="auto" unmountOnExit>
            <Box sx={{ p: 2 }}>
              <Typography>Model Content</Typography>
            </Box>
          </Collapse>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={() => setVariablesOpen(!variablesOpen)} style={{ cursor: 'pointer' }}>
            <TuneIcon sx={{ mr: 1 }} />
            <Typography variant="subtitle1">Variables</Typography>
            <IconButton size="small" sx={{ transform: variablesOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: '0.3s' }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Collapse in={variablesOpen} timeout="auto" unmountOnExit>
            <Box sx={{ p: 2 }}>
              <Typography>Variables Content</Typography>
            </Box>
          </Collapse>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={() => setSystemOpen(!systemOpen)} style={{ cursor: 'pointer' }}>
            <AnnouncementIcon sx={{ mr: 1 }} />
            <Typography variant="subtitle1">System message</Typography>
            <IconButton size="small" sx={{ transform: systemOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: '0.3s' }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Collapse in={systemOpen} timeout="auto" unmountOnExit>
            <Box sx={{ p: 2 }}>
              <Typography>System Message Content</Typography>
            </Box>
          </Collapse>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={() => setUserOpen(!userOpen)} style={{ cursor: 'pointer' }}>
            <ChatBubbleOutlineIcon sx={{ mr: 1 }} />
            <Typography variant="subtitle1">User Message</Typography>
            <IconButton size="small" sx={{ transform: userOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: '0.3s' }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Collapse in={userOpen} timeout="auto" unmountOnExit>
            <Box sx={{ p: 2 }}>
              <Typography>User Message Content</Typography>
            </Box>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
};

const RightPanel = () => (
  <Box className="panel right-panel" sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>Output & Analytics</Typography>
    <TextField
      label="Output Preview"
      multiline
      rows={6}
      fullWidth
      variant="outlined"
      InputProps={{ readOnly: true }}
      margin="normal"
    />
    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
      <Button variant="contained">Copy</Button>
      <Button variant="contained" color="primary">Export</Button>
      <Button variant="outlined">Refresh</Button>
    </Box>
    <Divider sx={{ my: 2 }} />
    <Box>
      <Typography variant="body1">Response Time: -</Typography>
      <Typography variant="body1">Token Count: -</Typography>
      <Typography variant="body1">Cost Estimate: -</Typography>
    </Box>
    <Divider sx={{ my: 2 }} />
    <Box>
      <Typography variant="h6">Debug Logs</Typography>
      <Paper sx={{ p: 1, mt: 1 }}><Typography>No errors.</Typography></Paper>
    </Box>
    <Divider sx={{ my: 2 }} />
    <Box>
      <Typography variant="h6">Run History</Typography>
      <List>
        <ListItem><Typography>Run at time ...</Typography></ListItem>
      </List>
    </Box>
  </Box>
);

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
