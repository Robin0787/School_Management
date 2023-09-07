import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn";
import { providerContext } from "../../Provider/Provider";
import styles from "./SignIn.module.css";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false);
    const [showEyeIcon, setShowEyeIcon] = useState(false);
    const {signInUser} = useContext(providerContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const handleSignUp = (data) => {
        const {email, password} = data;
        signInUser(email, password)
        .then(() => {
            navigate(from);
        }).catch((err) => {toast.error(err.message.slice(22,-2).replace('-', ' '))});
    }

    function handleEyeIcon(pass) {
        if (pass.length < 1) {
            setShowEyeIcon(false);
        }
        else {
            setShowEyeIcon(true);
        }
    }
    return (
        <section className="flex justify-center items-center bg-white text-black dark:bg-[#0f172a] dark:text-white py-20">
            <section className="bg-[#0f172a] text-white  shadow shadow-gray-400 dark:shadow-gray-500 rounded ">
                <article className={`px-5 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20`}>
                    <h1
                        className="text-gray-200 text-2xl md:text-3xl text-center tracking-[2px] uppercase md:whitespace-nowrap pb-10 md:pb-16">SignIn Form</h1>
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
                                    <input type={showPass ? 'text' : "password"} autoComplete="off" className={styles.inputField}
                                        {...register('password', { required: true, onChange: (e) => {handleEyeIcon(e.target.value)} })}
                                    />
                                    {
                                        errors.password && <span className="absolute -top-2 
                                        left-[107px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Password</span>
                                    {
                                        showEyeIcon &&
                                        <div className="absolute right-4 top-[15px] text-gray-300">
                                            {
                                                showPass ?
                                                    <FaEye
                                                        onClick={() => { setShowPass((prev) => !prev) }}
                                                        size={20}
                                                        className="cursor-pointer" />
                                                    :
                                                    <FaEyeSlash
                                                        onClick={() => { setShowPass((prev) => !prev) }}
                                                        size={20}
                                                        className="cursor-pointer" />
                                            }
                                        </div>
                                    }
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