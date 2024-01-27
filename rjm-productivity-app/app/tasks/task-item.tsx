type Task = {
    id: string,
    title: string
};

type Props = {
    task: Task
};

const TaskItem = ({ task }: Props) => (
    <li key={task.id} className='p-2'>
        <input type="checkbox" />
        <label className='pl-1'>{task.title}</label> 
    </li>
);

export default TaskItem;