import { useEffect } from "react"
import Paciente from "./Paciente"

function ListadoPacientes(props){
    const{pacientes,setPaciente,setPacientes} = props
  
    useEffect(()=>{
        if(pacientes.length > 0){
            console.log("Nuevo paciente");
        }
    },[pacientes])

    return(
        <div className="w-full lista mt-10 justify-center md:w-1/2">
            
            {pacientes.length === 0 ?(
                <>
                    <h1 class="text-center w-full mb-3 text-2xl font-bold">No hay pacientes</h1>
                    <h3 class="text-center w-full text-base font-bold">Comienza agregando pacientes <span class="text-violet-900">y aparecerán en este lugar</span></h3>
                </>
                 
            ):(
                <>
                    <h1 class="text-center w-full mb-3 text-2xl font-bold">Listado de pacientes</h1>
                    <h3 class="text-center w-full text-base  font-bold">Administra tus<span class="text-violet-900"> pacientes y citas</span></h3>
                    <div className="citas mt-12">
                    {
                        //Los () implican ya un retorno, sin necesidad de abrir {} y poner return
                        pacientes.map(px => (
                            //Pasar el paciente al componente Paciente
                            <Paciente
                                key ={px.id}
                                paciente = {px}
                                setPaciente = {setPaciente}
                                pacientes = {pacientes}
                                setPacientes = {setPacientes}
                            />         
                        ))
                    }
            </div>    
                </>
            )}
            
            
        </div>
    )
}

export default ListadoPacientes