import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

import './App.css';
import NavBar from './components/NavBar';
import RandomUser from './components/RandomUser';



function App() {
  const [randomUsers, setRandomUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pageNumber, setPageNumber] = useState(0)
  const [userPerPage] = useState(15)
  const pagesVisited = pageNumber * userPerPage;


  // get data from the API
  useEffect(() => {
    setLoading(true);
    axios.get('https://randomuser.me/api/?results=100') 
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

  // paginate function
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
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        disabledClassName={"page-item disabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}


export default App;