export default class CL_Seccion{
    constructor(){
        this.aprobados = 0;
        this.mejorNota = 0;
        this.contadorEstudiantes = 0;
        this.mejorEstudiante = "";
    }

    procesarEstudiante(e){
        this.contadorEstudiantes++;

        if (e.notaFinal >= 48) {
            this.aprobados++;
          }
      
          if (e.notaFinal > this.mejorNota) {
            this.mejorNota = e.notaFinal;
            this.mejorEstudiante = e.cedula;
          }
    }

    calcularPorcentajeAprobados() {
        return (this.aprobados / this.contadorEstudiantes) * 100;
    }

}