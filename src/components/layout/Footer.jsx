import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Sobre este curso</h4>
            <p>
              Material didáctico sobre metadatos desarrollado para estudiantes de Ingeniería Multimedia
            </p>
          </div>
          <div className="footer-section">
            <h4>Equipo</h4>
            <p>
              Consultor: Carlos Cortés Fuentes<br/>
              Autores: Ubiet López, Juan García, Rommel Ospino
            </p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>
              Universidad San Buenaventura de Cartagena<br/>
              info@usbctg.edu.co<br/>
              Última actualización: Octubre 2025
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Universidad San Buenaventura. Todos los derechos reservados.</p>
          <p>Este material está bajo licencia Creative Commons BY-NC-SA 4.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;