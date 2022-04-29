function Paciente(props){
    const{paciente,setPaciente,pacientes,setPacientes} = props
    return(
        <section class="bg-white p-5 mx-5 flex flex-wrap flex-row justify-between mb-10 rounded-lg">
            <div class="info w-full mt-2">
                <p class="py-1 font-bold text-stone-800">Nombre: <span class="font-normal">{paciente.nombre}</span></p>
                <p class="py-1 font-bold text-stone-800">Propietario: <span class="font-normal">{paciente.propietario}</span></p>
                <p class="py-1 font-bold text-stone-800">Email: <span class="font-normal">{paciente.email}</span></p>
                <p class="py-1 font-bold text-stone-800">Fecha alta: <span class="font-normal">{paciente.fechaAlta}</span></p>
                <p class="py-1 font-bold text-stone-800">Síntomas: <span class="font-normal">{paciente.sintomas}</span></p>
            </div>
            <button class="mt-4 bg-violet-900 text-white font-bold rounded-md px-5 py-1" onClick={()=>{
                setPaciente(paciente)
            }}>Editar</button>
            <button class="mt-4 bg-red-600 text-white font-bold rounded-md px-5 py-1" id={paciente.id} onClick={()=>{
                let pacientesActuales = pacientes.filter(px => px.id!=paciente.id)
                setPacientes(pacientesActuales)
            }}>Eliminar</button>
        </section>
    )
}

export default Paciente