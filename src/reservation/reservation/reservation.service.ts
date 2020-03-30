import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from '../reservation.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async findAll(): Promise<Reservation[]> {
    return await this.reservationRepository.find();
  }

  async create(reservation: Reservation): Promise<Reservation> {
    return await this.reservationRepository.save(reservation);
  }
}
