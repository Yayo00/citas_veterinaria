const Error =(props)=>{

    const {mensaje} = props

    return(
        <div className="bg-red-800 text-white text-center font-bold w-full p-3 uppercase mb-3 rounded-md">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error