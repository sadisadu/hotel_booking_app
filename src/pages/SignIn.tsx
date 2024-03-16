import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export type SignInFormData = {
    
    email: string;
    password: string;
   
}
const SignIn =() => {
    const {register,formState:{errors},
    handleSubmit,

    } =useForm<SignInFormData>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return(
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>

            <h2 className="text-3xl font-bold">Sign In</h2>
            <label className="text-gray-700 text-sm font-bold flex-1" >
                    Email 
                    <input
                    type="email"
                    className="border rounded w-full py-1 px-2 front-normal"{...register("email", { required: "this field is required"})}></input>
                     {errors.email &&(
                        <span className="text-red-500">{errors.email.message}</span>
                    )}
                </label>

                <label className="text-gray-700 text-sm font-bold flex-1" >
                    Password 
                    <input
                    type="password"
                    className="border rounded w-full py-1 px-2 front-normal"{...register("password", { required: "this field is required",
                    minLength:{
                        value:8,
                        message:"password must be 8 charecters"
                    },
                    })}></input>
                     {errors.password &&(
                        <span className="text-red-500">{errors.password.message}</span>
                    )}
                </label>

                <span className="flex items-center justify-between">
                    <span className="text-sm">
                     Not Registered? <Link className="underline" to= "/register">Create account here</Link>   
                    </span>
                <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">
                    Log in
                </button>
            </span>
       
        </form>
    );
};
export default SignIn;