import React from 'react'
import image from "../../assets/images/images.png"
import profile from "../../assets/images/profile.jpg"
import keylock1 from "../../assets/images/keylock1.png"
import fileicon2 from "../../assets/images/fileicon2.png"
import backgroundimg from "../../assets/images/backgroundimg.jpeg"
import TextImage from '../../pages/textAI/TextToImage'
import frame from '../../assets/images/frame.webp'
import fram1 from '../../assets/images/fram1.webp'
import typebackground from '../../assets/images/typebackground.png'
import photo3 from '../../assets/images/photo3.webp'
import photo2 from '../../assets/images/photo2.webp'
import photo1 from '../../assets/images/photo1.webp'
import backgroundimg1 from '../../assets/images/backgroundimg1.jpg'



const LandingCard=()=>{
    return (
      <div className =' justify-center items-center'>
       
       <div>
       <h1 className="text-6xl  text-center mt-20">
        <span className="text-red-500">Anything</span>
           Imagined
       </h1>
       </div>
       <div>
       <p className="text-center py-3">
        The generative AI app to supercharge personalized content creation for work</p>
       </div>
       <div>
       <div className="flex justify-center"> <button className="  rounded-none border border-black-600 p-3 m-1 bg-black hover:bg-white text-white hover:text-black ">
        join waitlist</button>
      
        <img className="ml-5"src='https://icons.typeface.ai/webflow-docs/play-icon.svg'>
        </img>
     
        {/* <div style={{marginTop: "3px", width: "104px" }}> */}
        <a className="pt-3" href="#"style={{color: "#111013"}}>play video</a>
        {/* </div> */}
        
        </div>
        </div>
        <div className='flex justify-center'>
          <TextImage/>
        </div>
        <div style={{backgroundImage :  `url(${backgroundimg})`, backgroundSize : "cover"}}>
        <div className='py-20 pb-10'>
          <div className='flex justify-center text-red-500 text-1xl'>
          <h4>WHY TYPEFACE</h4>
          </div>
          <div className='flex justify-center text-4xl text-white py-5'>
          <h1>The AI platform designed 
            for enterprices </h1>
          </div>
          <div className='flex justify-center text-1xl  text-white'>
          <h5>10x your content at scale,tailored to your brand,and privacy-safe</h5>
          </div>
        </div>
        <div className='flex justify-center flex-wrap  text-white py-20 pl-14 pr-14'>
  <div className='border border-black m-2 p-4 w-64 text-center bg-gray-300 bg-opacity-20'>
    <div className='flex justify-center'>
      <img className='w-8 h-8' src={image} alt='Image' />
    </div>
    <h3 className='text-2xl'>maximizes best of all AI models</h3>
    <p>We use top-notch AI models across the board, so you access the latest and best</p>
  </div>

  <div className='border border-black m-2 p-4 w-64 text-center bg-gray-300 bg-opacity-20'>
    <div className='flex justify-center'>
      <img className='w-8 h-8' src={profile} alt='Profile' />
    </div>
    <h3 className='text-2xl'>Customizes to your brand</h3>
    <p>No generic, AI here. We personalize AI outputs to your brand's voice and style</p>
  </div>

  <div className='border border-black m-2 p-4 w-64 text-center bg-gray-300 bg-opacity-20'>
    <div className='flex justify-center'>
      <img className='w-8 h-8' src={keylock1} alt='Keylock' />
    </div>
    <h3 className='text-2xl'>Keeps your data private</h3>
    <p>With dedicated AI for your brand, create confidently without data leakage</p>
  </div>

  <div className='border border-black m-2 p-4 w-64 text-center bg-gray-300 bg-opacity-20'>
    <div className='flex justify-center'>
      <img className='w-8 h-8' src={fileicon2} alt='File Icon' />
    </div>
    <h3 className='text-2xl'>Works with your favorite apps</h3>
    <p>We get it – AI can't sit on an island. We play nice with your tools so you work your way.</p>
  </div>
  
</div>
<div className='flex justify-center pb-10 ' >
    <button className=' border border-white text-white bg-gray-300 bg-opacity-20 pr-5 pl-5' >Learn more </button>
  </div>
</div>
<div className='bg-gray-200'>
  <div className='flex justify-center  text-red-500 text-2xl pt-20'>
  <h5>BLEND</h5>
  </div>
  <div className='flex justify-center text-4xl pt-5'>
  <h1>Personalize to your style and audiences</h1>
  </div>
  <div className='flex justify-center pt-20'>
  <iframe
  className='pb-20'
    width="700"   
    height="500"  
    src="https://www.youtube.com/embed/eB114trabo8"   
    
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
    allowfullscreen
  ></iframe>
</div>
<div className='grid grid-cols-2 justify-center text-1xl '>
  <div></div>
  <div>
<p>Typeface learns your tone, personas, and products, 
  so you can express your vision uniquely and consistently across every customer interaction.</p>
 
  <div className='pt-5 pb-10  text-red-500 text-1xl'>
    <button>learn more
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 m-1 p-1 display: inline-block stroke-red-500 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
    </button>  
  </div>
  </div>
  </div>
</div>
<div>
  <div className='flex justify-center text-red-500 pt-20'>
  <h6>FLOW</h6>
  </div>
  <div className='flex justify-center text-4xl'>
  <h1>Adapts so that you can stay in the flow</h1>
  </div>
  <div className='grid grid-cols-2 pb-20 pt-20 '>
    <div>
    <div className='flex justify-center text-3xl hover:bg-gray-300'>
      <h1>Image</h1>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 m-1 p-1 display: inline-block stroke-black "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
    </div>
    <div className='flex justify-center text-3xl pr-4 hover:bg-gray-300'>
      <h1>Copy</h1>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 m-1 p-1 display: inline-block stroke-black "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
    </div>
    <div className='flex justify-center text-3xl pl-9 hover:bg-gray-300'>
      <h1>Blog Post</h1>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 m-1 p-1 display: inline-block stroke-black "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
    </div>
    <div className='flex justify-center text-3xl pl-20 ml-2 hover:bg-gray-300'>
      <h1>Instagram Ad</h1>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 m-1 p-1 display: inline-block stroke-black "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
    </div>
    <div className='flex justify-center text-3xl pl-20 ml-2 hover:bg-gray-300'>
      <h1>Landing Page</h1>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 m-1 p-1 display: inline-block stroke-black "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
    </div>
    <div className='flex justify-center text-3xl pl-5 hover:bg-gray-300'>
      <h1>Job Post</h1>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 m-1 p-1 display: inline-block stroke-black "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
    </div>
    <div className='justify-center text ml-40 mr-30 pl-20 pr-10 mt-10 mb-5'>
    <p>Pick an out-of-the box template or create your own with just a few clicks.
       Easily extend or customize rules and workflows to fit Typeface into your natural processes</p>
       </div>
       <div className='pt-5 pb-10   text-red-500 text-1xl text-center'>
    <button>learn more
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 m-1 p-1 display: inline-block stroke-red-500 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
    </button>  
  </div>
       
    </div>
    <div>
      <img className='h-96' src={frame}  alt="Your Image"/>
    </div>

  </div>
</div>
<div className='bg-gray-200'>
  <div>
<div className='flex justify-center text-red-500 pt-20'>
  <h1>SAFE</h1>
  </div>
  <div className='flex justify-center text-3xl pt-5 pb-10'>
  <h3>Protect your company’s assets and brand</h3>
  </div>
</div>
<div className='grid grid-cols-2'>
  <div className='pl-20 pb-10'>
    <img src={fram1}/>
  </div>
  <div>
    <div className='pr-20 pt-20'>
      <div className='flex justify-center  text-2xl pr-12 hover:bg-gray-300'>
      <h1>Safe prompts</h1>
      </div>
      <div className='flex justify-center text-2xl hover:bg-gray-300'>
      <h1>Grammar Checker</h1>
      </div>
      <div className='flex justify-center text-2xl hover:bg-gray-300'>
      <h1>Grammar Checker</h1>
      </div>
      <div className='flex justify-center text-2xl pl-8 hover:bg-gray-300'>
      <h1>Authenticity Checker</h1>
      </div>
      <div className='flex justify-center text-2xl pr-10 hover:bg-gray-300'>
      <h1>Brand Control</h1>
      </div>
    </div>
    <div className='flex justify-center text-sm pt-10 pl-20 pr-20'>
      <p>We uphold high standards around safety, governance, 
        and trust. Control your brand representation and 
        ensure your values are reflected at all times.</p>
    </div>
    <div className='flex justify-start pl-20 text-red-500 pt-8 pb-10'>
      <button>learn more
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 m-1 p-1 display: inline-block stroke-red-500 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
      </button>
    </div>
  </div>
</div>
</div>
<div  style={{backgroundImage :  `url(${typebackground})`, backgroundSize : "cover"}}>
<div className=' pb-48 pt-48 pr-48 pl-48'>
  <div className='bg-white border'>
  <div className='flex justify-center pt-10 text-gray-500 '>
    <h4>VALUE DELIVERED</h4>
  </div>
  <div className='flex justify-center text-4xl pt-5 pb-20'>
    <div>
      <span>Create 10x more</span>
      <span className='text-red-500'> personalized
</span> content faster
</div>
  </div>
</div>
</div>
</div>
<div>
  <div className='flex justify-center pt-20 pb-10 text-4xl'>
    <h1>Latest news</h1>
  </div>
  <div className='grid grid-cols-3 pl-44  pr-44 '>
    <div className='pr-5 pb-20'>
      <div>
        <img src={photo3}/>
      </div>
      <div className='text-2xl pt-5'>
      <h3>Typeface's Series B announce</h3>
      </div>
      <div className='text-sm pt-5'>
      <p>We announced a $100M new investment, 
        closing our Series B round led by Salesforce Ventures to accelerate personalized 
        generative AI for the enterprise.</p>
        </div>
        <div className='text-sm '>
        <button>learn more
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 m-1 p-1 display: inline-block stroke-red-500 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
      </button>
      </div>
    </div>
    <div className='pr-5'>
      <div className=''>
        <img src={photo2}/>
      </div>
      <div className='text-2xl pt-5'>
      <h3>Our latest product release</h3>
      </div>
      <div className='text-sm pt-5'>
      <p>Check our latest features including modifying an image with natural language,
         in-line writing assistance, videos to text, and more.</p>
        </div>
        <div className='text-sm pt-5'>
        <button>learn more
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 m-1 p-1 display: inline-block stroke-red-500 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
      </button>
      </div>
    </div>
    <div className='pr-5'>
      <div>
        <img src={photo1}/>
      </div>
      <div className='text-2xl pt-5'>
      <h3>New partnership with Salesforce</h3>
      </div>
      <div className='text-sm pt-5'>
      <p>Customers using Marketing GPT will be able to leverage Typeface to create 
        customized assets for multi-channel campaigns with Salesforce.</p>
        </div>
        <div className='text-sm pt-5'>
        <button>learn more
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 m-1 p-1 display: inline-block stroke-red-500 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>  
      </button>
      </div>
    </div>
  </div>
</div>
<div style={{backgroundImage :  `url(${backgroundimg1})`, backgroundSize : "cover"}}
className='pt-40 pb-20'>
  <div className='pb-40'>
    <div className='flex justify-center text-4xl pb-5 text-white'>
    <h1>Ready to get started?</h1>
    </div>
    <div className='flex justify-center text-white'>
    <p>We are excited to show you Typeface.
</p>
</div>
<div className='flex justify-center pb-5 text-white'>
  <p>Sign up now.</p>
</div>

<div className='pl-80 pr-80 ml-24 mr-24'>
<div className='flex justify-center border border-white bg-gray-500 text-white '>
<button>Join Waitlist</button>
</div>
</div>
  </div>
</div>
    
      </div>
    );
  }
  export default LandingCard;