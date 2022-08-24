import React from 'react';
import { List, ListItem, ListItemText, Divider, AppBar, Toolbar, Typography } from '@mui/material';

export default function Console({ console }) {
  const logs = console.map((log, index) => {
    return (
      <div key={index}>
        <ListItem>
          <ListItemText primary={log} />
        </ListItem>
        <Divider />
      </div>
    );
  });
  return (
    <div className="console">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Console
          </Typography>
        </Toolbar>
      </AppBar>
      <List>{logs}</List>
    </div>
  );
}
