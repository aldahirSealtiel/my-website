//import {carga, atrazar, adelantar, cargarNuevaPagina,estadoInicial, crearListaImagenes, controladorPantallas} from"./helpers/controladorPantallas.js";
import { controladorAgradecimiento } from "./helpers/controladorAgradecimiento.js";
import { controladorCorreo } from "./helpers/controladorCorreo.js";
import { controladordeCajas } from "./helpers/controladordecajas.js";
import{controladorPantallas} from"./helpers/controladorPantallas.js";
import { controladorPrevisualizacion } from "./helpers/controladorPrevisualizacion.js";
import { controladorTexto } from "./helpers/controladorTexto.js";
import { medidas, textos } from "./helpers/resources.js";

let pantallaPrincipal = new controladorPantallas();
let pantallatexto = new controladorTexto();
let pantallacajas= new controladordeCajas();
let pantallaprevisualizacion= new controladorPrevisualizacion();
let pantallaCorreo= new controladorCorreo();
let pantallaAgradecimeinto =new controladorAgradecimiento();

export function App(){
  
    document.getElementById("root").innerHTML=`
    <div id="idle">
        <section id="videofrasecontainer">
            <div  class="videocontainer" >
                <video autoplay muted playsinline loop src="/app/assets/stock-video-huge-agave-plant-rosette-texture.mp4"></video>
            </div>
            <div id="frasesidle">
                <div id="columnaidle">
                    <div id="layout">
                        <div id="logo">
                            <img id="lgoidle" src="/app/assets/casa-don-ramon-logo.png" alt="Logotipo Don Ramon Personalizado">
                        </div>
                        <div id="frase">
                            <h1 class="text-white">BIENVENIDO A TU EXPERIENCIA DON RAMON PERSONALIZADO</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
   `;
   const o = document.getElementById("idle");
    o.addEventListener("click",changeScreen2);
}

function changeScreen2()
{
    console.log("inicio de pantalla de familias de botellas");
    cleanroot();
    document.getElementById("root").innerHTML=`
    <section id="pantallaFamiliaBotellas">
      <div class="psuperior">
            <div id="logopsuperior" class="fadeout">
                <img src="/app/assets/logo-white.png" alt="Logotipo Don Ramon Personalizado">
            </div>
            <div class="titulopantallas" >
                <h1 class="fadeout">PERSONALIZA TU BOTELLA</h1>
            </div>
      </div>  
      <div class="pcentral">
          <div class=controladorCajas>
              <div>
                  <div id="BtnLineaBasica" class="cajaGrid">
                        <img src="/app/assets/familias/linea-basica-300x300.jpeg">
                      <p>Línea Básica</p>
                  </div>
              </div>    
              <div>
                  <div id="BtnLineaPlatinum" class="cajaGrid">
                    <img src="/app/assets/familias/linea-platinium-300x300.jpeg">
                      <p>Línea Platinum</p>
                  </div>
              </div>
                  <div id="BtnLineaMezcal" class="cajaGrid">
                    <img src="/app/assets/familias/mezcal-300x300.jpeg">
                    <p>Línea Mezcal</p>
                  </div>
              <div>
                  <div id="BtnLineaPremium" class="cajaGrid">
                      <img src="/app/assets/familias/linea-premium-300x300.jpeg">
                      <p>Línea Premium</p>
                  </div>
              </div>
        </div>
      </div>
      <div class="pinferior">
        <div id="continuarflujo">
            <button id="botonsiguientepantalla" class="btn btn-dark">
                CONTINUAR
            </button>
        </div>
      </div>
    </section>
    `;
    var BtnLineaBasica = document.getElementById("BtnLineaBasica");
    var BtnLineaPlatinum = document.getElementById("BtnLineaPlatinum");
    var BtnLineaMezcal = document.getElementById("BtnLineaMezcal");
    var BtnLineaPremium = document.getElementById("BtnLineaPremium");
    
    BtnLineaBasica.addEventListener('click', ()=>{
        pantallaPrincipal.selecciones.familia ="basica"
        console.log(pantallaPrincipal.selecciones.familia);
        BtnLineaBasica.style.border="8px solid #BC8542";
        BtnLineaPlatinum.style.border="none";
        BtnLineaMezcal.style.border="none";
        BtnLineaPremium.style.border="none";
        BtnLineaBasica.style.color="white";
        BtnLineaPlatinum.style.color="black";
        BtnLineaMezcal.style.color="black";
        BtnLineaPremium.style.color="black";

    } );
    BtnLineaPlatinum.addEventListener('click', ()=>{
        pantallaPrincipal.selecciones.familia ="platinum"
        console.log(pantallaPrincipal.selecciones.familia);
        BtnLineaBasica.style.border="none"
        BtnLineaPlatinum.style.border="8px solid #BC8542";
        BtnLineaMezcal.style.border="none";
        BtnLineaPremium.style.border="none";
        BtnLineaBasica.style.color="black";
        BtnLineaPlatinum.style.color="white";
        BtnLineaMezcal.style.color="black";
        BtnLineaPremium.style.color="black";
    } );
    BtnLineaMezcal.addEventListener('click', ()=>{
        pantallaPrincipal.selecciones.familia ="mezcal"
        console.log(pantallaPrincipal.selecciones.familia);
        BtnLineaBasica.style.border="none"
        BtnLineaPlatinum.style.border="none";
        BtnLineaMezcal.style.border="8px solid #BC8542";
        BtnLineaPremium.style.border="none";
        BtnLineaBasica.style.color="black";
        BtnLineaPlatinum.style.color="black";
        BtnLineaMezcal.style.color="white";
        BtnLineaPremium.style.color="black";
    } );
    BtnLineaPremium.addEventListener('click', ()=>{
        pantallaPrincipal.selecciones.familia ="premium"
        console.log(pantallaPrincipal.selecciones.familia);
        BtnLineaBasica.style.border="none"
        BtnLineaPlatinum.style.border="none";
        BtnLineaMezcal.style.border="none";
        BtnLineaPremium.style.border="8px solid #BC8542";
        BtnLineaBasica.style.color="black";
        BtnLineaPlatinum.style.color="black";
        BtnLineaMezcal.style.color="black";
        BtnLineaPremium.style.color="white";
    } );
    var botonsiguientepantalla = document.getElementById("botonsiguientepantalla");
    botonsiguientepantalla.addEventListener('click',()=> {
         if(pantallaPrincipal.selecciones.familia != "")
         {
            changeScreen();
         }    
         else
         {
            alert("selecciona una familia");
         }
        
        });
}

