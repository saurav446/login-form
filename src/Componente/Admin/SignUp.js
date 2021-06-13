import React  from 'react';
import { Button, Card, Container, Form  } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { useAuth } from './UserContext';



const SignUp = () => {
    const auth = useAuth();
     
    return (
        <div>
            <Container
            className="d-flex align-items-center justify-content-center"
            style={{minHeight:"100vh"}} >
        <div className="w-100" style={{maxWidth:"400px"}}>
            <Card>
               <Card.Body>
                   <h2 className="text-center mb-4">Sign Up</h2>
                   <Form onSubmit={auth.createAccount}  >
                       <Form.Group id="email">
                          <Form.Label >Email</Form.Label>
                          <Form.Control onBlur={auth.heandleChange} name="email" type="email" required ></Form.Control>
                       </Form.Group>
                       <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control onBlur={auth.heandleChange} name="password"  type="password" required  ></Form.Control>
                       </Form.Group>
                       {/* <Form.Group id="password-comfirm">
                          <Form.Label>Password-Comfirm</Form.Label>
                          <Form.Control type="password"   required></Form.Control>
                       </Form.Group> */}
                       <Button   className="w-100" type="submit">
                           Sing Up
                       </Button>
                   </Form>
               
               </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="login">Login</Link>

            </div>
           
          {auth.user && <p className="red">{auth.user.err}</p>}
            </div>  
            </Container>
        </div>
    );
};

export default SignUp;