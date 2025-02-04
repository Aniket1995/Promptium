import React, { useState } from 'react';
import {
  Box,
  Typography,
  Collapse,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  InputAdornment
} from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import TuneIcon from '@mui/icons-material/Tune';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import PieChartIcon from '@mui/icons-material/PieChart';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import './MiddlePanel.css';

const MiddlePanel = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [variablesOpen, setVariablesOpen] = useState(false);
  const [systemOpen, setSystemOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  const handleCopy = async () => {
    const text = `System Prompt\nUser prompt`;
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <>
      <Box className="panel middle-panel">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
          {/* Row 1: Prompt header with action buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Typography variant="h6" fontWeight="bold">Prompt</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title="Preview">
                <IconButton onClick={() => setPreviewModalOpen(true)}>
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Execute">
                <IconButton>
                  <PlayArrowIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          {/* Row 2: Existing UI components */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setModelOpen(!modelOpen)}>
                <MemoryIcon sx={{ mr: 1 }} />
                <Typography variant="subtitle1">Model</Typography>
                <IconButton size="small" sx={{ transform: modelOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: '0.3s' }}>
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
              <Collapse in={modelOpen} timeout="auto" unmountOnExit>
                <Box sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* Row 1: Provider, Model dropdowns and fee input */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <FormControl sx={{ flex: 1 }}>
                        <InputLabel>Provider</InputLabel>
                        <Select label="Provider" defaultValue="">
                          <MenuItem value="openai">OpenAI</MenuItem>
                          <MenuItem value="deepseek">Deepseek</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ flex: 1 }}>
                        <InputLabel>Model</InputLabel>
                        <Select label="Model" defaultValue="">
                          <MenuItem value="r1_14B">DeepSeek R1:14B</MenuItem>
                          <MenuItem value="r1_32B">DeepSeek R1:32B</MenuItem>
                          <MenuItem value="r1_671B">DeepSeek R1:671B</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField 
                        disabled 
                        placeholder="0.0015-0.002 / 1k" 
                        variant="outlined" 
                        sx={{ 
                          flex: 1, 
                          '& .MuiOutlinedInput-root': { 
                            '& fieldset': { borderStyle: 'dotted' } 
                          },
                          '& .MuiInputBase-input.Mui-disabled': {
                            color: 'black',
                            textAlign: 'center'
                          }
                        }} 
                      />
                    </Box>
                    {/* Row 2: Number Inputs for parameters with helper texts and default values */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <TextField 
                          label="Temperature" 
                          type="number"
                          variant="outlined" 
                          sx={{ flex: 1 }} 
                          defaultValue={0.2}
                          helperText="Allowed: 0 - 2"
                          InputProps={{
                             startAdornment: (
                                <InputAdornment position="start">
                                  <ThermostatIcon fontSize="small" />
                                </InputAdornment>
                             ),
                             inputProps: { min: 0, max: 2, step: 0.1 }
                          }}
                      />
                      <TextField 
                          label="Top P" 
                          type="number"
                          variant="outlined" 
                          sx={{ flex: 1 }}
                          defaultValue={1}
                          helperText="Allowed: 0 - 3"
                          InputProps={{
                             startAdornment: (
                                <InputAdornment position="start">
                                  <PieChartIcon fontSize="small" />
                                </InputAdornment>
                             ),
                             inputProps: { min: 0, max: 3, step: 0.1 }
                          }}
                      />
                      <TextField 
                          label="Max tokens" 
                          type="number"
                          variant="outlined" 
                          sx={{ flex: 1 }}
                          defaultValue={258}
                          helperText="Allowed: 1 - 4096"
                          InputProps={{
                             startAdornment: (
                                <InputAdornment position="start">
                                  <FormatListNumberedIcon fontSize="small" />
                                </InputAdornment>
                             ),
                             inputProps: { min: 1, max: 4096 }
                          }}
                      />
                      <TextField 
                          label="Frequency penalty"
                          type="number"
                          variant="outlined"
                          sx={{ flex: 1 }}
                          defaultValue={0}
                          helperText="Allowed: -2 to +2"
                          InputProps={{
                             startAdornment: (
                                <InputAdornment position="start">
                                  <TrendingDownIcon fontSize="small" />
                                </InputAdornment>
                             ),
                             inputProps: { min: -2, max: 2, step: 0.1 }
                          }}
                      />
                      <TextField 
                          label="Presence penalty"
                          type="number"
                          variant="outlined"
                          sx={{ flex: 1 }}
                          defaultValue={0}
                          helperText="Allowed: -2 to +2"
                          InputProps={{
                             startAdornment: (
                                <InputAdornment position="start">
                                  <TrendingUpIcon fontSize="small" />
                                </InputAdornment>
                             ),
                             inputProps: { min: -2, max: 2, step: 0.1 }
                          }}
                      />
                    </Box>
                    {/* Row 3: Stop Sequence input */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <TextField label="Stop Sequence" placeholder="finish, shhh" variant="outlined" fullWidth />
                    </Box>
                  </Box>
                </Box>
              </Collapse>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setVariablesOpen(!variablesOpen)}>
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
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setSystemOpen(!systemOpen)}>
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
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setUserOpen(!userOpen)}>
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
      </Box>
      <Dialog open={previewModalOpen} onClose={() => setPreviewModalOpen(false)} fullWidth maxWidth="sm" PaperProps={{ sx: { overflowX: 'hidden' } }}>
        <DialogTitle>Preview</DialogTitle>
        <DialogContent>
          <TextField placeholder="System Prompt" multiline minRows={3} fullWidth margin="normal" InputProps={{ readOnly: true }} />
          <TextField placeholder="User prompt" multiline minRows={3} fullWidth margin="normal" InputProps={{ readOnly: true }} />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between', px: 3, py: 1, overflowX: 'hidden' }}>
          <Typography variant="body2">T 4</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={handleCopy}>
              <ContentCopyIcon fontSize="small" />
            </IconButton>
            <Button onClick={() => setPreviewModalOpen(false)}>Close</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MiddlePanel; 