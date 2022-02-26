import React, { useEffect, useState } from 'react'
import CardUser from './../../components/CardUser/CardUser';
import  Axios  from 'axios';

export default function UserProfile() {

  const [listUser, setListUser] = useState();

  useEffect(() => {
    try {
      Axios({
        url: "http://localhost:3000/users/a3749106-be5b-4810-a770-0ea1768ed6dd",
        method: "GET"
      })
      .then(res => setListUser(res.data))
    } catch (error) {
      console.log(error);
    }
  }, [])
  
  return (
    <CardUser title="Thông tin cá nhân" page="UserProfile"/>
  )
}
