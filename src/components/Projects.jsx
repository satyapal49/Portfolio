import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa";


const Projects = ()=>{
    return (
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1, ease: "easeOut"}}
        viewport={{once:false, amount: 0.2}}
        id="projects"
        className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">My
                    <span className="text-orange"> Projects</span>
                </h2>
                <p className="text-grey-400.max-w-2xl mx-auto text-center mb-16">A selection of my recent work</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* PROJECT CARD */}
                    {
                        projects.map((project, index)=>(
                            <ProjectCard key={index} {...project}/>
                        ))
                    }
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-flex item-center px-6 py-3 border border-orange rounded-lg font-medium hover:bg-orange/20 transition duration-300">
                        <span>View More Projects</span>
                        <FaArrowRight className="ml-2 mt-1" />
                    </a>
                </div>
            </div>
            
        </motion.div>
    )
}
export default Projects;