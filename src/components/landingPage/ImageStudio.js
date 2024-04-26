import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import photo4 from '../../assets/images/photo4.webp'
import image22 from '../../assets/images/image22.webp'
import video1 from '../../assets/images/video1.gif'
import image24 from '../../assets/images/photo24.webp'
import backgroundimg1 from '../../assets/images/backgroundimg1.jpg'

const ImageStudio = () => {

    return (
        <div>
            <div className='flex justify-center pt-40 text-red-500'>
                <h6>IMAGE STUDIO</h6>
            </div>
            <div className='flex justify-center pt-5 text-4xl '>
                <h1>Create stunning product shots in minutes</h1>
            </div>
            <div className='pr-10 flex justify-center pt-5'>
                <button className="rounded-none border border-black-600 p-3 bg-black hover:bg-white text-white hover:text-black">
                    Join Waitlist
                </button>
            </div>
            <div className='flex justify-center pt-20 '>
                <iframe
                    className='pb-20'
                    width="700"
                    height="500"
                    src="https://twitter.com/i/videos/1630231852463030281?embed_source=permalink"

                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                    allowfullscreen
                ></iframe>
            </div>

            <div className='grid grid-cols-2 flex justify-end pl-40 pr-40 text-gray-600'>
                <div></div>
                <p>Design high-res product shots that mimic professional photoshoots
                    while preserving your brand details
                    – all at a fraction of the time and cost.</p>
            </div>
            <div className='grid grid-cols-2 pt-40 pb-10 '>
                <div>
                    <div className='flex justify-center text-3xl pb-5 pt-24 '>
                        <h1>Easily design an image from scratch</h1>
                    </div>
                    <div className='flex justify-center text-gray-300 '>
                        <p>Elevate your product shots in three simple steps:</p>
                    </div>
                    <div className='flex justify-center pt-5 pl-5 text-sm text-gray-600'>
                        <h3>1.Upload an asset. Resize, rotate, or move to wherever you'd like.</h3>
                    </div>
                    <div className='flex justify-center pr-5 text-sm text-gray-600'>
                        <h3>2.Add a professional touch with our pre-made decorations.</h3>
                    </div>
                    <div className='flex justify-center pr-8 text-sm text-gray-600 pb-20'>
                        <h3>3.Bring your vision to life by describing the perfect scene.</h3>
                    </div>

                </div>
                <div>
                    <img src={image22} />
                </div>
            </div>


            <div>
                <div className='grid grid-cols-2 pt-28 pb-20 pr-5 pl-20'>
                    <div>
                        <img src={video1} />

                    </div>
                    <div>
                        <div className='text-3xl flex justify-center pt-20 pb-10 pl-8'>
                            <h1>Collaborate and edit in your favorite tools</h1>
                        </div>
                        <div className='text-sm text-gray-600 flex justify-center pl-20 pr-20'>
                            <p>Download files in multiple formats, like .PSD, and export to Photoshop.
                                Our layered segmentation simplifies editing, so you can modify objects,
                                decorations, and scenes in any other tool you prefer.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 pt-20 pb-20'>
                    <div >
                        <div className='justify-center text-3xl pl-28 pt-20'>
                            <h1>Rev up engagement across campaigns and channels</h1>
                        </div>
                        <div className=' text-sm text-gray-600 pl-28 pt-5'>
                            <p>From captivating product shots against beachy backdrops for social media campaigns to
                                compelling concept art for proposal decks, we've got you covered.</p>
                        </div>

                    </div>
                    <div className='w-50 h-50 pr-28'>
                        <img src={image24} />
                    </div>

                </div>
            </div>


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


    );
}
export default ImageStudio;
