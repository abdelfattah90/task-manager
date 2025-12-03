import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Section {
  title: string;
  content: string;
}

interface Sections {
  [key: string]: Section;
}

const CodeExplainGemini = () => {
  // Inject CSS styles
  useEffect(() => {
    const styleId = 'code-explain-styles';
    if (document.getElementById(styleId)) return;

    const link = document.createElement('link');
    link.id = styleId;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Fira+Code:wght@400;500&display=swap';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.id = styleId + '-inline';
    style.textContent = `
      /* CSS Variables */
      :root {
        --ce-slate-50: #f8fafc;
        --ce-slate-100: #f1f5f9;
        --ce-slate-200: #e2e8f0;
        --ce-slate-300: #cbd5e1;
        --ce-slate-400: #94a3b8;
        --ce-slate-500: #64748b;
        --ce-slate-600: #475569;
        --ce-slate-700: #334155;
        --ce-slate-800: #1e293b;
        --ce-blue-50: #eff6ff;
        --ce-blue-100: #dbeafe;
        --ce-blue-500: #3b82f6;
        --ce-blue-600: #2563eb;
        --ce-blue-800: #1e40af;
        --ce-indigo-50: #eef2ff;
        --ce-indigo-100: #e0e7ff;
        --ce-indigo-800: #3730a3;
        --ce-purple-100: #f3e8ff;
        --ce-purple-600: #9333ea;
        --ce-purple-800: #6b21a8;
        --ce-green-50: #f0fdf4;
        --ce-green-100: #dcfce7;
        --ce-green-600: #16a34a;
        --ce-green-800: #166534;
        --ce-orange-400: #fb923c;
        --ce-orange-500: #f97316;
        --ce-yellow-50: #fefce8;
        --ce-yellow-100: #fef9c3;
        --ce-yellow-800: #854d0e;
        --ce-red-50: #fef2f2;
        --ce-red-100: #fee2e2;
        --ce-red-500: #ef4444;
        --ce-red-600: #dc2626;
        --ce-teal-50: #f0fdfa;
        --ce-teal-100: #ccfbf1;
        --ce-teal-200: #99f6e4;
        --ce-teal-800: #115e59;
      }
      
      .ce-container { font-family: 'Cairo', sans-serif; background-color: var(--ce-slate-50); color: var(--ce-slate-800); height: 100vh; display: flex; flex-direction: column; overflow: hidden; }
      pre, code { font-family: 'Fira Code', monospace; direction: ltr; }
      .ce-mobile-header { display: flex; background-color: white; border-bottom: 1px solid var(--ce-slate-200); padding: 1rem; justify-content: space-between; align-items: center; z-index: 20; }
      .ce-mobile-title { font-size: 1.25rem; font-weight: 700; color: var(--ce-blue-600); }
      .ce-menu-btn { color: var(--ce-slate-600); padding: 0.5rem; border: 1px solid var(--ce-slate-300); border-radius: 0.25rem; background: white; cursor: pointer; }
      .ce-menu-btn:hover { background-color: var(--ce-slate-50); }
      .ce-sidebar { width: 100%; background-color: white; border-left: 1px solid var(--ce-slate-200); flex-shrink: 0; height: 100%; overflow-y: auto; transform: translateX(-100%); transition: transform 0.3s ease; position: absolute; z-index: 10; padding: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
      .ce-sidebar-open { transform: translateX(0); }
      .ce-sidebar-header { margin-bottom: 2rem; display: none; }
      .ce-sidebar-title { font-size: 1.5rem; font-weight: 700; color: var(--ce-blue-600); margin-bottom: 0.5rem; }
      .ce-sidebar-subtitle { font-size: 0.875rem; color: var(--ce-slate-500); }
      .ce-nav-list { display: flex; flex-direction: column; gap: 0.5rem; }
      .ce-nav-category { font-size: 0.75rem; font-weight: 600; color: var(--ce-slate-400); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
      .ce-nav-item { width: 100%; text-align: right; padding: 0.75rem 1rem; border-radius: 0.5rem; transition: all 0.3s ease; font-size: 0.875rem; font-weight: 500; background: transparent; border: none; cursor: pointer; color: var(--ce-slate-700); }
      .ce-nav-item:hover { background-color: var(--ce-slate-50); }
      .ce-nav-item-active { background-color: var(--ce-blue-500); color: white; border-right: 4px solid var(--ce-blue-800); }
      .ce-main { flex: 1; height: 100%; overflow-y: auto; background-color: var(--ce-slate-50); padding: 1.5rem 1rem; position: relative; }
      .ce-content { max-width: 56rem; margin: 0 auto; padding-bottom: 2.5rem; animation: ce-fadeInUp 0.5s ease-out; }
      .ce-main-title { font-size: 1.875rem; font-weight: 700; color: var(--ce-blue-800); margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--ce-slate-200); }
      .ce-space-y-6 > * + * { margin-top: 1.5rem; }
      .ce-mb-4 { margin-bottom: 1rem; }
      .ce-mb-2 { margin-bottom: 0.5rem; }
      .ce-mb-3 { margin-bottom: 0.75rem; }
      .ce-mt-1 { margin-top: 0.25rem; }
      .ce-card { background-color: white; padding: 1.5rem; border-radius: 0.75rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); border: 1px solid var(--ce-slate-100); transition: all 0.3s ease; }
      .ce-card:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
      .ce-card-blue { background-color: var(--ce-blue-50); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--ce-blue-100); }
      .ce-card-indigo { background-color: var(--ce-indigo-50); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--ce-indigo-100); }
      .ce-card-yellow { background-color: var(--ce-yellow-50); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--ce-yellow-100); }
      .ce-card-green { background-color: var(--ce-green-50); padding: 1rem; border-radius: 0.75rem; border: 1px solid var(--ce-green-100); }
      .ce-card-red { background-color: var(--ce-red-50); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--ce-red-100); }
      .ce-card-teal { background-color: var(--ce-teal-50); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--ce-teal-100); }
      .ce-section-title { font-size: 1.125rem; font-weight: 700; color: var(--ce-slate-800); margin-bottom: 1rem; }
      .ce-section-title-blue { font-size: 1.125rem; font-weight: 700; color: var(--ce-blue-800); margin-bottom: 1rem; }
      .ce-section-title-indigo { font-size: 1.125rem; font-weight: 700; color: var(--ce-indigo-800); margin-bottom: 1rem; }
      .ce-section-title-yellow { font-size: 1.125rem; font-weight: 700; color: var(--ce-yellow-800); margin-bottom: 1rem; }
      .ce-section-title-red { font-size: 1.125rem; font-weight: 700; color: #991b1b; margin-bottom: 0.5rem; }
      .ce-section-title-teal { font-size: 1.125rem; font-weight: 700; color: var(--ce-teal-800); margin-bottom: 1rem; }
      .ce-text-primary { color: var(--ce-slate-600); line-height: 1.625; }
      .ce-text-secondary { color: var(--ce-slate-700); }
      .ce-text-small { color: var(--ce-slate-600); font-size: 0.875rem; }
      .ce-text-small-gray { font-size: 0.875rem; color: var(--ce-slate-600); }
      .ce-text-bold { color: var(--ce-slate-600); font-weight: 700; }
      .ce-list { list-style: disc; list-style-position: inside; color: var(--ce-slate-600); }
      .ce-list > li { margin-top: 0.5rem; }
      .ce-component-tree { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
      .ce-tree-node { padding: 0.75rem; color: white; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); width: 8rem; text-align: center; font-family: 'Fira Code', monospace; font-size: 0.875rem; transition: all 0.3s ease; }
      .ce-node-purple { background-color: var(--ce-purple-600); }
      .ce-node-blue { background-color: var(--ce-blue-600); width: 9rem; }
      .ce-node-green { background-color: var(--ce-green-600); }
      .ce-node-orange { background-color: var(--ce-orange-500); }
      .ce-node-orange-light { background-color: var(--ce-orange-400); padding: 0.5rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); width: 7rem; font-size: 0.75rem; }
      .ce-tree-line { height: 1.5rem; width: 2px; background-color: var(--ce-slate-300); }
      .ce-tree-line-small { height: 1rem; width: 2px; background-color: var(--ce-slate-300); }
      .ce-tree-children { display: flex; gap: 1rem; }
      .ce-tree-child { display: flex; flex-direction: column; align-items: center; }
      .ce-props-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
      .ce-props-card { background-color: white; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); }
      .ce-props-title { font-weight: 700; text-align: center; margin-bottom: 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--ce-slate-200); }
      .ce-props-subtitle { font-size: 0.875rem; text-align: center; color: var(--ce-slate-500); margin-bottom: 0.5rem; }
      .ce-props-function { background-color: var(--ce-slate-100); padding: 0.5rem; border-radius: 0.25rem; text-align: center; font-family: 'Fira Code', monospace; font-size: 0.75rem; color: var(--ce-blue-600); }
      .ce-props-function-purple { background-color: var(--ce-slate-100); padding: 0.5rem; border-radius: 0.25rem; text-align: center; font-family: 'Fira Code', monospace; font-size: 0.75rem; color: var(--ce-purple-600); }
      .ce-props-arrow { display: flex; justify-content: center; margin: 0.5rem 0; font-size: 1.5rem; }
      .ce-props-label { font-size: 0.75rem; text-align: center; color: var(--ce-slate-400); }
      .ce-types-comparison { display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem; }
      .ce-types-bad { flex: 1; background-color: var(--ce-red-50); padding: 0.75rem; border-radius: 0.5rem; border: 1px solid var(--ce-red-100); }
      .ce-types-good { flex: 1; background-color: var(--ce-green-50); padding: 0.75rem; border-radius: 0.5rem; border: 1px solid var(--ce-green-100); }
      .ce-types-label-bad { display: block; color: var(--ce-red-600); font-weight: 700; margin-bottom: 0.25rem; }
      .ce-types-label-good { display: block; color: #16a34a; font-weight: 700; margin-bottom: 0.25rem; }
      .ce-types-code { font-size: 0.75rem; color: var(--ce-slate-700); }
      .ce-demo-container { display: flex; flex-direction: column; align-items: center; }
      .ce-demo-box { background-color: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); width: 100%; max-width: 24rem; text-align: center; }
      .ce-demo-label { color: var(--ce-slate-500); margin-bottom: 0.5rem; font-size: 0.875rem; }
      .ce-demo-count { font-size: 2.25rem; font-family: 'Fira Code', monospace; font-weight: 700; color: var(--ce-blue-600); margin-bottom: 1rem; transition: transform 0.2s ease; }
      .ce-demo-buttons { display: flex; gap: 0.5rem; justify-content: center; }
      .ce-demo-btn { color: white; padding: 0.5rem 1rem; border-radius: 0.25rem; border: none; cursor: pointer; font-weight: 500; transition: all 0.2s ease; }
      .ce-demo-btn-minus { background-color: var(--ce-red-500); }
      .ce-demo-btn-minus:hover { background-color: var(--ce-red-600); }
      .ce-demo-btn-plus { background-color: #22c55e; }
      .ce-demo-btn-plus:hover { background-color: var(--ce-green-600); }
      .ce-demo-note { font-size: 0.75rem; color: var(--ce-slate-400); margin-top: 0.75rem; }
      .ce-examples-box { background-color: var(--ce-slate-50); padding: 1rem; border-radius: 0.5rem; }
      .ce-examples-title { font-weight: 700; margin-bottom: 0.5rem; }
      .ce-examples-list { display: flex; flex-direction: column; gap: 0.75rem; }
      .ce-example-item { display: flex; align-items: flex-start; gap: 0.5rem; }
      .ce-badge { font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 0.25rem; flex-shrink: 0; margin-top: 0.25rem; }
      .ce-badge-blue { background-color: var(--ce-blue-100); color: var(--ce-blue-800); }
      .ce-badge-purple { background-color: var(--ce-purple-100); color: var(--ce-purple-800); }
      .ce-example-text { color: var(--ce-slate-700); font-size: 0.875rem; }
      .ce-effect-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
      .ce-effect-title-yellow { font-weight: 700; color: var(--ce-yellow-800); margin-bottom: 0.5rem; }
      .ce-effect-title-green { font-weight: 700; color: var(--ce-green-800); margin-bottom: 0.5rem; }
      .ce-effect-text { font-size: 0.875rem; color: var(--ce-slate-700); }
      .ce-effect-list { font-size: 0.875rem; list-style: disc; list-style-position: inside; margin-top: 0.5rem; color: var(--ce-slate-600); }
      .ce-effect-list > li { margin-top: 0.25rem; }
      .ce-effect-note { font-size: 0.75rem; color: var(--ce-slate-500); margin-top: 0.25rem; }
      .ce-lifting-diagram { background-color: var(--ce-slate-50); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--ce-slate-200); position: relative; min-height: 16rem; display: flex; flex-direction: column; justify-content: space-between; align-items: center; }
      .ce-lifting-parent { width: 12rem; background-color: var(--ce-blue-600); color: white; padding: 0.75rem; border-radius: 0.5rem; text-align: center; z-index: 10; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
      .ce-lifting-parent-label { font-weight: 700; }
      .ce-lifting-state { font-size: 0.75rem; background-color: var(--ce-blue-800); border-radius: 0.25rem; padding: 0.25rem; margin-top: 0.25rem; }
      .ce-lifting-children { display: flex; justify-content: space-between; width: 100%; max-width: 28rem; padding: 0 1rem; gap: 1rem; }
      .ce-lifting-child { padding: 0.75rem; border-radius: 0.5rem; width: 9rem; text-align: center; }
      .ce-lifting-child-green { background-color: var(--ce-green-100); border: 1px solid #86efac; }
      .ce-lifting-child-orange { background-color: #fed7aa; border: 1px solid #fdba74; }
      .ce-lifting-child-label { font-weight: 700; color: var(--ce-green-800); }
      .ce-lifting-child-orange .ce-lifting-child-label { color: #9a3412; }
      .ce-lifting-child-text { font-size: 0.75rem; color: #15803d; margin-top: 0.25rem; }
      .ce-lifting-child-orange .ce-lifting-child-text { color: #9a3412; }
      .ce-info-box { background-color: var(--ce-blue-50); padding: 1rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--ce-slate-700); }
      .ce-conditional-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
      .ce-conditional-card { background-color: var(--ce-slate-50); padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--ce-slate-200); }
      .ce-conditional-title { font-weight: 700; color: var(--ce-slate-700); margin-bottom: 0.5rem; }
      .ce-conditional-label { font-size: 0.75rem; color: var(--ce-slate-500); margin-bottom: 0.5rem; }
      .ce-conditional-code { display: block; background-color: var(--ce-slate-800); color: var(--ce-slate-200); padding: 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; }
      .ce-conditional-text { font-size: 0.75rem; color: var(--ce-slate-600); margin-top: 0.5rem; }
      .ce-lazy-reason { font-size: 0.875rem; background-color: white; padding: 0.5rem; border-radius: 0.5rem; border: 1px solid var(--ce-teal-200); color: var(--ce-slate-600); }
      .ce-code-block { background-color: #1e1e1e; color: #d4d4d4; border-radius: 0.5rem; padding: 1rem; overflow-x: auto; border: 1px solid #333; font-family: 'Fira Code', monospace; font-size: 0.875rem; line-height: 1.6; }
      .ce-code-purple { color: #c586c0; }
      .ce-code-yellow { color: #dcdcaa; }
      .ce-code-blue { color: #569cd6; }
      .ce-code-blue-light { color: #9cdcfe; }
      .ce-code-green { color: #ce9178; }
      .ce-code-comment { color: #6a9955; }
      @keyframes ce-fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      @media (min-width: 768px) {
        .ce-container { flex-direction: row; }
        .ce-mobile-header { display: none; }
        .ce-sidebar { width: 18rem; transform: translateX(0); position: relative; box-shadow: none; }
        .ce-sidebar-header { display: block; }
        .ce-main { padding: 2rem; }
        .ce-main-title { font-size: 2.25rem; }
        .ce-props-grid { grid-template-columns: repeat(2, 1fr); }
        .ce-types-comparison { flex-direction: row; }
        .ce-effect-grid { grid-template-columns: repeat(2, 1fr); }
        .ce-conditional-grid { grid-template-columns: repeat(2, 1fr); }
        .ce-demo-count { font-size: 3rem; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      const linkEl = document.getElementById(styleId);
      const styleEl = document.getElementById(styleId + '-inline');
      if (linkEl) linkEl.remove();
      if (styleEl) styleEl.remove();
    };
  }, []);
  const [activeSection, setActiveSection] = useState('functional-components');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [demoCount, setDemoCount] = useState(0);

  const sections: Sections = {
    'functional-components': {
      title: '1. Functional Components (المكونات الوظيفية)',
      content: `
        <div class="ce-space-y-6">
          <div class="ce-card">
            <h3 class="ce-section-title">🔹 ما هي؟</h3>
            <p class="ce-text-primary ce-mb-4">
              المكونات الوظيفية هي ببساطة <strong>دوال JavaScript</strong> (Functions) تعيد كود JSX (الذي يشبه HTML). هي وحدات البناء الأساسية في React الحديث.
            </p>
            <ul class="ce-list ce-mb-4">
              <li><strong>بساطة:</strong> أسهل في القراءة والكتابة مقارنة بـ Class Components القديمة.</li>
              <li><strong>Hooks:</strong> تسمح باستخدام Hooks مثل <code>useState</code> و <code>useEffect</code>.</li>
              <li><strong>قابلة لإعادة الاستخدام:</strong> يمكنك استخدام المكون في أكثر من مكان.</li>
            </ul>
          </div>

          <div class="ce-card-blue">
            <h3 class="ce-section-title-blue">📍 في مشروعك</h3>
            <p class="ce-text-secondary ce-mb-4">لديك الهيكل الهرمي التالي للمكونات:</p>
            
            <div class="ce-component-tree">
              <div class="ce-tree-node ce-node-purple">App.tsx</div>
              <div class="ce-tree-line"></div>
              <div class="ce-tree-node ce-node-blue">HomePage.tsx</div>
              <div class="ce-tree-line"></div>
              <div class="ce-tree-children">
                <div class="ce-tree-child">
                  <div class="ce-tree-node ce-node-green">TaskForm</div>
                </div>
                <div class="ce-tree-child">
                  <div class="ce-tree-node ce-node-orange">TaskList</div>
                  <div class="ce-tree-line-small"></div>
                  <div class="ce-tree-node ce-node-orange-light ce-mt-1">TaskItem</div>
                  <div class="ce-tree-node ce-node-orange-light ce-mt-1">TaskItem</div>
                </div>
              </div>
            </div>
          </div>

          <div class="ce-code-block">
<span class="ce-code-purple">function</span> <span class="ce-code-yellow">TaskForm</span>({ onAddTask }: TaskFormProps) {
    <span class="ce-code-comment">// Logic (Hooks, Functions)</span>
    <span class="ce-code-purple">const</span> [title, setTitle] = useState(<span class="ce-code-green">''</span>);

    <span class="ce-code-comment">// UI (JSX)</span>
    <span class="ce-code-purple">return</span> (
        &lt;<span class="ce-code-blue">form</span>&gt;
            ...
        &lt;/<span class="ce-code-blue">form</span>&gt;
    );
}
          </div>
        </div>
      `
    },
    'props': {
      title: '2. Props & Props Interface',
      content: `
        <div class="ce-space-y-6">
          <div class="ce-card">
            <h3 class="ce-section-title">🔹 تمرير البيانات (Props)</h3>
            <p class="ce-text-primary ce-mb-4">
              الـ <strong>Props</strong> (اختصار لـ Properties) هي الطريقة التي نمرر بها البيانات من المكون الأب (Parent) إلى المكون الابن (Child). هي للقراءة فقط (Read-only) بالنسبة للابن.
            </p>
            <p class="ce-text-primary">
              الـ <strong>Interface</strong> في TypeScript تحدد "عقد" أو "شكل" هذه البيانات، مما يمنع الأخطاء أثناء الكتابة.
            </p>
          </div>

          <div class="ce-card-indigo">
            <h3 class="ce-section-title-indigo">📍 مثال حي من الكود</h3>
            <div class="ce-props-grid">
              <div class="ce-props-card">
                <h4 class="ce-props-title">HomePage (الأب)</h4>
                <div class="ce-props-subtitle">يمتلك دالة الحذف</div>
                <div class="ce-props-function">handleDeleteTask()</div>
                <div class="ce-props-arrow">⬇️</div>
                <div class="ce-props-label">يمررها كـ Prop</div>
              </div>
              <div class="ce-props-card">
                <h4 class="ce-props-title">TaskItem (الابن)</h4>
                <div class="ce-props-subtitle">يستقبل الدالة لينفذها</div>
                <div class="ce-props-function-purple">props.onDelete(id)</div>
              </div>
            </div>
          </div>

          <div class="ce-code-block">
<span class="ce-code-comment">// تعريف العقد (Interface)</span>
<span class="ce-code-purple">interface</span> <span class="ce-code-yellow">TaskItemProps</span> {
    <span class="ce-code-blue-light">task</span>: Task;              <span class="ce-code-comment">// بيانات</span>
    <span class="ce-code-blue-light">onDelete</span>: (id: string) <span class="ce-code-purple">=></span> <span class="ce-code-purple">void</span>; <span class="ce-code-comment">// دالة (Event)</span>
    <span class="ce-code-blue-light">onToggle</span>: (id: string) <span class="ce-code-purple">=></span> <span class="ce-code-purple">void</span>;
}

<span class="ce-code-comment">// الاستخدام في المكون</span>
<span class="ce-code-purple">function</span> <span class="ce-code-yellow">TaskItem</span>({ task, onDelete, onToggle }: TaskItemProps) { ... }
          </div>
        </div>
      `
    },
    'types': {
      title: '3. Types (TypeScript)',
      content: `
        <div class="ce-space-y-6">
          <div class="ce-card">
            <h3 class="ce-section-title">🔹 لماذا TypeScript؟</h3>
            <p class="ce-text-primary ce-mb-4">
              JavaScript لغة ديناميكية (Loose typing)، مما قد يسبب أخطاء لا تظهر إلا أثناء تشغيل التطبيق.
              <strong>TypeScript</strong> تضيف "الأنواع الثابتة" (Static Typing) لتكتشف الأخطاء <em>أثناء كتابة الكود</em>.
            </p>
            <div class="ce-types-comparison">
              <div class="ce-types-bad">
                <span class="ce-types-label-bad">JavaScript ❌</span>
                <code class="ce-types-code">const task = { title: "مهمة" };<br>console.log(task.nme); // undefined (بدون تحذير)</code>
              </div>
              <div class="ce-types-good">
                <span class="ce-types-label-good">TypeScript ✅</span>
                <code class="ce-types-code">interface Task { title: string }<br>console.log(task.nme); // Error: Property 'nme' does not exist</code>
              </div>
            </div>
          </div>

          <div class="ce-card-yellow">
            <h3 class="ce-section-title-yellow">📍 ملف Types/Task.ts</h3>
            <p class="ce-text-secondary ce-mb-4">
              قمت بتعريف شكل "المهمة" مرة واحدة، واستخدمته في كل المشروع (Form, List, Item, HomePage). هذا يضمن الاتساق.
            </p>
          </div>

          <div class="ce-code-block">
<span class="ce-code-comment">// src/types/Task.ts</span>
<span class="ce-code-purple">export interface</span> <span class="ce-code-yellow">Task</span> {
    <span class="ce-code-blue-light">id</span>: <span class="ce-code-purple">string</span>;
    <span class="ce-code-blue-light">title</span>: <span class="ce-code-purple">string</span>;
    <span class="ce-code-blue-light">completed</span>: <span class="ce-code-purple">boolean</span>;
    <span class="ce-code-blue-light">createdAt</span>: <span class="ce-code-purple">string</span>;
}
          </div>
        </div>
      `
    },
    'usestate': {
      title: '4. useState Hook',
      content: `
        <div class="ce-space-y-6">
          <div class="ce-card">
            <h3 class="ce-section-title">🔹 إدارة الحالة (State)</h3>
            <p class="ce-text-primary ce-mb-4">
              الـ <strong>State</strong> هي "ذاكرة" المكون. عندما تتغير الـ State، يقوم React بإعادة رسم (Re-render) المكون تلقائياً ليعكس التغيير في واجهة المستخدم.
            </p>
            <p class="ce-text-small">الصيغة: <code>const [variable, setter] = useState(initialValue);</code></p>
          </div>

          <div class="ce-card-blue ce-demo-container">
            <h3 class="ce-section-title-blue">🎮 تجربة تفاعلية</h3>
            <div class="ce-demo-box">
              <p class="ce-demo-label">قيمة المتغير (state):</p>
              <div id="demo-count" class="ce-demo-count">${demoCount}</div>
              <div class="ce-demo-buttons">
                <button class="ce-demo-btn ce-demo-btn-minus">-</button>
                <button class="ce-demo-btn ce-demo-btn-plus">+</button>
              </div>
              <p class="ce-demo-note">عند الضغط، يتم استدعاء <code>setCount</code> مما يسبب تحديث الشاشة.</p>
            </div>
          </div>

          <div class="ce-examples-box">
            <h4 class="ce-examples-title">📍 مثالان في كودك:</h4>
            <ul class="ce-examples-list">
              <li class="ce-example-item">
                <span class="ce-badge ce-badge-blue">Local State</span>
                <span class="ce-example-text">في <code>TaskForm</code>: <code>const [title, setTitle] = useState('');</code> <br> تستخدم للتحكم في نص الإدخال مؤقتاً داخل الفورم فقط.</span>
              </li>
              <li class="ce-example-item">
                <span class="ce-badge ce-badge-purple">Shared State</span>
                <span class="ce-example-text">في <code>HomePage</code>: <code>const [tasks, setTasks] = useState&lt;Task[]&gt;(...);</code> <br> القائمة الرئيسية للمهام التي تؤثر على التطبيق بالكامل.</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    'useeffect': {
      title: '5. useEffect Hook',
      content: `
        <div class="ce-space-y-6">
          <div class="ce-card">
            <h3 class="ce-section-title">🔹 الآثار الجانبية (Side Effects)</h3>
            <p class="ce-text-primary ce-mb-4">
              نستخدم <strong>useEffect</strong> لتنفيذ كود <em>خارج</em> نطاق رسم الواجهة، مثل:
              <br>- جلب بيانات من API.
              <br>- التعامل مع LocalStorage.
              <br>- تعديل عنوان الصفحة (document.title).
            </p>
          </div>

          <div class="ce-effect-grid">
            <div class="ce-card-yellow">
              <h4 class="ce-effect-title-yellow">Dependency Array [ ]</h4>
              <p class="ce-effect-text">هي القائمة الثانية في useEffect. تحدد متى يعمل الكود:</p>
              <ul class="ce-effect-list">
                <li><code>[]</code>: يعمل مرة واحدة فقط عند التحميل (Mount).</li>
                <li><code>[tasks]</code>: يعمل كلما تغيرت قيمة tasks.</li>
                <li>بدون مصفوفة: يعمل مع كل render (خطر ⚠️).</li>
              </ul>
            </div>
            <div class="ce-card-green">
              <h4 class="ce-effect-title-green">📍 في كودك</h4>
              <p class="ce-effect-text">استخدمته لمراقبة <code>tasks</code>.</p>
              <p class="ce-effect-note">"كلما تغيرت قائمة المهام (إضافة/حذف/تعديل)، قم بحفظ القائمة الجديدة في LocalStorage فوراً."</p>
            </div>
          </div>

          <div class="ce-code-block">
<span class="ce-code-comment">// Sync with LocalStorage</span>
useEffect(() => {
    <span class="ce-code-comment">// Side Effect logic</span>
    localStorage.setItem(<span class="ce-code-green">'tasks'</span>, JSON.stringify(tasks));
}, [<span class="ce-code-blue-light">tasks</span>]); <span class="ce-code-comment">// <-- Dependency Array</span>
          </div>
        </div>
      `
    },
    'lifting-state': {
      title: '6. Lifting State Up (رفع الحالة)',
      content: `
        <div class="ce-space-y-6">
          <div class="ce-card">
            <h3 class="ce-section-title">🔹 مشكلة مشاركة البيانات</h3>
            <p class="ce-text-primary ce-mb-4">
              في React، البيانات تنتقل في اتجاه واحد (من الأب للابن).
              ماذا لو أردنا أن يضيف <code>TaskForm</code> مهمة تظهر في <code>TaskList</code>؟
              هما أشقاء (Siblings) ولا يمكنهم تمرير البيانات لبعضهم مباشرة.
            </p>
            <p class="ce-text-bold">✅ الحل: نرفع الحالة (Lift State) إلى أقرب أب مشترك (HomePage).</p>
          </div>

          <div class="ce-lifting-diagram">
            <div class="ce-lifting-parent">
              <div class="ce-lifting-parent-label">HomePage</div>
              <div class="ce-lifting-state">State: Tasks [ ]</div>
            </div>
            
            <div class="ce-lifting-children">
              <div class="ce-lifting-child ce-lifting-child-green">
                <div class="ce-lifting-child-label">TaskForm</div>
                <div class="ce-lifting-child-text">يستدعي دالة<br>onAddTask(new) ⬆️</div>
              </div>
              <div class="ce-lifting-child ce-lifting-child-orange">
                <div class="ce-lifting-child-label">TaskList</div>
                <div class="ce-lifting-child-text">يستقبل بيانات<br>tasks prop ⬇️</div>
              </div>
            </div>
          </div>

          <div class="ce-info-box">
            في كودك، الدوال <code>handleAddTask</code> و <code>handleDeleteTask</code> موجودة في <strong>HomePage</strong> ويتم تمريرها للأبناء ليستخدموها في التحكم بالبيانات الموجودة في الأب.
          </div>
        </div>
      `
    },
    'list-rendering': {
      title: '7. List Rendering',
      content: `
        <div class="ce-space-y-6">
          <div class="ce-card">
            <h3 class="ce-section-title">🔹 تحويل المصفوفات إلى واجهة (Map)</h3>
            <p class="ce-text-primary ce-mb-4">
              لعرض قائمة من البيانات، نستخدم دالة <code>.map()</code> في JavaScript لتحويل كل عنصر في مصفوفة البيانات إلى عنصر JSX.
            </p>
          </div>

          <div class="ce-card-red">
            <h3 class="ce-section-title-red">🔑 أهمية الـ Key</h3>
            <p class="ce-text-secondary ce-mb-2">
              لاحظ السطر: <code>key={task.id}</code>. هذا ضروري جداً!
            </p>
            <p class="ce-text-small-gray">
              يساعد React على تتبع العناصر التي تغيرت، أضيفت، أو حذفت. بدونه، ستضطر React لإعادة رسم القائمة كاملة عند أي تغيير بسيط، مما يضعف الأداء ويسبب مشاكل في المدخلات.
              <br><strong>قاعدة:</strong> استخدم دائماً معرف فريد (ID) وليس رقم الـ Index.
            </p>
          </div>

          <div class="ce-code-block">
{tasks.map((task) => (
    &lt;<span class="ce-code-yellow">TaskItem</span>
        <span class="ce-code-blue-light">key</span>={task.id}  <span class="ce-code-comment">// ⚠️ هام جداً</span>
        <span class="ce-code-blue-light">task</span>={task}
        <span class="ce-code-blue-light">onDelete</span>={onDeleteTask}
        <span class="ce-code-blue-light">onToggle</span>={onToggleTask}
    /&gt;
))}
          </div>
        </div>
      `
    },
    'conditional-rendering': {
      title: '8. Conditional Rendering',
      content: `
        <div class="ce-space-y-6">
          <div class="ce-card">
            <h3 class="ce-section-title">🔹 العرض الشرطي</h3>
            <p class="ce-text-primary ce-mb-4">
              مثل <code>if-else</code> في البرمجة، ولكن داخل JSX للتحكم فيما يظهر للمستخدم.
            </p>
          </div>

          <div class="ce-conditional-grid">
            <div class="ce-conditional-card">
              <h4 class="ce-conditional-title">الطريقة 1: الإرجاع المبكر (Early Return)</h4>
              <p class="ce-conditional-label">في <code>TaskList.tsx</code></p>
              <code class="ce-conditional-code">
                if (tasks.length === 0) {<br>
                &nbsp;&nbsp;return &lt;p&gt;لا توجد مهمات&lt;/p&gt;;<br>
                }
              </code>
              <p class="ce-conditional-text">إذا تحقق الشرط، نوقف المكون ونعرض الرسالة فقط.</p>
            </div>
            <div class="ce-conditional-card">
              <h4 class="ce-conditional-title">الطريقة 2: المعامل الثلاثي (Ternary)</h4>
              <p class="ce-conditional-label">في <code>TaskItem.tsx</code></p>
              <code class="ce-conditional-code">
                className={task.completed ? 'completed' : ''}
              </code>
              <p class="ce-conditional-text">اختيار CSS Class بناءً على حالة الإنجاز.</p>
            </div>
          </div>
        </div>
      `
    },
    'localstorage': {
      title: '9. LocalStorage',
      content: `
        <div class="ce-space-y-6">
          <div class="ce-card">
            <h3 class="ce-section-title">🔹 حفظ البيانات محلياً</h3>
            <p class="ce-text-primary ce-mb-4">
              الـ <strong>LocalStorage</strong> هي قاعدة بيانات صغيرة في المتصفح. تسمح ببقاء البيانات حتى بعد إغلاق الصفحة.
              تتعامل فقط مع <strong>النصوص (Strings)</strong>.
            </p>
          </div>

          <div class="ce-card-teal">
            <h3 class="ce-section-title-teal">📍 Lazy Initialization</h3>
            <p class="ce-text-secondary ce-mb-3">
              في <code>HomePage</code>، لم نضع القيمة الأولية مصفوفة فارغة <code>[]</code> مباشرة. بل مررنا <strong>دالة</strong> لـ <code>useState</code>.
            </p>
            <p class="ce-lazy-reason">
              <strong>السبب:</strong> قراءة LocalStorage عملية "بطيئة" نسبياً. تمرير دالة يضمن أن React ستنفذ هذا الكود <strong>مرة واحدة فقط</strong> عند بداية التطبيق، وليس مع كل إعادة رسم (Render)، مما يحسن الأداء.
            </p>
          </div>

          <div class="ce-code-block">
<span class="ce-code-comment">// التحويل من نص إلى كائن (للقراءة)</span>
JSON.parse(savedTasks)

<span class="ce-code-comment">// التحويل من كائن إلى نص (للحفظ)</span>
JSON.stringify(tasks)
          </div>
        </div>
      `
    }
  };

  const loadSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const updateDemo = (change: number) => {
    setDemoCount(prev => prev + change);
  };

  useEffect(() => {
    // Attach event listeners for demo buttons after content is rendered
    if (activeSection === 'usestate') {
      const minusBtn = document.querySelector('.ce-demo-btn-minus');
      const plusBtn = document.querySelector('.ce-demo-btn-plus');

      if (minusBtn && plusBtn) {
        const handleMinus = () => updateDemo(-1);
        const handlePlus = () => updateDemo(1);

        minusBtn.addEventListener('click', handleMinus);
        plusBtn.addEventListener('click', handlePlus);

        return () => {
          minusBtn.removeEventListener('click', handleMinus);
          plusBtn.removeEventListener('click', handlePlus);
        };
      }
    }
  }, [activeSection, demoCount]);

  return (
    <div className="ce-container">

      {/* Mobile Header */}
      <header className="ce-mobile-header">

        <h1 className="ce-mobile-title">Task Manager التعليمي</h1>
        <button
          className="ce-menu-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰ القائمة
        </button>
      </header>

      {/* Sidebar Navigation */}

      <nav className={`ce-sidebar ${isSidebarOpen ? 'ce-sidebar-open' : ''}`}>

        <div className="ce-sidebar-header">
          <Link to="/" className="nav-link">الرئيسية</Link>
          <h1 className="ce-sidebar-title">Task Manager</h1>
          <p className="ce-sidebar-subtitle">دليل المفاهيم النظرية (React + TS)</p>
        </div>

        <div className="ce-nav-list">
          <p className="ce-nav-category">المفاهيم الأساسية</p>

          <button
            onClick={() => loadSection('functional-components')}
            className={`ce-nav-item ${activeSection === 'functional-components' ? 'ce-nav-item-active' : ''}`}
          >
            1. Functional Components
          </button>

          <button
            onClick={() => loadSection('props')}
            className={`ce-nav-item ${activeSection === 'props' ? 'ce-nav-item-active' : ''}`}
          >
            2. Props & Interfaces
          </button>

          <button
            onClick={() => loadSection('types')}
            className={`ce-nav-item ${activeSection === 'types' ? 'ce-nav-item-active' : ''}`}
          >
            3. TypeScript Types
          </button>

          <button
            onClick={() => loadSection('usestate')}
            className={`ce-nav-item ${activeSection === 'usestate' ? 'ce-nav-item-active' : ''}`}
          >
            4. useState Hook
          </button>

          <button
            onClick={() => loadSection('useeffect')}
            className={`ce-nav-item ${activeSection === 'useeffect' ? 'ce-nav-item-active' : ''}`}
          >
            5. useEffect Hook
          </button>

          <button
            onClick={() => loadSection('lifting-state')}
            className={`ce-nav-item ${activeSection === 'lifting-state' ? 'ce-nav-item-active' : ''}`}
          >
            6. Lifting State Up
          </button>

          <button
            onClick={() => loadSection('list-rendering')}
            className={`ce-nav-item ${activeSection === 'list-rendering' ? 'ce-nav-item-active' : ''}`}
          >
            7. List Rendering
          </button>

          <button
            onClick={() => loadSection('conditional-rendering')}
            className={`ce-nav-item ${activeSection === 'conditional-rendering' ? 'ce-nav-item-active' : ''}`}
          >
            8. Conditional Rendering
          </button>

          <button
            onClick={() => loadSection('localstorage')}
            className={`ce-nav-item ${activeSection === 'localstorage' ? 'ce-nav-item-active' : ''}`}
          >
            9. LocalStorage
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="ce-main">
        <div className="ce-content">
          <h2 className="ce-main-title">{sections[activeSection].title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: sections[activeSection].content }}
          />
        </div>
      </main>
    </div>
  );
};

export default CodeExplainGemini;