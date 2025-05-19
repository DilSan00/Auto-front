import s from "./LoaderFullScreen.module.scss";
import { Loader } from "../Loader/Loader";

export function LoaderFullScreen({ size }) {
  return (
    <div className={s.loaderFullScreen}>
      <Loader size={size} />
    </div>
  );
}
