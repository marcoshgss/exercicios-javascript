function validaArray(array, num) {
    if(!array && !num) throw new ReferenceError("Envie os parámetros");

    if(typeof array !== 'object') throw new TypeError ("Array deve ser do tipo object");
}