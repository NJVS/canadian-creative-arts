import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import SignupComplete from "../pages/SignupComplete/SignupComplete";

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
        path: '/signup/complete',
        element: <SignupComplete />
      }
    ]
  }
];

export default Routes;