import { Link, useLocation } from "react-router-dom";
import s from "./HeaderMobile.module.scss";
import { ROUTE } from "../../../../shared/api/router.map";
import clsx from "clsx";
import { useState } from "react";
import { useGetMeQuery } from "../../../../shared/api/getUser";

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { data: user } = useGetMeQuery();

  const { pathname } = useLocation();
  const isLocate = (route) => pathname === route;

  const handleToggle = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 270);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <section className={s.headerContainer}>
      <header className={s.header}>
        <div className={clsx(s.headerContent, s.container)}>
          <Link className={s.logo} to={"/"}>
            Auto<span>.Kg</span>
          </Link>

          <div
            onClick={handleToggle}
            className={clsx(
              s.burger,
              isOpen && s.burgerActive,
              isClosing && s.burgerClose
            )}
          >
            <span className={s.line}></span>
            <span className={s.middle}></span>
            <span className={s.line}></span>
          </div>

          {(isOpen || isClosing) && (
            <div className={clsx(s.menu, isClosing && s.menuClose)}>
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
                <Link className={s.authLink} to={ROUTE.signIn}>
                  Войти
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </section>
  );
}
