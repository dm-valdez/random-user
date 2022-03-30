import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

import './App.css';
import RandomUser from './components/RandomUser';
import Pagination from './components/Pagination';




function App() {
  const [randomUsers, setRandomUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(10);

  // get data from the API
  useEffect(() => {
    setLoading(true);
    axios.get('https://randomuser.me/api/?page=1&results=50')
      .then(res => {
        console.log(res.data.results);
        setRandomUsers(res.data.results);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(true);
      }).finally(() => {
        setLoading(false);
      });

  }, [])

  // get current posts
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUsers = randomUsers.slice(indexOfFirstUser, indexOfLastUser);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>RANDOM USER API</h1>
      <RandomUser randomUsers={currentUsers} loading={loading} />
      <Pagination userPerPage={userPerPage} totalUsers={randomUsers.length} paginate={paginate} />
    </div>
  );
}

export default App;
