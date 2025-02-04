import React, { useState } from 'react';
import { Box, Button, Typography, List, ListItem, Divider, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../logo.svg';

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
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={() => setDatasetsOpen(!datasetsOpen)}>
          <Typography variant="subtitle1">Datasets</Typography>
          <IconButton size="small" sx={{ transform: datasetsOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: '0.3s' }}>
            <ExpandMoreIcon />
          </IconButton>
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

export default LeftPanel; 