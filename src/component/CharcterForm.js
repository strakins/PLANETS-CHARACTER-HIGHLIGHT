import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'


const CharcterForm = () => {

    return (
        <div className="bg-dark addform text-info rounded-3 p-2 w-50">
            <div>
            <div className="d-flex justify-content-end"><img src="images/x-square-fill.svg" alt="" className="buups"/></div>
            <h1>Character</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text"  />
                    <Form.Label className="text1">Paste the url of a JPG or PNG of max 20kb </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Select className="mb-3" id="inlineFormCustomSelect">
                    <option value="0">Choose...</option>
                    <option value="1">Jane Cooper</option>
                    <option value="2">Rober Myrr</option>
                    <option value="3">Stone Brian</option>
                </Form.Select>
                <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit" className="pb-2 text2">Cancel</Button>
                <Button variant="primary" type="submit" className="mx-2 text2">Create Character</Button>
                </div>                
            </Form>
        </div>
    )
}

export default CharcterForm
