

import BotonPrimario, { BotonPrimarioAlt } from "@/components/Botones/boton.primario";
import { BotonSecundario } from "@/components/Botones/boton.secundario";
import { BotonTerciario } from "@/components/Botones/boton.terciario";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (

    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center mt-10">
        <p>Bienvenido a mi tal</p>
        <BotonPrimario ruta={"/singIn"} nombre={"Iniciar Sesion"}/>
      </div>

      <h1>Viva la Grasa :v</h1>
      <h3>main page :v</h3>
    </>
  );
}
/*
<div className="mt-4">
        <p>Boton primario</p>
        <BotonPrimario />
        <BotonPrimarioAlt />
      </div>

      <div className="mt-4">
        <p>Boton secundario</p>
        <BotonSecundario/>
      </div>
      <div className="mt-4">
        <p>Boton terciario</p>
        <BotonTerciario />
      </div>
*/