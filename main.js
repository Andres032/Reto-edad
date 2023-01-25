new Vue({
    el: '#app',
    data: ()=> ({
        message: 'Hello Vue!',
        nombre: " ",
        apellido: " ",
        usuario: " ",
        fechaNacimiento: " ",
        contraseña: "",
        edad: "",
        proyectos: []

    }),
    methods: {
        registrarInformacion() {
            //Generar contraseña aleatoria
            let numeros = "0123456789";
            let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let simbolos = ".?,;-_¡!¿*%$/()[]{}|@><";
            let todo = numeros + letras + simbolos;

            const crearcontraseña = (longitud) => {
                let password = "";
                for (let x = 0; x < longitud; x++) {
                    let aleatorio = Math.floor(Math.random() * todo.length);
                    password += todo.charAt(aleatorio);
                }
                return password;
            };
            
            
            //console.log(crearcontraseña(8))
            const age = this.calcularEdad(this.fechaNacimiento)

            const proyecto = {
                nombre: this.nombre,
                apellido: this.apellido,
                usuario: this.usuario,
                fechaNacimiento: this.fechaNacimiento,
                contraseña: crearcontraseña(8),
                edad: age
            }
           let allRegister = this.proyectos.push(proyecto)
           this.allList(allRegister)

           

            this.nombre = ""
            this.apellido = ""
            this.usuario = ""
            this.fechaNacimiento = ""


        },

        calcularEdad(datebirth) {
            let date = new Date(datebirth)
            let current = new Date()
            let age = current.getFullYear() - date.getFullYear();

            date.setFullYear(current.getFullYear);

            if(current < date){
                --age;
            }

            return age;
        },

        allList(data){
            return data;
        }

        

        

    }

})