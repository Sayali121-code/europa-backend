import { Module } from '@nestjs/common';
import { ReservationService } from './reservation/reservation.service';
import { ReservationController } from './reservation/reservation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  providers: [ReservationService],
  controllers: [ReservationController],
})
export class ReservationModule {}
