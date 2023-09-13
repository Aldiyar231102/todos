import { create } from 'zustand';
 
export const useTodos = create((set) =>({
    tasks: [
        { id: 1, value: 'Eat lunch' },
        { id: 2, value: 'Go shopping' },
    ],

    addTask: (value) => set((state) => {
        const newTask = {id: new Date().valueOf(), value: value}
        return{ tasks: [...state.tasks, newTask] }
    }),

    deleteTask: (id) => ((state) => {
        const newTasks =  state.tasks.filter(task => task.id !== id)
        return { tasks: newTasks }
    }),
}));