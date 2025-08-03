import {AddTaskModal} from '@/components/module/tasks/AddTaskModal';
import TaskCard from '@/components/module/tasks/TasksCard';
import {selectTasks} from '@/redux/features/task/taskSlice';
import {useAppSelector} from '@/redux/hook';

export default function Tasks() {
    const tasks = useAppSelector(selectTasks);
    console.log(tasks);
    return (
        <div className='mx-auto max-w-7xl px-5 mt-20'>
            <div className='flex justify-between items-center'>
                <h1>Tasks</h1>
                <AddTaskModal />
            </div>
            <div className='space-y-5 mt-5'>
                {tasks.map((task) => (
                    <TaskCard task={task} key={task.id} />
                ))}
            </div>
        </div>
    );
}
