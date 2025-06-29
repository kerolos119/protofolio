import React from 'react'
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';


import kero from "../assets/kero.jpeg";
import cv from "../assets/Kerolos Botros.pdf";
import PropTypes from 'prop-types';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt,FaHtml5,FaCss3Alt ,FaPhone, FaCloudsmith, FaJava  } from 'react-icons/fa';
import { useEffect } from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCSharp}  from "react-icons/tb";
import { SiFirebase, SiSpringboot,SiMongodb  } from 'react-icons/si';
import { AiOutlineDotNet } from "react-icons/ai";
import { BsFiletypeSql } from "react-icons/bs";
import { DiMysql } from "react-icons/di";




const SkillIcon = ({ name, icon }) => (
    <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-500/10 p-6 rounded-xl flex flex-col items-center gap-2 "
    >
    {typeof icon === "string" ? (
        <img src={icon} alt={name} className="w-12 h-12" />
    ) : (
        <div className="text-4xl text-green-400  ">{icon}</div>
    )}
    <p className="text-sm font-medium">{name}</p>
    </motion.div>
);

SkillIcon.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,       // for image path
      PropTypes.element       // for JSX icon
    ]).isRequired,
};


const Home = () => {
    const skills = {
        languages: [
        { name: "Java", icon: <FaJava />},
        { name: "HTML5", icon: <FaHtml5 /> },
        {name:"SQL", icon: <BsFiletypeSql />},
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <IoLogoJavascript />},
        { name: "C#", icon: <TbBrandCSharp />}
        ],
        frameworks: [
        { name: "Spring Boot", icon: <SiSpringboot />},
        { name: "MongoDB ", icon:<SiMongodb />},
        { name: "MIT App Inventor", icon: <FaCloudsmith />},
        { name: ".NET core", icon: <AiOutlineDotNet />},
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Mysql", icon: <DiMysql />},
        
        ]
    };
    useEffect(() => {
        if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
            setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
            }, 100); // delay to allow layout to finish rendering
        }
        }
    }, []);
    return (
        <div className="min-h-screen bg-gray-950 text-white w-full">
          {/* Navbar */}
        <nav className="w-full top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
                <div className="flex items-center gap-2">
                <FaCode className="text-green-400 text-xl" />
                <span className="font-semibold">Kerolos Botros</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-white">
                {["home", "about", "skills", "portfolio", "contact"].map((item) => (
                    <a key={item} href={`#${item}`} className="hover:text-purple-400 transition-colors capitalize">
                    {item}
                    </a>
                ))}
                </div>
            </div>
            </div>
        </nav>
    
          {/* Home Section */}
        <section id="home">
            <div className="relative min-h-screen flex items-center justify-between px-4 pt-20 scroll-mt-20">
              {/* Background Blur Circles */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl z-0" />
    
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10 relative">
                {/* Text Content */}
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
                >
                <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-xl">Hi, I&apos;m</span>
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#209A1A] to-gray-500 text-transparent bg-clip-text">
                        Kerolos Botros
                    </h1>
                    </div>
                    <p className="text-xl text-gray-400">Backend Web Developer</p>
    
                    {/* CV Button */}
                    <div className="flex justify-center md:justify-start">
                    <a
                        href={cv}
                        download="Kerolos_Botros_CV.pdf"
                        className="inline-block px-6 py-2 bg-gradient-to-r from-[#61B46B] to-[#209A1A] text-white rounded-full hover:opacity-90 transition-opacity"
                    >
                        Download CV
                    </a>
                    </div>
                </div>
                </motion.div>
    
                {/* Profile Image */}
                <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center items-center"
                >
                <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-green-500/20 to-gray-500/20 rounded-[2rem] overflow-hidden flex justify-center items-center z-10">
                    <img
                    src={kero}
                    alt="Kerolos Botros"
                    className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover"
                    />
                </div>
                </motion.div>
            </div>
            </div>
        </section>
    
          {/* About Section */}
        <section id="about" className="scroll-mt-20">
            <div className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-green-400/10 rounded-[3rem]" />
            <div className="max-w-6xl mx-auto relative">
                <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-gray-400 alighn-center">
                About Me
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                Passionate and driven backend developer with solid experience in building scalable and secure web applications using Java, Spring Boot, and MongoDB.
Graduated in 2025 with a degree in Management Information Systems from El Shorouk Academy.
Strong foundation in backend development, databases, and system design, with additional knowledge in web technologies and networking.
Committed to continuous learning and delivering real-world backend solutions that are efficient, modular, and performance-optimized.
                </p>
            </div>
            </div>
        </section>
    
          {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
            <div className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-green-500/10 rounded-[3rem]" />
            <div className="max-w-6xl mx-auto relative">
                <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-gray-400">
                My Skills
                </h2>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
                >
                {[...skills.languages, ...skills.frameworks].map((skill) => (
                    <SkillIcon key={skill.name} {...skill} />
                ))}
                </motion.div>
            </div>
            </div>
        </section>
      {/* Portfolio Section */}
<section id="portfolio" className="scroll-mt-20 ">
<div className="py-20 px-4 bg-green-500/10 ">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-gray-400">
        Portfolio
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Portfolio Item 1 – GitHub */}
        <motion.div
        whileHover={{ y: -10 }}
        className="bg-gray-500/10 rounded-lg overflow-hidden p-6 flex flex-col justify-between"
        >
        <h3 className="text-xl font-semibold text-white mb-4">GitHub Profile</h3>
        <p className="text-gray-400 mb-4">Explore my open-source projects, backend systems, and contributions.</p>
        <a
            href="https://github.com/kerolos119"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-auto text-green-400 hover:underline"
        >
            Visit GitHub →
        </a>
        </motion.div>

        {/* Portfolio Item 2 – Certifications */}
        <motion.div
        whileHover={{ y: -10 }}
        className="bg-gray-500/10 rounded-lg overflow-hidden p-6"
        >
        <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li>Backend (Java, Spring Boot, MongoDB) – iAcademy</li>
            <li>HCIA – Huawei (NTI)</li>
            <li>CCNA – Cisco</li>
            <li>Internet of Things (ITI)</li>
            <li>MCSA – Microsoft</li>
            <li>MIT App Inventor – Udemy</li>
        </ul>
        </motion.div>
    </div>

    </div>
</div>
</section>
<section id="contact" className="py-20 px-4 scroll-mt-20 bg-green-500/10">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-gray-400">
            Contact Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
        
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <FaEnvelope className="text-green-400" />
                </div>
                <div>
                <h3 className="font-semibold">Email</h3>
            <p className="text-gray-400">kerolosbotros22@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <FaMapMarkerAlt className="text-green-400" />
                </div>
                <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">Cairo, Egypt</p>
                </div>
            
            </div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <FaPhone className="text-green-400" />
                </div>
                <div>
                <h3 className="font-semibold">Number</h3>
                <p className="text-gray-400">+201550602932 <br/> or <br/>+201154926214 </p>
                </div>
            
            </div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <FaLinkedin className="text-green-400" />
                </div>
                <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                    href="https://www.linkedin.com/in/kelolos-shoukry-b35661369/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                >
                    linkedin.com/in/kelolos-shoukry-b35661369/
                </a>
                </div>
            </div>
        
        </div>
        </div>
    </section>

        </div>
    );
    
}

export default Home