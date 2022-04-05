import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { css } from "@emotion/react";
// import { PacmanLoader } from 'react-spinners';
import DisplayUser from './DisplayUser';
import SkeletonLoader from './SkeletonLoader';

import '../App.css';

//  overriding the css of Loader
// const override = css`
//   display: block;
//   margin: 300px auto;
// `;

const RandomUser = () => {
    const [randomUsers, setRandomUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage, setUserPerPage] = useState();

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


    // get data from the API
    useEffect(() => {
        setLoading(true);
        axios.get('https://randomuser.me/api/?results=100')
            .then(res => {
                setRandomUsers(res.data.results);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(true);
            }).finally(() => {
                setLoading(false);
            });

    }, [])

    // get the value of user per page in the local storage (default value is 15)
    useEffect(() => {
        const data = window.localStorage.getItem("filter") || 15;
        try {
            setUserPerPage(JSON.parse(data));
        } catch (error) {
            console.log(error);
        }
    }, [])

    // store the user per page to the local storage
    useEffect(() => {
        window.localStorage.setItem("filter", JSON.stringify(userPerPage));
    }, [userPerPage]);


    // --- Pagination Events ---
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(randomUsers.length / userPerPage); i++) {
        pages.push(i);
    };

    const indexOfLastItem = currentPage * userPerPage;
    const indexOfFirstItem = indexOfLastItem - userPerPage;

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    // a function for next button of pagination
    const handleNextButton = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    // a function for previous button of pagination
    const handlePrevButton = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    // same function as next button that add ellipsis if the maximum page limit exceeds
    let pageIncrementButton = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementButton = <li onClick={handleNextButton}>&hellip;</li>
    }

    let pageDecrementButton = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementButton = <li onClick={handlePrevButton}>&hellip;</li>
    }
    // --- End of Pagination Events ---

    // a function that set user per page by select item
    const items = (userPerPage) => {
        const selectedItems = userPerPage.target.value;
        setUserPerPage(selectedItems);
    }

    // a function that slice and maps all users and display it.
    const usersList = randomUsers
        .slice(indexOfFirstItem, indexOfLastItem)
        .map(randomUser =>
            <DisplayUser
                key={randomUser.login.uuid}
                randomUser={randomUser}
            />
        )

    // if can't get data from the API, perform loading screen
    if (loading) {
        return (
            <div className='container'>
                <div className='row'>
                    <SkeletonLoader /> <SkeletonLoader /> <SkeletonLoader />
                    <SkeletonLoader /> <SkeletonLoader /> <SkeletonLoader />
                    <SkeletonLoader /> <SkeletonLoader /> <SkeletonLoader />
                </div>
            </div>
        )
    }

    // else display all users
    return (
        <div className='container'>
            <label htmlFor="select">Set # of items per page</label>
            <select
                size='sm'
                className='form-select form-select-sm mb-3'
                name='select'
                value={userPerPage}
                onChange={items}
            >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
                <option value={60}>60</option>
                <option value={70}>70</option>
                <option value={80}>80</option>
                <option value={90}>90</option>
                <option value={100}>100</option>
            </select>
            <div className='row'>
                {usersList}
                <ul className='page-numbers'>
                    <button
                        onClick={handlePrevButton}
                        disabled={currentPage === pages[0] ? true : false}
                    > Prev
                    </button>
                    {pageDecrementButton}
                    {renderPageNumbers}
                    {pageIncrementButton}
                    <button
                        onClick={handleNextButton}
                        disabled={currentPage === pages[pages.length - 1] ? true : false}
                    > Next
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default RandomUser;