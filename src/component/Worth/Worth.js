import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Worth = (props) => {
    const { worth } = props || {}

    const totalWorth = (prevValue, currentValue) => prevValue + currentValue.Net_Worth
    const total = worth.reduce(totalWorth, 0)




    return (
        <div>
            <h4>
                <FontAwesomeIcon icon={faUsers} /> Risest-Man: {worth.length}
            </h4>
            <h4>Total-Worth: {total}</h4>
            <p>
                {
                    worth.map(nam => <li style={{ "list-style": "none" }} > <FontAwesomeIcon icon={faUser}/> Name: {nam.name}</li>)
                }</p>



        </div>
    );
};

export default Worth;