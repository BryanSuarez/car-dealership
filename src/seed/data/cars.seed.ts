import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Peugeot',
    model: '208',
  },
  {
    id: uuid(),
    brand: 'Seat',
    model: 'Ibiza',
  },
  {
    id: uuid(),
    brand: 'Mercedes Benz',
    model: 'A180',
  },
];
