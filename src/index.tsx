import { Hono } from 'hono'
import {MainView} from "./View/mainView";

const app = new Hono()



app.get('/page', (c) => {
  return c.html(<MainView/>);
})

export default app
