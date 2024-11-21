import type {FC} from "hono/jsx";


export const MainView: FC = (props) => {
    return (
        <html>
            <body>
                {props.children}
            </body>
        </html>
    )
}