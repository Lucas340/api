import { log } from '@utils/Logger';
import app from './app';

app.listen(process.env.PORT || 3333, () => {
  log('🚀  Server started');
});
