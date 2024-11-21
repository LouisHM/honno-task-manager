import { Hono } from 'hono'
import {TaskView} from "./View/taskView";
import {getTasks} from "./DataAccessObject/TaskDataAccessObject";
import {serve} from "@hono/node-server";

const app = new Hono()



app.get('/page', async (c) => {
  const path = "./tasks.json"
  const tasks = await getTasks(path)
  return c.html(<TaskView tasks={tasks}/>);
})
const port = 3000;
serve({
  fetch: app.fetch,
  port

})
export default app
