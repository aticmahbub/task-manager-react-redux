import type {RootState} from '@/redux/store';
import type {ITask} from '@/types';
import {createSlice, type PayloadAction, nanoid} from '@reduxjs/toolkit';

interface InitialState {
    tasks: ITask[];
    filter: 'high' | 'low' | 'medium';
}

const initialState: InitialState = {
    tasks: [
        {
            id: 'tvyb',
            title: 'Learning Redux',
            description: 'Redux is the best state management tool',
            dueDate: '2025-11-27',
            isCompleted: false,
            priority: 'high',
        },
        {
            id: 'ojo',
            title: 'Learning Nextjs',
            description: 'Redux is the best state management tool',
            dueDate: '2025-11-27',
            isCompleted: false,
            priority: 'medium',
        },
    ],
    filter: 'low',
};
type DraftTask = Pick<ITask, 'title' | 'description' | 'dueDate' | 'priority'>;
const createTask = (taskData: DraftTask): ITask => {
    return {...taskData, id: nanoid(), isCompleted: false};
};
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action);
            state.tasks.forEach((task) =>
                task.id === action.payload
                    ? (task.isCompleted = !task.isCompleted)
                    : task,
            );
        },
    },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};

export const {addTask, toggleCompleteState} = taskSlice.actions;
export default taskSlice.reducer;
