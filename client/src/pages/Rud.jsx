import React, { useEffect, useState } from 'react';
import Axios from 'axios'

function Delete() {

    const [phonebook, setPhonebook] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/get-phone').then(res => {
            setPhonebook(res.data.data.phoneNumbers)
        })
    }, [])


    const deletePhone = (id) => {
        Axios.delete(`http://localhost:5000/delete-phone/${id}`)
        window.location.reload(true);
    }
    const [phone, setPhone] = useState(0)

    const updatePhone = async(id) => {
        await Axios.put(`http://localhost:5000/update-phone/${id}`, { id, phone })
        window.location.reload(true);
    }
    
    return (
        <div className="container">

            <h1>PhoneBook List</h1>
            {
                phonebook.map((val, key) => {
                    return <div key={key} className="phone" >
                        <h1>{val.name}</h1>
                        <h1>{val.phone}</h1>
                        <input type="number" placeholder='update Phone...' onChange={(e) => {
                            setPhone(e.target.value)
                        }} />
                        <button className='update-btn' onClick={() => { updatePhone(val._id) }}>Update</button>
                        <button className='delete-btn' onClick={() => { deletePhone(val._id) }}>Delete</button>
                    </div>
                })
            }

        </div>
    );
}

export default Delete;