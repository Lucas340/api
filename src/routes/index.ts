import { Request, Response, Router } from 'express';
import Render from '../structures/Render';

const routes = Router();

routes.get('/render', async (request: Request, response: Response) => {
  const { page } = request.query;

  const screenshot = await new Render(String(page)).render();

  response.setHeader('Content-Type', 'image/jpeg');
  return response.send(screenshot);
});

export default routes;
