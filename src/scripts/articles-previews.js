/*
 * Ejercicio: define una clase que, al presionar “See All Insights”, muestre las
 * tarjetas ocultas inicialmente. Considera accesibilidad y rendimiento; luego
 * instancia la clase solo cuando el componente exista en la página.
 */
export default function showCard() {
  const btn = document.getElementById('showData')
  
  btn.addEventListener('click', ()=>{
    const hiddenCads = document.querySelectorAll('.itenHiden')

    hiddenCads.forEach((card)=>{card.classList.remove('itenHiden')})

    btn.style.display = 'none'
  })
}