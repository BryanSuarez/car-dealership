import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  // get cars
  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }

  // get car by id
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.getCarById(id);
  }

  // create car
  @Post()
  createCar(@Body() body: any) {
    return this.carsService.createCar(body);
  }

  // update car
  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.carsService.updateCar(id, body);
  }

  // delete car
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.deleteCar(id);
  }
}
