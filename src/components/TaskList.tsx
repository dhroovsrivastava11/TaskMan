import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { setTasks } from "@/redux/TaskSlice";
import { Appbar } from "./Appbar";
import { AddTask } from "./AddTask";
import { TaskCard } from "./TaskCard";


export const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state : RootState) => state.tasks.tasks);
    const [loading, setLoading] = useState(true);
    
    
    useEffect( () => {
        setLoading(true);
        const fetchTasks = async () => {
            const querySnapshot = await getDocs(collection(db, "tasks"));
            setLoading(false);
            const tasksData = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, title: data.title };
            });
            dispatch(setTasks(tasksData));
        };
        fetchTasks();
    }, [dispatch]);

    return (
        <div>
            <Appbar/>
            <h2> Task List </h2>
                <div className="grid grid-cols-12 p-12">

                    { (loading ? "LOADING" : tasks.length === 0 ? "EMPTY" : tasks.map((task) => {
                        if(!task.title){

                        }
                        else{
                            return <TaskCard title={task.title} id={task.id} key={task.id}/>
                        }
                     
                    }))}

                </div>
                
            <AddTask/>
        </div>
    )
    
}