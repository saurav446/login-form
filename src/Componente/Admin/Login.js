import React from 'react';
import { Button, Card, Container, Form  } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'; 
import { useAuth } from './UserContext';

const Login = () => {
    const auth = useAuth(); 
    return ( 
        <div>
             <Container
            className="d-flex align-items-center justify-content-center"
            style={{minHeight:"100vh"}} >
        <div className="w-100" style={{maxWidth:"400px"}}> 
            <Card >
               <Card.Body>
                   <h2 className="text-center mb-4">Login Up</h2>
                   <Form onSubmit={auth.Login} >
                       <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control onBlur={auth.heandleChange} type="email" name="email"  required></Form.Control>
                       </Form.Group>
                       <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control onBlur={auth.heandleChange} type="password" name="password"   required></Form.Control>
                       </Form.Group>
                       <Button className="w-100" type="submit">
                           Sing Up
                       </Button> 
                   </Form>  
                   <Button onClick={auth.isSignInGoogle} className="w-100 mt-3" type="submit">
                   Sing In WithGoogle
               </Button> 
               </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Please Create an account? <Link to="/signup">SignUp</Link> 
            </div> 
            </div>  
            </Container>
            {/* saurav baura  */}
        </div>
    );
};

export default Login;