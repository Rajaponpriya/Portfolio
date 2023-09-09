

const About = () => {
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "08" },
    { text: "Companies Work", count: "01" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About<span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-3xl">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-2xl text-justify leading-7 w-11/12 mx-auto">
                Graduate of Computer science with the interest in coding and full-stack development. 
                Having desire to associate with a dynamic organization that will alow me to utilize 
                my abilies in the fields while providing me with opportunites for growth. 
              </p>
              <br></br>
              <div className="text-2xl text-justify leading-7 w-11/12 mx-auto text-white">
              <h2 className="text-cyan-600">EDUCATION</h2>
              <p>B.E.Computer Science and Engineering <br/>
                Coimbatore Institue of Technology<br/>
                GPA: 8.7<br/>
                2021 – 2025</p>
                <br></br>
              <p>Higher Secondary School Certificate<br/>
                Kendriya Vidhyalaya<br/>
                Percentage: 95 <br/>
                2020 – 2021</p>
                </div>
              <div className="flex mt-10 items-center justify-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white hover:bg-gray-400">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

/*
EDUCATION

B.E.COMPUTER SCIENCE AND ENGINEERING
COIMBATORE INSTITUTE OF TECHNOLOGY
GPA: 8.7
2021 – 2025

HIGHER SCHOOL SECONDARY CERTIFICATE
KENDRIYA VIDHYALAYA
Percentage: 95

*/