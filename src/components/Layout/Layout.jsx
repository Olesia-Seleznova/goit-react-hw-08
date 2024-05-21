import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.div}>
      <AppBar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
