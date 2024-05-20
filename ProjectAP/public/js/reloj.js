window.addEventListener("load", () => {
    reloj();
    function reloj() {
      const hoy = new Date();
  
      // get time components
      const horas = hoy.getHours();
      const minutos = hoy.getMinutes();
      const segundos = hoy.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hora = horas < 10 ? "0" + horas : horas;
      const minuto = minutos < 10 ? "0" + minutos : minutos;
      const segundo = segundos < 10 ? "0" + segundos : segundos;
  
      //make clock a 12-hour time clock
      const hourTime = hora > 12 ? hora - 12 : hora;

  
      const time = hourTime + ":" + minuto 
  
      //combine current date and time
      const dateTime =time;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(reloj, 1000);
    }
  });