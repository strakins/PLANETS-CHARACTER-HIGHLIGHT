import Button from 'react-bootstrap/Button'
import SideBar from './SideBar'
import { useState } from 'react'
import PlanetForm from './PlanetForm'


const Planets = ({planet}) => {

    const [isAppear, setAppear] = useState(false)
    const [isLit, setLit] = useState(false)

    let planetCon = [
        {   id: 1,
            image: 'images/planet_2.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 2,
            image: 'images/planet_5.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 3,
            image: 'images/planet_1.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 4,
            image: 'images/planet_3.svg',
            planet: 'Planet Alphas',
            likes:    '235'
        },
        {   id: 5,
            image: 'images/planet_7.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 6,
            image: 'images/planet_9.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 7,
            image: 'images/planet_8.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 8,
            image: 'images/planet_1.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 9,
            image: 'images/planet_2.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 10,
            image: 'images/planet_5.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 11,
            image: 'images/planet_7.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
        {   id: 12,
            image: 'images/planet_3.svg',
            planet: 'Planet Alpha',
            likes:    '235'
        },
    ]

    return (
        <div>
            <div className="d-flex flex-wrap pt-4 pb-3">
                {
                    planetCon.map(planetry => (
                        <div className="berry mx-2" key={planetry.id} onClick={()=> setAppear(true)}>
                            <div className="text-center"><img src={planetry.image} alt="" /></div>
                            <h5>{planetry.planet}</h5>
                            <h6>Pop: {planetry.likes}</h6>
                            {isAppear ? <SideBar/> : "" }
                        </div>
                         
                    ))
                }
            </div>
            <div>
                <Button variant="dark" className="additem" ><img src="images/plus_lg.svg" alt="" className="buups" onClick={()=> setLit(true)} />  </Button>
                {isLit ? <PlanetForm/> : "" }
            </div> 
        </div>
    )
}

export default Planets
