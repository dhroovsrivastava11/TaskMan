import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { addGroup } from "@/redux/GroupSlice";

export const AddGroup = () => {

    const [groupName, setgroupName] = useState("");
    const dispatch = useDispatch();

    async function handleAddTask(){
        if(!groupName) return;
        const docRef = await addDoc(collection(db, `Groups`), { name: groupName });
        dispatch(addGroup({id: docRef.id, name: groupName}));
        setgroupName("");
    }

    return (<div>
        <div>
            <Sheet>
            <SheetTrigger className="fixed bottom-7 right-10 bg-pink-400 h-14 w-14 rounded-full flex items-center justify-center text-3xl pb-2 text-slate-50">+</SheetTrigger>
            <SheetContent className="h-44 flex flex-col justify-between" side={"bottom"}>
                <SheetHeader>
                <SheetTitle>
                        <Input type="text" value={groupName} className="max-w-xl mb-10" onChange={(e) => {
                        setgroupName(e.target.value);
                        }} placeholder="Group Name" />
                </SheetTitle>
                <SheetDescription>
                        <Button className="bg-pink-400 font-semibold" onClick={handleAddTask}>Submit Group</Button>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
        </div>
    </div>)
}