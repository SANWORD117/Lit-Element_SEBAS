import { html, css, LitElement } from 'lit-element';
import equipoStyles from './Styles/equipoStyles'

export class EquipoElement extends LitElement {

    constructor() {
        super();
    this.usuario = localStorage.getItem("usuario");
    this.contraseña = localStorage.getItem('password')
    this.campanas = [
      {
        id: '1',
        nombre: 'Campaña MK-Ultra',
        director: 'Edward R.',
        empresa: 'Broken Arrow',
        estado: 'Activo'
      },
      {
        id: '2',
        nombre: 'Campaña Telmex',
        director: 'Jasper Coleman',
        empresa: 'Telmex',
        estado: 'Inactivo'
      },
      {
        id: '3',
        nombre: 'Campaña Manhunt',
        director: 'Kasper C.',
        empresa: 'Psi-coop',
        estado: 'activo'
      },
    ]; 
    this.usuarios = []; 
    this.usuariosFiltrar = [];
    this.identificacion = '';
    this.nombre = '';
    this.campana = '';
    this.estado = '';
    this.telefono = '';
    this.resultados = '';

    console.log(this.usuario);
    console.log(this.contraseña);
  }

  static get properties() {
    return {
      usuarios: { type: Array },
      usuariosFiltrar: { type: Array },
      identificacion: { type: String },
      nombre: { type: String },
      campana: { type: String },
      estado: { type: String },
      telefono: { type: String },
    }
  }

  static get styles() {
    return [equipoStyles]
  }

  // FUNCIONES 

  // INGRESO
  ingresarUsuario() {
    const usuario=document.createElement('usuario-element');
    document.body.innerHTML='';
    document.body.appendChild(usuario);
  }

  ingresarCampana() {
    const campana=document.createElement('campana-element');
    document.body.innerHTML='';
    document.body.appendChild(campana);
  }

  ingresarEquipo() {
    const equipo=document.createElement('equipo-element');
    document.body.innerHTML='';
    document.body.appendChild(equipo);
  }

  // REGISTRAR
  registrarUsuario() {
    if (this.identificacion && this.nombre && this.campana && this.estado && this.telefono) {
      const nuevoUsuario = {
        identificacion: this.identificacion,
        nombre: this.nombre,
        campana: this.campana,
        estado: this.estado,
        telefono: this.telefono,
      };
      this.usuarios = [...this.usuarios, nuevoUsuario];

      this.identificacion = '';
      this.nombre = '';
      this.campana = '';
      this.estado = '';
      this.telefono = '';
    }
  }

  // MODAL

  AbrirModal() {  
    const Modal = this.shadowRoot.querySelector("#modalRegistro");
    Modal.style.display = "block";
  }

  CerrarModal() {
    const Modal = this.shadowRoot.querySelector("#modalRegistro");
    Modal.style.display = "none";
  }  

  //ACTIVAR USUARIO/CAMPAÑA

  CampanasActivas() {
    return this.campanas.filter(campana => campana.estado.toLowerCase() === 'activo').length;
  }

  UsuariosActivos() {
    return this.usuarios.filter(usuario => usuario.estado === 'activo').length;
  }

  EstadoUsuario(index) {
    this.usuarios[index].estado = this.usuarios[index].estado === 'activo' ? 'inactivo' : 'activo';
    this.requestUpdate();
  }

  // FILTRAR USUARIO POR CAMPAÑA
  FiltrarPorCampaña(e) {
    const campañaSeleccionada = e.target.value;
    if (campañaSeleccionada) {
      this.usuariosFiltrar = this.usuarios.filter(usuario => usuario.campana === campañaSeleccionada);
    } else {
      this.usuariosFiltrar = this.usuarios;
    }
    this.requestUpdate();
  }

  // BUSCAR
  BuscarUsuario() {
    const numero = this.shadowRoot.querySelector("#numero").value;
    const nombre = this.shadowRoot.querySelector("#nombre").value;

    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.telefono === numero && usuario.nombre === nombre
    );

