import { useState } from "react";
import { Form, Row, Col, Stack, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateTableRequest } from "../../../redux/tablesRedux";


const Table = () => {
  const { id } = useParams();
  const table = useSelector(state => getTableById(state, id));
  const dispatch = useDispatch();

  const options = ["Free", "Busy", "Reserved", "Cleaning"];
  const [status, setStatus] = useState(table?.status);
  const [bill, setBill] = useState(table?.bill);
  const [people, setPeople] = useState(table?.peopleAmount);
  const [maxPeople, setMaxPeople] = useState(table?.maxPeopleAmount);

  useEffect(() => {
    if (table) {
      setStatus(table.status)
      setBill(table.bill);
      setPeople(table.peopleAmount);
      setMaxPeople(table.maxPeopleAmount);
    }
  }, [table]);

useEffect(() =>{
  if(status === 'Busy') {
    setBill(0);
  } else if(status === 'Cleaning' || status === 'Free'){
    setPeople(0);
  }
  if(people > maxPeople) {
    setPeople(setMaxPeople);
  }
}, [status, people, maxPeople]);


  const submit = () => {
    dispatch(updateTableRequest(id, { status, bill, peopleAmount: people, maxPeopleAmount: maxPeople }));
  }


  if (!table)
    return (<h2>Loading...</h2>)

  return(
        <div>
          <h1 className="my-2">Table {id}</h1>
          <Form onSubmit={submit}>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={2} lg={1}><strong>Status:</strong></Form.Label>
              <Col sm={6} lg={3}>
                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select" aria-label="Default select example">
                  {options.map((value) => (<option value={value} key={value}>{value}</option>))}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={1} ><strong>People:</strong></Form.Label>
              <Col sm={1} >
                <Form.Control
                  type="number"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  min="0"
                  max={maxPeople}
                />
              </Col>
              /
              <Col sm={1} >
                <Form.Control
                  type="number"
                  value={maxPeople}
                  onChange={(e) => setMaxPeople(e.target.value)}
                  min="0"
                  max="10"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-3">
              <Stack direction="horizontal">
                <Form.Label column sm={1} lg={1} ><strong>Bill:</strong></Form.Label>
                <p className="m-2">$</p>
                <Col sm={1} >
                  <Form.Control className="my-2"
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    min="0"
                    max="1000"
                  />
                </Col>
              </Stack>
            </Form.Group >
              <Button variant="primary" type="submit">Update</Button>
          </Form>
        </div>

    )
};

export default Table;