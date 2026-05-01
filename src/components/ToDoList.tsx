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

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    passwordConfirm: string;
    extraError?:string;
}

function ToDoList() {
    const { register, handleSubmit, formState:{errors}, setError} = useForm<IForm>({
        defaultValues: {
            email: "@naver.com"
        }
    });
    const onValid = (data: IForm) => {
        if(data.password !== data.passwordConfirm) {
            setError("passwordConfirm", {message: "password are not the same"}, {shouldFocus:true});
        }
        //setError("extraError", {message: "Server offline."})
        console.log(data);
    }

    console.log(errors);

    return (
        <div>
            <form style={{display:"flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("email", {
                        required: "Email is required",
                        pattern: {
                        value:  /^[A-Za-z0-9._%+-]+@naver.com/,
                        message: "Only naver.com"
                    }})} placeholder="Email"/>
                <span>{errors?.email?.message}</span>
                <input {...register("firstName", {required: true})} placeholder="First Name"/>
                <span>{errors?.firstName?.message}</span>
                <input {...register("lastName", {required: true, minLength: 5, validate: (value) => value.includes("nico") ? "no nico allowed" : true})} placeholder="Last Name"/>
                <span>{errors?.lastName?.message}</span>
                <input {...register("username", {required: true})} placeholder="username"/>
                <span>{errors?.username?.message}</span>
                <input {...register("password", {required: true, minLength: {value: 5, message: "Your password is too short"}})} placeholder="password"/>
                <span>{errors?.password?.message}</span>
                <input {...register("passwordConfirm", {required: "Password is required"})} placeholder="password confirm"/>
                <span>{errors?.passwordConfirm?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    )
}

export default ToDoList;