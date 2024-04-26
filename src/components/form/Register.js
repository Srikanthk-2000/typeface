import React from 'react'
import Apple from '../../assets/images/Apple.webp'
const RegisterForm = () => {
    return (
        <div className='flex justify-center pt-10'>
            <div>
                <h1 className='text-4xl'>Join our waitlist</h1>
                <form>
                    <div className='pt-5'>
                        <label className='text-sm font-medium text-black-700'>First name</label>
                        <br />
                        <input
                            className='border border-black-600 px-2 py-3'
                            name="firstName"
                            type='text'
                            // placeholder="First name"
                            // onChange={""}
                        />
                    </div>
                    <div>
                        <label className='text-sm font-medium text-black-700'>Last name</label>
                        <br />
                        <input
                            className='border border-black-600 px-2 py-3'
                            name="lastName"
                            type='text'
                            // placeholder="Last name"
                            // onChange={""}
                        />
                    </div>
                    <div>
                        <label className='text-sm font-medium text-black-700'>Email</label>
                        <br />
                        <input
                            className='border border-black-600 px-2 py-3'
                            name="email"
                            type='text'
                            // placeholder="Email"
                            // onChange={""}
                        />
                    </div>
                    <div>
                        <label className='text-sm font-medium text-black-700'>Pass word</label>
                        <br />
                        <input
                            className='border border-black-600 px-2 py-3'
                            name="passWord"
                            type='text'
                            // placeholder="Pass word"
                            // onChange={""}
                        />
                    </div>
                    <br />
                    <div>
                        <button class="rounded-none border border-black-600 p-3
                            bg-black hover:bg-red-500 text-white  px-10">
                            Join Waitlist</button>
                    </div>
                </form>
            </div>
            <br />
            <div className='pl-10'>
                <img className="h-50 w-80" src={Apple} alt="..." />
                <p className='w-60 pt-5 text-gray-400'>
                    Typeface is the generative AI application enabling any enterprise
                    to securely create stunning, on-brand content faster and easier than ever before.
                </p>
                <p className='w-60 pt-5 text-gray-400'>
                    If you want a first look at how we combine the creative
                    possibilities of generative AI with meaningful brand personalization, sign up for our waitlist.
                </p>
            </div>
        </div>
    )
}
export default RegisterForm