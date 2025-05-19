import { useParams } from "react-router-dom";
import s from "./CarDetails.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { useGetAutoQuery } from "../api";
import { Skeleton } from "../../../shared/ui/Skeleton";

export function CarDetails() {
  const { id } = useParams();

  const { data, isLoading } = useGetAutoQuery({ id });

  if (isLoading || !data) return <Skeleton width={"100%"} height={400} />;

  return (
    <div className={s.carDetails}>
      <div className={s.container}>
        <img src={data.image} alt={data.model} className={s.image} />

        <div className={s.info}>
          <h1 className={s.title}>{data.title}</h1>
          <p className={s.price}>
            {data.price} {data.currency}
          </p>

          <ul className={s.specs}>
            <li>Год: {data.year}</li>
            <li>Пробег: {data.mileage} км</li>
            <li>Двигатель: {data.engine}</li>
            <li>КПП: {data.gearbox}</li>
            <li>Тип привода: {data.driveType}</li>
            <li>Кузов: {data.bodyType}</li>
            <li>Город: {data.location}</li>
            <li>Добавлено: {data.createdAt}</li>
          </ul>

          <div className={s.owner}>
            <p>
              <strong>Номер владельца:</strong> +{data.ownerPhone}
            </p>
            <button
              className={s.callButton}
              onClick={() => (window.location.href = `tel:${data.ownerPhone}`)}
            >
              <FaPhoneAlt /> Позвонить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
