import { FaCarCrash } from "react-icons/fa";
import { CarSkeletonList } from "../../../components/CarSkeletonList";
import { useGetAutosQuery } from "../api";
import { CarList } from "../components/CarList/CarList";
import s from "./Home.module.scss";

export function Home() {
  const { data = [], isLoading } = useGetAutosQuery();

  const isEmpty = !data || data.length === 0;

  return (
    <div className={s.home}>
      {isLoading ? (
        <CarSkeletonList size={6} />
      ) : isEmpty ? (
        <div className={s.empty}>
          <FaCarCrash size={40} color="#ccc" />
          <p>Машины не найдены</p>
        </div>
      ) : (
        <CarList cars={data} />
      )}
    </div>
  );
}
