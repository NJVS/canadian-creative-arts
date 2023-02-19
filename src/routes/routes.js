import { useContext } from "react";
import { FormDataContext } from "../context/FormDataContext";
import { Navigate, useLocation } from "react-router-dom";

import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Forms from "../pages/Signup/Forms/Forms";
import SignupComplete from "../pages/SignupComplete/SignupComplete";

const RegistrationRequired = ({ children }) => {
  const { registrationStatus } = useContext(FormDataContext);
  const location = useLocation();

  return registrationStatus ? (children) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  )
}

const Routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />,
    children: [
      {
        index: true,
        element: <Forms />
      },
      {
        path: '/signup/complete',
        element: <RegistrationRequired><SignupComplete /></RegistrationRequired>
      }
    ]
  },
  { path: '*', element: <Navigate to="/" replace /> }
];

export default Routes;