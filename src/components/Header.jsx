import { useState } from "react";
import logo from "../images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import Cart from "./Cart";
import { AppBar, Toolbar, IconButton, Box, Typography, Avatar, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <img src={isOpen ? close : menu} alt="menu" style={{ width: '24px' }} />
          </IconButton>
          <img src={logo} alt="logo" style={{ height: '40px' }} />
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton color="inherit" onClick={() => setCartIsOpen(!cartIsOpen)}>
            <AiOutlineShoppingCart />
          </IconButton>
          {cartIsOpen && <Cart />}
          <Avatar alt="User Avatar" src={avatar} />
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <Box p={2} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            {['Collections', 'Men', 'Women', 'About', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
