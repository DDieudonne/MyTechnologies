import { Technology } from "./technoInterface";

export interface schedule {
    id: number
    name: string
    date: string
    technology: Technology;
    priority: string;
    remark: string;
    duration: number;
}