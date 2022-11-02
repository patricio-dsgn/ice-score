const dataplace = document.getElementById('data-place');



let info = '';


info += `<h1>ICE Score</h1>`;


info += `<div class="table">`;


info += `
<div class="row row-title">
    <div class="cell">num</div>
    <div class="cell">title</div>
    <div class="cell">text</div>
    <div class="cell">
        Impacto
        <span>¿Cuál será el impacto de la acción si esta funciona?</span>
    </div>
    <div class="cell">
        Confianza
        <span>¿Cuánta confianza tengo en que la acción funcione?</span>
    </div>
    <div class="cell">
        Facilidad
        <span>¿Cómo de fácil será llevarla a cabo?</span>
    </div>
    <div class="cell">total</div>
</div>





`;



data.forEach((el,idx)=>{
    info += 
    `<div class="row">
        <div class="cell">${idx+1}</div>
        <div class="cell">${el.title}</div>
        <div class="cell">${el.text}</div>
        <div class="cell">${el.i}</div>
        <div class="cell">${el.c}</div>
        <div class="cell">${el.e}</div>
        <div class="cell">${el.i+el.c+el.e}</div>
    </div>`;
})

info += `</div>`;

dataplace.innerHTML = info;
