import { ConnectOptions, connect, set } from 'mongoose';
import { NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = async () => {
  const dbConfig = {
    url: `mongodb+srv://kwanele:LTSNsskk113@cluster0.npgw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions,
  };

  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  await connect(dbConfig.url, dbConfig.options);
}
