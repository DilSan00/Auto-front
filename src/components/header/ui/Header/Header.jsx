import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.scss";
import { ROUTE } from "../../../../shared/api/router.map";
import clsx from "clsx";
import { useGetMeQuery } from "../../../../shared/api/getUser";

export function Header() {
  const { pathname } = useLocation();
  const { data: user } = useGetMeQuery();
  const isLocate = (route) => pathname === route;

  return (
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <Link className={s.logo} to={"/"}>
          Auto<span>.Kg</span>
        </Link>

        <nav className={s.navigation}>
          <Link
            className={clsx(s.link, isLocate(ROUTE.home) && s.active)}
            to={ROUTE.home}
          >
            Главная
          </Link>
          <Link
            className={clsx(s.link, isLocate(ROUTE.about) && s.active)}
            to={ROUTE.about}
          >
            О нас
          </Link>
          {user?.role === "admin" && (
            <Link
              className={clsx(s.link, isLocate(ROUTE.admin) && s.active)}
              to={ROUTE.admin}
            >
              Админ панель
            </Link>
          )}
        </nav>

        <Link className={s.authLink} to={ROUTE.signIn}>
          Войти
        </Link>
      </div>
    </header>
  );
}
