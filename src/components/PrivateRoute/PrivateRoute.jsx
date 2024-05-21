import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo = "/" }) {
  const isloggedIn = useSelector(selectIsLoggedIn);

  return isloggedIn ? component : <Navigate to={redirectTo} />;
}
