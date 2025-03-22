import {useEffect, useState} from "react";
import axios from "axios";
// import Card from "../components/Card";
// import { Phone as PhoneIcon } from "lucide-react";
// https://jsonplaceholder.typicode.com/users

interface address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}

interface company {
  name: string,
  catchPhrase: string,
  bs: string
}

interface user {
  id: number,
  name: string,
  username: string,
  email: string,
  address: address
  phone: string,
  website: string,
  company: company
}
function Home() {
  const [users, setUsers] = useState<user[]>([]);
  const [filtered, setFilteredUsers] = useState<user[]>([]);
  const [value, setValue] = useState('');
  
  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    setFilteredUsers(response.data);
    setUsers(response.data);
  }


  const filterData = (e: any) => {
    console.log(e.target.value);
    if(e.target.value === '') {
      setUsers(filtered);
    } else {
      let filteredUsers = users.filter((user) => {
        let filterName = user.name.toLowerCase().includes(e.target.value.toLowerCase());
        let filterEmail = user.email.toLowerCase().includes(e.target.value.toLowerCase());
        let filterCity = user.address.city.toLowerCase().includes(e.target.value.toLowerCase());;
        if(filterName || filterEmail || filterCity){
          return user;
        } 
      });
      console.log(filteredUsers);
      setUsers(filteredUsers);
    }
  }

  useEffect(() => { 
    fetchData()
    },[]);
  return (
    <>
      <input type='text' name='filter' onChange={filterData} />
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    
  )
}

export default Home
