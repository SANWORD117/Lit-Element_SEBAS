import { html, css, LitElement } from 'lit-element';

export class UsuarioElement2 extends LitElement {

  constructor() {
    super();
  }

  // FUNCIONES 

  // INGRESO
  ingresarCampaña() {
    const campaña=document.createElement('campaña-element');
    document.body.innerHTML='';
    document.body.appendChild(campaña);
  }

  ingresarEquipo() {
    const equipo=document.createElement('equipo-element');
    document.body.innerHTML='';
    document.body.appendChild(equipo);
  }

  render() {
    return html`
    <style>
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
    </style>

    <div class=" d-flex vh-100 vw-100" style="background-color:white;>

    <!-- Contenedor izquierdo -->

            <div id="container-buttons" class="container w-25 m-3 p-3 border-20 border rounded rounded-xxl">
            <div class="row align-item-center">
            <!-- Botones en el contenedor izquierdo -->
                <div class="d-flex mt-2">
                <button
                    class="w-100 m-2 bg-light btn border border-dark bottom-rounded text-blue"
                    id="usuarios-button"
                    @click=${(e) => this.ingresarUsuario()}
                >
                    <i class="fa-solid fa-person fa-beat-fade"></i> Usuarios
                </button>
                </div>
                <div class="d-flex mt-2">
                <button
                    class="w-100 m-2 bg-light btn border border-dark bottom-rounded text-blue"
                    id="campañas-button"
                    @click=${(e) => this.ingresarCampaña()}
                > 
                    <i class="fa-solid fa-building fa-beat-fade"></i> Campañas
                </button>
                </div>
                <div class="d-flex mt-2">
                <button
                    class="w-100 m-2 bg-light btn border border-dark bottom-rounded text-blue"
                    id="equipos-button"
                    @click=${(e) => this.ingresarEquipo()}
                >
                    <i class="fa-solid fa-users fa-beat-fade"></i> Equipos
                </button>
                </div>
            </div>
            </div>

            <!-- Espacios en la parte superior -->

            <div class="flex-container w-100 h-100 d-flex justify-content-center align-items-center">
            <div class="bg-otro rounded w-75 d-flex flex-column m-3">
                <div class="container d-flex justify-content-center align-items-center h-100 w-100">
                <div class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big">
                    <p class="text-dark" style="margin:10px">10</p>
                </div>
                <div class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big">Usuarios Conectados:</div>
                </div>
            </div>
            <div class="bg-otro rounded w-75 d-flex flex-column m-3">
                <div class="container d-flex justify-content-center align-items-center h-100 w-100">
                <div class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big">
                    <p class="text-dark" style="margin:10px">3</p>
                </div>
                <div class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big">Usuarios Ausentes:</div>
                </div>
            </div>
            <div class="bg-otro rounded w-75 d-flex flex-column m-3">
                <div class="container d-flex justify-content-center align-items-center h-100 w-100">
                <div class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big">
                    <p class="text-dark" style="margin:10px">5</p>
                </div>
                <div class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big">Campañas Activas:</div>
                </div>
            </div>
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('usuario-element2', UsuarioElement2);