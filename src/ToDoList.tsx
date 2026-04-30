import React from "react";
import {useForm} from "react-hook-form";

// function ToDoList() {
//
//     const [todo, setToDo] = useState("");
//     const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
//         const {currentTarget: {value}} = event;
//         setToDo(value);
//     };
//
//     const onSubmit = (event:React.SubmitEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(todo);
//     }
//
//     return <div>
//         <form onSubmit={onSubmit}>
//             <input onChange={onChange} value={todo} placeholder="Write to do"/>
//             <button>Add</button>
//         </form>
//     </div>
// }

function ToDoList() {
    const { register, watch } = useForm();
    console.log(watch());
    return (
        <div>
            <form>
                <input {...register("Email")} placeholder="Email"/>
                <input {...register("First Name")} placeholder="First Name"/>
                <input {...register("Last Name")} placeholder="Last Name"/>
                <input {...register("username")} placeholder="username"/>
                <input {...register("password")} placeholder="password"/>
                <input {...register("password confirm")} placeholder="password confirm"/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default ToDoList;