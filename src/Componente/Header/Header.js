import React from 'react'; 
import { useAuth } from '../Admin/UserContext';
import './Header.css';
import { Button } from 'react-bootstrap';


const Header = () => {
    
  const auth = useAuth(); 
    return (
        <div> 
        <div  style={{textAlign:"center"}} className="friend">
            <Button  onClick={auth.isSignINOutGoogl}> Logout </Button>  
            <h1>My Friend List</h1>
        </div>
        </div>
    );
};
 
export default Header;