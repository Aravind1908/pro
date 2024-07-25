import React from "react";
import girl from "../images/portfolio.jpg";
import FileUpload from "./Drop"

function Portal() {
  return (
    <>
      <div className="container-fluid  main">
        <div className="profile-image">
          <img src={girl} alt="" className="ai-girl" />
        </div>
      </div>
      <div className="  main-2 ">
        <div className="row">

         
        <div className=" col-lg-6 col-sm-12">
          <h3>Your Name</h3>
          <button className="btn btn-primary rounded-5  px-4 m-3">
            Edit Profile
          </button>
          <button className="btn  rounded-5  px-4 border-black">
            Settings
          </button>
          <h3>Skillset</h3>
          <button className="btn btn-primary rounded-5  px-4 m-2">HTML</button>
          <button className="btn btn-primary rounded-5  px-4 m-2">Css</button>
          <button className="btn btn-primary rounded-5  px-4 m-2">JAVA</button>
          <br />
          <button className="btn  rounded-5  px-3 m-2 border-black">
            Python
          </button>
          <button className="btn  rounded-5  px-3 m-2 border-black">C++</button>
          <button className="btn btn-primary rounded-5 m-2">+</button>
          <br />
          <button className="btn btn-primary rounded-5  px-4 m-2">HTML</button>
          <br />
          <input
            type="text"
            placeholder="Paste URL"
            className="border-black rounded-4  focus:outline-none focus:border-blue-500 input"
          />
          <br />
          <textarea
            className=" project_description mt-4 border-black-5 rounded-4  focus:border-black "
            placeholder="Project Description"
          ></textarea>
        </div>

        <div className="col-lg-6 col-sm-12">
          <button className="btn btn-primary m-4 rounded-5  px-5">
            Github Link
          </button>
          <br />
          <input
            type="text"
            placeholder="Paste URL"
            className="border-black rounded-4  focus:outline-none focus:border-blue-500 input"
          />
          <br />
          <button className="btn btn-primary rounded-5 m-4  px-5">
            Resume
          </button>
          <FileUpload/> 
          </div>
        </div>
       





        
      </div>
    </>
  );
}

export default Portal;
