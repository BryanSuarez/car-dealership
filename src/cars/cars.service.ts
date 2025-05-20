import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Mustang',
    },
    {
      id: 3,
      brand: 'Chevrolet',
      model: 'Camaro',
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  createCar(body: any) {
    this.cars.push(body);
    return this.cars;
  }

  updateCar(id: number, body: any) {
    const car = this.getCarById(id);
    this.cars = this.cars.map((car) =>
      car.id === id ? { ...car, ...body } : car,
    );
    return this.getCarById(id);
  }

  deleteCar(id: number) {
    this.cars = this.cars.filter((car) => car.id !== id);
    return this.cars;
  }
}
