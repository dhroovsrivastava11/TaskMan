import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { addTask } from "@/redux/TaskSlice";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { addGroupTask } from "@/redux/GroupTaskSlice";

interface addTaskParameters {
    userId? : string ,
    groupId? : string
}

export const AddTask = ({userId, groupId} : addTaskParameters ) => {

    const [taskTitle, setTaskTitle] = useState("");
    const dispatch = useDispatch();

    async function handleAddTask(){

        if(!taskTitle) return;
        if(userId){
            const docRef = await addDoc(collection(db, `Users`, `${userId}`, `tasks`), { title: taskTitle });
            dispatch(addTask({id: docRef.id, title: taskTitle}));
        }
        else {
            const docRef = await addDoc(collection(db, `Groups`, `${groupId}`, `tasks`), {title : taskTitle});
            dispatch(addGroupTask({id: docRef.id, title: taskTitle}));
        }
        
        
        setTaskTitle("");
    }

    return (
        <div>
            <Sheet>
            <SheetTrigger className="fixed bottom-7 right-10 bg-pink-400 h-14 w-14 rounded-full flex items-center justify-center text-3xl pb-2 text-slate-50">+</SheetTrigger>
            <SheetContent className="h-44 flex flex-col justify-between" side={"bottom"}>
                <SheetHeader>
                <SheetTitle>
                        <Input type="text" value={taskTitle} className="max-w-xl mb-10" onChange={(e) => {
                        setTaskTitle(e.target.value);
                        }} placeholder={userId ? "Task title" : "Group Task Title"} />
                </SheetTitle>
                <SheetDescription>
                        <Button className="bg-pink-400 font-semibold" onClick={handleAddTask}>Submit Task</Button>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
        </div>
    )
};

