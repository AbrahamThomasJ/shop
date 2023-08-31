while(true){
    const ingresos = parseInt(prompt('Escribe tus ingresos anuales'));
    const soltero = prompt('Es soltero?').toLocaleLowerCase()
    const hijos = prompt('Tiene hijos?').toLocaleLowerCase()

    if(ingresos > 1200000 && soltero == 'si'){
        console.log('Se concede credito')
        break;
        
    }
    if(ingresos > 1000000 && soltero == 'no' && hijos == 'no'){
        console.log('Se concede credito')
        break;        
    }

    console.log('Lo sentimos, no tiene los requerimientos para adquirir credito.')
    break;

}