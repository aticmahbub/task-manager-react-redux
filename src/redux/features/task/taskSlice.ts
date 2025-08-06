import type {RootState} from '@/redux/store';
import type {InitialState, ITask} from '@/types';
import {createSlice, type PayloadAction, nanoid} from '@reduxjs/toolkit';

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
    filter: 'all',
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
            state.tasks.forEach((task) =>
                task.id === action.payload
                    ? (task.isCompleted = !task.isCompleted)
                    : task,
            );
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id != action.payload,
            );
            console.log(action);
        },
        updateFilter: (
            state,
            action: PayloadAction<'all' | 'high' | 'medium' | 'low'>,
        ) => {
            state.filter = action.payload;
        },
    },
});

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter;
    switch (filter) {
        case 'high':
            return state.todo.tasks.filter((task) => task.priority === 'high');
        case 'medium':
            return state.todo.tasks.filter(
                (task) => task.priority === 'medium',
            );
        case 'low':
            return state.todo.tasks.filter((task) => task.priority === 'low');
        default:
            return state.todo.tasks;
    }
};
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};

export const {addTask, toggleCompleteState, deleteTask, updateFilter} =
    taskSlice.actions;
export default taskSlice.reducer;
