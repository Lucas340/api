import { log } from '@utils/Logger';
import app from './app';

app.listen(3333, () => {
  log('🚀 Server started on port 3333!');
});
