// import Lottie from "lottie-react";
// import animation from "../../assets/signUp_animation.json";
// <Lottie animationData={animation} loop={true} />
import { useForm } from "react-hook-form";
import styles from "./SignUp.module.css";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        console.log(data);
    }
    return (
        <section className="flex justify-center items-center bg-white text-black dark:bg-[#0f172a] dark:text-white py-20">
            <section>
                <article className={`px-5 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20 shadow shadow-gray-900 dark:shadow-gray-500`}>
                    <form onSubmit={handleSubmit(handleSignUp)} >
                        <section className="flex flex-col sm:flex-row items-center gap-5 lg:gap-10 w-full">
                            <article className="w-full sm:w-1/2 flex flex-col gap-5 lg:gap-10">
                                {/* First Name Field */}
                                <div className={`relative bg-white text-black dark:bg-[#0f172a] dark:text-white`}>
                                    <input type="text" className={styles.inputField}
                                        {...register('firstName', { required: true })}
                                    />
                                    {
                                        errors.firstName && <span className="absolute -top-2 
                                        left-[116px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>First Name</span>
                                </div>
                                {/* Email Field */}
                                <div className={`relative bg-white text-black dark:bg-[#0f172a] dark:text-white`}>
                                    <input type="text" className={styles.inputField}
                                        {...register('email', { required: true })}
                                    />
                                    {
                                        errors.email && <span className="absolute -top-2 
                                        left-[72px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Email</span>
                                </div>
                            </article>
                            <article className="w-full sm:w-1/2 flex flex-col gap-5 lg:gap-10">
                                {/* Last name Field */}
                                <div className={`relative bg-white text-black dark:bg-[#0f172a] dark:text-white`}>
                                    <input type="text" className={styles.inputField}
                                        {...register('lastName', { required: true })}
                                    />
                                    {
                                        errors.lastName && <span className="absolute -top-2 
                                        left-[112px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Last Name</span>
                                </div>
                                {/* Phone Field */}
                                <div className={`relative bg-white text-black dark:bg-[#0f172a] dark:text-white`}>
                                    <input type="number" className={styles.inputField}
                                        {...register('phone', { required: true })}
                                    />
                                    {
                                        errors.phone && <span className="absolute -top-2 
                                        left-[78px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Phone</span>
                                </div>
                            </article>
                        </section>
                        <button type="submit" className="px-5 py-2 bg-inherit text-inherit rounded border border-gray-500 mt-10 w-full">Submit</button>
                    </form>
                </article>
            </section>
        </section>
    );
};

export default SignUp;