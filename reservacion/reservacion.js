const formReservacion = document.getElementById('form-reservacion')
const btnReservacion = document.getElementById('btnReservacion')

const reservaciones = []

btnReservacion.addEventListener('click', (e) => {
  e.preventDefault()// Evitar que el formulario se envie de forma automatica
  console.log(formReservacion)

  // campos del formulario
  const tipoReserva = document.getElementByName('reserva').checked.value
  const ciudad = formReservacion.ciudad.value
  const hotel = formReservacion.hotel.value
  const fecha = formReservacion.fecha.value
  const habitaciones = formReservacion.habitaciones.value
  const promocion = document.getElementById('promocion').checked

  if (tipoReserva !== undefined && ciudad !== '' && hotel !== '' && fecha !== '' && habitaciones !== '') {
    const reserva = {
      tipoReserva,
      ciudad,
      hotel,
      fecha,
      habitaciones,
      promocion
    }
    // Agregar la reserva al array de reservacion
    reservaciones.push(reserva)

    // Mostrar  reservacion en la consola
    console.log(reservaciones)
  } else {
    console.error(null)
  }
})
