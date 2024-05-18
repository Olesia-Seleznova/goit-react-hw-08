import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.div}>
      <h1>Please log in</h1>
      <LoginForm />
    </div>
  );
}
