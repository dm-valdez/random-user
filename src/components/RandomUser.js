import React from 'react'
import { css } from "@emotion/react";
import { PacmanLoader } from 'react-spinners';
import DisplayUser from './DisplayUser';

//  overriding the css of Loader
const override = css`
  display: block;
  margin: 300px auto;
`;

const RandomUser = ({ randomUsers, loading }) => {
    // if can't get data from the API, perform loading screen
    const usersList = randomUsers.map(randomUser => <DisplayUser key={randomUser.login.uuid} randomUser={randomUser} />)
    if (loading) {
        return (
            <PacmanLoader
                css={override}
                size={30}
                color={"#006778"}
                loading={loading}
            />
        )
    }
    // else display all users
    return (
        <div className='container'>
            <div className='row'>
                {usersList}
            </div>
        </div>
    );
};

export default RandomUser;