import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SubmitBtn from "../../../Components/SubmitBtn/SubmitBtn";
import styles from "../SignUp.module.css";


const InstructorSignUp = () => {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors, setFocus } = useForm();
    const [showPass, setShowPass] = useState(false);
    const [passError, setPassError] = useState('');
    const [showEyeIcon, setShowEyeIcon] = useState(false);


    const handleSignUp = (data) => {
        if (passError) {
            setFocus('password');
            return;
        }
        console.log(data);
    }

    function handlePassChange(e) {
        const pass = e.target.value;
        handleEyeIcon(pass);
        if (!/(?=.*[A-Z])/.test(pass)) {
            setPassError('Password must have an uppercase letter.');
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(pass)) {
            setPassError('Must contain two numbers.');

        }
        else if (!/(?=.*[@#$%!*?><+-])/.test(pass)) {
            setPassError('Must contain a special character.');

        }
        else if (pass.length < 6) {
            setPassError('Must contain minimum six characters.')

        }
        else {
            setPassError(false);
            clearErrors('password');
        }
    }

    function handleEyeIcon (pass) {
        if(pass.length < 1) {
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
                        className="text-gray-200 text-2xl md:text-3xl text-center tracking-[2px] uppercase md:whitespace-nowrap pb-10 md:pb-16">Instructor SignUp Form</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} >
                        <section className="flex flex-col sm:flex-row items-center gap-5 lg:gap-10 w-full">
                            <article className="w-full sm:w-1/2 flex flex-col gap-5 lg:gap-10">
                                {/* First Name Field */}
                                <div className={`relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off"
                                        className={styles.inputField}
                                        {...register('firstName',
                                            {
                                                required: true,
                                                validate: {
                                                    minLength: (v) => v.length >= 3,
                                                },
                                            }
                                        )}
                                    />
                                    {
                                        errors.firstName && <span className="absolute -top-2 
                                        left-[116px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>First Name</span>
                                </div>
                                {/* Email Field */}
                                <div className={`relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off" className={styles.inputField}
                                        {...register('email',
                                            {
                                                required: true, type: 'email',
                                                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                                            }
                                        )}
                                    />
                                    {
                                        errors.email && <span className="absolute -top-2 
                                        left-[72px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Email</span>
                                </div>
                                {/* Password Field */}
                                <div className={`relative bg-[#0f172a] text-white`}>
                                    <input type={showPass ? 'text' : 'password'} autoComplete="off" className={styles.inputField}
                                        {
                                        ...register('password',
                                            {
                                                required: true, type: 'password',
                                                onChange: (e) => handlePassChange(e),
                                            }
                                        )
                                        }
                                    />
                                    {
                                        errors.password && <span className="absolute -top-2 
                                        left-[107px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Password</span>
                                    {
                                        passError &&
                                        <span className="text-red-500 text-xs absolute -bottom-6 left-0">
                                            {passError}
                                        </span>
                                    }
                                    {
                                        showEyeIcon &&
                                        <div className="absolute right-4 top-[15px] text-green-500">
                                            {
                                            showPass ? 
                                            <FaEye
                                            onClick={() => {setShowPass((prev) => !prev)}}  
                                            size={20}
                                            className="cursor-pointer"/> 
                                            : 
                                            <FaEyeSlash
                                            onClick={() => {setShowPass((prev) => !prev)}}
                                            size={20}
                                            className="cursor-pointer"/>
                                            }
                                        </div>


                                    }
                                </div>
                            </article>
                            <article className="w-full sm:w-1/2 flex flex-col gap-5 lg:gap-10">
                                {/* Last name Field */}
                                <div className={`relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off"
                                        className={styles.inputField}
                                        {...register('lastName',
                                            {
                                                required: true,
                                                validate: {
                                                    minLength: (v) => v.length >= 3
                                                }
                                            }
                                        )}
                                    />
                                    {
                                        errors.lastName && <span className="absolute -top-2 
                                        left-[112px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Last Name</span>
                                </div>
                                {/* Phone Field */}
                                <div className={`relative bg-[#0f172a] text-white`}>
                                    <input type="number" autoComplete="off" className={styles.inputField}
                                        {...register('phone',
                                            {
                                                required: true,
                                                validate: {
                                                    length: (v) => v.length === 11,
                                                },
                                            }
                                        )}
                                    />
                                    {
                                        errors.phone && <span className="absolute -top-2 
                                        left-[78px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Phone</span>
                                </div>
                            </article>
                        </section>
                        <div className={`text-white`}>
                            <SubmitBtn text={'Sign Up'} />
                        </div>
                    </form>
                </article>
            </section>
        </section>
    );
};

export default InstructorSignUp;