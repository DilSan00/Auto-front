import { CarSkeletonList } from "../../../components/CarSkeletonList";
import { useGetAutosQuery } from "../api";
import { CarList } from "../components/CarList/CarList";
import s from "./Home.module.scss";

export function Home() {
  const { data = [], isLoading } = useGetAutosQuery();

  return (
    <div className={s.home}>
      {isLoading ? <CarSkeletonList size={6} /> : <CarList cars={data} />}
    </div>
  );
}
