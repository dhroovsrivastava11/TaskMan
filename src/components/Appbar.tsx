import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { clearUser } from "@/redux/AuthSlice";
import { clearTasks } from "@/redux/TaskSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

export const Appbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(clearUser());
        dispatch(clearTasks())
        navigate("/");
    }

    return (
        <div className="w-screen bg-pink-400 h-14 flex items-center justify-between px-10">
            <div className="text-3xl font-bold text-white tracking-wide">
                TaskMan
            </div>
            <div className="flex">
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/102090914?v=4" />
                            <AvatarFallback>User</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>

            </div>
        </div>
    );
}