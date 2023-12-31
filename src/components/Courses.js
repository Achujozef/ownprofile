import React from "react";
import Brototype from "../assets/Brototype.jpg";
import Gtec from "../assets/gtech.jpg";

const Courses = () => {
    const Blog = [

        {
            img: Brototype,
            title: "BROTOTYPE - PACKAPEER ACADEMY PVT LTD",
            desc: " Full Stack Web Development(Python Django + React) Internship. Attend Weekly Reviews, Weekly Tasks, Leetcode Coding Challenges, Communication Training, Tech Seminars, Project Planning, Designing, Developing, Debugging & Hosting",
            period: "Jan-2023 To Nov-2023",
            website: "https://brototype.com/",
        },

    ];

    return (
        <section className="bg-primary text-white px-5 py-32" id="Courses">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-medium mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
                        Courses
                    </h2>

                    <p className="pb-5 font-light ">
                        I am committed to continuously enhancing my expertise in various programming languages through
                        a rigorous regimen of courses and internships. This proactive approach to professional development
                        underscores my dedication to staying at the forefront of the ever-evolving field of software development.
                       </p>
                </div>

                <div></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-2 gap-20">
                {Blog.map((project, i) => {
                    return (
                        <div className="relative" key={i}>
                            <img className="rounded-3xl" src={project.img} alt={project.title} />
                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[80%] h-[80%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-90 rounded-3xl">
                                <p className="py-5 text-center px-2 text-white font-light">
                                    {project.title}
                                    <br />
                                    {project.desc}
                                    <br />
                                    Period : {project.period}
                                </p>

                                <div className="mx-auto">

                                    <a
                                        href={project.website}
                                        className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold rounded-md"
                                    >
                                        Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Courses;