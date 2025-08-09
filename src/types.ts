export type TFilter = 'all' | 'high' | 'medium' | 'low';

export interface InitialState {
    tasks: ITask[];
    filter: TFilter;
}

export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: TFilter;
    assignedTo: string | null;
}

export interface IUser {
    userName: string;
    id: string;
}
export interface IInput {
    name: string;
    label: string;
    defaultValue?: string;
}
