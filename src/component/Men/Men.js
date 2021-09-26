import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Men = (props) => {
    const { RichestPosition, img, name, Net_Worth, Source_of_Wealth, Country_of_Origin } = props.men
    return (

        <div className="col-4">
            <div className="card shadow-lg p-2" >
                <img style={{ "height": "180px" }} src={img} className="card-img-top w" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><strong>Richest-Position: </strong>{RichestPosition}</h5><hr />
                    <h5><b>Name:</b> {name}</h5><hr />
                    <h5> <b>Net-Worth:</b> {Net_Worth}</h5><hr />
                    <h5><strong>Country:</strong> {Country_of_Origin}</h5><hr />
                    <h6><strong>Work:</strong> {Source_of_Wealth}</h6><hr />
                    <button
                        onClick={() => props.handalToWorth(props.men)}
                        className="btn btn-success"><FontAwesomeIcon icon={faUserPlus} /> Add To Worth Cart</button>
                </div>
            </div>
        </div>

    );
};

export default Men;