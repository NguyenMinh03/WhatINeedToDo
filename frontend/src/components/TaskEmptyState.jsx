import React from 'react'
import {Card} from "./ui/card"
import { Circle } from 'lucide-react'
const TaskEmptyState = ({filter}) => {
  return (
    
    <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
    <div className='space-y-3'>
    <Circle className='mx-auto size-12 text-muted-foreground'/>
    <div>
        <h3 className='font-medium text-foreground'>
        {
            filter === "active" ?
            "Not any task pending":
            filter === "completed" ?
            "Not any task completed": "Not any task"
        }
        </h3>
        <p className='text-sm text-muted-foreground'>
            {filter === "all"
              ? "Add the first task to do"
              : `Change to "all" to check other task ${
                  filter === "active" ? "completed" : "pending."
                }`}
        </p>
        </div>
    </div>
    </Card>
  )
}

export default TaskEmptyState
