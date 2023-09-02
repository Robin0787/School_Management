import { useForm } from "react-hook-form";
import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn";
import styles from "./SignIn.module.css";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        console.log(data);
    }
    return (
        <section className="flex justify-center items-center bg-white text-black dark:bg-[#0f172a] dark:text-white py-20">
            <section className="bg-[#0f172a] text-white  shadow shadow-gray-400 dark:shadow-gray-500 rounded ">
                <article className={`px-5 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20`}>
                    <form onSubmit={handleSubmit(handleSignUp)} >
                        <section className="flex  items-center gap-5 lg:gap-10 w-full">
                            <article className="w-full  flex flex-col gap-5 lg:gap-10">
                                {/* Email Field */}
                                <div className={`relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off" className={styles.inputField}
                                        {...register('email', { required: true })}
                                    />
                                    {
                                        errors.email && <span className="absolute -top-2 
                                        left-[72px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Email</span>
                                </div>
                                {/* Password Name Field */}
                                <div className={`relative bg-[#0f172a] text-white`}>
                                    <input type="password" autoComplete="off" className={styles.inputField}
                                        {...register('password', { required: true })}
                                    />
                                    {
                                        errors.password && <span className="absolute -top-2 
                                        left-[107px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Password</span>
                                </div>
                            </article>
                        </section>
                        <div className={`text-white`}>
                            <SubmitBtn text={'Sign In'} />
                        </div>
                    </form>
                </article>
            </section>
        </section>
    );
};

export default SignIn;