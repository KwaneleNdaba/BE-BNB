import { App } from './app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ReservationRoute } from '@routes/reservation.route';  
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([
  new UserRoute(),
  new AuthRoute(),
  new ReservationRoute(),  // Add the ReservationRoute here
]);

app.listen();

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});
