import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { Alert } from "@material-ui/lab";

const MakeAdmin = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [alert, setAlert] = useState("");
  const onSubmit = (data) => {
    fetch(
      `https://fastpro-cleaning-services.herokuapp.com/addAdmin?email=${data.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setAlert(`${data.email} is now Admin.`);
          reset();
        }
      });
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert("");
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <Sidebar topic="Make Admin">
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
              placeholder="Email"
              name="email"
              fullWidth
              inputRef={register({
                required: "Email is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
              helperText={errors.email?.message}
              error={Boolean(errors.email)}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default MakeAdmin;
