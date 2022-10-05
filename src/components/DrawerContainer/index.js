import * as React from "react";
import Drawer from "@mui/material/Drawer";

export default function DrawerContainer({ title, isOpen, onClose, children }) {

  return (
    <div>
      <Drawer
        sx={{width: 250}}
        anchor="right"
        open={isOpen}
        onClose={onClose}
      >
        <div style={{width:'300px'}}>
        <h2>{title}</h2>
        {children}
        </div>
      </Drawer>
    </div>
  );
}
