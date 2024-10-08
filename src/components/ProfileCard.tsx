import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

export const ProfileCard = () => {

    const user = useSelector((state : RootState) => state.auth.user);

    return (
        <div className="flex items-center justify-center h-screen">
            <Card>
            <CardHeader className="bg-pink-400 rounded-t-lg text-slate-50">
                <CardTitle className="text-xl font-bold">Email : {user?.email}</CardTitle>
                <CardDescription className="text-slate-200">Name : {user?.displayName}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Phone numba : {user?.phoneNumber}</p>
            </CardContent>
        </Card>
        </div>
        
    )
}