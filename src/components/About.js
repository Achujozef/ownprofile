import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
    return (
        <section className="aboutSession text-white px-5 py-32 rounded-tr-full" id="About">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info font-light">
                    <h2 className="text-4xl font-medium  mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                    My Story
                    </h2>

                    <p className="pb-5">
                    Greetings! I'm Achu Joseph S L, a passionate fullstack web developer. With a wealth of experience in web development, I specialize in creating websites that seamlessly blend flexibility with scalability.
                    </p>
                    <p className="pb-5">
                    My expertise spans both frontend and backend technologies. I command languages like HTML, CSS, JavaScript, Python, and frameworks including React, Redux, Django, Flask, and FastAPI. I am adept at crafting visually stunning and highly responsive user interfaces.
                    </p>

                    <p> On the backend, I navigate the realms of SQL and MongoDB, ensuring robust and efficient data management. Additionally, my skills extend to containerization technologies like Docker and Kubernetes..</p>

                    <p>
                    My commitment to excellence is mirrored in my dedication to producing clean, maintainable code. As a problem-solving enthusiast, I'm constantly exploring and mastering new technologies to stay at the forefront of the ever-evolving web development landscape.
                    </p>
                </div>

                <div className="about-img">
                    <img
                        src={AboutImg}
                        alt="coding illustration"
                        className="lgw-[80%] md:ml-auto rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;