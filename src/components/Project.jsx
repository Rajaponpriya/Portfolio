
import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.jpg";

const Project = () => {
  const projects = [
    {
      img: proj1,
      name: "Movie App",
      github_link: "https://github.com/Rajaponpriya/viteproj1",
      live_link: "https://viteproj1-rajaponpriya.vercel.app/",
    },
    {
      img: proj2,
      name: "Color Quantization",
      github_link: "#",
      live_link: "#",
    }
  ];

  return (
    <section id="projects" className="py-10 text-white">
        <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <br></br>
      </div>
      <div className="flex max-w-9xl gap-6 px-5 mx-auto justify-center ">
      {projects.map((project_info) => (
              
                <div className="bg-slate-700 ">
                    <center>
                  <img src={project_info.img} alt="" className="  w-40 h-50 border-2" />
                  </center>
                  <h3 className="text-2xl my-4 text-center">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-3xl text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-3xl text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
             
            ))}
            </div>
    

    

    </section>
  );
};

export default Project;



/*

import React, { useState } from 'react';

function ResumeUploader() {
  const [resume, setResume] = useState(null);

  // Function to handle file upload
  const handleUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setResume(selectedFile);
    }
  };

  // Function to handle download
  const handleDownload = () => {
    if (resume) {
      const downloadUrl = URL.createObjectURL(resume);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'resume.pdf'; // Change the filename as needed
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(downloadUrl);
    }
  };

  return (
    <div>
      <h2>Resume Uploader and Downloader</h2>
      <input type="file" accept=".pdf" onChange={handleUpload} />
      <button onClick={handleDownload} disabled={!resume}>
        Download Resume
      </button>
    </div>
  );
}

export default ResumeUploader;















*/