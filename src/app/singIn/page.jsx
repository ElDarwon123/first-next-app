
'use client';
import BotonPrimario from "@/components/Botones/boton.primario";
import Cliente from "../admin/cliente/page";

export default function page() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <p className="text-black "
                >has iniciado sesion</p>
                <input className="text-black mb-5" type="text" placeholder="inicia" />
                <BotonPrimario ruta={"/admin/cliente"} nombre={"iniciar"} />

                <BotonPrimario ruta={"/"} nombre={"Vuele a home"} />
            </div>

        </>
    )
}
