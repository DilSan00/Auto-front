import { CarCard } from "../CarCard/CarCard";
import s from "./CarList.module.scss";

export function CarList({ cars }) {
  return (
    <div className={s.cardList}>
      {cars?.map((car) => (
        <CarCard
          key={car._id}
          id={car._id}
          mark={car.mark}
          model={car.model}
          image={car.image}
          price={car.price}
          currency={car.currency}
          location={car.location}
          year={car.year}
          mileage={car.mileage}
          engine={car.engine}
          gearbox={car.gearbox}
          ownerPhone={car.ownerPhone}
          createdAt={car.createdAt}
        />
      ))}
    </div>
  );
}
