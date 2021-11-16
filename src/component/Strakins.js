import {  Container} from 'react-bootstrap';
import { useState } from 'react';
import Planets from './Planets';
import IconsCharacter from './IconsCharacter';


const Strakins = () => {

    const [isShow, setShow] = useState(false)

    return (
        <div>
            <Container>
                <button className="btn btn-primary mx-3 mb-3" onClick={()=> setShow(false)}>PLANETS</button>
                <button className="btn btn-primary mb-3" onClick={()=> setShow(true)}>CHARACTERS</button>

                {isShow ? <IconsCharacter/> : <Planets/> }
            </Container>
        </div>
    )
}

export default Strakins
