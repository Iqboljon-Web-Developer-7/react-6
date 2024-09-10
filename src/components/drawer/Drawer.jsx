import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { useCreateUserMutation } from "@/redux/api/category-api";
import { message } from "antd";
import CircularProgress from "@mui/material/CircularProgress";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const [addUser, { isLoading, isSuccess }] = useCreateUserMutation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleData = (data) => {
    addUser(data)
      .unwrap()
      .then(() => message.success("Added Successfully!"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isAdd = false;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // validation
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      if (data[keys[i]] == "") {
        message.error("Please fill all inputs");
        isAdd = false;
        break;
      }
      isAdd = true;
    }

    if (isAdd) {
      handleData(data);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="p-3">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-[#22577a]">Add user</h2>
        <span onClick={toggleDrawer(false)}>X</span>
      </div>
      <form className="mt-10 grid gap-4" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          name="fname"
          id="outlined-basic"
          size="small"
          label="Name"
          variant="outlined"
        />
        <TextField
          name="lname"
          id="outlined-basic"
          size="small"
          label="Surname"
          variant="outlined"
        />
        <TextField
          name="job"
          id="outlined-basic"
          size="small"
          label="Job"
          variant="outlined"
        />
        <FormControl size="small">
          <InputLabel id="demo-simple-select-autowidth-label">
            Gender
          </InputLabel>
          <Select
            name="gender"
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            defaultValue=""
            label="Age"
            size="small"
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>

        <TextareaAutosize
          name="bio"
          placeholder="Bio"
          className="border rounded-sm border-[#c3c5c7] py-2 px-3"
          id="outline-basic"
        />
        <Button className="bg-green-100 text-green-500" type="submit">
          {isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress className="w-6 h-6" />
            </Box>
          ) : (
            "ADD"
          )}
        </Button>
      </form>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Add user</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
