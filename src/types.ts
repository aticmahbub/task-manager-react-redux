export interface ITask {
    id: string;
    title: string;
    desc: string;
    dueDate: string;
    isCompleted: boolean;
    priority: 'High' | 'Medium' | 'Low';
}
