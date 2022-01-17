import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default function BasicNavBar () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="basicnav" sx={{ boxShadow:"none" }}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
          >
         <NavigateBeforeIcon />
          </IconButton>
          <Typography className="navbar_title" variant="h6" component="div" color="inherit" fontSize={16} fontWeight={600} sx={{ margin: "auto", transform: "translateX(-50%)" }}>
            제목
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
