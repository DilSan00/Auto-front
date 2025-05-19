import s from "./SignIn.module.scss";
import { Input } from "../../../shared/ui/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../../shared/api/router.map";
import { useLoginMutation } from "../api";
import { useValidation } from "../../../shared/hooks/useValidation";
import { useState } from "react";
import TokenStorageService from "../../../shared/models/TokenStorageService";
import { LoaderFullScreen } from "../../../shared/ui/loader/ui/LoaderFullScreen/LoaderFullScreen";

export function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { errors, setValidationErrors } = useValidation();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { access_token } = await login(form).unwrap();
      TokenStorageService.setToken(access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.data?.message)) {
        setValidationErrors(error.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      {isLoading && <LoaderFullScreen size={60} />}

      <h2 className={s.title}>Авторизация</h2>
      <p className={s.notAccoutText}>
        У вас нет аккаунта?
        <Link className={s.link} to={ROUTE.signUp}>
          Создать аккаунт
        </Link>
      </p>

      <div className={s.inputs}>
        <Input
          placeholder="Введите ваш email"
          type={"email"}
          name="email"
          validate={errors.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Введите ваш пароль"
          type={"password"}
          name="password"
          validate={errors.password}
          onChange={handleChange}
        />
      </div>

      <button className={s.btn} type="submit">
        Войти
      </button>
    </form>
  );
}
