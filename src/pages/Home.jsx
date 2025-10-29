
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <Carousel fade interval={7000} pause={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./centrodiagnostico.jpg"
              alt="Atención médica"
            />
            <Carousel.Caption>
              <h3>Atención médica personalizada</h3>
              <p>Profesionales comprometidos con tu bienestar.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./laboratorios.png"
              alt="Laboratorio clínico"
            />
            <Carousel.Caption>
              
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./citas.png"
              alt="Centro de salud"
            />
            <Carousel.Caption>
               <p>Atención con calidad humana y tecnología avanzada.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="info-section">
        <h2>Bienvenidos a Salud Integral</h2>
        <p>
          En <strong>Salud Integral</strong> trabajamos para brindarte un servicio médico de excelencia,
          con equipos de última generación y un enfoque humano en cada consulta.
        </p>
      </div>
    </section>
  );
}

export default Home;
