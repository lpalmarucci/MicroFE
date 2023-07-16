import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import BentoIcon from "@mui/icons-material/Bento";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type Props = {
  toggleMenuFn: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarMenu = ({ toggleMenuFn }: Props) => {
  return (
    <Box
      width={250}
      role="presentation"
      onClick={() => toggleMenuFn(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton key="Products">
            <ListItemIcon>
              <BentoIcon />
            </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton key="Cart">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary={"Cart"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SidebarMenu;
