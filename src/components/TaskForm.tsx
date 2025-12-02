import { useState } from 'react';
import type { Task } from '../types/Task';

interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim() === '') return;

        const newTask: Task = {
            id: Date.now().toString(),
            title: title.trim(),
            completed: false,
            createdAt: new Date().toISOString(),
        };

        onAddTask(newTask);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="أضف مهمة جديدة..."
                className="task-input"
            />
            <button type="submit" className="btn-add">
                إضافة
            </button>
        </form>
    );
}

export default TaskForm;