import { Rol } from "./Rol";

export class User{
    idUser:number;
    nombre:string;
    apellido:string;
    username:string;
    password:string;
    dni:string;
    telefono:string;
    direccion:string;
    imagen:ArrayBuffer;
    estado:string;
    idRol:number;
    rol:Rol;


    constructor(){
        this.idUser = 0;
        this.nombre = "";
        this.apellido = "";
        this.username = "";
        this.password = "";
        this.dni = "";
        this.telefono = "";
        this.direccion = "";
        this.imagen = new ArrayBuffer(0);
        this.estado = "";
        this.idRol = 0;
        this.rol = new Rol();
    }
}