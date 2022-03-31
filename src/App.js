import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

import './App.css';
import RandomUser from './components/RandomUser';
import NavBar from './components/NavBar';


function App() {
  const [randomUsers, setRandomUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pageNumber, setPageNumber] = useState(0)
  const userPerPage = 15;
  const pagesVisited = pageNumber * userPerPage;

  // get data from the API
  useEffect(() => {
    setLoading(true);
    axios.get('https://randomuser.me/api/?page=1&results=41')
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

  const displayUsers = randomUsers.slice(pagesVisited, pagesVisited + userPerPage)

  const pageCount = Math.ceil(randomUsers.length / userPerPage);

  //change page
  const changePage = ({ selected }) => setPageNumber(selected)

  return (
    <div>
      <NavBar />
      <RandomUser
        randomUsers={displayUsers}
        loading={loading}
      />
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButton"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
