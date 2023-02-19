import { useContext } from "react";
import { FormDataContext } from "../context/FormDataContext";
import { Navigate, useLocation } from "react-router-dom";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Forms from "../pages/Register/Forms/Forms";
import ReviewForms from "../pages/Register/ReviewForms/ReviewForms";
import Thankyou from "../pages/Thankyou/Thankyou";

const DataRequired = ({ children }) => {
  const { status } = useContext(FormDataContext);
  const location = useLocation();
  return (status === 'TO_REVIEW') ? (children) : (<Navigate to="/register" replace state={{ path: location.pathname }} />)
}

const SubmitRequired = ({ children }) => {
  const { status } = useContext(FormDataContext);
  const location = useLocation();
  return (status === 'SUBMITED') ? (children) : (<Navigate to="/" replace state={{ path: location.pathname }} />)
}

const Routes = [
  { path: '/', element: <Home /> },
  {
    path: '/register', element: <Register />,
    children: [
      {
        index: true,
        element: <Forms />
      },
      { path: '/register/review', element: <DataRequired><ReviewForms /></DataRequired> },
    ]
  },
  { path: '/thankyou', element: <SubmitRequired><Thankyou /></SubmitRequired> },
  { path: '*', element: <Navigate to="/" replace /> }
];

export default Routes;