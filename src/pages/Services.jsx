
import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

function Services() {
 const servicios = [
  { 
    titulo: "Radiología e Imágenes Diagnósticas",
    descripcion: "Contamos con equipos de última geneación para garantizar resultados precisos y confiables. ",
    imagen: "./diagnostico.png",
  },

  {
    titulo: "Laboratorios Clínicos",
    descripcion: "Realizamos análisis clínicos completos con resultados rápidos y certificados.",
    imagen: "./laboratoriosclinicos.jpg",
  },

  {
    titulo: "Oftalmología",
    descripcion: "Ofrecemos atención integral para el cuidado de tus ojos,así como diagnóstico y tratamiento personalizados. ",
    imagen: "./oftamologia.jpeg",
   },

   {
    titulo: "Vacunación",
    descripcion: "Ofrecemos el servicio de vacunación para todas las edades, con el registro y control avalado por la Secretaria de Salud.",
    imagen:"./vacunacion.jpg",
   },
];

return (
    <motion.section
      className="services-section container-fluid py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="container text-center">
        <motion.h2
          className="mb-5"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Servicios
        </motion.h2>

        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <motion.div
              className="col-12 col-md-6 col-lg-3"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <div className="card h-100 shadow-sm border-0 service-card">
                <img
                  src={servicio.imagen}
                  className="card-img-top"
                  alt={servicio.titulo}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{servicio.titulo}</h5>
                  <p className="card-text">{servicio.descripcion}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Services;
