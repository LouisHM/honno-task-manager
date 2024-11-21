import type {FC} from "hono/jsx";
import type {Task} from "../Model/Task";
import {MainView} from "./mainView";


export const TaskView: FC<{tasks:Task[]}> = (props: {tasks: Task[]}) => {
    return (
        <MainView>
            <div>
                {props.tasks.map((task:Task) => {
                    return <h1> {task.title} </h1>
                })}
            </div>
        </MainView>
    )
}