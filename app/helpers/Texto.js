export class Texto
{
    textoValue; //texto
    tipoLetra; //fuentes
    alineacion; //izq, der, centro
    pesoFuente; //bold, normal
    estiloFuente; //italic, normal
    transformacionTexto; //mayusculas, minusculas, con primeras letras en mayuscula
    
    constructor()
    {
        this.textoValue = "";
        this.tipoLetra = "sans-serif";
        this.alineacion = "";
        this.pesoFuente = "normal";
        this.estiloFuente = "normal";
        this.transformacionTexto = "";
        
    } 
}