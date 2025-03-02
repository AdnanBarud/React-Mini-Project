import React, { use, useState } from "react";
import { useSearchParams,  } from "react-router-dom";
import { addToPaste, updateToPaste } from "../features/PasteSlice";
import { useDispatch } from "react-redux";

const Home = () => {

  // for tracing title value serchParams and create pasteId and dispatch
  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId=searchParams.get('pasteId');
  const dispatch = useDispatch();


  //adding logic to create paste button
  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId ||
        Date.now().toString(33),
      createdAt: new Date().toISOString(),

    }

    if(pasteId){
      //update
      dispatch(updateToPaste(paste));
    }
    else{
      // create
      dispatch(addToPaste(paste));
    }
    
    // after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});

  }

  return (
  <div>
    <div className="flex justify-between items-center ">

      {/* for title */}
      <div className="hover:border-color:#646cff">
        <input
          className="rounded-2xl p-2 mt-2 bg-[#0f0c0c] w-[350px] text-white"
          value={title}
          type="text"
          placeholder="enter title here"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* button for update or create */}
      <button
      className="rounded-2xl p-2 mt-2 bg-[#0f0c0c]  "
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
        className="rounded-2xl p-2 mt-4 bg-[#0f0c0c] w-[550px] rows-20"
        placeholder="Enter content here"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        rows={22}
        >
          
        </textarea>
      </div>
  </div>
  );
};

export default Home;