function changeScreen(){
    console.log(pantallaPrincipal.selecciones.familia);
    console.log("'Todos los recursos terminaron de cargar!---");
    cleanroot();
    document.getElementById("root").innerHTML=`
    <section id="primeraPantalla">
      <div class="psuperior">
            <div id="logopsuperior" class="fadeout">
                <img src="/app/assets/logo-white.png" alt="Logotipo Don Ramon Personalizado">
            </div>
            <div class="titulopantallas">
                <h1 class="fadeout">SELECCIONA UNA BOTELLA</h1>
            </div>
      </div>  
      <div id="carouselExampleFade" class="pcentral ">
            <div id="marco">
                <div class="slider">
                    
                </div>
            </div>
        </div>
      <div class="pinferior">
        <div id="continuarflujo">
            <button id="botonpantallaanterior" class="btn btn-dark">
                REGRESAR
            </button>    
            <button id="botonsiguientepantalla" class="btn btn-dark">
                CONTINUAR
            </button>
        </div>
      </div>
    </section>
    `;
    
    const next = document.getElementById("botonrigth");
    const prev = document.getElementById("botonleft");
    const continuarButton = document.getElementById("botonsiguientepantalla");
    const botonpantallaanterior = document.getElementById("botonpantallaanterior");
    console.log(medidas);
 
 
    console.log("objeto pantalla principal " + pantallaPrincipal.clicsContinuar);
    //pantallaPrincipal.crearListaImagenes(0);
    cargarNuevaPagina(1);
    
    //next.addEventListener('click', () => pantallaPrincipal.adelantar() );

    //prev.addEventListener("click", () => pantallaPrincipal.atrazar() );
    continuarButton.addEventListener('click', () => cargarNuevaPagina( 1 ));
    botonpantallaanterior.addEventListener('click', () => {
            if(pantallaPrincipal.clicsContinuar == 1)
            {
                pantallaPrincipal.selecciones.familia ="";
            }
            cargarNuevaPagina(-1);
            });   

}



