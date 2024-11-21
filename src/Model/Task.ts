import type {priorityType} from "./PriorityEnum"

export type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: priorityType;
    dueDate: Date;

}
