import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

describe('CarsController', () => {
  let controller: CarsController;
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    controller = module.get<CarsController>(CarsController);
    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllCars', () => {
    it('should return an array of cars', () => {
      const result = controller.getAllCars();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('getCarById', () => {
    it('should return a car by id', () => {
      const result = controller.getCarById(1);
      expect(result).toBeDefined();
      expect(result.id).toBe(1);
    });

    it('should throw NotFoundException for non-existent id', () => {
      expect(() => controller.getCarById(999)).toThrow();
    });
  });

  describe('createCar', () => {
    it('should create a new car', () => {
      const newCar = {
        id: 4,
        brand: 'Tesla',
        model: 'Model 3',
      };
      const result = controller.createCar(newCar);
      expect(result).toContainEqual(newCar);
    });
  });

  describe('updateCar', () => {
    it('should update an existing car', () => {
      const updateData = {
        brand: 'Toyota Updated',
      };
      const result = controller.updateCar(1, updateData);
      expect(result.brand).toBe('Toyota Updated');
    });
  });

  describe('deleteCar', () => {
    it('should delete a car', () => {
      const initialLength = controller.getAllCars().length;
      controller.deleteCar(1);
      const finalLength = controller.getAllCars().length;
      expect(finalLength).toBe(initialLength - 1);
    });
  });
});
