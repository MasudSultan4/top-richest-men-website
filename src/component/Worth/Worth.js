import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Worth.css";

const Worth = (props) => {
    const { worth } = props || {}

    const totalWorth = (prevValue, currentValue) => prevValue + currentValue.Net_Worth
    const total = worth.reduce(totalWorth, 0)




    return (
        <div>
            <h4>
                <FontAwesomeIcon icon={faUsers} /> Risest-Man: {worth.length}
            </h4>
            <h4>Total-Worth: ${total}</h4>
            <p>
            {
                    worth.map(man => {
                        return (
                            <div className="d-flex align-items-center selectedActors mb-3 text-white">

                                <img className="cart-img" src={man.img} alt="" />
                                <h5>{man.name}</h5>
                            </div>)
                    })
                }

            </p>



        </div>
    );
};

export default Worth;