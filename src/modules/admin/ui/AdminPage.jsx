import s from "./AdminPage.module.scss";
import { Input } from "../../../shared/ui/Input/Input";
import { useAddAutosMutation } from "../api";
import { useState } from "react";
import { useValidation } from "../../../shared/hooks/useValidation";
import { LoaderFullScreen } from "../../../shared/ui/loader";
import { Modal } from "../../../shared/ui/Modal/Modal";

const gearboxSelect = ["Механика", "Автомат"];
const citysSelect = [
  "Бишкек",
  "Чуй",
  "Джалал-Абад",
  "Талас",
  "Нарын",
  "Ысык-Кол",
  "Ош",
  "Баткен",
];
const driveTypeSelect = ["Передний привод", "Задний привод", "Полный привод"];
const bodyTypeSelect = [
  "Седан",
  "Хэтчбек",
  "Универсал",
  "Кроссовер",
  "Внедорожник",
  "Купе",
  "Кабриолет",
  "Пикап",
  "Минивэн",
  "Фургон",
  "Лифтбек",
  "Родстер",
  "Тарга",
];

export function AdminPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    mark: "",
    model: "",
    image: "",
    year: "",
    mileage: "",
    location: "",
    gearbox: "",
    engine: "",
    price: "",
    currency: "KGS",
    ownerPhone: "",
    driveType: "",
    bodyType: "",
  });

  const [addAuto, { isLoading, isSuccess }] = useAddAutosMutation();
  const { errors, setValidationErrors } = useValidation();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        year: Number(formData.year),
        mileage: Number(formData.mileage),
        price: Number(formData.price),
      };

      await addAuto(dataToSend).unwrap();
      setFormData({
        mark: "",
        model: "",
        image: "",
        year: "",
        mileage: "",
        location: "",
        gearbox: "",
        engine: "",
        price: "",
        currency: "KGS",
        ownerPhone: "",
        driveType: "",
        bodyType: "",
      });
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.data?.message)) {
        setValidationErrors(error.data.message);
      }
    }
  };

  return (
    <div className={s.adminPage}>
      {isLoading && <LoaderFullScreen size={60} />}

      {isSuccess && isOpen && (
        <Modal onClose={setIsOpen}>
          <div className={s.modalSuccess}>Машина успешно добавлено</div>
        </Modal>
      )}

      <h1 className={s.title}>Добавить машину</h1>
      <p className={s.description}>Введите детали машины ниже:</p>

      <form onSubmit={handleSubmit} className={s.container}>
        <Input
          name="mark"
          value={formData.mark}
          onChange={handleInputChange}
          placeholder="Введите марку машины (Toyota)"
          type="text"
          validate={errors.mark}
        />
        <Input
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          placeholder="Введите модель машины (Camry)"
          type="text"
          validate={errors.model}
        />
        <Input
          name="image"
          onChange={handleInputChange}
          type="file"
          accept="image/*"
          validate={errors.image}
        />
        <Input
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          placeholder="Год"
          type="number"
          validate={errors.year}
        />
        <Input
          name="mileage"
          value={formData.mileage}
          onChange={handleInputChange}
          placeholder="Пробег (км)"
          type="number"
          validate={errors.mileage}
        />
        <Input
          name="engine"
          value={formData.engine}
          onChange={handleInputChange}
          placeholder="Двигатель (2.4 бензин)"
          validate={errors.engine}
        />

        <div className={s.price}>
          <Input
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Цена"
            type="number"
            validate={errors.price}
          />
          <select
            className={s.select}
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
            <option value="KGS">KGS</option>
          </select>
        </div>
        <Input
          name="ownerPhone"
          value={formData.ownerPhone}
          onChange={handleInputChange}
          placeholder="Номер владельца (+996 707 123 456)"
          validate={errors.ownerPhone}
        />

        <div className={s.inputWrapper}>
          <select
            className={s.select}
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          >
            <option disabled value="">
              Выберите город
            </option>
            {citysSelect.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className={s.inputWrapper}>
          <select
            className={s.select}
            name="gearbox"
            value={formData.gearbox}
            onChange={handleInputChange}
          >
            <option disabled value="">
              Выберите КПП
            </option>
            {gearboxSelect.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div className={s.inputWrapper}>
          <select
            className={s.select}
            name="driveType"
            value={formData.driveType}
            onChange={handleInputChange}
          >
            {driveTypeSelect.map((driveType) => (
              <option key={driveType} value={driveType}>
                {driveType}
              </option>
            ))}
          </select>
        </div>
        <div className={s.inputWrapper}>
          <select
            className={s.select}
            name="bodyType"
            value={formData.bodyType}
            onChange={handleInputChange}
          >
            {bodyTypeSelect.map((bodyType) => (
              <option key={bodyType} value={bodyType}>
                {bodyType}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className={s.btn}>
          Сохранить
        </button>
      </form>
    </div>
  );
}
