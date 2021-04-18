import {
  makeStyles,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
const useStyles = makeStyles((theme) => ({
  table: {
    borderRadius: theme.spacing(1.2),
  },
}));
const OrderList = () => {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const handleChange = (e, id) => {
    fetch(`https://fastpro-cleaning-services.herokuapp.com/updateOrder/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        status: e.target.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          const newOrders = orders.map((order) => {
            if (order._id === id) {
              order.status = e.target.value;
            }
            return order;
          });
          setOrders(newOrders);
        }
      });
  };
  useEffect(() => {
    fetch("https://fastpro-cleaning-services.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <Sidebar topic="Order List">
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary">Name</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary">Email ID</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary">Service</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary">Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const { _id, name, email, title, status } = order;
              return (
                <TableRow key={_id}>
                  <TableCell>
                    <Typography>{name}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{email}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{title}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      select
                      size="small"
                      value={status}
                      onChange={(e) => handleChange(e, _id)}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="On going">On Going</MenuItem>
                      <MenuItem value="Done">Done</MenuItem>
                    </TextField>
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

export default OrderList;
