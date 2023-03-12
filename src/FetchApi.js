import React, { useState } from "react";
import axios from "axios";
import "./FetchApi.css"

function FetchApi() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    // axios is used very much for fetching APIs  
    // Install axios package before usage
    // npm i axios
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${input}&client_id=T_Dlcn-GWQs9cAbUKrRFHYI6_asbL_idrkOJLiEbn9w`);
    //client_id is an AccessKey provided by Unsplash API 
    setData(response.data.results);
  };

  return (
    <div className="display" style={{paddingBottom:'30px'}}>

      <h1 className="class1">SEARCH IMAGES FROM UNSPLASH API</h1>

      <div className="note">Note: press Enter or Search key after entering the keyword as our images get mutated for every key press. So press Enter or 
        Search to get exact Images
      </div>

      <input type="text"
      className="class2" 
      value={input} 
      placeholder="Enter Anything...." 
      onChange={(e) => setInput(e.target.value)
      }
      //OnKeyPress ensures the content mutable on every single key press
      onKeyPress={handleSearch}
      style={{height:'20px', marginTop:'30px'}} 
      autoFocus="true"/>
      
      <button className="class3" 
      onClick={handleSearch}
      >Search</button>

      <h3 style={{textAlign:'center',color:'red'}}>Images of your search will be displayed here</h3>
      <div >

       {/*map function is used for performing an action on every element of an array  */}
      {data.map((url) => (
            <>
          <img  src={url.urls.regular} 
          className="class4" alt="No images found" key={url} />
          </>
        ))}
      </div>
    </div>
  );
}

export default FetchApi;



