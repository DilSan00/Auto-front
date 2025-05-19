import { useNavigate } from "react-router-dom";
import s from "./CarCard.module.scss";
import { FaPhoneAlt } from "react-icons/fa";

export function CarCard({
  id,
  mark,
  model,
  price,
  image,
  mileage,
  year,
  location,
  gearbox,
  engine,
  currency,
  ownerPhone,
}) {
  const navigate = useNavigate();

  const RouteHanlder = () => {
    navigate(`/${id}`);
  };

  const handleCallClick = (e) => {
    e.stopPropagation(); // Останавливает распространение события
    window.location.href = `tel:${ownerPhone}`; // Открывает номер телефона
  };

  return (
    <div className={s.card} onClick={RouteHanlder}>
      <img className={s.image} src={image} alt={model} />

      <div className={s.content}>
        <h3 className={s.title}>
          {mark} {model} {year}
        </h3>
        <p className={s.price}>
          {price.toLocaleString()} {currency}
        </p>

        <ul className={s.info}>
          <li>{year} г.</li>
          <li>{mileage.toLocaleString()} км</li>
          <li>{engine}</li>
          <li>{gearbox}</li>
        </ul>

        <p className={s.location}>{location}</p>

        <div className={s.owner}>
          <p>Номер владельца: +{ownerPhone}</p>

          <button className={s.callButton} onClick={handleCallClick}>
            <FaPhoneAlt /> Позвонить
          </button>
        </div>
      </div>
    </div>
  );
}
