import { useDrop } from 'react-dnd';
import Task from './Task';
import type { Task as TaskType } from './KanbanBoard';

interface ColumnProps {
  id: string;
  title: string;
  tasks: TaskType[];
  onMoveTask: (taskId: string, sourceColumn: string, targetColumn: string) => void;
}

const Column = ({ id, title, tasks, onMoveTask }: ColumnProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item: { id: string; sourceColumn: string }) => {
      if (item.sourceColumn !== id) {
        onMoveTask(item.id, item.sourceColumn, id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`bg-white rounded-lg shadow-sm p-4 ${
        isOver ? 'ring-2 ring-indigo-400 ring-opacity-50' : ''
      }`}
    >
      <h2 className="font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="space-y-3">
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} content={task.content} sourceColumn={id} />
        ))}
      </div>
    </div>
  );
};

export default Column;