import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { CategoryRoute } from './routes/category.route';

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new CategoryRoute() ]);

app.listen();

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});