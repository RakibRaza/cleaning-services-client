import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Sidebar/Sidebar";
import BackupIcon from "@material-ui/icons/Backup";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  imgInput: {
    display: "none",
  },
  imgBtn: {
    border: "2px solid #F63E7B",
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1.2, 4),
    background: "#FFEAF3",
    color: "#F63E7B",
    borderRadius: theme.spacing(1),
    "&:hover": {
      background: "#FFEAF3",
    },
  },
}));
const AddReview = () => {
  const classes = useStyles();
  const { register, handleSubmit, reset, errors } = useForm();
  const [alert, setAlert] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(true);
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://fastpro-cleaning-services.herokuapp.com/addReview",
        {
          ...data,
          image: file,
        }
      );
      if (res.data) {
        setAlert("Review added successfully");
        setLoading(true);
        reset();
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleFileUpload = async (e) => {
    const imageData = new FormData();
    imageData.set("key", "f3b82a821ec5aaf73bfb1b9a1e2b1a56");
    imageData.append("image", e.target.files[0]);

    try {
      const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
      const image = res.data.data.url;
      setFile(image);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert("");
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <Sidebar topic="Review">
      <Grid container>
        <Grid item xs={12} md={6}>
          {alert && (
            <Alert variant="filled" severity="success">
              {alert}
            </Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              variant="outlined"
              placeholder="Name"
              fullWidth
              name="name"
              inputRef={register({
                required: "Name is required.",
                minLength: {
                  value: 3,
                  message: "Name at least 3 caracters",
                },
              })}
              helperText={errors.name?.message}
              error={Boolean(errors.name)}
            />
            <TextField
              margin="normal"
              variant="outlined"
              placeholder="Designation"
              name="designation"
              fullWidth
              inputRef={register({
                required: "Designation is required.",
                minLength: {
                  value: 3,
                  message: "Designation at least 3 caracters",
                },
              })}
              helperText={errors.designation?.message}
              error={Boolean(errors.designation)}
            />
            <TextField
              margin="normal"
              variant="outlined"
              placeholder="Description"
              fullWidth
              multiline
              rows={8}
              name="description"
              inputRef={register({
                required: "Description is required.",
                minLength: {
                  value: 25,
                  message: "Description at least 25 caracters",
                },
              })}
              helperText={errors.description?.message}
              error={Boolean(errors.description)}
            />
            <input
              className={classes.imgInput}
              onChange={handleFileUpload}
              type="file"
              id="image"
            />
            <Button
              className={classes.imgBtn}
              startIcon={<BackupIcon />}
              component="label"
              htmlFor="image"
            >
              Upload Image
            </Button>
            <Box align="right">
              <Button
                disabled={loading}
                type="submint"
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default AddReview;
