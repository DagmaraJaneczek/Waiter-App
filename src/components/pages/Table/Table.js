import { Form, Row, Col, Stack, Button } from "react-bootstrap";

const Table = () => {

  return(
        <div>
          <h1 className="my-2">Table</h1>
          <Form>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={2} lg={1}><strong>Status:</strong></Form.Label>
              <Col sm={6} lg={3}>
                <Form.Select></Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={1} ><strong>People:</strong></Form.Label>
              <Col sm={1} >
                <Form.Control></Form.Control>
              </Col>
              /
              <Col sm={1} >
                <Form.Control></Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-3">
              <Stack direction="horizontal">
                <Form.Label column sm={1} lg={1} ><strong>Bill:</strong></Form.Label>
                <p className="m-2">$</p>
                <Col sm={1} >
                  <Form.Control className="my-2"></Form.Control>
                </Col>
              </Stack>
            </Form.Group>
            <Button variant="primary" type="submit">Update</Button>
          </Form>
        </div>

    )
};

export default Table;