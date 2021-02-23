function sizeUp(){
    let resultado = parseInt(document.querySelectorAll('.size-number').value) ;
    document.querySelectorAll('.size-number').value = "11";
    document.querySelector('.size-number').innerHTML = String(resultado);
    console.log(resultado);
}

