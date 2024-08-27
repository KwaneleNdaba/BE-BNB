import { Service } from 'typedi';
import { ReservationModel } from '@models/reservation.model';
import { CreateReservationDto } from '@dtos/reservation.dto';
import { IReservation } from '@interfaces/reservation.interface';

@Service()
export class ReservationService {
  public async createReservation(reservationData: CreateReservationDto): Promise<IReservation> {
    const newReservation = await ReservationModel.create(reservationData);
    return newReservation;
  }

  public async getReservationsByHostId(hostId: string): Promise<IReservation[]> {
    return await ReservationModel.find({ host_id: hostId });
  }

  public async getReservationsByUserId(userId: string): Promise<IReservation[]> {
    return await ReservationModel.find({ user_id: userId });
  }

  public async deleteReservation(reservationId: string): Promise<IReservation> {
    return await ReservationModel.findByIdAndDelete(reservationId);
  }
}
