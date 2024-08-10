import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Home.css'; // Import CSS file
// import Join from './Join';
export default function Home() {
    const [RoomCode, SetRoomCode] = useState("");
    console.log(RoomCode);
    const navigate = useNavigate();

    const submitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${RoomCode}`);
    };

    return (
        <div className="form-container">
         {/* Apply class */}
        {/* <a href="http://localhost:3000/room/sdfg">Join</a> */}
        <center><h1><b>Join </b></h1></center>
            <form onSubmit={submitCode}>
                <label htmlFor=''>Enter Name<br /></label>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Name"
                    value={RoomCode}
                    onChange={(e) => SetRoomCode(e.target.value)}
                    className="input-field" 
                /><br />
                <button type="submit">Join</button>
            </form>
        </div>
        
    );
}
