import React from 'react'
import homeicon from '../../assets/logo/homeicon.png'
import twiter from '../../assets/images/twiter.png'
import inicon from '../../assets/images/inicon.png'
import insta from '../../assets/images/insta.png'


const FooterComponent = () => {

    return (
        <div className='flex flex-row justify-between mb-3 pt-20 pb-20'>
            <div className=''>

                <div className='pl-36 flex '>
                    <img className='md:h-10 md:w-30 h-3 w-12'
                        src={homeicon} alt="Logo" />
                    <h1 className='text-red-500 font-bold pt-2 pl-2'>TypeGenie AI</h1>
                </div>
                <div className='pl-36 pt-5'>
                    <p className='w-60 text-gray-500'>The enterprise-grade generative AI app that empowers
                        everyone to express their unique imagination.
                    </p>
                    <div className='flex flex-row'>
                        <div className='pt-5 p-3'>
                            <img className='w-5 h-5' src={twiter} alt='twiter' />
                        </div>
                        <div className='pt-5 p-3'>
                            <img className='w-5 h-5' src={inicon} alt='inicon' />
                        </div>
                        <div className='pt-5 p-3'>
                            <img className='w-5 h-5' src={insta} alt='insta' />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='#'>
                    <div className='font-bold pb-5'>
                        <h2>Product</h2>
                    </div>
                    <div>
                        <div>
                            <div className='pb-2 text-gray-500'>
                                <h1>Image Studio</h1>
                            </div>
                            <div className='pb-2 text-gray-500'>
                                <h1>Prompt</h1>
                            </div>
                            <div className='pb-2 text-gray-500'>
                                <h1>Blend</h1>
                            </div>
                            <div className='pb-2 text-gray-500'>
                                <h1>Flow</h1>
                            </div>
                            <div className='pb-2 text-gray-500'>
                                <h1>Safe</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='font-bold pb-5'>
                    <h2>Platform</h2>
                </div>
                <div>
                    <div>
                        <div className='pb-2 text-gray-500'>
                            <h1>Approach</h1>
                        </div>
                        <div className='pb-2 text-gray-500'>
                            <h1>Governance</h1>
                        </div>
                        <div className='pb-2 text-gray-500'>
                            <h1>Partners</h1>
                        </div>
                        <div className='pb-2 text-gray-500'>
                            <h1>News</h1>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div className='font-bold pb-5'>
                    <h2>Company</h2>
                </div>
                <div>
                    <div>
                        <div className='pb-2 text-gray-500'>
                            <h1>About Us</h1>
                        </div>
                        <div className='pb-2 text-gray-500'>
                            <h1>Values</h1>
                        </div>
                        <div className='pb-2 text-gray-500'>
                            <h1>Investors</h1>
                        </div>
                        <div className='pb-2 text-gray-500'>
                            <h1>Careers</h1>
                        </div>

                    </div>
                </div>
            </div>

            <div className='pr-10 '>
                <div className='font-bold pb-5'>
                    <h2>Access</h2>
                </div>
                <div>
                    <div>
                        <div className='pb-2 text-gray-500'>
                            <h1>Join waitlist</h1>
                        </div>
                        <div className='pb-2 text-gray-500'>
                            <h1>Blog</h1>
                        </div>
                        <div className='pb-2 text-gray-500'>
                            <h1>Login</h1>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default FooterComponent;