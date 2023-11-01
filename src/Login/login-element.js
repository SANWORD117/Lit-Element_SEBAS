import { LitElement, html, css } from "lit-element";
import loginStyle from "./Styles/loginStyle";
export class LoginElement extends LitElement {

    constructor() {
        super();
        this.saludo="Inicio de sesión";
        this.mensaje="";
    }
    static get properties(){
        return{
            saludo:{
               type: String
            },
            mensaje:{
                type: String
            } 
        }
    }

    static get styles() {
        return [loginStyle]
    }

    ingresarLogin(){
        console.log("Entrando...")
        let usuario = this.shadowRoot.querySelector('#usuario').value;
        let password = this.shadowRoot.querySelector('#password').value;
        var recordar = this.shadowRoot.querySelector('#recordar').checked;

        if(usuario == null || usuario == undefined || usuario == ''){

            alert('Atención... Campo usuario esta vacio.');
            this.mostrarError();
            return false;
            
        } else {

            this.mensaje = 'Todo esta bien';
            console.log("Usuario correcto");

        }
        
        if(password == null || password == undefined || password == ''){

            alert('Atención... Campo password esta vacio.');
            this.mostrarError();
            console.log("si");
            return false;

        } else {
            
            this.mensaje = 'Todo esta bn';
            console.log("Password correcto");
            console.log("Ingreso exitoso");
            
            const usuario=document.createElement('usuario-element');
            document.body.innerHTML='';
            document.body.appendChild(usuario);

        }
        
        if (recordar==true) {

            localStorage.setItem('usuario', usuario);
            localStorage.setItem('password', password);

            console.log('Usuario almacenado:', localStorage.getItem('usuario'));
            console.log('Password almacenado:', localStorage.getItem('password'));

        } 

    }

    mostrarError() {
        return html`<div>${this.mensaje}</div>`;
    }

    mostrarUsuario() {
        const storedUsuario = localStorage.getItem("usuario");
        const storedPassword = localStorage.getItem("password");
        if (storedUsuario && storedPassword) {
            this.usuario = storedUsuario;
            this.contraseña = storedPassword;
        }
    }

    
    render() {
        return html`
        <style>
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        </style>

        <div id="container" class="container border border-0 rounded position-relative w-50 ">
            <div class="position-absolute bottom-50 start-50 translate-middle z-index-10" ><img src="./src/img/icon.png" style="height: 200px; width: 200px; margin-top: 150px;"></div>
                <div class="container border border-0 rounded px-5 py-5 bg-light position-relative">
            
                    <center><h2>Iniciar Sesión</h2></center>
                    <div class="mb-3 mt-5 d-flex">
                        <span class="input-group-text bg-icon"><i class="fa-solid fa-user" style="color: #000000;"></i></span>
                        <input type="text" id="usuario" name="usuario" class="w-100 rounded form-control bg-input placeholder-white" placeholder="usuario" required>
                    </div>

                    <div class="mb-3 d-flex">
                        <span class="input-group-text bg-icon"><i class="fas fa-lock style="color: #000000;"></i></span>
                        <input type="password" id="password" name="password" class="w-100 rounded form-control bg-input placeholder-white" placeholder="password" required>
                    </div>

                    <div class="d-flex justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" name="remember" id="recordar" value="" class="form-check-input">
                            <label for="remember" class="form-check-label">Recordar</label>
                        </div>
                        <div class="mi-auto">
                            <span>Recuperar contraseña</span>
                        </div>
                    </div>
                    
                </div>
                
                <button id="btn-login" class="btn position-absolute start-50 translate-middle-x mt-1 w-25 bottom-rounded p-3 text-red" style="background-color: white;" @click=${(e)=>this.ingresarLogin()}><strong>INGRESAR<strong></button>
                    ${this.mostrarError()}

            </div>
        </div>
    `
    }

}

customElements.define('login-element', LoginElement);