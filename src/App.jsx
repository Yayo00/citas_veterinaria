import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/header'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
    //Será el array a pasar al header, a esto se le conoce como props
    const[pacientes, setPacientes]=useState([])
    const[paciente, setPaciente] = useState({})
  
    //Guarda datos en localStorage al iniciar App, 
    useEffect(()=>{
      if(JSON.parse(localStorage.getItem("pacientes")).length > 0){
        setPacientes(JSON.parse(localStorage.getItem("pacientes")))
      }
    },[])


  //Guardar en localStorage
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])

  //Todo dentro del return es código HTML y lo verá el navegador
  // Las {} dentro del fragment generado es código JS
  return (  
    //sólo se puede retornar un elemento
    //Fragment: indica un elemento div, en vez de escribirlo literal <>
    <div className="container mx-auto mt-10 flex flex-wrap flex-row">
  

      <Header/>
      <Formulario
        setPacientes = {setPacientes}
        pacientes = {pacientes}
        paciente ={paciente}
        setPaciente = {setPaciente}
      />
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente = {setPaciente}
        setPacientes = {setPacientes}
      />
    </div>
    
  )
}

export default App
