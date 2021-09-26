import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Men = (props) => {
    const { RichestPosition, img, name, Net_Worth, Source_of_Wealth, Country_of_Origin } = props.men
    return (

        <div className="col-4">
            <div className="card" style={{ "width": "18rem" }}>
                <img style={{ "height": "180px" }} src={img} className="card-img-top w" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Richest-Position: {RichestPosition}</h5>
                    <h5>Name: {name}</h5>
                    <h5>Net-Worth: {Net_Worth}</h5>
                    <h5>Country: {Country_of_Origin}</h5>
                    <h6>Work: {Source_of_Wealth}</h6>
                    <button
                        onClick={() => props.handalToWorth(props.men)}
                        className="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Add To Worth Cart</button>
                </div>
            </div>
        </div>

    );
};

export default Men;