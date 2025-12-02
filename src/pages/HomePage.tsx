import { useState, useEffect } from 'react';
import type { Task } from '../types/Task';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';

function HomePage() {
    // ✅ Lazy Initialization - قراءة من LocalStorage مرة واحدة
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            try {
                return JSON.parse(savedTasks);
            } catch (error) {
                console.error('Failed to parse tasks:', error);
                return [];
            }
        }
        return [];
    });

    // ✅ حفظ في LocalStorage عند تغيير tasks
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Lifting State Up - إضافة مهمة
    const handleAddTask = (task: Task) => {
        setTasks([task, ...tasks]);
    };

    // Lifting State Up - حذف مهمة
    const handleDeleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Lifting State Up - تغيير حالة المهمة
    const handleToggleTask = (id: string) => {
        setTasks(tasks.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    const completedCount = tasks.filter(t => t.completed).length;

    return (
        <div className="container">


            <Link to="/code-info" className="nav-link">شرح الكود</Link>

            <h4>📝 مدير المهام</h4>

            <TaskForm onAddTask={handleAddTask} />

            <div className="stats">
                المهام المكتملة: {completedCount} / {tasks.length}
            </div>

            <TaskList
                tasks={tasks}
                onDeleteTask={handleDeleteTask}
                onToggleTask={handleToggleTask}
            />
        </div>
    );
}

export default HomePage;