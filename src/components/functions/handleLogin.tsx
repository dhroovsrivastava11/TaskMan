// import { auth } from "@/firebase/firebaseConfig";
// import { setUser } from "@/redux/AuthSlice";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// interface userCredentials {
//     email : string,
//     password : string
// }

// export default  async function HandleLogin({email, password} : userCredentials) {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     try {
//         const userCredentials = await signInWithEmailAndPassword(auth, email, password);
//         dispatch(setUser(userCredentials.user));
//         console.log(userCredentials);
//     } catch (err) {
//         console.log(err);
//     }

//     navigate("/tasks");
// }