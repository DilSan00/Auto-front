import clsx from "clsx";
import s from "./Skeleton.module.scss";

export function Skeleton({ width = 100, height = 20, size, className }) {
  const style = size
    ? { width: size, height: size }
    : { width: width, height: height };

  return <div className={clsx(s.skeleton, className)} style={style}></div>;
}
