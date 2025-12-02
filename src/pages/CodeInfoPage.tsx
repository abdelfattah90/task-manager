import { Link } from "react-router-dom";

function CodeInfoPage() {
    return (
        <div className="container code-info-page">
            <Link to="/" className="nav-link">الرئيسية</Link>

            <div className="container">

                <p>
                    هذا تطبيق بسيط لإدارة المهام تم بناؤه باستخدام React و TypeScript
                </p>
                <h3>المميزات:</h3>
                <ul>
                    <li>إضافة مهام جديدة</li>
                    <li>حذف المهام</li>
                    <li>تحديد المهام كمكتملة</li>
                    <li>حفظ البيانات في LocalStorage</li>
                </ul>
            </div>

            <h2>أساسيات React المستخدمة في مشروع Task Manager</h2>

            <section className="info-section">
                <div className="section-header">
                    <span className="section-number">1️⃣</span>
                    <h2>Functional Components</h2>
                </div>

                <h3>ما هي؟</h3>
                <p>Components هي وحدات بناء تطبيق React، وهي دوال JavaScript تُرجع JSX (عناصر واجهة المستخدم).</p>

                <h3>لماذا نستخدمها؟</h3>
                <ul>
                    <li>إعادة استخدام الكود</li>
                    <li>تقسيم الواجهة إلى أجزاء صغيرة قابلة للصيانة</li>
                    <li>سهولة الاختبار</li>
                </ul>

                <h3>مثال من المشروع:</h3>
                <pre><code>{`function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
  return <div className='task-item'>{/* UI Elements */}</div>
}`}</code></pre>
            </section>

            <section className="info-section">
                <div className="section-header">
                    <span className="section-number">2️⃣</span>
                    <h2>Props & Props Interface</h2>
                </div>

                <h3>ما هي Props؟</h3>
                <p>Props هي البيانات التي تُمرر من Component أب إلى Component ابن (اتجاه واحد فقط).</p>

                <h3>Props Interface في TypeScript:</h3>
                <p>تُحدد نوع البيانات التي يستقبلها الـ Component.</p>

                <h3>مثال من المشروع:</h3>
                <pre><code>{`interface TaskFormProps {
  onAddTask: (task: Task) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {
  // Component يستقبل دالة onAddTask من الأب
}`}</code></pre>

                <div className="note-box">
                    <strong>الفائدة:</strong>
                    <ul>
                        <li>Type Safety: اكتشاف الأخطاء أثناء الكتابة</li>
                        <li>Documentation: الـ interface يوضح ما يحتاجه الـ Component</li>
                    </ul>
                </div>
            </section>

            <section className="info-section">
                <div className="section-header">
                    <span className="section-number">3️⃣</span>
                    <h2>Types في TypeScript</h2>
                </div>

                <h3>لماذا TypeScript؟</h3>
                <ul>
                    <li>اكتشاف الأخطاء قبل تشغيل الكود</li>
                    <li>IntelliSense أفضل في الـ IDE</li>
                    <li>كود أكثر أماناً وقابلية للصيانة</li>
                </ul>

                <h3>مثال من المشروع:</h3>
                <pre><code>{`// src/types/Task.ts
export interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: string
}`}</code></pre>
                <p>الآن أي مكان في المشروع يستخدم <code>Task</code> سيضمن وجود هذه الحقول بنفس الأنواع.</p>
            </section>

            <section className="info-section">
                <div className="section-header">
                    <span className="section-number">4️⃣</span>
                    <h2>useState - إدارة الحالة</h2>
                </div>

                <h3>ما هو useState؟</h3>
                <p>Hook يسمح بتخزين وتحديث البيانات داخل Component.</p>

                <h3>الصيغة:</h3>
                <pre><code>{`const [state, setState] = useState(initialValue)`}</code></pre>

                <h3>مثال من المشروع:</h3>
                <pre><code>{`// في TaskForm
const [title, setTitle] = useState('');

// عند الكتابة في الـ input
onChange={(e) => setTitle(e.target.value)}`}</code></pre>

                <h3>مثال متقدم - Lazy Initialization:</h3>
                <pre><code>{`// في HomePage - قراءة من LocalStorage مرة واحدة فقط
const [tasks, setTasks] = useState<Task[]>(() => {
  const savedTasks = localStorage.getItem('tasks')
  if (savedTasks) {
    return JSON.parse(savedTasks)
  }
  return []
})`}</code></pre>

                <div className="note-box">
                    <strong>لماذا Lazy Initialization؟</strong>
                    <ul>
                        <li>تجنب قراءة LocalStorage في كل re-render</li>
                        <li>تحسين الأداء</li>
                    </ul>
                </div>
            </section>

            <section className="info-section">
                <div className="section-header">
                    <span className="section-number">5️⃣</span>
                    <h2>useEffect - Side Effects</h2>
                </div>

                <h3>ما هو useEffect؟</h3>
                <p>Hook يُنفذ كود خارجي (side effect) مثل:</p>
                <ul>
                    <li>API calls</li>
                    <li>Timers</li>
                    <li>LocalStorage operations</li>
                </ul>

                <h3>الصيغة:</h3>
                <pre><code>{`useEffect(() => {
  // الكود المراد تنفيذه
}, [dependencies])`}</code></pre>

                <h3>مثال من المشروع:</h3>
                <pre><code>{`// حفظ tasks في LocalStorage عند كل تغيير
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks]) // يُنفذ فقط عند تغيير tasks`}</code></pre>

                <div className="note-box">
                    <strong>الـ Dependency Array:</strong>
                    <ul>
                        <li><code>[]</code> → يُنفذ مرة واحدة عند تحميل Component</li>
                        <li><code>[tasks]</code> → يُنفذ عند تغيير <code>tasks</code></li>
                        <li>بدون array → يُنفذ في كل render</li>
                    </ul>
                </div>
            </section>

            <section className="info-section">
                <div className="section-header">
                    <span className="section-number">6️⃣</span>
                    <h2>Lifting State Up</h2>
                </div>

                <h3>المفهوم:</h3>
                <p>عندما يحتاج عدة Components لنفس البيانات، نرفع الـ state إلى أقرب أب مشترك.</p>

                <h3>في المشروع:</h3>
                <p><code>HomePage</code> يحتفظ بـ <code>tasks</code> ويُمرر دوال التعديل للأبناء:</p>

                <pre><code>{`// HomePage (الأب)
const [tasks, setTasks] = useState<Task[]>([])

const handleAddTask = (task: Task) => {
  setTasks([task, ...tasks])
}

// تمرير الدالة للابن
<TaskForm onAddTask={handleAddTask} />`}</code></pre>

                <pre><code>{`// TaskForm (الابن)
function TaskForm({ onAddTask }: TaskFormProps) {
  // يستدعي الدالة عند إضافة مهمة
  onAddTask(newTask)
}`}</code></pre>

                <div className="note-box">
                    <strong>الفائدة:</strong>
                    <ul>
                        <li>مصدر واحد للحقيقة (Single Source of Truth)</li>
                        <li>سهولة مزامنة البيانات بين Components</li>
                    </ul>
                </div>
            </section>

            <section className="info-section">
                <div className="section-header">
                    <span className="section-number">7️⃣</span>
                    <h2>List Rendering</h2>
                </div>

                <h3>القاعدة:</h3>
                <p>استخدم <code>.map()</code> لعرض قوائم من البيانات، مع إضافة <code>key</code> فريد لكل عنصر.</p>

                <h3>مثال من المشروع:</h3>
                <pre><code>{`function TaskList({ tasks }: TaskListProps) {
  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // ⚠️ مهم جداً للأداء
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
        />
      ))}
    </div>
  )
}`}</code></pre>

                <div className="note-box">
                    <strong>لماذا key؟</strong>
                    <ul>
                        <li>React يستخدمها لتتبع العناصر</li>
                        <li>تحسين الأداء عند التحديث</li>
                        <li>تجنب أخطاء re-rendering</li>
                    </ul>
                </div>
            </section>

            <section className="info-section">
                <div className="section-header">
                    <span className="section-number">8️⃣</span>
                    <h2>Conditional Rendering</h2>
                </div>

                <h3>المفهوم:</h3>
                <p>عرض UI مختلف بناءً على شرط معين.</p>

                <h3>الطرق الشائعة:</h3>

                <h4>1. if statement:</h4>
                <pre><code>{`if (tasks.length === 0) {
  return <p>لا توجد مهمات</p>
}
return <TaskList tasks={tasks} />`}</code></pre>

                <h4>2. ternary operator:</h4>
                <pre><code>{`{tasks.length === 0 ? <p>لا توجد مهمات</p> : <TaskList />}`}</code></pre>

                <h4>3. && operator:</h4>
                <pre><code>{`{tasks.length > 0 && <TaskList tasks={tasks} />}`}</code></pre>

                <h3>مثال من المشروع:</h3>
                <pre><code>{`function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className='empty-message'>لا توجد مهمات حالياً</p>
  }

  return <div className='task-list'>{/* List Rendering */}</div>
}`}</code></pre>
            </section>

            <section className="info-section">
                <div className="section-header">
                    <span className="section-number">9️⃣</span>
                    <h2>LocalStorage</h2>
                </div>

                <h3>ما هو؟</h3>
                <p>API متصفح لحفظ البيانات محلياً (تبقى بعد إغلاق المتصفح).</p>

                <h3>العمليات الأساسية:</h3>

                <h4>الحفظ:</h4>
                <pre><code>{`localStorage.setItem('key', JSON.stringify(data))`}</code></pre>

                <h4>القراءة:</h4>
                <pre><code>{`const data = localStorage.getItem('key')
const parsed = JSON.parse(data)`}</code></pre>

                <h4>الحذف:</h4>
                <pre><code>{`localStorage.removeItem('key')`}</code></pre>

                <h3>في المشروع:</h3>

                <h4>1. القراءة عند التحميل (Lazy Initialization):</h4>
                <pre><code>{`const [tasks, setTasks] = useState<Task[]>(() => {
  const savedTasks = localStorage.getItem('tasks')
  if (savedTasks) {
    return JSON.parse(savedTasks)
  }
  return []
})`}</code></pre>

                <h4>2. الحفظ عند التغيير:</h4>
                <pre><code>{`useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])`}</code></pre>

                <div className="warning-box">
                    <strong>⚠️ ملاحظة:</strong>
                    <p>LocalStorage يحفظ strings فقط، لذا نستخدم:</p>
                    <ul>
                        <li><code>JSON.stringify()</code> للحفظ</li>
                        <li><code>JSON.parse()</code> للقراءة</li>
                    </ul>
                </div>
            </section>

            <section className="info-section diagram-section">
                <div className="section-header">
                    <span className="section-number">📊</span>
                    <h2>رسم توضيحي - Data Flow</h2>
                </div>

                <pre className="diagram"><code>{`HomePage (Parent)
    │
    ├── state: tasks[]
    │
    ├──> TaskForm (Child)
    │       │
    │       └── onAddTask() → يُعدل tasks في HomePage
    │
    └──> TaskList (Child)
            │
            ├── tasks prop
            │
            └──> TaskItem (Grandchild)
                    │
                    ├── task prop
                    ├── onDelete() → يُعدل tasks في HomePage
                    └── onToggle() → يُعدل tasks في HomePage`}</code></pre>
            </section>

            <section className="info-section best-practices-section">
                <div className="section-header">
                    <span className="section-number">✅</span>
                    <h2>Best Practices المستخدمة في المشروع</h2>
                </div>

                <ol className="best-practices-list">
                    <li><strong>Type Safety:</strong> استخدام TypeScript interfaces لجميع الـ Props</li>
                    <li><strong>Lazy Initialization:</strong> قراءة LocalStorage مرة واحدة فقط</li>
                    <li><strong>Dependency Array:</strong> تحديد dependencies في useEffect بدقة</li>
                    <li><strong>Single Responsibility:</strong> كل Component له مسؤولية واحدة</li>
                    <li><strong>Immutability:</strong> استخدام <code>.map()</code> و <code>.filter()</code> بدلاً من تعديل الـ state مباشرة</li>
                    <li><strong>Error Handling:</strong> try-catch عند قراءة LocalStorage</li>
                </ol>
            </section>

            <section className="info-section summary-section">
                <div className="section-header">
                    <span className="section-number">🔄</span>
                    <h2>ملخص سريع</h2>
                </div>

                <div className="summary-table">
                    <div className="summary-row">
                        <div className="summary-cell header">المفهوم</div>
                        <div className="summary-cell header">الاستخدام في المشروع</div>
                    </div>
                    <div className="summary-row">
                        <div className="summary-cell"><strong>Functional Components</strong></div>
                        <div className="summary-cell">TaskForm, TaskItem, TaskList</div>
                    </div>
                    <div className="summary-row">
                        <div className="summary-cell"><strong>Props & Interface</strong></div>
                        <div className="summary-cell">تمرير البيانات والدوال بين Components</div>
                    </div>
                    <div className="summary-row">
                        <div className="summary-cell"><strong>TypeScript Types</strong></div>
                        <div className="summary-cell">Task interface لضمان صحة البيانات</div>
                    </div>
                    <div className="summary-row">
                        <div className="summary-cell"><strong>useState</strong></div>
                        <div className="summary-cell">إدارة <code>tasks</code> و <code>title</code></div>
                    </div>
                    <div className="summary-row">
                        <div className="summary-cell"><strong>useEffect</strong></div>
                        <div className="summary-cell">حفظ tasks في LocalStorage</div>
                    </div>
                    <div className="summary-row">
                        <div className="summary-cell"><strong>Lifting State Up</strong></div>
                        <div className="summary-cell"><code>tasks</code> في HomePage ودوال التعديل</div>
                    </div>
                    <div className="summary-row">
                        <div className="summary-cell"><strong>List Rendering</strong></div>
                        <div className="summary-cell"><code>.map()</code> لعرض tasks</div>
                    </div>
                    <div className="summary-row">
                        <div className="summary-cell"><strong>Conditional Rendering</strong></div>
                        <div className="summary-cell">رسالة "لا توجد مهمات"</div>
                    </div>
                    <div className="summary-row">
                        <div className="summary-cell"><strong>LocalStorage</strong></div>
                        <div className="summary-cell">حفظ واستعادة tasks</div>
                    </div>
                </div>
            </section>

            <section className="info-section review-section">
                <div className="section-header">
                    <span className="section-number">📝</span>
                    <h2>نقاط مهمة للمراجعة</h2>
                </div>

                <ul className="review-list">
                    <li>✅ <strong>Props تسير في اتجاه واحد فقط:</strong> من الأب للابن</li>
                    <li>✅ <strong>State يُعدل فقط عبر setState:</strong> لا تُعدل قيمة state مباشرة</li>
                    <li>✅ <strong>useEffect Dependencies مهمة:</strong> لتجنب infinite loops</li>
                    <li>✅ <strong>key في Lists ضرورية:</strong> للأداء والاستقرار</li>
                    <li>✅ <strong>LocalStorage يحفظ strings:</strong> استخدم JSON.stringify/parse</li>
                </ul>
            </section>
        </div>
    );
}

export default CodeInfoPage;