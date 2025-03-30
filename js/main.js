// Inicialización del mapa (Google Maps)
function initMap() {
    const mallorca = { lat: 39.6953, lng: 3.0176 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: mallorca,
    });
    
    // Marcador en Andratx
    new google.maps.Marker({
      position: { lat: 39.5756, lng: 2.4202 },
      map,
      title: "S&C Fontanería (Andratx)",
    });
    
    // Área aproximada de servicio (polygon)
    const serviceArea = new google.maps.Polygon({
      paths: [
        { lat: 39.9, lng: 2.7 },  // Puntos aproximados de Mallorca
        { lat: 39.9, lng: 3.3 },
        { lat: 39.3, lng: 3.3 },
        { lat: 39.3, lng: 2.7 }
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.1,
    });
    serviceArea.setMap(map);
  }
  
  // Validación del formulario
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const phone = this.querySelector("input[type='tel']").value;
    
    if (!/^[0-9]{9}$/.test(phone)) {
      alert("Por favor, introduce un teléfono válido (9 dígitos)");
      return;
    }
    
    alert("Formulario enviado. ¡Gracias!");
    this.reset();
  });
  
  // Scroll suave para enlaces del navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });