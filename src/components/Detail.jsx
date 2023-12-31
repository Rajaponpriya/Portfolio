import Photo from "../assets/Photo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import pdf from "../assets/Myresume.pdf";
import Button from "react-bootstrap/Button";
import Type from "./Type";


const Detail = () => {
  
  return (
    <div className="background-color: #ff0000">
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        
        <img src={Photo} alt="" className="  w-40 h-50 border-2 border-blue-500" />
        
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              <br />
            </span>
            
            This is <span className="text-cyan-500">Rajaponpriya</span> here !
          </h1>
          <div style={{ textAlign: "left" }}>
            <Type />
          </div> 
          <h4 className="md:text-2xl text-xl md:leading-normal leading-5 mt-4 font-bold ">
          Known for my strong work ethic and ability to meet deadlines.
          </h4>
          <br></br>
          <p className="inline-flex items-center  space-x-4">
          <a href="https://www.linkedin.com/in/rajaponpriya-r-6b9194220/" ><FaLinkedin size='2rem' className="hover:bg-blue-700"/></a>
          <a href="https://github.com/Rajaponpriya"><FaGithub size='2rem' className="hover:bg-blue-700"/></a>
          <a href="https://github.com/Rajaponpriya"><SiLeetcode size='2rem' className="hover:bg-blue-700"/></a>
      

          
          </p>         
        </div>
        <br></br>
        <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
      </div>
      
    </section>
    
    
    </div>
    
  );
};

export default Detail;