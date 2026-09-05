export enum Categorias {
    ALIMENTOS = "ALIMENTOS",
    HOGAR = "HOGAR",
    ELECTRONICOS = "ELECTRONICOS",
    JUGUETES = "JUGUETES"
}

export interface Producto {
    nombre:string,
    descripcion:string,
    precio:number,
    stock:number,
    categoria:Categorias
}
