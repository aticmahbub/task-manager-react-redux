import {Button} from '@/components/ui/button';
import {Calendar} from '@/components/ui/calendar';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {Textarea} from '@/components/ui/textarea';
import {cn} from '@/lib/utils';
import {addTask} from '@/redux/features/task/taskSlice';
import {selectUsers} from '@/redux/features/user/userSlice';
import {useAppSelector} from '@/redux/hook';
import type {ITask} from '@/types';
import {format} from 'date-fns';

import {CalendarIcon} from 'lucide-react';
import {useState} from 'react';
import {useForm, type FieldValues, type SubmitHandler} from 'react-hook-form';
import {useDispatch} from 'react-redux';

export function AddTaskModal() {
    const [open, setOpen] = useState(false);
    const form = useForm();
    const dispatch = useDispatch();
    const users = useAppSelector(selectUsers);
    console.log(users);
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(addTask(data as ITask));
        setOpen(false);
        form.reset();
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='outline'>Add Task</Button>
            </DialogTrigger>

            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription className='sr-only'>
                        Fill up this form for adding Task
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4'
                    >
                        <FormField
                            control={form.control}
                            name='title'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            value={field.value || ''}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='description'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            value={field.value || ''}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='priority'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Priority</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select a priority to set' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='high'>
                                                High
                                            </SelectItem>
                                            <SelectItem value='medium'>
                                                Medium
                                            </SelectItem>
                                            <SelectItem value='low'>
                                                Low
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='dueDate'
                            render={({field}) => (
                                <FormItem className='flex flex-col'>
                                    <FormLabel>Due date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={'outline'}
                                                    className={cn(
                                                        ' pl-3 text-left font-normal',
                                                        !field.value &&
                                                            'text-muted-foreground',
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            'PPP',
                                                        )
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className='w-auto p-0'
                                            align='start'
                                        >
                                            <Calendar
                                                mode='single'
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                // disabled={(date) =>
                                                //     date > new Date() ||
                                                //     date <
                                                //         new Date('1900-01-01')
                                                // }
                                                captionLayout='dropdown'
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='assignedTo'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Assign to</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select user to assign a task' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {users.map((user) => {
                                                return (
                                                    <SelectItem value={user.id}>
                                                        {user.userName}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant='outline'>Cancel</Button>
                            </DialogClose>
                            <Button type='submit'>Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
