import React, { use, useState } from "react";
import { useSearchParams, useDispatch } from "react-router-dom";
import { addToPaste } from "../features/PasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId=searchParams.get('pasteId');
  const dispatch = useDispatch();


  function createPaste() {
    

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
        className="rounded-2xl p-2 mt-2 bg-[#0f0c0c] w-[500px] rows-20"
        placeholder="Enter content here"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        rows={20}
        >
          
        </textarea>
      </div>
  </div>
  );
};

export default Home;
