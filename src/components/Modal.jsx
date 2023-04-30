import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const Modal = ({ setModalOn, code, issue }) => {
  const [res, setRes] = useState("");
  const [choice, setChoice] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

console.log(import.meta.env.VITE_OPENAI_API_KEY);
  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);
  //   const model = "gpt-3.5-turbo";

  const fetchData = async () => {
    setIsLoading(true);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `This code is ${code} and the issue is ${issue} \n\n Fix the code with explanation`,
      temperature: 0,
      max_tokens: 1000,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['"""'],
    });
    setRes(response.data.choices[0].text);
    setIsLoading(false);
    // const response = await axios.post(
    //   "https://api.openai.com/v1/chat/completions",
    //   {
    //     prompt: `This code is ${code} and the issue is ${issue} \n\n Fix the code:`,
    //     model: model,
    //     max_tokens: 100,
    //     n: 1,
    //     stop: ".",
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${API_KEY}`,
    //     },
    //   }
    // );

    // return response.data.choices[0].text;
  };

  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='   bg-gray-700 opacity-90 fixed inset-0 z-50   '>
      <div className='flex h-screen justify-center items-center '>
        <div className='flex-col justify-center  bg-white py-12 px-24 border-4 border-gray-500 rounded-xl '>
          <div className='text-zinc-600'>
            {/* hold on, getting your code fixed... 🤔 */}
            {isLoading ? (
              <p className='animate-pulse'>
                hold on, getting your code fixed... 🤔
              </p>
            ) : (
              <p>{res}</p>
            )}
          </div>
          <div className='flex'>
            {/* <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-green-400 "></button> */}
            <button
              onClick={handleCancelClick}
              className='rounded px-4 py-2 ml-4 text-white bg-gray-500 absolute top-0 right-0 m-4'
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
