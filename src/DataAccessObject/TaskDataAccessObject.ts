import * as fs from 'fs';
import type {Task} from "../Model/Task";


function readData(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file', err);
                reject(err);
                return;
            }
            try {
                const taskData = JSON.parse(data);
                resolve(taskData);
            } catch (parseError) {
                console.log('Error parsing JSON', parseError);
                reject(parseError);
            }
        });
    });
}


export async function getTasks(path:string): Promise<Task[]> {
    const tasksData = await readData(path);
    const tasks = [];
    tasksData.tasks.forEach(item => {
        const task: Task = {
            id: item.id,
            title: item.title,
            description: item.description,
            priority: item.priority,
            completed: item.completed,
            dueDate: new Date(item.dueDate),
        }
        tasks.push(task);
    })
    return tasks;
}

export async function getTaskById(id:  number, path:string): Promise<Task> {
    const tasks = await getTasks(path);
    tasks.filter((element: Task) => element.id !== id);
    return tasks[0];
}