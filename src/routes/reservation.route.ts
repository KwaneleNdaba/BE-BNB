import { Router } from 'express';
import { Container } from 'typedi';
import { ReservationController } from '@controllers/reservation.controller';
import { CreateReservationDto } from '@dtos/reservation.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class ReservationRoute implements Routes {
  public path = '/reservations';
  public router = Router();
  private reservationController = Container.get(ReservationController);  

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      ValidationMiddleware(CreateReservationDto),
      this.reservationController.createReservation
    );

    this.router.get(
      `${this.path}/host/:hostId`,
      this.reservationController.getReservationsByHostId
    );

    this.router.get(
      `${this.path}/user/:userId`,
      this.reservationController.getReservationsByUserId
    );

    this.router.delete(
      `${this.path}/:reservationId`,
      this.reservationController.deleteReservation
    );
  }
}
