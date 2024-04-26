import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Maskgroup from '../../assets/images/Maskgroup.webp'
import platfrom2 from '../../assets/images/platfrom2.webp'
import gvnew from '../../assets/images/gvnew.svg'
import lightspeed from '../../assets/images/lightspeed.svg'
import madronna from '../../assets/images/madronna.svg'
import Menlo1 from '../../assets/images/Menlo1.svg'
import m12new from '../../assets/images/m12new.svg'
import salesforce from '../../assets/images/Salesforce1.svg'
import map from '../../assets/images/map.svg'



const CompanyPage = ()=>{
    return(
        <div>
        <div>
            <div className='flex justify-center text-red-500 pt-10 text-sm '>
                <h4>ABOUT US</h4>
            </div>
            <h1 className='flex justify-center text-4xl pt-5'>Empowering everyone to express their  
                <span className='flex justify-center text-red-500  text-4xl'> unique </span></h1>
                <span className='flex justify-center text-4xl'>imagination</span>
          
            <img className='px-52 pt-10'src={Maskgroup}/>
            <p className='flex justify-center pl-80 pr-40 pt-10 text-gray-600  text-sm'>Everyone has a story to tell, and no story is the same. 
                We help companies tell their unique stories faster and easier than ever before,
                 using content to create powerful connections with their audiences. By empowering everyone
                  to craft radically personalized content at speed,
                 everyone can express their creative vision in a genuine, relatable, and impactful way.</p>
        </div>
        <div className='py-20'>
            <div className='flex justify-center text-red-500'>
                <h4>OUR STORY</h4>
            </div>
            <h1 className='flex justify-center text-4xl pt-10'>
                <span>We are  
                    <span className='text-red-500 '>pioneers</span></span> </h1>
                    <span className='flex justify-center text-4xl'>at the intersection of Generative AI and enterprise</span>
                    <div className='flex justify-center pt-10'>
                    <img src={platfrom2}/>
                    </div>
                    <div className='flex justify-center pl-80 pr-60 text-gray-600  text-sm pt-10'>
                        <p>Generative AI platforms represent a major breakthrough to create content at tremendous speed and scale. 
                            For enterprises to successfully leverage its potential, they need to include their unique voice and style.
                             We unite content velocity with brand personalization and control, 
                             so every company can achieve their creative potential.</p>
                    </div>
           
        </div>
        <div>
            <div className='flex justify-center text-gray-600  text-sm py-20'>
                <h4>OUR VALUES</h4>
            </div>
            <div className='flex justify-center text-4xl'>
            <h1 >What we </h1>
            <span className='text-red-500 flex justify-center'>stand </span>for
            </div>
            <div className='grid grid-cols-3 px-52 pt-10 pb-20'>
                <div>
                <p className='text-gray-600  text-sm'>01</p>
                <div className='text-1xl'>
                <h1>We 
                <span className='text-red-500 '>push boundaries</span>on what's possible</h1></div>
                <p className='text-sm pt-3'>We explore uncharted territory at the intersection of art and science. 
                    We strive to revolutionize content, amplifying human creativity with cutting-edge AI.</p>
                    </div>
                    <div className='pl-5 pb-5'>
                <p className='text-gray-600  text-sm'>02</p>
                <div className='text-1xl'>
                <h1>We want to give everyone 
                <span className='text-red-500'>creative confidence</span></h1></div>
                <p className='text-sm pt-3'>We believe technology is a creative partner that makes the expression of ideas exponentially easier.
                     Everyone has the opportunity to bring their ideas to life.</p>
                    </div>
                    <div className='pl-5'>
                <p className='text-gray-600  text-sm'>03</p>
                <div className='text-1xl'>
                <h1>We put  
                <span className='text-red-500'>authenticity</span>at our core</h1></div>
                <p className='text-sm pt-3'>Expression is personal. That's why we stay true to ourselves in everything we do – 
                    from what we build to how we build it to the way we engage with others.</p>
                    </div>
                    <div>
                <p className='text-gray-600  text-sm'>04</p>
                <div className='text-1xl'>
                <h1>We approach AI ethically and
                <span className='text-red-500'>responsibly</span> </h1></div>
                <p className='text-sm pt-3'>AI is the next major technological shift in how we create.
                     To harness this breakthrough in a safe way, we are committed to evolving AI responsibly.</p>
                    </div>
                    <div className='pl-5'>
                <p className='text-gray-600  text-sm'>05</p>
                <div className='text-1xl'>
                <h1>We embrace a
                <span className='text-red-500'>growth mindset</span>to learning</h1></div>
                <p className='text-sm pt-3'>We approach each situation with a curious perspective. We strive to be hungry, 
                    humble, and actively listen to our customers for opportunities to innovate.</p>
                    </div>
                    
            </div>

        </div>


        <div className='py-20'>
            <div className='flex justify-center text-gray-600  text-sm '>
                <h4>OUR INVESTORS</h4>
            </div>
            <div className='flex justify-center text-4xl pt-5'>
                <h1>Backed by Top-Tier Investors</h1>
            </div>
            <div className='flex justify-center py-20 space-x-10'>
                <img src={gvnew}/>
                <img src={lightspeed}/>
                <img src={madronna}/>
                <img src={Menlo1}/>
                <img src={m12new}/>
                <img src={salesforce}/>
            </div>
        </div>
        <div>
            <div>
                <h4 className='flex justify-center text-gray-600  text-sm  '>CAREERS</h4>
            </div>
            <div className='flex justify-center text-4xl pt-10'>
                <h1>Come help us  
                <span className='text-red-500'>revolutionize</span>the way </h1></div>
                <span className='flex justify-center text-4xl'>people create</span>
                <div className='flex justify-center pt-10 pl-20 pr-20'>
                    <img src={map}/>
                </div>
                <div className='flex justify-center pl-80  text-gray-600  text-sm '>
                    <p>
                    Our founding team has a proven track record of developing revolutionary, long-lasting AI,
                     SaaS, and media technologies. We're looking for passionate individuals who are committed 
                     to exploring new frontiers in AI and are eager to innovate in this exciting space. 
                    If you're driven to push the limits of what's possible, we'd love to have you join us.
                    </p>
                    
                </div>
                <div className='flex justify-center pt-10 pb-20'>
                    <p>Reach out to: 
                    <span className='text-red-500'>jobs@typeface.ai‍</span></p>
                    </div>
            
        </div>
        <div className='py-40 bg-zinc-800'>
            <div className='flex justify-center text-4xl text-white'>
                <h1>Contact us</h1>
                
            </div>
            <div className='flex justify-center pt-5 text-white'>
            <p>Got questions? Please reach us at: info@typeface.ai</p>
            </div>
        </div>

        </div>

    );
}
export default CompanyPage;