    if (usuarioEncontrado) {
      this.resultados = html`
        <div class="col-12 mt-3 d-flex flex-grow-1">
          <div class="h-100 bg-white border p-3">
            <h1>Usuario Encontrado</h1>
            <p><strong>Identificacion:</strong> ${usuarioEncontrado.identificacion}</p>
            <p><strong>Nombre:</strong> ${usuarioEncontrado.nombre}</p>
            <p><strong>Campaña:</strong> ${usuarioEncontrado.campana}</p>
            <p><strong>Estado:</strong> ${usuarioEncontrado.estado}</p>
            <p><strong>Telefono:</strong> ${usuarioEncontrado.telefono}</p>
          </div>
        </div>
      `;
    } else {
      this.resultados = html`
        <div class="col-12 mt-3 d-flex flex-grow-1">
          <div class="h-100 bg-white border p-3">
            <h1>Usuario no encontrado</h1>
          </div>
        </div>
      `;
    }
    this.requestUpdate();
  }

    render(){
        return html`
        <style>
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        </style>
    
        <div class=" d-flex vh-100 vw-100" style="background-color:white;">
    
          <!-- Contenedor izquierdo -->
    
          <div class="container d-flex flex-column align-items-center w-25 m-3 p-3 border-20 border rounded rounded-xxl">
          <div class="row align-item-center">
          <!-- Botones en el contenedor izquierdo -->
            <div class="d-flex mt-2">
              <button
              class="w-100 m-2 bg-info btn border border-dark bottom-rounded text-blue"
              id="usuarios-button"
              @click=${(e) => this.ingresarUsuario()}
              >
                <i class="fa-solid fa-person fa-beat-fade"></i> Usuarios
              </button>
            </div>
            <div class="d-flex mt-2">
              <button
                class="w-100 m-2 bg-info btn border border-dark bottom-rounded text-blue"
                id="campanas-button"
                @click=${(e) => this.ingresarCampana()}
              > 
                <i class="fa-solid fa-building fa-beat-fade"></i> Campañas
              </button>
            </div>
            <div class="d-flex mt-2">
              <button
              class="w-100 m-2 bg-info btn border border-dark bottom-rounded text-blue "
              id="equipos-button"
              @click=${(e) => this.ingresarEquipo()}
              >
                <i class="fa-solid fa-users fa-beat-fade"></i> Equipos
              </button>
            </div>
          </div>
          </div>
    
            <!-- Contenedor derecho -->
    
            <div id="container-info" class="container d-flex flex-column align-items-center w-100 m-3 p-3 border-20 border rounded rounded-xxl">
    
              <!-- Contenedor superior -->
    
              <div class="flex-container border d-flex flex-row w-55 h-90 justify-content-center align-items-center">
    
                <div class="bg-info rounded m-5 h-50 w-50 d-flex flex-column m-3">
                  <div class="container border border-dark rounded d-flex justify-content-center align-items-center h-100 w-100">
                    <div class="h-50 w-50 bg-icon1 border border-dark container d-flex justify-content-center align-items-center m-3 border-left text-center num-big rounded" style="background-color: #505050;">
                      <p style="margin:10px; color:#90ee90;">${this.UsuariosActivos()}</p>
                    </div>
                    <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-left text-center text-light num-big">Usuarios Conectados:</div>
                  </div>
                </div>
                <div class="bg-info rounded m-5 h-50 w-50 d-flex flex-column m-3">
                  <div class="container border border-dark rounded d-flex justify-content-center align-items-center h-100 w-100">
                    <div class="h-50 w-50 bg-icon1 border border-dark container d-flex justify-content-center align-items-center m-3 border-left text-center num-big rounded" style="background-color: #505050;">
                      <p style="margin:10px; color:#90ee90;">${this.CampanasActivas()}</p>
                    </div>
                        <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-left text-center text-light num-big">Usuarios Ausentes:</div>
                  </div>
                </div>
                <div class="bg-info rounded m-5 h-50 w-50 d-flex flex-column m-3">
                  <div class="container border border-dark rounded d-flex justify-content-center align-items-center h-100 w-100">
                    <div class="h-50 w-50 bg-icon1 border border-dark container d-flex justify-content-center align-items-center m-3 border-left text-center num-big rounded" style="background-color: #505050;">
                      <p style="margin:10px; color:#90ee90;">5</p>
                    </div>
                    <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-left text-center text-light num-big">Campañas Activas:</div>
                  </div>
                </div>
              </div>
    
              <! Contenedor de las Cards -->
    
              <div class="d-flex h-75 w-100 m-3">
                <div class="h-100 w-35">
                  <div class="row align-item-left">
                    <form class="p-3 bg-white rounded-3">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="numero" placeholder="Número del usuario" />
                        <label for="floatingInput">Numero</label>
                    </div>
    
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="nombre" placeholder="Nombre del usuario" />
                        <label for="floatingInput">Nombre</label>
                    </div>
    
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary" type="button" @click="${this.BuscarUsuario}">Buscar</button>
                    </div>
                    </form>
                    <div class="mt-3 mb-2 mr-3" style="border: 1px solid #ccc; padding: 10px;">
                      <div class="bg-color-secondary1 d-flex justify-content-center  align-items-left h-100">
                        <div class="border-dark w-100 h-200">
                          ${this.resultados}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div class="h-100 w-65" >
                  <div class="container-fluid">
                    <div class="page-header">
                      <div class="d-flex flex-column align-items-center justify-content-start">
                        <div class="d-flex">
    
                          <div class="h-25 w-75">
                                              
                            <!-- Filtro por campaña -->
    
                            <select class="form-select m-3" @change="${this.FiltrarPorCampaña}">
                                <option value="">Todas las campañas</option>
                                ${this.campanas.map(
                                    (campaña) => html`
                                        <option value="${campaña.nombre}">${campaña.nombre}</option>
                                    `
                                )}  
                            </select>
                          </div>
    
                          <div class="d-flex h-25 w-25 m-3">
    
                            <button class="btn btn-success mx-3" type="button">Avanzado</button>
    
                            <a class="btn btn-primary" href="javascript:; @click="">
                              Nuevo
                            </a>
    
                          </div>
    
                          <!-- VENTANA MODAL -->
    
                          <div id="modalRegistro" style="display:none">
                            <div class="border-20 border rounded h-100 w-100" rol="document">
                                <div class="m-3 p-3">
                                  <div class="">
                                    <h5 >Registrar Usuario</h5>
                                    <button type="button"></button>
                                  </div>
                                  <div>
                                    <form id="registroForm">
                                      <div class="mb-3">
                                        <label for="identificacion" class="form-label">Identificación</label>
                                        <input type="text" class="form-control" id="identificacion" .value="${this.identificacion}" @input="${(e) => (this.identificacion = e.target.value)}">
                                      </div>
                                      <div class="mb-3">
                                        <label for="nombre" class="form-label">Nombre</label>
                                        <input type="text" class="form-control" id="nombre" .value="${this.nombre}" @input="${(e) => (this.nombre = e.target.value)}">
                                      </div>
                                      <div class="mb-3">
                                        <label for="campana" class="form-label">Campaña</label>
                                        <select class="form-select" id="campana" @change="${(e) => (this.campana = e.target.value)}">
                                        <option value="">Seleccionar campaña</option>
                                        ${this.campanas.map(
                                          (campaña) => html`
                                            <option value="${campaña.nombre}">${campaña.nombre}</option>
                                          `
                                        )}
                                        </select>
                                      </div>
                                      <div class="mb-3">
                                        <label for="estado" class="form-label">Estado</label>
                                        <input type="text" class="form-control" id="estado" .value="${this.estado}" @input="${(e) => (this.estado = e.target.value)}">
                                      </div>
                                      <div class="mb-3">
                                        <label for="telefono" class="form-label">Teléfono</label>
                                        <input type="text" class="form-control" id="telefono" .value="${this.telefono}" @input="${(e) => (this.telefono = e.target.value)}">
                                      </div>
                                      <button type="button" class="btn btn-primary" @click="${this.registrarUsuario}">Enviar</button>
                                    </form>
                                  </div>
                                  <div class="border-20 border rounded">
                                    <button type="button" class="btn btn-secondary">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
    
                        <div class="d-flex column">
                          <div class="d-flex mt-3">
                            <div class="h-100 bg-white border p-3">
                              <div class="table-responsive">
                                <h1>Usuarios</h1>
                                <table class="table table-striped table-hover table-sm">
                                  <thead>
                                    <tr>
                                      <th scope="col">Identificacion</th>
                                      <th scope="col">Nombre</th>
                                      <th scope="col">Campaña</th>
                                      <th scope="col">Estado</th>
                                      <th scope="col">Telefono</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                  ${this.usuarios.map(
                                    (usuario) => html`
                                      <tr>
                                        <td>${usuario.identificacion}</td>
                                        <td>${usuario.nombre}</td>
                                        <td>${usuario.campana}</td>
                                        <td>${usuario.estado}</td>
                                        <td>${usuario.telefono}</td>
                                      </tr>
                                    `
                                  )}
                                </tbody>
                                </table>
                                </div><br>
    
                                <div class="col-12 mt-3 d-flex flex-grow-1" style="display: ${this.campana ? 'block' : 'none'}">
                                  <div class="h-100 bg-white border p-3">
                                    <div class="table-responsive">
                                      <h1>Filtro por campañas</h1>
                                      <table class="table table-striped table-hover table-sm">
                                        <thead>
                                          <tr>
                                            <th scope="col">Identificacion</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Campaña</th>
                                            <th scope="col">Estado</th>
                                            <th scope="col">Telefono</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          ${this.usuariosFiltrar.map(
                                            (usuario) => html`
                                              <tr>
                                                <td>${usuario.identificacion}</td>
                                                <td>${usuario.nombre}</td>
                                                <td>${usuario.campana}</td>
                                                <td>${usuario.estado}</td>
                                                <td>${usuario.telefono}</td>
                                                
                                              </tr>
                                            `
                                          )}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>       
                            </div>
                          </div>
                        </div>
    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        `;
      }
}

customElements.define('equipo-element', EquipoElement);