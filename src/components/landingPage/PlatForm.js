
import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import platfrom1 from '../../assets/images/platfrom1.webp'
import platform4 from '../../assets/images/platform4.png'
import platform5 from '../../assets/images/platform5.png'
import platform6 from '../../assets/images/platform6.png'
import platform7 from '../../assets/images/platform7.svg'
import platform8 from '../../assets/images/platform8.svg'
import platform9 from '../../assets/images/platform9.svg'
import platform10 from '../../assets/images/platform10.svg'
import Google1 from '../../assets/images/Google1.svg'
import Azure1 from '../../assets/images/Azure1.svg'
import Salesforce1 from '../../assets/images/Salesforce1.svg'
import photo3 from '../../assets/images/photo3.webp'
import photo2 from '../../assets/images/photo2.webp'
import photo1 from '../../assets/images/photo1.webp'
import backgroundimg1 from '../../assets/images/backgroundimg1.jpg'
const PlatForm = () => {
    return (
        <div>
            <div className='flex justify-center pt-20 text-red-500'>

                <h1>OUR PLATFORM</h1>
            </div >
            <div className='flex justify-center pt-8 text-4xl'>
                <span>AI-generated</span>
                <span className='text-red-500'> personalized </span>
                <span>content for enterprises</span>
            </div>
            <div className='pl-40 pr-40 pt-10'>
                <img src={platfrom1} />
            </div>
            <div className=' grid grid-cols-2 justify-end'>
                <div></div>
                <div className='pl-32 pr-32 pt-10 text-gray-600 pb-10'>
                    <p>The only generative AI platform that delivers brand-specific
                        content at remarkable speeds without compromising data security.</p>
                </div>
            </div>
            <div className='bg-zinc-700 pb-20'>
                <div className='flex justify-center text-red-500 pt-28'>
                    <h4>OUR UNIQUE APPROACH</h4>
                </div>
                <div className='flex justify-center text-4xl pt-10 pb-10'>
                    <h1>Meet the generative AI enterprise stack</h1>
                </div>
                <div className=' p-5 m-5 pl-8 pr-1 '>
                    <div className='border border-black flex justify-center space-x-28 p-5 mx-44 text-white bg-gray-400'>
                        <h4>Marketing</h4>
                        <h4>Product</h4>
                        <h4>Sales</h4>
                        <h4>Hr</h4>
                        <h4>Support</h4>
                    </div>

                </div>
                <div className='flex justify-center space-x-16 border border-black ml-56 pr-24 mr-52 text-white bg-gray-400'>
                    <img className='w-24 h-24' src={platform4} />
                    <h4 className='pt-5 text-4xl'>flow</h4>
                    <p className='pt-5'> Easy-to-use, self-serve templates and tools that natively embed into enterprise apps</p>
                </div>
                <div className='flex justify-center space-x-16 border border-black  m-5 ml-56 pr-24 mr-52 text-white bg-gray-400'>
                    <img className='w-24 h-24' src={platform5} />
                    <h4 className='pt-5 text-4xl'>Blend</h4>
                    <p className='pt-5'>AI models personalized to your brand and hosted separately for no data leakage.</p>
                </div>
                <div className='flex justify-center space-x-16 border border-black m-5 ml-56 pr-24 mr-52 text-white bg-gray-400'>
                    <img className='w-24 h-24' src={platform6} />
                    <h4 className='pt-5 text-4xl'>Graph</h4>
                    <p className='pt-5'>Unified multimodal generative hub for all your content – text, images, and more.</p>

                </div>
                <div>
                    <div className='border border-black  flex justify-center space-x-28 mx-56 p-2 text-white bg-gray-400 pl-5'>
                        <h4> Open AI GPT-4</h4>
                        <h4>Google Vertex AI</h4>
                        <h4>Microsoft Azure AI</h4>
                        <h4>Stable Diffusion</h4>
                        <h4>+ More</h4>
                    </div>

                </div>
                <div className='flex justify-center pl-80 pr-40 pt-10'>
                    <div>
                        <p>We combine cutting-edge language models with our brand-specialized AI, so you can generate personalized,
                            on-brand content throughout the entire customer journey directly within your existing tools and workflows.</p>
                    </div>
                </div>


            </div>

            <div>
                <div className='flex justify-center text-red-500 pt-20'>
                    <h4>ENTERPRISE-READY</h4>
                </div>
                <div className='flex justify-center text-4xl mr-80 ml-80 pt-5'>
                    <h1>Built for enterprise security and governance</h1>
                </div>
                <div className='grid grid-cols-2 pl-52 pr-52 pt-10'>
                    <div className='border border-white m-4 shadow-slate-500 shadow-lg '>
                        <div className='pl-10 pt-10 pb-10'>
                            <img className='pb-1' src={platform7} />
                            <h1 className=' text-2xl'>Content authenticity</h1>
                            <p className='text-gray-600  text-sm'>Built-in checks to ensure generated content is free from plagiarism or misleading information.</p>
                        </div>
                    </div>
                    <div className='border border-white m-4 shadow-slate-500 shadow-lg'>
                        <div className='pl-10 pt-5 pb-2'>
                            <img className='pb-1' src={platform8} />
                            <h1 className=' text-2xl'>Embed Typeface into your apps</h1>
                            <p className='text-gray-600  text-sm'>Integrate enterprise-grade generative AI content directly into your own applications and workflows</p>
                        </div>
                    </div>
                    <div className='border border-white m-4 pb-5 shadow-slate-500 shadow-lg'>
                        <div className='pl-10 pt-10 pb-10'>
                            <img className='pb-1' src={platform9} />
                            <h1 className=' text-2xl'>IP ownership</h1>
                            <p className='text-gray-600  text-sm'>Hosted in secure, separate locations so no data leakage to the public</p>
                        </div>
                    </div>
                    <div className='border border-white m-4 pb-5 shadow-slate-500 shadow-lg'>
                        <div className='pl-10 pb-5 pt-5'>
                            <img className='pb-1 pt-5 w-14 h-14' src={platform10} />
                            <h1 className=' text-2xl'>Brand control</h1>
                            <p className='text-gray-600  text-sm'>Set your brand guidelines, style guide, or tone of voice, so you can be on-brand everywhere</p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className='flex justify-center text-4xl pt-40'>
                    <h1>Our strategic partners</h1>
                </div>
                <div className='grid grid-cols-3 py-20 px-40'>
                    <div>
                        <div>
                            <img src={Google1} />
                            <p className='text-gray-600  text-sm'>Integrates with Google Cloud's large language models through Vertex AI
                                and extends Typeface personalized AI to more businesses and millions of Workspace users</p>
                            <button className='text-red-500'>learn more
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
                        <div className='space-x-5'>
                            <img className='pl-5' src={Azure1} />
                            <p className='text-gray-600  text-sm'>Combines the power of Microsoft Azure OpenAI Service and Azure Machine Learning
                                with Typeface Affinity AI to boost personalized content creation at speed</p>
                            <button className='text-red-500'>learn more
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
                        <div className='space-x-5'>
                            <img className='pl-5' src={Salesforce1} />
                            <p className='text-gray-600  text-sm'>Partners with Salesforce Customer 360 to provide data-driven content personalization
                                with Typeface across Salesforce applications and data
                            </p>
                            <button className='text-red-500'>learn more
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
                <div>
                    <div className='flex justify-center pt-20 pb-10 text-4xl'>
                        <h1>Latest news</h1>
                    </div>
                    <div className='grid grid-cols-3 pl-44  pr-44 '>
                        <div className='pr-5 pb-20'>
                            <div>
                                <img src={photo3} />
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
                                <img src={photo2} />
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
                                <img src={photo1} />
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
            </div>
            <div>
            <div style={{ backgroundImage: `url(${backgroundimg1})`, backgroundSize: "cover" }}
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



        </div>

    )
}
export default PlatForm;