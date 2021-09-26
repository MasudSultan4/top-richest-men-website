import React, { useEffect, useState } from 'react';
import Men from '../Men/Men';
import Worth from '../Worth/Worth';

const Mans = () => {
    const [mans, setMans] = useState([])

    const [worth,setWorth] = useState([])

    useEffect(() => {
        fetch("./risestMan.json")
            .then(res => res.json())
            .then(data => setMans(data))
    }, [])

    const handalToWorth = (man) =>{
        const newWorth = [...worth,man]
        setWorth(newWorth)
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                   <div className="container">
                   <div className="row g-4">
                   {
                        mans.map(men => <Men 
                            handalToWorth={handalToWorth}
                            key={men.id}
                             men={men}
                             ></Men>)
                    } 
                   </div>
                   </div>
                </div>
                <div className="col-md-3">
                    <Worth worth={worth}></Worth>
                </div>
            </div>


        </div>
    );
};

export default Mans;