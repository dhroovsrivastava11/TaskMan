import { Checkbox } from "@/components/ui/checkbox"

import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useDispatch } from "react-redux"
import { removeTask } from "@/redux/TaskSlice"
import { db } from "@/firebase/firebaseConfig"
import { doc, deleteDoc} from "firebase/firestore"
import { useState } from "react"
import { removeGroupTask } from "@/redux/GroupTaskSlice"

interface TaskCardProps {
    title : string,
    id : string,
    userId? : string | null,
    groupId? : string | null
}

export const TaskCard = ({title, id,  userId, groupId } : TaskCardProps) => {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const handleRemove = async (id : string) => {
        try{
            if(userId){
                console.log(await deleteDoc(doc(db, `Users/${userId}/tasks`, id)))
                dispatch(removeTask(id));
            } else {
                console.log(await deleteDoc(doc(db, `Groups/${groupId}/tasks`, id)))
                dispatch(removeGroupTask(id));
            }
            
        }catch (err) {
            console.log(err);
        }
    }

    const handleCheckboxChange= () => {
        setChecked(!checked);
        handleRemove(id);
    }

    return (
        <div className="col-span-4 p-5">
            <Card>
                <CardHeader className="bg-pink-400 rounded-t-lg text-slate-50 text-xl">
                    <CardTitle className="truncate">{title}</CardTitle>
                </CardHeader>

                <CardFooter className="p-5">
                <div className="items-top flex space-x-2">
                    <Checkbox className="text-pink-400 bg-pink-400 border-0 " checked={checked} onCheckedChange={handleCheckboxChange}/>
                    <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-semibold text-pink-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Mark as done
                    </label>
                    </div>
                </div>
                </CardFooter>
            </Card>
        </div>
    )
}