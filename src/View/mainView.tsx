import {TaskView} from "./taskView";
import {FC} from "hono/jsx";


export const MainView: FC = () => {
    return (
        <html>
            <body>
                <TaskView></TaskView>
            </body>
        </html>
    )
}