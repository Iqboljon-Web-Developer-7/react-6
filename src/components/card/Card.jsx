import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDeleteUserMutation } from "@/redux/api/category-api";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import UniModal from "../modal/Modal";
import { Edit } from "@mui/icons-material";
import UniForm from "../form/Form";

export default function BasicCard({
  user,
  id,
  fname,
  lname,
  job,
  gender,
  bio,
  children,
}) {
  const [open, setOpen] = React.useState(false);
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleModal = (e) => {
    e.target.classList.contains("important-modal") ? setOpen((p) => !p) : null;
  };

  return (
    <Card sx={{ minWidth: 240 }}>
      <CardContent
        className={`${gender == "Male" ? "bg-blue-200" : "bg-red-200"}`}
      >
        <Typography gutterBottom>
          {fname} {lname}
        </Typography>
        <Typography
          variant="h5"
          className="text-xl lg:text-[1.92vw] xl:text-[1.7rem]"
        >
          {job}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {gender}
        </Typography>
        <Typography className="line-clamp-2" variant="body2">
          {bio}
        </Typography>
        {children}
      </CardContent>
      <CardActions>
        <UniModal id={id} title={"Edit"} open={open} setOpen={setOpen}>
          <div
            className="w-auto min-h-screen important-modal flex items-center justify-center"
            onClick={(e) => handleModal(e)}
          >
            <UniForm open={open} setOpen={setOpen} user={user} />
          </div>
        </UniModal>
        <Button size="small" onClick={() => handleDelete(id)}>
          {isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress className="w-6 h-6" />
            </Box>
          ) : (
            "Delete"
          )}
        </Button>
      </CardActions>
    </Card>
  );
}
