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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Appbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [accountToggle, setAccountToggle] = useState(false);

    useEffect(() => {
        if(accountToggle)
            navigate("/profile");
        setAccountToggle(false);
    },[accountToggle]);

    const handleLogout = async () => {
        dispatch(clearUser());
        dispatch(clearTasks())
        navigate("/");
    }

    return (
        <div>
            <div className="w-screen bg-pink-400 h-14 flex items-center justify-between px-10">
                <Link className="text-3xl font-bold text-white tracking-wide hover:cursor-pointer" to={"/tasks"}>
                    TaskMan
                </Link>
                <div className="flex">
                    <Link className="flex justify-center items-center px-10 text-2xl text-pink-400 font-semibold border-4 rounded-full bg-slate-50 mr-4 hover:cursor-pointer" to={"/groups"}> 
                        Groups
                    </Link>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarImage src="https://avatars.githubusercontent.com/u/102090914?v=4" />
                                    <AvatarFallback>User</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel className="hover: cursor-pointer" onClick={() =>
                                    setAccountToggle(!accountToggle)
                                }>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className=" hover: cursor-pointer " onClick={handleLogout}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            
        </div>

    );
}