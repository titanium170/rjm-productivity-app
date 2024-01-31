type Task = {
    id: string,
    title: string,
    state: TaskState,
};

type TaskState = {
    description: string, 
    type: 'triage' | 'backlog' | 'unstarted' | 'started' | 'completed' | 'canceled'
}

type Props = {
    task: Task
};

const TaskItem = ({ task }: Props) => (
    <li key={task.id} className='p-2'>
        <input type="checkbox" checked={task.state.type === 'completed'}/>
        <label className='pl-1'>{task.title} <span className='text-sm text-gray-500'>{task.state.type}</span></label> 
    </li>
);

export default TaskItem;