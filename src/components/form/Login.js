import React from 'react'
import homeicon from '../../assets/images/homeicon.png'
const LoginForm = () => {
    return (
        <div className='flex justify-center'>
            <div className='card shadow-lg'>
                <form className='px-10 py-10'>
                    <div>
                        <img className=' ml-16 pb-3 w-20 h-20'src={homeicon}/>
                        <h1 className='flex justify-center text-2xl'>Welcome to Typeface</h1>
                        <br />
                        <p className='flex justify-center text-md'>Login to continue</p>
                    </div>
                    <br />
                    <div>
                        {/* <label className='text-lg font-medium text-black-700'>Email</label>
                        <br /> */}
                        <input
                            className='border border-black-600 px-2'
                            name="email"
                            type='text'
                        placeholder="Email"
                        // onChange={""}
                        />
                    </div>
                    <br />
                    <div>
                        {/* <label className='text-lg font-medium text-black-700'>Pass word</label>
                        <br /> */}
                        <input
                            className='border border-black-600  px-2 py-3'
                            name="passWord"
                            type='text'
                        placeholder="Pass word"
                        // onChange={""}
                        />
                    </div>
                    <br />
                    <div className='flex justify-center'>
                        <button class="rounded-none border border-black-600 p-3
                            bg-black hover:bg-red-500 text-white  px-10">
                            Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm













