import React, { useState } from 'react';
import fakeData from '../../fakeData';
import UserCart from '../UserCart/UserCart';
import UserDetails from '../UserDetails/UserDetails';
import './UserCv.css';

const UserCv = () => {
    const AllData = fakeData;
    const [user,setUser] = useState(AllData);
    const [cart,setCart] = useState([]);

    const headleUser = (users) => {
      const newCart = [...cart,users];
      setCart(newCart);
    }
    

    return (
        <div className="user">
            <div className="user-seller">
                {
                  user.map((userData) => 
                  <UserDetails
                
                   userData={userData} 
                   headleUser={headleUser}
                   
                   ></UserDetails>)
                }
            </div>
            <div className="user-data">
            <UserCart cart={cart}></UserCart>
            </div>
           
        </div>
    );
};

export default UserCv;


