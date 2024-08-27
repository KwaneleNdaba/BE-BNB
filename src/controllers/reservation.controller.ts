import { Request, Response } from 'express';
import { Service } from 'typedi';
import { ReservationService } from '@services/reservation.service';
import { CreateReservationDto } from '@dtos/reservation.dto';

@Service()
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  public createReservation = async (req: Request, res: Response): Promise<void> => {
    try {
      const reservationData: CreateReservationDto = req.body;
      const newReservation = await this.reservationService.createReservation(reservationData);
      res.status(201).json({ data: newReservation, message: 'Reservation created' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create reservation', error });
    }
  };

  public getReservationsByHostId = async (req: Request, res: Response): Promise<void> => {
    try {
      const { hostId } = req.params;
      const reservations = await this.reservationService.getReservationsByHostId(hostId);
      res.status(200).json({ data: reservations, message: 'Reservations fetched' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch reservations', error });
    }
  };

  public getReservationsByUserId = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const reservations = await this.reservationService.getReservationsByUserId(userId);
      res.status(200).json({ data: reservations, message: 'Reservations fetched' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch reservations', error });
    }
  };

  public deleteReservation = async (req: Request, res: Response): Promise<void> => {
    try {
      const { reservationId } = req.params;
      const deletedReservation = await this.reservationService.deleteReservation(reservationId);
      if (deletedReservation) {
        res.status(200).json({ data: deletedReservation, message: 'Reservation deleted' });
      } else {
        res.status(404).json({ message: 'Reservation not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete reservation', error });
    }
  };
}
