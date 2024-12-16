import { Todo } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Circle } from 'lucide-react';

interface TaskActionsProps {
  todo: Todo;
  onBack: () => void;
  onToggle: () => void;
}

export function TaskActions({ todo, onBack, onToggle }: TaskActionsProps) {
  return (
    <div className="todo-details__actions">
      <Button variant="outline" onClick={onBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <Button onClick={onToggle}>
        {todo.completed ? (
          <>
            <Circle className="mr-2 h-4 w-4" />
            Mark as Pending
          </>
        ) : (
          <>
            <CheckCircle className="mr-2 h-4 w-4" />
            Mark as Completed
          </>
        )}
      </Button>
    </div>
  );
}