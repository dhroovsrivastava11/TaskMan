import { AddGroup } from "@/components/AddGroup";
import { Appbar } from "@/components/Appbar"
import { GroupCard } from "@/components/GroupCard";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/firebase/firebaseConfig";
import { setGroups } from "@/redux/GroupSlice";
import { RootState } from "@/redux/store";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"

export const Groups = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const groups = useSelector((state: RootState) => state.groups.groups);

    useEffect(() => {
        const fetchGroups = async () => {
            const groupSnapshot = await getDocs(collection(db, `Groups`));
            setLoading(false);
            const groupData = groupSnapshot.docs.map((group) => {
                return { id: group.id, name: group.data().name }
            })
            dispatch(setGroups(groupData));
        }
        fetchGroups();
    }, [dispatch]);

    return (<div>
        <Appbar />
        <h2 className="text-3xl px-10 pt-12 font-black text-pink-400"> Group List </h2>

        <div className="grid grid-cols-12 p-12 pt-6">

            {(loading ? <>
                <Skeleton className="col-span-4 min-h-24 rounded-full" />
                <Skeleton className="col-span-4 min-h-24 rounded-full" />
                <Skeleton className="col-span-4 min-h-24 rounded-full" />
            </>

                : groups.length === 0 ? "EMPTY" : groups.map((group) => {
                    if (!group.name) {
                        return null;
                    }
                    else {
                        return <GroupCard id={group.id} name={group.name}/>
                    }
                }))}

        </div>
        <AddGroup/>
    </div>)
}