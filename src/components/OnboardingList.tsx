import { useState } from 'react';
import { motion, Reorder } from "framer-motion";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const initialTodos: TodoItem[] = [
  { id: '1', text: 'Complete profile setup', completed: false },
  { id: '2', text: 'Set up 2FA authentication', completed: false },
  { id: '3', text: 'Review team guidelines', completed: false },
  { id: '4', text: 'Join team channels', completed: false },
  { id: '5', text: 'Schedule welcome call', completed: false },
];

const OnboardingList = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md p-6 mt-8"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Onboarding Tasks</h2>
      <Reorder.Group axis="y" values={todos} onReorder={setTodos} className="space-y-2">
        {todos.map((todo) => (
          <Reorder.Item
            key={todo.id}
            value={todo}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center gap-3 border border-gray-100"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className={`flex-1 ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                {todo.text}
              </span>
              <motion.div 
                className="text-gray-400"
                whileHover={{ scale: 1.1 }}
              >
                ⋮
              </motion.div>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </motion.div>
  );
};

export default OnboardingList;