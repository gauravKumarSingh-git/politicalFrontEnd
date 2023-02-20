import React, { useEffect, useState } from 'react'
import AdminNav from '../navbar/AdminNav'
import ViewContact from '../contact/ViewContact'
import axios from 'axios'

function ContactForAdmin() {

    const [contacts, setContacts] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:8080/api/contacts/ViewAllContact")
        .then((data) => {
            console.log(data.data)
            setContacts(data.data);
        })
        .catch((err) => console.log(err));
    },[])

  return (
    <div>
        <AdminNav />
        <ViewContact contacts = {contacts} />
    </div>
  )
}

export default ContactForAdmin