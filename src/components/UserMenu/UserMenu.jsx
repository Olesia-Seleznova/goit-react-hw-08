import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.div}>
      <p className={css.p}>Welcome, {user.name}</p>
      <button className={css.button} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
