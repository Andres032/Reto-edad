new Vue({
    el: '#app',
    data () {
        return{
            informacion: {
                nombre: " ",
                apellido: " ",
                usuario: " ",
                fechanacimiento: " "
            }
        }
    },

    methods: {
        guardar(){
            alert(this.informacion.nombre)
            alert(this.informacion.apellido)
            alert(this.informacion.usuario)
            alert(this.informacion.fechanacimiento)
            
        }
    }

   
    
})