// import { auth } from "@/firebase/firebaseConfig";
// import { setUser } from "@/redux/AuthSlice";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// interface userCredentials {
//     email : string,
//     password : string
// }

// export default  async function HandleSignUp({email, password} : userCredentials) {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
    
//     try {
//         const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
//         dispatch(setUser(userCredentials.user));
//     } catch (err) {
//         console.log(err);
//         window.alert(err);
//     }

//     navigate("/tasks");
// }