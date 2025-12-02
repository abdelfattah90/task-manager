import type { Task } from '../types/Task';

interface TaskItemProps {
    task: Task;
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
    return (
        <div className="task-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>
                {task.title}
            </span>
            <button
                onClick={() => onDelete(task.id)}
                className="btn-delete"
            >
                حذف
            </button>
        </div>
    );
}

export default TaskItem;