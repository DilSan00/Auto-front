import { Outlet, useNavigate } from "react-router-dom";
import s from "../../shared/styles/AdminLayout.module.scss";
import { useGetMeQuery } from "../../shared/api/getUser";
import { useEffect } from "react";
import { LoaderFullScreen } from "../../shared/ui/loader/ui/LoaderFullScreen/LoaderFullScreen";

export function AdminLayout() {
  const { data, isLoading, isError } = useGetMeQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (isError || data?.role !== "admin")) {
      navigate("/");
    }
  }, [data, isError, isLoading, navigate]);

  if (isLoading) {
    return <LoaderFullScreen size={60} />;
  }

  return (
    <div className={s.adminLayout}>
      <Outlet />
    </div>
  );
}
