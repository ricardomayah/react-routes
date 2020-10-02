import React , {useEffect} from 'react'

export const Nosotros = () => {

    const [equipo,setEquipo] = React.useState([])

    useEffect(() => {
        console.log("desde useeffect")
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data  = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await data.json()
        setEquipo(users)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => {
                        return <li key={item.id}>{item.name}</li>   
                    })
                }
            </ul>
        </div>
    )
}
