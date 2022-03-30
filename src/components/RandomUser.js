import React from 'react'

const RandomUser = ({ randomUsers, loading }) => {
    if (loading) {
        return (
            <div className='d-flex justify-content-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='row'>
                {randomUsers.map((randomUser) => (
                    <div className='col'>
                        <div className="card mb-3" style={{ width: "600px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={randomUser.picture.large} className="img-fluid rounded-start" alt="..."  />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}</h5>
                                        <p className="card-text">Email: <a href="#">{randomUser.email}</a> <br /> Phone/Cell No: {randomUser.phone} / {randomUser.cell}</p>
                                        <a href="#" className="btn btn-primary">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomUser;