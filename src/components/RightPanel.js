import React, { useState } from 'react';
import { Box, Typography, TextField, Divider, Paper, List, ListItem, IconButton, Tooltip, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import MenuIcon from '@mui/icons-material/Menu';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RefreshIcon from '@mui/icons-material/Refresh';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MemoryIcon from '@mui/icons-material/Memory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './RightPanel.css';

const RightPanel = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [viewMode, setViewMode] = useState('list');

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleToggleMode = () => {
    if (viewMode === 'list') {
      setViewMode('grid');
    } else if (viewMode === 'grid') {
      setViewMode('table');
    } else {
      setViewMode('list');
    }
  };

  return (
    <Box className="panel right-panel">
      {/* New UI Rows */}
      <Box sx={{ mb: 2 }}>
        {/* Row 1: Header with 'Completions' and action icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Completions</Typography>
          <Box>
            <Tooltip title="Search completions">
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter completions">
              <IconButton size="small">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={`Switch view mode (current: ${viewMode})`}>
              <IconButton size="small" onClick={handleToggleMode}>
                {viewMode === 'list' ? <ViewListIcon /> : viewMode === 'grid' ? <GridViewIcon /> : <TableRowsIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="More options">
              <IconButton size="small" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Clear prompts output</MenuItem>
              <MenuItem onClick={handleMenuClose}>Delete prompts</MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* Row 2: Instructional area */}
        <Box sx={{ mt: 1, p: 1, bgcolor: 'background.paper', border: '1px dashed grey', borderRadius: 1 }}>
          <Typography variant="body2">
            Compose your prompt and click on the "Execute" button to generate completions.
          </Typography>
        </Box>
      </Box>

      {/* Existing content */}
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
        <Tooltip title="Copy">
          <IconButton size="small">
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Export">
          <IconButton size="small">
            <FileDownloadIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Refresh">
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Typography variant="body2">
          <Tooltip title="Time taken to process the prompt" placement="top">
            <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
          </Tooltip>
          20 sec
        </Typography>
        <Typography variant="body2">
          <Tooltip title="Number of tokens processed in the prompt" placement="top">

            <MemoryIcon fontSize="small" sx={{ mr: 0.5 }} />
          </Tooltip>
          245 tokens        
        </Typography>
        <Typography variant="body2">
          <Tooltip title="Estimated cost of processing the prompt" placement="top">
            <AttachMoneyIcon fontSize="small" sx={{ mr: 0.5 }} />
          </Tooltip>
          $0.25
        </Typography>
      </Box>
      {/* <Divider sx={{ my: 2 }} />
      <Box>
        <Typography variant="h6">Debug Logs</Typography>
        <Paper sx={{ p: 1, mt: 1 }}>
          <Typography>No errors.</Typography>
        </Paper>
      </Box> */}
      <Divider sx={{ my: 2 }} />
      {/* <Box>
        <Typography variant="h6">Run History</Typography>
        <List>
          <ListItem>
            <Typography>Run at time ...</Typography>
          </ListItem>
        </List>
      </Box> */}
    </Box>
  );
};

export default RightPanel; 