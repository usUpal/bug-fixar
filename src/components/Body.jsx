import React, { useState } from "react";
import Modal from "./Modal";

const Body = () => {
  const [code, setCode] = useState("");
  const [issue, setIssue] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };
  return (
    <>
      <div>
        <label htmlFor='my-input' className='mb-2 ma-2 font-bold text-gray-700'>
          Paste Code
        </label>
        <textarea
          className='block w-full px-4 py-2 leading-tight bg-gray-900 border border-gray-500 rounded resize-none text-white focus:outline-none focus:border-blue-300 focus:bg-gray-800'
          rows={15}
          onChange={(e) => setCode(e.target.value)}
          placeholder='Enter your code here...'
        />
      </div>

      <div className=''>
        <label htmlFor='my-input' className='block  font-bold text-gray-700'>
          Issue
        </label>
        <input
          id='my-input'
          type='text'
          className='w-full px-4 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-red-300'
          onChange={(e) => setIssue(e.target.value)}
          placeholder='paste your issue here...'
        />
        <button
          className='bg-gray-500 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded m-3'
          type='submit'
          onClick={clicked}
        >
          Submit
        </button>
        <div>
          {modalOn && (
            <Modal setModalOn={setModalOn} code={code} issue={issue} />
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
