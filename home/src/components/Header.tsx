import { Title } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Button, Avatar } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

type Props = {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setToggleMenu }: Props) => {
  const isAuthenticated: boolean = true;

  return (
    <AppBar
      variant="elevation"
      position="sticky"
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setToggleMenu((open) => !open)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Ecommerce Micro FE
        </Typography>
        {isAuthenticated ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <PersonIcon />
          </IconButton>
        ) : (
          <Button color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
