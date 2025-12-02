import type { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onDeleteTask: (id: string) => void;
    onToggleTask: (id: string) => void;
}

function TaskList({ tasks, onDeleteTask, onToggleTask }: TaskListProps) {
    // Conditional Rendering
    if (tasks.length === 0) {
        return <p className="empty-message">لا توجد مهمات حالياً</p>;
    }

    // List Rendering
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDeleteTask}
                    onToggle={onToggleTask}
                />
            ))}
        </div>
    );
}

export default TaskList;