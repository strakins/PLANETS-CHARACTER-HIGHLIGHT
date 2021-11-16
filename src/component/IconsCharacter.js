import React from 'react'
import Button from 'react-bootstrap/Button'
import SideBarChar from './SideBarChar'
import { useState } from 'react'


const IconsCharacter = () => {
    
    const [isUp, setUp] = useState(false)

    let persons = [
        {
            id: 1,
            perimg: 'images/character_1.png',
            name: 'Brooklyn Simmons',
            friend: 23
        },
        {
            id: 2,
            perimg: 'images/character_2.png',
            name: 'Cameron Williamson',
            friend: 30
        },
        {
            id: 3,
            perimg: 'images/character_3.png',
            name: 'Leslie Alexander',
            friend: 34
        },
        {
            id: 4,
            perimg: 'images/character_4.png',
            name: 'Jenny Wilson',
            friend: 20
        },
        {
            id: 5,
            perimg: 'images/character_5.png',
            name: 'Marvin McKinney',
            friend: 23
        },
        {
            id: 6,
            perimg: 'images/character_6.png',
            name: 'Cameron Williamson',
            friend: 30
        },
        {
            id: 7,
            perimg: 'images/character_7.png',
            name: 'Guy Hawkins',
            friend: 34
        },
        {
            id: 8,
            perimg: 'images/character_8.png',
            name: 'Robert Fox',
            friend: 20
        },
        {
            id: 9,
            perimg: 'images/character_9.png',
            name: 'Brooklyn Simmons',
            friend: 23
        },
        {
            id: 10,
            perimg: 'images/character_10.png',
            name: 'Arderw Franti',
            friend: 30
        },
        {
            id: 11,
            perimg: 'images/character_11.png',
            name: 'Veroni Alpha',
            friend: 34
        },
        {
            id: 12,
            perimg: 'images/character_12.png',
            name: 'Astra Complli',
            friend: 20
        },
    ]
    return (
        <div>
            <div className="d-flex flex-wrap pt-4">
                {
                    persons.map(person => (
                        <div className="berry1 mx-2" key={person.id} onClick={()=> setUp(true)}>
                            <div className="text-center"><img src={person.perimg} alt="" className="image1"/></div>
                            <h5 className="px-2">{person.name}</h5>
                            <h6 className="px-2">Friends: {person.friend}</h6>
                            {isUp ? <SideBarChar/> : "" }
                        </div>
                        
                    ))
                }
            </div>
            <div>
                <Button variant="dark" className="additem"><img src="images/plus_lg.svg" alt="" className="buups" /> </Button>
            </div> 
            
        </div>
    )
}

export default IconsCharacter
