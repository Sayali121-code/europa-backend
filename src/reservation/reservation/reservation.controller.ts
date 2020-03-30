import { Controller, Get, Post, Body } from '@nestjs/common';
import { Reservation } from '../reservation.entity';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private ReservationService: ReservationService) {}
  /*  @Get()
  index(): Promise<Reservation[]> {
    return this.ReservationService.findAll();
  } */
  @Post('create')
  async create(@Body() ReservationData: Reservation): Promise<any> {
    return this.ReservationService.create(ReservationData);
  }
}
