import { useState } from "react"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/AuthSlice";
 
export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();


    const handleLogin = async () => {

        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    
        dispatch(setUser(userCredentials.user));
        console.log(userCredentials);
    }

    const handleSignUp = async () => {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUser(userCredentials.user));
        console.log(userCredentials);
    }

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="grid grid-cols-12">
                <div className="col-span-1">

                </div>
                <div className="col-span-5 bg-pink-300 rounded-xl max-h-screen p-12 flex flex-col justify-center items-center">
                    <Input type="email" value={email} className="max-w-xs p-5 m-5" onChange={(e) => {
                        setEmail(e.target.value);
                    }} placeholder="Email" />
                    <Input type="password" value={password} className="max-w-xs p-5 m-5" onChange={(e) => {
                        setPassword(e.target.value);
                    }} placeholder="Password" />
                    <div>
                        <Button className="max-w-xs p-5 m-5" onClick={handleLogin}>Login</Button>
                        <Button className="max-w-xs p-5 m-5" onClick={handleSignUp}>Sign Up</Button>
                    </div>

                </div>
            </div>
        </div>


    )
}