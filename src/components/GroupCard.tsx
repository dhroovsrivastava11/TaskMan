import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"

interface groupCardProps {
    id: String,
    name: String | null
}

export const GroupCard = ({ id, name }: groupCardProps) => {
    return (
        <Link className="col-span-4 p-5 hover: cursor-pointer" to={"/grouptasks?id="+id}>
            <Card>
                <CardHeader className="bg-pink-400 rounded-lg text-slate-50 text-xl p-10s">
                    <CardTitle className="">{name}</CardTitle>
                </CardHeader>
            </Card>
        </Link>
    )
}