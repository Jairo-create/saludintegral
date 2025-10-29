
import React from "react";
import {motion} from "framer-motion";
import "./About.css";

function About (){
   
  const secciones= [
    {
      titulo: "Nuestra Visión",
      descripcion: "Ser una institución de referencia en el cuidado integral de la salud, reconocida por su compromiso humano, innovación tecnológica y excelencia en la atención.",
      imagen:"./vision.jpg",

    },
    {
      titulo: "Nuestra Misión",
      descripcion: "Brindar servicios de salud de alta calidad, accesibles y humanizados, promoviendo el bienestar de nuestros pacientes a través de la prevención, diagnóstico y tratamiento oportuno.",
      imagen: "./mision.jpg",


    },
    {
      titulo:"Nuestros Objetivos",
      descripcion:"Fomentar la mejora continua en la atención médica, fortalecer la capacitación de nuestro personal y consolidar la confianza de la comunidad mediante un servicio ético y profesional.",
      imagen:"./objetivo.jpg",
    },

];

return (
    <motion.section
      className="about-section container-fluid py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nosotros
        </motion.h2>

        <div className="row g-5">
          {secciones.map((item, index) => (
            <motion.div
              className="col-12 col-md-4 text-center"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              <div className="about-card p-4 shadow-sm">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="about-img mb-3"
                />
                <h4>{item.titulo}</h4>
                <p>{item.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
