import {selectFilter, selectTasks} from '@/redux/features/task/taskSlice';
import {useAppSelector} from '@/redux/hook';

export default function Tasks() {
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    console.log(tasks);
    return <div>Tasks</div>;
}
