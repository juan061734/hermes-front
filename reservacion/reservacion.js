const btnReservacion = document.getElementById('btnReservacion')

const reservaciones = []

btnReservacion.addEventListener('click', (e) => {
  e.preventDefault()// Evitar que el formulario se envie de forma automatica
  const formReservacion = document.getElementById('form-reservacion')
  // campos del formulario
  const reserva = formReservacion.reserva.value
  const ciudad = formReservacion.ciudad.value
  const hotel = formReservacion.hotel.value
  const fecha = formReservacion.fecha.value
  const habitaciones = formReservacion.habitaciones.value
  const promocion = formReservacion.promocion.checked

  if (reserva !== '' && ciudad !== '' && hotel !== '' && fecha !== '' && habitaciones !== '') {
    // add data in object
    const reservacion = {
      reserva,
      ciudad,
      hotel,
      fecha,
      habitaciones,
      promocion
    }

    // Agregar la reserva al array de reservaciones
    if (reservacion) reservaciones.push(reservacion)
    console.log(reservaciones)
  }
})
