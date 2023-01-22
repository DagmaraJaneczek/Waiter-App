import ListGroup from 'react-bootstrap/ListGroup';
import { Stack, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const routeChange = useNavigate();

  const handleClick = () =>{
    routeChange("/table/:id");
  }

    return(
        <div>
          <h1 className='my-3'>All tables</h1>
          <ListGroup variant='flush'>
            <ListGroup.Item className='px-0'>
              <Stack direction="horizontal" gap={3}>
                <h3 >Table 1</h3>
                <p className='mb-0'><strong>Status:</strong></p>
                <p className='mb-0'></p>
                <Button onClick={handleClick}  variant='primary' className="ms-auto">Show more</Button>
              </Stack>
            </ListGroup.Item>

            <ListGroup.Item className='px-0'>
            <Stack direction="horizontal" gap={3}>
                <h3>Table 2</h3>
                <p className='mb-0'><strong>Status:</strong></p>
                <p className='mb-0'>Busy</p>
                <Button onClick={handleClick} variant='primary' className="ms-auto">Show more</Button>
              </Stack>
            </ListGroup.Item>

            <ListGroup.Item className='px-0'>
            <Stack direction="horizontal" gap={3}>
                <h3>Table 3</h3>
                <p className='mb-0'><strong>Status:</strong></p>
                <p className='mb-0'>Busy</p>
                <Button onClick={handleClick} variant='primary' className="ms-auto">Show more</Button>
              </Stack>
            </ListGroup.Item>

            <ListGroup.Item className='px-0'>
            <Stack direction="horizontal" gap={3}>
                <h3>Table 4</h3>
                <p className='mb-0'><strong>Status:</strong></p>
                <p className='mb-0'>Busy</p>
                <Button onClick={handleClick} variant='primary' className="ms-auto">Show more</Button>
              </Stack>
            </ListGroup.Item>
          </ListGroup>
        </div>

    )
};

export default Home;