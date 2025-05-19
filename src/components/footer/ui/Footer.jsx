import clsx from "clsx";
import s from "./Footer.module.scss";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={clsx(s.footerContent, s.container)}>
        <div className={s.block}>
          <p>+996 707 123 456</p>
          <p>+996 707 123 456</p>
          <p>+996 707 123 456</p>
        </div>

        <Link className={s.logo} to={"/"}>
          Auto<span>.Kg</span>
        </Link>

        <div className={s.block}>
          <p>example@gmail.com</p>
          <p>info@gmail.com</p>
          <p>autokg@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
