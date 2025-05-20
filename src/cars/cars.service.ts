import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Mustang',
    },
    {
      id: uuid(),
      brand: 'Chevrolet',
      model: 'Camaro',
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getCarById(id);
    carDB = {
      ...carDB,
      ...updateCarDto,
    };
    this.cars = this.cars.map((car) => (car.id === id ? carDB : car));
    return carDB;
  }

  deleteCar(id: string) {
    this.getCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return { message: `Car with id ${id} deleted` };
  }
}
