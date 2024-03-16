import { useForm } from "react-hook-form";

type RegisterFormData = {
    firstName: string,
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {

    const {register,watch,handleSubmit,
    formState:{errors},
    } = useForm<RegisterFormData>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return(
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">Create Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-gray-700 text-sm font-bold flex-1" >
                    First Name 
                    <input className="border rounded w-full py-1 px-2 front-normal"{...register("firstName", { required: "this field is required"})}>
                    </input>
                    {errors.firstName && (
                        <span className="text-red-500">{errors.firstName.message}</span>
                    )}
                </label>

                <label className="text-gray-700 text-sm font-bold flex-1" >
                    Last Name 
                    <input className="border rounded w-full py-1 px-2 front-normal"{...register("lastName", { required: "this field is required"})}></input>
                    {errors.lastName && (
                        <span className="text-red-500">{errors.lastName.message}</span>
                    )}
                </label>
                </div>

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
                <label className="text-gray-700 text-sm font-bold flex-1" >
                    Confirm password 
                    <input
                    type="password"
                    className="border rounded w-full py-1 px-2 front-normal"{...register("confirmPassword", { 
                   
                    validate:(val)=>{
                        if(!val){
                            return "this field is required"
                        } else if (watch("password")!==val){
                           return "Your passwords do not match" ;
                        }
                    },
                   
                    })}></input>
                     {errors.confirmPassword &&(
                        <span className="text-red-500">{errors.confirmPassword.message}</span>
                    )}
                </label>
            <span>
                <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">
                    Create Account
                </button>
            </span>
        </form>
    );
};
export default Register;