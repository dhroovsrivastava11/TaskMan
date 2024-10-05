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
import { doc, deleteDoc } from "firebase/firestore"

interface TaskCardProps {
    title : string,
    id : string
}

export const TaskCard = ({title, id } : TaskCardProps) => {

    const dispatch = useDispatch();

    const handleRemove = async (id : string) => {
        await deleteDoc(doc(db, "tasks", id))
        dispatch(removeTask(id));
    }

    return (
        <div className="col-span-4 p-5">
            <Card>
                <CardHeader className="bg-pink-400 rounded-t-lg text-slate-50 text-xl">
                    <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardFooter className="p-5">
                <div className="items-top flex space-x-2">
                    <Checkbox onClick={ () => handleRemove(id) }/>
                    <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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