function cargarNuevaPagina( operacion )
{
    
    // console.log("titulo "  + titulopantallas);
    //console.log("cuantos clics al boton continuar llevamos: " + pantallaPrincipal.clicsContinuar);
    //console.log("slide " + pantallaPrincipal.slide);
    console.log("selecciones:");
    console.log( pantallaPrincipal.selecciones);
    if(operacion == 1)
    {   
        switch(pantallaPrincipal.clicsContinuar)
        {
            case 1:
                pantallaPrincipal.selecciones.indiceBotella = pantallaPrincipal.slide;          
                break;
            case 2:
                pantallaPrincipal.selecciones.indiceMarco = pantallaPrincipal.slide;
                break;
        
            case 3:
                pantallaPrincipal.selecciones.indiceFondo = pantallaPrincipal.slide;
                break;
            
        }
        pantallaPrincipal.slide = 1;
    }

    console.log(pantallaPrincipal.selecciones);
    let boton = document.getElementById("botonpantallaanterior");
    if(pantallaPrincipal.clicsContinuar + operacion < 0 )
    {
        pantallaPrincipal.clicsContinuar = 0;
    }
    else
    {
        pantallaPrincipal.clicsContinuar+= operacion;
    }
    
    console.log(textos);
    switch(pantallaPrincipal.clicsContinuar)
    {
        case 0:
            changeScreen2();
            break;
        case 1:     
        case 2:
                //agregar validacion de si es especial aumentar click en 1 y llamado a pantalla siguiente
            if(  pantallaPrincipal.clicsContinuar == 2 && pantallaPrincipal.selecciones.familia == "premium" && operacion == 1)
            {
                pantallaPrincipal.clicsContinuar +=1;
            }
            if(  pantallaPrincipal.clicsContinuar == 2 && pantallaPrincipal.selecciones.familia == "premium" && operacion == -1)
            {
                pantallaPrincipal.clicsContinuar -=1;
            }
        case 3: 
            pantallaPrincipal.seleccionarTitulo();
            pantallaPrincipal.crearListaImagenes();
            seleccionaSlideAmostrar(); 
        break;
        case 4:
        
            pantallatexto.mostrarpantalla(pantallaPrincipal.selecciones.familia);
            break;
        case 5:
            pantallacajas.obtenerimagenes(pantallaPrincipal.selecciones);
            pantallacajas.mostrarpantalla();
            
            break;
        case 6:

            pantallacajas.crearimagen();
            pantallacajas.crearimagen2()
            pantallaprevisualizacion.crearImagen(pantallacajas.impresiondepnatalla);
            pantallaprevisualizacion.crearImagenII(pantallacajas.impresiondepnatalla2);
            pantallaprevisualizacion.mostrarpantalla();
            pantallaprevisualizacion.agregarFondo(pantallaPrincipal.selecciones);
            
            
            break;
        case 7:
            boton.remove();
            pantallaCorreo.mostrarpantalla();
            break;
        case 8:
           
            pantallaAgradecimeinto.mostrarpantalla();
            setTimeout(function(){
                console.log("reinicio de pantalla")
                location.reload();
            }, 4000);
            break;
            
    } 

    console.log("cargarNuevaPagina fin -----");
}

function seleccionaSlideAmostrar()
{
    var slideSeleccionada = 1;
    switch(pantallaPrincipal.clicsContinuar)
    {
        case 0:
                if(pantallaPrincipal.selecciones.indiceBotella != -1)
                {
                    slideSeleccionada = pantallaPrincipal.selecciones.indiceBotella
                }
            break;
        case 1:
            if(pantallaPrincipal.selecciones.indiceMarco != -1)
            {
                slideSeleccionada = pantallaPrincipal.selecciones.indiceMarco;
            }
            break;
        case 2:
            if(pantallaPrincipal.selecciones.indiceFondo != -1)
            {
                slideSeleccionada = pantallaPrincipal.selecciones.indiceFondo;
            }
            break;
    }
    pantallaPrincipal.slide = slideSeleccionada;
    pantallaPrincipal.showSlide(slideSeleccionada);
}



export function cleanroot(){
    document.getElementById("root").innerHTML=``;
}



