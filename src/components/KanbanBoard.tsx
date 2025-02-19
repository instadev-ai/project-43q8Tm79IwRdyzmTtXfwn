import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';

export interface Task {
  id: string;
  content: string;
}

interface BoardData {
  [key: string]: {
    title: string;
    tasks: Task[];
  };
}

const KanbanBoard = () => {
  const [boards, setBoards] = useState<BoardData>({
    todo: {
      title: 'To Do',
      tasks: [
        { id: '1', content: 'Create project structure' },
        { id: '2', content: 'Implement drag and drop' },
      ],
    },
    inProgress: {
      title: 'In Progress',
      tasks: [
        { id: '3', content: 'Design UI components' },
      ],
    },
    done: {
      title: 'Done',
      tasks: [
        { id: '4', content: 'Project setup' },
      ],
    },
  });

  const moveTask = (taskId: string, sourceColumn: string, targetColumn: string) => {
    setBoards(prev => {
      const newBoards = { ...prev };
      const task = newBoards[sourceColumn].tasks.find(t => t.id === taskId);
      
      if (task) {
        newBoards[sourceColumn].tasks = newBoards[sourceColumn].tasks.filter(t => t.id !== taskId);
        newBoards[targetColumn].tasks.push(task);
      }
      
      return newBoards;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Tasks</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(boards).map(([columnId, column]) => (
            <Column
              key={columnId}
              id={columnId}
              title={column.title}
              tasks={column.tasks}
              onMoveTask={moveTask}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;