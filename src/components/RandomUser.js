import React from 'react'
import { css } from "@emotion/react";
import { PacmanLoader } from 'react-spinners';
import DisplayUser from './DisplayUser';

const override = css`
  display: block;
  margin: 300px auto;
`;


const RandomUser = ({ randomUsers, loading }) => {
    const usersList = randomUsers.map(randomUser => <DisplayUser randomUser={randomUser} />)
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
    return (
        <div className='container'>
            <div className='row'>
                {usersList}
            </div>
        </div>
    );
};

export default RandomUser;