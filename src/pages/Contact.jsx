
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Contact.css";

const MySwal = withReactContent(Swal);

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [profesionales, setProfesionales] = useState([]);
  const [vistaPrevia, setVistaPrevia] = useState(null);
  const [nombreArchivo, setNombreArchivo] = useState("");

  const servicios = {
    "Radiología e Imágenes Diagnósticas": ["Dra. Laura Torres", "Dr. Pablo Gómez", "Dra. Mariana Pérez", "Dra. Dania Parra" ],
    "Laboratorios Clínicos": ["Personal Disponible en el momento"],
    "Oftalmología": ["Dr. Andrés Rojas", "Dra. Sofía Díaz", "Dr. Juan Ortiz", "Dra. Ximena Suarez"],
    "Vacunación": ["Personal Disponible en el momento "],
  };

  const handleServicioChange = (e) => {
    const value = e.target.value;
    setProfesionales(servicios[value] || []);
  };

  // Mostrar vista previa del archivo
  const handleArchivoChange = (e) => {
    const archivo = e.target.files[0];
    if (!archivo) {
      setVistaPrevia(null);
      setNombreArchivo("");
      return;
    }

    setNombreArchivo(archivo.name);

    if (archivo.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVistaPrevia({ tipo: "imagen", url: reader.result });
      };
      reader.readAsDataURL(archivo);
    } else if (archivo.type === "application/pdf") {
      setVistaPrevia({ tipo: "pdf" });
    } else {
      setVistaPrevia(null);
    }
  };

  // Generar horarios de 30 minutos entre 7:00 y 19:00
  const generarHorarios = () => {
    const horarios = [];
    for (let h = 7; h < 19; h++) {
      horarios.push(`${String(h).padStart(2, "0")}:00`);
      horarios.push(`${String(h).padStart(2, "0")}:30`);
    }
    horarios.push("19:00");
    return horarios;
  };

  const horariosDisponibles = generarHorarios();

  // Envío del formulario con SweetAlert2 personalizado
  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);

    MySwal.fire({
      title: "¡Cita agendada con éxito!",
      text: "Tu solicitud ha sido registrada. Pronto nos comunicaremos contigo.",
      icon: "success",
      confirmButtonText: "Aceptar",
      background: "#ffffff",
      color: "#333",
      confirmButtonColor: "#0ba6a4",
      iconColor: "#0ba6a4",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInDown
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutUp
        `,
      },
      customClass: {
        title: "swal-title",
        popup: "swal-popup",
        confirmButton: "swal-button",
      },
    });

    reset();
    setVistaPrevia(null);
    setNombreArchivo("");
  };

  return (
    <section className="contact">
      <h2>Agenda tu Cita</h2>
      <p>Selecciona el servicio, el profesional y la fecha que más te convenga.</p>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre */}
        <label>Nombre y Apellido</label>
        <input
          type="text"
          {...register("nombre", {
            required: "El nombre es obligatorio",
            minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
          })}
          placeholder="Ej: Ana Gómez"
        />
        {errors.nombre && <span className="error">{errors.nombre.message}</span>}

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Formato de email inválido",
            },
          })}
          placeholder="Ej: ana@gmail.com"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        {/* Teléfono */}
        <label>Teléfono</label>
        <input
          type="tel"
          {...register("telefono", {
            required: "El número de contacto es obligatorio",
            pattern: {
              value: /^[0-9]{7,15}$/,
              message: "Debe contener entre 7 y 15 dígitos",
            },
          })}
          placeholder="Ej: 3104567890"
        />
        {errors.telefono && <span className="error">{errors.telefono.message}</span>}

        {/* Servicio */}
        <label>Servicio</label>
        <select
          {...register("servicio", { required: "Selecciona un servicio" })}
          onChange={handleServicioChange}
        >
          <option value="">-- Selecciona un servicio --</option>
          {Object.keys(servicios).map((serv) => (
            <option key={serv} value={serv}>
              {serv}
            </option>
          ))}
        </select>
        {errors.servicio && <span className="error">{errors.servicio.message}</span>}

        {/* Profesional */}
        <label>Profesional</label>
        <select
          {...register("profesional", { required: "Selecciona un profesional" })}
          disabled={!profesionales.length}
        >
          <option value="">
            {profesionales.length
              ? "-- Selecciona un profesional --"
              : "Selecciona primero un servicio"}
          </option>
          {profesionales.map((prof) => (
            <option key={prof} value={prof}>
              {prof}
            </option>
          ))}
        </select>
        {errors.profesional && <span className="error">{errors.profesional.message}</span>}

        {/* Fecha */}
        <label>Fecha</label>
        <input
          type="date"
          {...register("fecha", { required: "Selecciona una fecha" })}
          min={new Date().toISOString().split("T")[0]}
        />
        {errors.fecha && <span className="error">{errors.fecha.message}</span>}

        {/* Horario */}
        <label>Horario</label>
        <select {...register("hora", { required: "Selecciona un horario" })}>
          <option value="">-- Selecciona un horario --</option>
          {horariosDisponibles.map((hora) => (
            <option key={hora} value={hora}>
              {hora}
            </option>
          ))}
        </select>
        {errors.hora && <span className="error">{errors.hora.message}</span>}

        {/* Archivo */}
        <label>Adjunta tu orden médica</label>
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png"
          {...register("ordenMedica", {
            required: "Por favor adjunta tu orden médica",
            validate: {
              tipoArchivo: (files) =>
                files &&
                ["application/pdf", "image/jpeg", "image/png"].includes(files[0]?.type)
                  ? true
                  : "Solo se permiten archivos PDF o imágenes (JPG, PNG)",
            },
          })}
          onChange={handleArchivoChange}
        />
        {errors.ordenMedica && (
          <span className="error">{errors.ordenMedica.message}</span>
        )}

        {/* Vista previa */}
        {vistaPrevia && (
          <div className="preview-container">
            {vistaPrevia.tipo === "imagen" ? (
              <img src={vistaPrevia.url} alt="Vista previa" className="preview-img" />
            ) : (
              <div className="pdf-preview">
                <span role="img" aria-label="pdf">
                  📄
                </span>
                <p>{nombreArchivo}</p>
              </div>
            )}
          </div>
        )}

        <button type="submit" className="submit-btn">
          Agendar cita
        </button>
      </form>
    </section>
  );
}

export default Contact;