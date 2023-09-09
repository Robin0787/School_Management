import bcrypt from 'bcryptjs';
import { updateProfile } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import InstructorRequest from "../../../APIs/InstructorRequest";
import UploadImage from "../../../APIs/UploadImage";
import Loader from "../../../Components/Loader/Loader";
import SubmitBtn from "../../../Components/SubmitBtn/SubmitBtn";
import { providerContext } from "../../../Provider/Provider";
import styles from "../SignUp.module.css";

const InstructorSignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset, clearErrors, setFocus } = useForm();
    const [showPass, setShowPass] = useState(false);
    const [passError, setPassError] = useState('');
    const [showEyeIcon, setShowEyeIcon] = useState(false);
    const [photoURL, setPhotoURL] = useState('');
    const [photoLoading, setPhotoLoading] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const {createUser, setUserBannerText} = useContext(providerContext);
    const [formLoading, setFormLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (data) => {
        if (passError) {
            setFocus('password');
            return;
        }
        if(phoneError) {
            setFocus('phone');
            return;
        }
        if(photoLoading) {
            toast.error('Wait Photo is Uploading...');
            return;
        }
        setFormLoading(true);
        const { firstName, lastName, email, phone, password, position, photo } = data;
        createUser(email, password)
        .then(res => {
            updateProfile(res.user, {displayName: `${firstName} ${lastName}`, photoURL: photoURL});
            const hashedPass = bcrypt.hashSync(data.password, 10);
            const instructorInfo = {
                ...data,
                password: hashedPass,
                photo : photoURL,
                status: 'pending',
                role: 'instructor'
            }
            InstructorRequest(instructorInfo)
            .then(() => {
                setFormLoading(false);
                toast.success('Request Sent.');
                reset();
                navigate('/');
            })
            .catch((err) => {console.log(err); setFormLoading(false)})
        })
        .catch(err => {console.log(err); setFormLoading(false)});
    }

    function handlePassChange(e) {
        const pass = e.target.value;
        
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
        handleEyeIcon(pass);
    }

    function handleEyeIcon(pass) {
        if (pass.length < 1) {
            setShowEyeIcon(false);
            setPassError('');
        }
        else {
            setShowEyeIcon(true);
        }
    }

    // Changing the name of image input field based on image name;
    const handleImageChange = image => {
        setPhotoLoading(true);
        UploadImage(image)
            .then(data => {
                setPhotoURL(data.display_url);
                setPhotoLoading(false);
            })
            .catch(() => { setPhotoLoading(false) });
    };
    // Changing banner text
    useEffect(() => {
        setUserBannerText('Sign Up Dear!');
    }, [setUserBannerText]);
    
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
                                        <span className="text-red-500 text-[11px] absolute -bottom-6 left-0">
                                            {passError}
                                        </span>
                                    }
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
                                {/* Position Field */}
                                <div className={`relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off"
                                        className={styles.inputField}
                                        {...register('position',
                                            {
                                                required: true,
                                                validate: {
                                                    minLength: (v) => v.length >= 3,
                                                },
                                            }
                                        )}
                                    />
                                    {
                                        errors.position && <span className="absolute -top-2 
                                        left-[98px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Position</span>
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
                                                onChange: (e) => {
                                                    const num = e.target.value;
                                                    if(num.length < 1) {
                                                        setPhoneError('');
                                                    }
                                                    else if(!/^(?:\+?880|0)1[3-9]\d{8}$/.test(num)) {
                                                        setPhoneError('Number is not valid.')
                                                    }
                                                    else {
                                                        setPhoneError('');
                                                    }
                                                }
                                            }
                                        )}
                                    />
                                    {
                                        errors.phone && <span className="absolute -top-2 
                                        left-[78px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Phone</span>
                                    {
                                        phoneError &&
                                        <span className="text-red-500 text-[11px] absolute -bottom-6 left-0">
                                            {phoneError}
                                        </span>
                                    }
                                </div>
                                {/* Image Field */}
                                {
                                    photoLoading ?
                                        <div className=" border-2 border-white border-dashed  w-full h-[120px] lg:h-[140px] rounded flex justify-center items-center"><Loader size={20}/></div>
                                        :
                                        <>
                                            {
                                                !photoURL ?
                                                    <div className="flex items-center justify-center w-full relative">
                                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[120px] lg:h-[140px] border-2 border-[#808080] border-dashed hover:border-gray-300 rounded-lg cursor-pointer bg-transparent hover:bg-inherit duration-500 group">
                                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <svg aria-hidden="true" className="w-8 h-8 mb-3 text-white duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                                <p className="mb-2 text-sm text-gray-200 group-hover:text-white duration-300"><span className="font-semibold ">Click to upload</span> or drag and drop</p>
                                                                <p className="text-xs text-gray-300 group-hover:text-white duration-300">PNG, JPG, Or WEBP</p>
                                                                {
                                                                    errors.photo && <span className="text-red-500 text-[11px] absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2">
                                                                        {'Image is required'}
                                                                    </span>
                                                                }
                                                            </div>
                                                            <input id="dropzone-file" type="file" accept={['.png', '.jpg', '.webp']} className="hidden"
                                                                {...register('photo',
                                                                    {
                                                                        required: true,
                                                                        onChange: (e) => handleImageChange(e.target.files[0])
                                                                    })
                                                                } />
                                                        </label>
                                                    </div>
                                                    :
                                                    <div className="overflow-hidden border-2 border-white w-full h-[120px] lg:h-[140px] rounded">
                                                        <img src={photoURL} alt="photo"
                                                            className="w-full h-full object-cover object-center rounded  hover:scale-110 duration-700" />
                                                    </div>
                                            }
                                        </>
                                }
                            </article>
                        </section>
                        <div className={`text-white mt-10`}>
                            <SubmitBtn text={'Sign Up'} loading={formLoading}/>
                        </div>
                    </form>
                </article>
            </section>
        </section>
    );
};

export default InstructorSignUp;