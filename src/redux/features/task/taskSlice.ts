import type {RootState} from '@/redux/store';
import type {ITask} from '@/types';
import {createSlice} from '@reduxjs/toolkit';

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
            priority: 'High',
        },
        {
            id: 'ojo',
            title: 'Learning Nextjs',
            description: 'Redux is the best state management tool',
            dueDate: '2025-11-27',
            isCompleted: false,
            priority: 'Medium',
        },
    ],
    filter: 'low',
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};
export default taskSlice.reducer;
