import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PlanetForm = () => {
    return (
        <div className="bg-dark text-info rounded-3 p-2 w-50">
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
                <div className="d-flex justify-content-end ">
                <Button variant="primary" type="submit">Cancel</Button>
                <Button variant="primary" type="submit" className="mx-2">Create Planet</Button>
                </div>                
            </Form>
        </div>
    )
}

export default PlanetForm
