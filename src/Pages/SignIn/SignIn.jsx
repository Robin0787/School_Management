import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn";
import { providerContext } from "../../Provider/Provider";
import banner from "../../assets/SignIn.jpg";
import styles from "./SignIn.module.css";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false);
    const [showEyeIcon, setShowEyeIcon] = useState(false);
    const { signInUser, setUserBannerText } = useContext(providerContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const handleSignUp = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(() => {
                navigate(from);
            }).catch((err) => { toast.error(err.message.slice(22, -2).replace('-', ' ')) });
    }

    function handleEyeIcon(pass) {
        if (pass.length < 1) {
            setShowEyeIcon(false);
        }
        else {
            setShowEyeIcon(true);
        }
    }
    useEffect(() => {
        setUserBannerText('Sign In Dear!');
    }, [setUserBannerText]);
    
    return (
        <section className="flex justify-center items-center bg-white text-black dark:bg-[#0f172a] dark:text-white py-20 ">
            <section className="bg-[#0f172a] text-white  shadow shadow-gray-400 dark:shadow-gray-500 rounded flex flex-col md:flex-row gap-10 md:gap-0 lg:gap-10 items-center w-[95%] md:w-4/5">
                <article className="w-full md:w-1/2">
                    <img src={banner} alt="" className="h-full w-full object-cover rounded-t md:rounded-l md:rounded-tr-none" />
                </article>
                <article className="w-full md:w-1/2 flex justify-center items-center">
                    <article className={`px-3 sm:px-10 lg:px-10 w-full`}>
                        <form onSubmit={handleSubmit(handleSignUp)} className="py-5 space-y-5 lg:space-y-10">
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
                                        {...register('password', { required: true, onChange: (e) => { handleEyeIcon(e.target.value) } })}
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
                            <div className={`text-white`}>
                                <SubmitBtn text={'Sign In'} />
                                <p className="text-center mx-auto text-sm mt-3">Don't have an account? <Link to={'/user/signUp'} className="text-green-500">Sign Up</Link></p>
                            </div>
                        </form>
                    </article>
                </article>
            </section>
        </section>
    );
};

export default SignIn;