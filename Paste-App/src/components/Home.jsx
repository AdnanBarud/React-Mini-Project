import React, { use, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId=searchParams.get('pasteId');


  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId ||
        Date.now().toString(33),
      createdAt: new Date().toISOString(),

    }
  }

  return (
  <div>
    <div className="flex justify-evenly items-center gap-x-4">

      {/* for title */}
      <div className=" ">
        <input
          className="rounded-2xl p-2 mt-2 bg-[#0f0c0c] w-[300px]"
          value={title}
          type="text"
          placeholder="enter title here"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* button for update or create */}
      <button
      className="rounded-2xl p-2 mt-2 "
      onClick={createPaste}
      >
        {
            pasteId ? 'Update My Paste' : 'Create My Paste'
        }
      </button>


      {/* for content input */}
      
    </div>

    <div>
        <textarea 
        className="rounded-2xl p-2 mt-2 bg-[#0f0c0c] w-[300px] rows-20"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        >
          
        </textarea>
      </div>
  </div>
  );
};

export default Home;
