import Link from "next/link"

export default function BotonPrimario({ruta, nombre}) {
    return (
        <>
            <button type="submit" className="bg-btPrimary rounded-lg pd-10">
                <Link href={ruta}>
                    <p className="mt-1 m-3 font-bold font-sans">{nombre}</p>
                </Link>
                
            </button>
        </>
    )
}
export function BotonPrimarioAlt() {
    return (
        <>
            <button type="submit" className="bg-btPrimaryAlt rounded-lg pd-10">
                <p className="mt-0 m-1 font-bold font-sans">Iniciar sesion</p>
            </button>
        </>
    )
}