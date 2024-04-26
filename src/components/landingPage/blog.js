import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import car from '../../assets/images/car.webp'
import fram123 from '../../assets/images/fram123.webp'
import Frank1 from '../../assets/images/Frank1.webp'
import type1 from '../../assets/images/type1.webp'
import typebackground from '../../assets/images/typebackground.png'
import photo1 from '../../assets/images/photo1.webp'
import Typeface11 from '../../assets/images/Typeface11.webp'
import Typeface12 from '../../assets/images/Typeface12.webp'
import Professional from '../../assets/images/Professional.webp'
import blog from '../../assets/images/blog.webp'
import Apple from '../../assets/images/Apple.webp'
const Blog=()=>{
    return(
        <div>
            <div className="flex justify-center text-4xl py-20">
                <h1>The Enterprise GenAI Blog</h1>
            </div>
            <div className="grid grid-cols-2 py-10 px-40 space-x-10 ">
                <div>
                    <img className='h-56'src={car}/>
                    <p className='pt-5 text-sm text-red-500'>Product</p>
                    <h1>Beyond Boundaries: AI-Powered Outpainting, Upscaling, and Custom Social Post Templates</h1>
                    <div className='flex justify-center pt-5 pb-10'>
                    <img src={Frank1}/>
                    <h3>Frank Chen ·</h3>
                    <p className='text-gray-600 text-sm pt-1 pl-3'> Product Manager July 27th, 2023 · 5 min read</p>
                    </div>
                </div>
                <div>
                
                    <img className='h-56'src={fram123}/>
                    <p className='pt-5 text-sm text-red-500'>Product</p>
                    <h1>Accelerating Enterprise GenAI Across the Microsoft Ecosystem</h1>
                    <div className='flex justify-center pt-5 pb-10 pr-40'>
                    <img src={type1}/>
                    <h3>Typeface </h3>
                    <p className='text-gray-600 text-sm pt-1 pl-3'>July 18th, 2023 · 3 min read</p>
                    </div>
                </div>
                <div>
                    <img className='h-56'src={typebackground}/>
                    <p className='pt-5 text-sm text-red-500'>Company</p>
                    <h1>Typeface Announces $100M in New Funding to Fuel Global Expansion of 
                        its Personalized Generative AI Platform for Enterprises</h1>
                    <div className='flex justify-center pt-5 pb-10 pr-40'>
                    <img src={type1}/>
                    <h3>Typeface </h3>
                    <p className='text-gray-600 text-sm pt-1 pl-3'>July 16th, 2023 · 4 min read</p>
                    </div>
                </div>
                <div>
                    <img className='h-56'src={photo1}/>
                    <p className='pt-5 text-sm text-red-500'>Partnerships</p>
                    <h1>Typeface and Salesforce Partner to Bring Personalized Generative AI Capabilities into Salesforce Marketing GPT</h1>
                    <div className='flex justify-center pt-5 pb-10 pr-40'>
                    <img src={type1}/>
                    <h3>Typeface </h3>
                    <p className='text-gray-600 text-sm pt-1 pl-3'>July 16th, 2023 · 3 min read</p>
                    </div>
                </div>
                <div>
                    <img className='h-56'src={Typeface11}/>
                    <p className='pt-5 text-sm text-red-500'>Partnerships</p>
                    <h1>Typeface and Google Cloud Announce Strategic Partnership to Provide AI-Generated Personalized 
                        Content at Scale for Enterprises Worldwide</h1>
                    <div className='flex justify-center  pt-5 pb-10 pr-40'>
                    <img src={type1}/>
                    <h3>Typeface </h3>
                    <p className='text-gray-600 text-sm pt-1 pl-3'>July 16th, 2023 · 3 min read</p>
                    </div>
                </div>
                <div>
                    <img className='h-56'src={Typeface12}/>
                    <p className='pt-5 text-sm text-red-500'>Product</p>
                    <h1>Bringing Typeface to Google Cloud and Leveling up Generative Editing</h1>
                    <div className='flex justify-center pt-5 pb-10 pr-40'>
                    <img src={Professional}/>
                    <h3>Vishal Sood · </h3>
                    <p className='text-gray-600 text-sm pt-1 pl-3'>Head of Product June 20th, 2023 · 5 min read</p>
                    </div>
                </div>
                <div>
                    <img className='h-56'src={blog}/>
                    <p className='pt-5 text-sm text-red-500'>Product</p>
                    <h1>Major Product Update for Instant AI Product Photography and Audience Personalization</h1>
                    <div className='flex justify-center pt-5 pb-10 pr-40'>
                    <img src={Professional}/>
                    <h3>Vishal Sood ·</h3>
                    <p className='text-gray-600 text-sm pt-1 pl-3'> Head of Product May 1st, 2023 · 5 min read</p>
                    </div>
                </div>
                <div>
                    <img className='h-56'src={Apple}/>
                    <p className='pt-5 text-sm text-red-500'>Company</p>
                    <h1>Typeface Emerges From Stealth With a Generative AI Application For Enterprise 
                        Content Creation and $65 Million in Funding</h1>
                    <div className='flex justify-center pt-5 pb-10 pr-40'>
                    <img src={type1}/>
                    <h3>Typeface </h3>
                    <p className='text-gray-600 text-sm pt-1 pl-3'>February 27th, 2023 · 4 min read</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Blog;