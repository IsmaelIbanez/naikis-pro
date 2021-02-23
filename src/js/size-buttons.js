function sizeUp(){
    let resultado = parseInt(document.querySelector('.size-number').textContent) + 1 ;
    document.querySelector('.size-number').textContent = String(resultado);
}

function sizeDown(){
    let resultado = parseInt(document.querySelector('.size-number').textContent) - 1 ;
    document.querySelector('.size-number').textContent = String(resultado);
}