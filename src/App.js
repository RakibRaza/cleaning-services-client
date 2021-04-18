import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./theme";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BookingList from "./components/ClientDashboard/BookingList/BookingList";
import AddReview from "./components/ClientDashboard/AddReview/AddReview";
import Booking from "./components/ClientDashboard/Booking/Booking";
import OrderList from "./components/AdminDashboard/OrderList/OrderList";
import AddService from "./components/AdminDashboard/AddService/AddService";
import MakeAdmin from "./components/AdminDashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/AdminDashboard/ManageServices/ManageServices";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/booking/:id">
            <Booking />
          </PrivateRoute>
          <PrivateRoute path="/booking-list">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/add-review">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/order-list">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/make-admin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manage-services">
            <ManageServices />
          </PrivateRoute>
        </Switch>
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
}

export default App;
