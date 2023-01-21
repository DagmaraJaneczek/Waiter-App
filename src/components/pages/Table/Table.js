import { useState } from "react";
import { Form, Row, Col, Stack, Button } from "react-bootstrap";

const Table = () => {
  const [title, setTitle] = useState('');

  return(
        <div>
          <h1 className="my-2">Table</h1>
          <Form>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={2} lg={1}><strong>Status:</strong></Form.Label>
              <Col sm={6} lg={3}>
                <Form.Select value={title} onChange={(e) => setTitle(e.target.value)} className="form-select" aria-label="Default select example">
                  <option value="1">Free</option>
                  <option value="2">Busy</option>
                  <option value="3">Reserved</option>
                  <option value="4">Cleaning</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={1} ><strong>People:</strong></Form.Label>
              <Col sm={1} >
                <Form.Control>
                </Form.Control>
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