import React , {useEffect} from 'react'
import {Link} from 'react-router-dom'
export const Nosotros = () => {

    const [equipo,setEquipo] = React.useState([])

    useEffect(() => {
        console.log("desde useeffect")
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data  = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
        const users = await data.json()
        setEquipo(users.civilizations)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => {
                        return <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                            {item.name}
                            </Link>
                            
                        </li>   
                    })
                }
            </ul>
        </div>
    )
}
