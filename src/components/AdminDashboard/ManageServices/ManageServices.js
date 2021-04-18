import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import DeleteIcon from "@material-ui/icons/Delete";
import { useAuthContext } from "../../../context/AuthContext";
const useStyles = makeStyles((theme) => ({
  delete: {
    cursor: "pointer",
    background: "#FF444A",
    color: "#fff",
    borderRadius: theme.spacing(0.8),
    padding: theme.spacing(0.1),
  },
  table: {
    borderRadius: theme.spacing(1.2),
  },
}));
const ManageServices = () => {
  const classes = useStyles();
  const { setDefaultId } = useAuthContext();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://fastpro-cleaning-services.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    fetch(
      `https://fastpro-cleaning-services.herokuapp.com/deleteService/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setServices(services.filter((service) => service._id !== id));
          fetch(
            "https://fastpro-cleaning-services.herokuapp.com/defaultService"
          )
            .then((res) => res.json())
            .then((data) => setDefaultId(data[0]._id));
        }
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <Sidebar topic="Manage Services">
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary">Service</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary">Price</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => {
              const { _id, title, price } = service;
              return (
                <TableRow key={_id}>
                  <TableCell>
                    <Typography>{title}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>
                      <strong>${price}</strong>
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <DeleteIcon
                      onClick={() => handleDelete(_id)}
                      className={classes.delete}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Sidebar>
  );
};

export default ManageServices;
