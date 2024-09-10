import React, { useState } from "react";
import UniModal from "../modal/Modal";
import { TextField } from "@mui/material";
import TemporaryDrawer from "../drawer/Drawer";

const AddUser = () => {
  const [open, setOpan] = useState(false);

  return (
    <div>
      <TemporaryDrawer />
    </div>
  );
};

export default AddUser;
