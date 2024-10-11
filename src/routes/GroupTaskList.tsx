import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { setTasks } from "@/redux/TaskSlice";
import { Appbar } from "../components/Appbar";
import { AddTask } from "../components/AddTask";
import { TaskCard } from "../components/TaskCard";
import { Skeleton } from "@/components/ui/skeleton"
import { useSearchParams } from "react-router-dom";

export const GroupTaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state : RootState) => state.tasks.tasks);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    const UserId = useSelector((state : RootState) => state.auth.user)?.uid;
    
    useEffect( () => {
        const iddd = searchParams.get("id");
        console.log(iddd);
        setLoading(true);
        const fetchTasks = async () => {
            const querySnapshot = await getDocs(collection(db, `Users/${UserId}/tasks`));
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
            <h2 className="text-3xl px-10 pt-12 font-black text-pink-400"> Task List </h2>
                <div className="grid grid-cols-12 p-12 pt-6">

                    { (loading ? <>
                        <Skeleton className="col-span-4 min-h-24 rounded-full" />
                        <Skeleton className="col-span-4 min-h-24 rounded-full" />
                        <Skeleton className="col-span-4 min-h-24 rounded-full" />
                    </>
                                
                     : tasks.length === 0 ? "EMPTY" : tasks.map((task) => {
                        if(!task.title){
                            return null;
                        }
                        else{
                            return <TaskCard title={task.title} id={task.id} key={task.id}/>
                        }
                     
                    }))}

                </div>
                
            <AddTask userId={UserId? UserId : ""}/>
        </div>
    )
    
}