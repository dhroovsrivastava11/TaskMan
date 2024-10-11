import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { Appbar } from "../components/Appbar";
import { AddTask } from "../components/AddTask";
import { TaskCard } from "../components/TaskCard";
import { Skeleton } from "@/components/ui/skeleton"
import { useSearchParams } from "react-router-dom";
import { setGroupTasks } from "@/redux/GroupTaskSlice";

export const GroupTaskList = () => {
    const dispatch = useDispatch();
    const groupTasks = useSelector((state : RootState) => state.groupTasks.tasks);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    interface groupId {
        id : string | null
    }

    const group : groupId = {
        id : null
    }
    
    useEffect( () => {
        group.id = searchParams.get("id");
        setLoading(true);
        const fetchTasks = async () => {
            const querySnapshot = await getDocs(collection(db, `Groups/${group.id}/tasks`));
            setLoading(false);
            const groupTasksData = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, title: data.title };
            });
            dispatch(setGroupTasks(groupTasksData));
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
                                
                     : groupTasks.length === 0 ? "EMPTY" : groupTasks.map((task) => {
                        if(!task.title){
                            return null;
                        }
                        else{
                            return <TaskCard title={task.title} id={task.id} groupId={group.id} key={task.id}/>
                        }
                     
                    }))}
                </div>
            <AddTask groupId={group.id} />
        </div>
    )
    
}