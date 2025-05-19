import { $api } from "../../../shared/api/api";

export const homeProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getAutos: build.query({
      query: () => ({
        url: "/auto/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAutosQuery } = homeProductApi;

// export const carsData = [
//   {
//     id: 1,
//     title: "Toyota Camry 2012",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 12500,
//     currency: "USD",
//     location: "Бишкек",
//     year: 2012,
//     mileage: 120000,
//     engine: "2.4 бензин",
//     gearbox: "Автомат",
//     ownerPhone: "996707123456",
//     bodyType: "Седан",
//     driveType: "Передний привод"
//   },
//   {
//     id: 2,
//     title: "Honda Accord 2015",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 14000,
//     currency: "USD",
//     location: "Алматы",
//     year: 2015,
//     mileage: 95000,
//     engine: "2.0 бензин",
//     gearbox: "Автомат",
//     ownerPhone: "996705987654",
//     bodyType: "Седан",
//     driveType: "Передний привод"
//   },
//   {
//     id: 3,
//     title: "BMW X5 2018",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 35000,
//     currency: "USD",
//     location: "Бишкек",
//     year: 2018,
//     mileage: 45000,
//     engine: "3.0 дизель",
//     gearbox: "Автомат",
//     ownerPhone: "996701234567",
//     bodyType: "Внедорожник",
//     driveType: "Полный привод"
//   },
//   {
//     id: 4,
//     title: "Mercedes-Benz C-Class 2017",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 28000,
//     currency: "USD",
//     location: "Ташкент",
//     year: 2017,
//     mileage: 60000,
//     engine: "2.0 бензин",
//     gearbox: "Автомат",
//     ownerPhone: "998905678901",
//     bodyType: "Седан",
//     driveType: "Задний привод"
//   },
//   {
//     id: 5,
//     title: "Audi A6 2016",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 22000,
//     currency: "USD",
//     location: "Шымкент",
//     year: 2016,
//     mileage: 85000,
//     engine: "2.0 бензин",
//     gearbox: "Автомат",
//     ownerPhone: "996707123457",
//     bodyType: "Седан",
//     driveType: "Полный привод"
//   },
//   {
//     id: 6,
//     title: "Ford Focus 2013",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 8500,
//     currency: "USD",
//     location: "Алматы",
//     year: 2013,
//     mileage: 130000,
//     engine: "1.6 бензин",
//     gearbox: "Механика",
//     ownerPhone: "996707654321",
//     bodyType: "Хэтчбек",
//     driveType: "Передний привод"
//   },
//   {
//     id: 7,
//     title: "Nissan X-Trail 2015",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 18000,
//     currency: "USD",
//     location: "Бишкек",
//     year: 2015,
//     mileage: 105000,
//     engine: "2.5 бензин",
//     gearbox: "Автомат",
//     ownerPhone: "996706543210",
//     bodyType: "Внедорожник",
//     driveType: "Полный привод"
//   },
//   {
//     id: 8,
//     title: "Chevrolet Tahoe 2019",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 46000,
//     currency: "USD",
//     location: "Алматы",
//     year: 2019,
//     mileage: 35000,
//     engine: "5.3 бензин",
//     gearbox: "Автомат",
//     ownerPhone: "996708123456",
//     bodyType: "Внедорожник",
//     driveType: "Полный привод"
//   },
//   {
//     id: 9,
//     title: "Hyundai Tucson 2020",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 23000,
//     currency: "USD",
//     location: "Бишкек",
//     year: 2020,
//     mileage: 20000,
//     engine: "2.0 бензин",
//     gearbox: "Автомат",
//     ownerPhone: "996707321654",
//     bodyType: "Кроссовер",
//     driveType: "Полный привод"
//   },
//   {
//     id: 10,
//     title: "Mazda CX-5 2017",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 25000,
//     currency: "USD",
//     location: "Ташкент",
//     year: 2017,
//     mileage: 65000,
//     engine: "2.5 бензин",
//     gearbox: "Автомат",
//     ownerPhone: "998901234567",
//     bodyType: "Кроссовер",
//     driveType: "Полный привод"
//   },
//   {
//     id: 11,
//     title: "Mazda CX-5 2017",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmwqRrB9yLnGQyeaDbgIUqIEo87Z5oV31Q&s",
//     price: 25000,
//     currency: "USD",
//     location: "Ташкент",
//     year: 2017,
//     mileage: 65000,
//     engine: "2.5 бензин",
//     gearbox: "Автомат",
//     ownerPhone: "998901234567",
//     bodyType: "Кроссовер",
//     driveType: "Полный привод"
//   },
// ];
