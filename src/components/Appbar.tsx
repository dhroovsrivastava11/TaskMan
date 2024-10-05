import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Appbar = () => {
    return (
        <div className="w-screen bg-pink-400 h-14 flex items-center justify-between px-10">
            <div className="text-3xl font-bold text-white tracking-wide">
                TaskMan
            </div>
            <div className="flex">
                <div>
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/102090914?v=4" />
                        <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                </div>
                
            </div>
        </div>
    );
}