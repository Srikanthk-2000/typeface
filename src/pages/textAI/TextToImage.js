import React, { useState } from 'react'


const TextImage = () => {



  const [value, setValue] = useState();
  const [imageURL, setImageURL] = useState(null);

  const textToImage = async () => {
    const path =
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-beta-v2-2-2/text-to-image";
    const headers = {
      Accept: "application/json",
      Authorization: "sk-fQxl87X2kjVZQmGFWeVDMuLOw2exasTFfn1MrLPgMPo8ThxB",
      "Content-Type": "application/json", // Add the content type
    };
    const body = {
      width: 512,
      height: 512,
      steps: 50,
      seed: 0,
      cfg_scale: 7,
      samples: 1,
      style_preset: "enhance",
      text_prompts: [
        {
          text: value, // Replace this with the desired text
          weight: 1,
        },
      ],
    };
    try {
      const response = await fetch(path, {
        headers,
        method: "POST",
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`Non-200 response: ${await response.text()}`);
      }
      const responseJSON = await response.json();
      if (responseJSON.artifacts.length > 0) {
        // Assuming there's only one image returned
        const image = responseJSON.artifacts[0];
        setImageURL(`data:image/png;base64,${image.base64}`);
      } else {
        throw new Error("No image found in the response.");
      }
    } catch (error) {
      console.error("Error occurred during text-to-image generation:", error);
    }
  };
  return (
    <div>
      <div className='flex justify-center mt-5'>

        <input className='border border-black pl-5 py-3 px-20' type="text" placeholder='Your Prompt...'
          onChange={(e) => setValue(e.target.value)}></input>
        {" "}
        <button className=' rounded-none border border-black-600 p-3 bg-black hover:bg-white text-white hover:text-black' onClick={textToImage}>Generate Image</button>
      </div>


      <div className='flex justify-center mt-5 pb-10'>

        <img src={imageURL} alt="" width="400" height="400" />

      </div>
    </div>
  )
}
export default TextImage;