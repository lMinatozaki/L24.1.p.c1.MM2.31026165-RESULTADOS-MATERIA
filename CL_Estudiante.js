export default class CL_Estudiante{
    constructor(cedula, notaFinal){
        this.cedula = cedula;
        this.notaFinal = notaFinal;
    }

    set cedula(e){
        this._cedula = +e;
    }

    get cedula(){
        return this._cedula;
    }
    
    set notaFinal(e){
        this._notaFinal = +e;
    }

    get notaFinal(){
        return this._notaFinal;
    }
}