import s from "./CarSkeletonList.module.scss";
import { Skeleton } from "../../../shared/ui/Skeleton";

export function CarSkeletonList({ size }) {
  return (
    <div className={s.skeletonList}>
      {Array.from({ length: size }).map((_, i) => (
        <Skeleton key={i} width={"100%"} height={367} />
      ))}
    </div>
  );
}
