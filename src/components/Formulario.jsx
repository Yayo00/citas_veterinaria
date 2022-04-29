import {useState,useEffect} from "react";
import Error from "./Error";
function Formulario(props){

    const{setPacientes,pacientes,paciente,setPaciente} = props
    
    //Los hooks deben estar declarados antes del return y no estar en condicionales

    //variable a asignar el valor, función modificadora de la variable
    //NOTA: lo correcto es editar la variable desde la función setNombre, no por asignación
    const[nombre,setNombre] = useState('') //Valor inicial del hook

    const[propietario, setPropietario] = useState('')

    const[email,setEmail] = useState('')

    const[fechaAlta, setFechaAlta]= useState('')

    const[sintomas,setSintomas] = useState('')

    const[camposVacios, setCamposVacios] = useState(false)

    //useEfect es un hook que serám ejecutado cada que suceda un cambio
    //si[] es vacío, indicará que el componente está listo
    //si[variable] no es vacío indicará un cambio en esa variable, evitando múltiples render, sólo hasta que cambie

    useEffect(()=>{
        console.log("El componente Formulario está listo");
    },[])

    useEffect(()=>{
        //Valida si paciente es un obj lleno
        if(Object.keys(paciente).length > 0){

            const{nombre,propietario,email,fechaAlta,sintomas} = paciente
            
            setNombre(nombre)
            setPropietario(propietario)
            setEmail(email)
            setFechaAlta(fechaAlta)
            setSintomas(sintomas)

        }
    },[paciente])


    const AgregarActualizarPx = (e)=> {
        
        e.preventDefault()

        //Validación del formulario
        if([nombre,propietario,email,fechaAlta,sintomas].includes('')){
            console.log("Hay al menos un campo vacío");
            setCamposVacios(true)
            return;
        }
        
        setCamposVacios(false)

        //Construir el obj para pasarlo al arreglo de pacientes

        const px = {
            nombre,
            propietario,
            email,
            fechaAlta,
            sintomas            
        }


        //Si ya existe un obj con id
        if(paciente.id){
            px.id = paciente.id
            let pacientesActualizados = pacientes.map(pac => pac.id === px.id ? px : pac)
            setPacientes(pacientesActualizados)
            setPaciente({}) //Reinicia el obj px a nivel de component
        }
        else{
            px.id = Math.random().toString(20).substr(2)
            setPacientes([...pacientes,px])
        }
        

        //Reiniciar form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFechaAlta('')
        setSintomas('')

  
    }

    return(
        <div className="seguimiento w-full mt-10 flex flex-row flex-wrap justify-center md:w-1/2">
            <h1 className="text-center w-full text-2xl mb-3 font-bold">Seguimiento pacientes</h1>
            <h3 className="text-center w-full text-base mb-3 font-bold">Añade pacientes y <span class="text-violet-900">administralos</span></h3>
            <form onSubmit={AgregarActualizarPx} className="rounded-lg bg-white w-3/4 flex flex-wrap flex-row px-5 py-10">
                
                {camposVacios ? <Error mensaje={'Campos vacíos'}/> :""}

                <label className="w-full font-bold text-stone-800 mb-3">Nombre mascota {nombre}</label>
                <input type="text" className="border-2 w-full p-1 mb-3" value={nombre} onChange={
                    e=>{
                        //Agregando el nombre a la variable nombre 
                        //por medio de la función setteadora del state
                        setNombre(e.target.value)
                        
                    }
                } name="" id="" placeholder="Nombre de la mascota"></input>
                <label className="w-full font-bold text-stone-800 mb-3">Nombre propietario</label>
                
                <input type="text" className="border-2 w-full p-1 mb-3" value={propietario} onChange={(e)=>{
                    setPropietario(e.target.value)
                }} name="" id="" placeholder="Nombre del propietario"></input>

                <label className="w-full font-bold text-stone-800 mb-3">Email</label>
                
                <input type="email" className="border-2 w-full p-1 mb-3" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} name="" id="" placeholder="Email de contacto"></input>
                
                <label className="w-full font-bold text-stone-800 mb-3">Alta</label>
                
                <input type="date" className="border-2 w-full p-1 mb-3" value={fechaAlta} onChange={(e)=>{
                    setFechaAlta(e.target.value)
                }} name="" id=""></input>
                
                <label className="w-full font-bold text-stone-800 mb-3">Síntomas</label>
                
                <textarea name="" value={sintomas} onChange={(e)=>{
                    setSintomas(e.target.value)
                }} className="border-2 w-full p-1 mb-3" id="" cols="30" rows="10"></textarea>
                
                <input type="submit" className="bg-violet-900 text-white font-bold px-4 py-1 w-full mt-2" value={
                    Object.keys(paciente).length > 0?"Guarda paciente": "Agregar paciente"
                }></input>
            </form>
        </div>
    )
}

export default Formulario