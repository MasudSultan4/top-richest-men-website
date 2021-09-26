import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Worth.css";

const Worth = (props) => {
    const { worth } = props || {}

    const totalWorth = (prevValue, currentValue) => prevValue + currentValue.Net_Worth
    const total = worth.reduce(totalWorth, 0)




    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <h4>
                <FontAwesomeIcon icon={faUsers} />  <strong>Risest-Man:</strong>  {worth.length}
            </h4><hr />
            <h4 ><strong>Total-Worth:</strong> ${total}</h4><hr />
            <p>
                {
                    worth.map(man => {
                        return (
                            <div className="d-flex align-items-center selectedWorth mb-3 text-white">

                                <img className="worth-img" src={man.img} alt="" />
                                <p className="mb-0">{man.name} ${man.Net_Worth}</p>
                            </div>)
                    })
                }

            </p>



        </div>
    );
};

export default Worth;