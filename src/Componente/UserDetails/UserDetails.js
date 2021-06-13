import React from 'react';
import './UserDetails.css';
const UserDetails = (props) => {
    
    
     const {name,Salary,img,id,email,height,weight,mobileno,city,description} = props.userData;
    return (
        <div className="user-area">
            
            <h2>{name}</h2>
            <img className="saurav-pic" src={img} />
            <div className="user-details">
             <div className="id-ditais">
            <h4>Monthly Salary: ৳ <small>{Salary} BDT</small></h4>
            <p>Id: {id}</p>
            <p>Email: {email}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Mobile Number: {mobileno}</p>
            <p>Location: {city}</p>
            {<button onClick={() => props.headleUser(props.userData)}
             id="main-button">Add Salary</button>}
            </div>
            <div className="description">
             <h3>Description</h3>
             <p>{description}</p>
            </div>
            </div> 
            
        </div>
    );
};

export default UserDetails;