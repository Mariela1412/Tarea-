let fecha = new Date('December 14, 2006 09:30:00')
let opciones = {year:'numeric',month:'short',day:'numeric',hour:'numeric', minute:'numeric',hour12:true}
let Fecha = fecha.toLocaleString('en-US',opciones)
console.log(Fecha)
