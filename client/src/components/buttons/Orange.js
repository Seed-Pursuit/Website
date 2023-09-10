import React from 'react';
import { Link } from 'react-router-dom';

function Orange(props) {
    return (
        <div>
            <Link to={props.link}>
                <div className="font-subheading orange-code grid bg-[rgb(251,122,90)] rounded-[20px_0px] relative min-h-[50px] hover:shadow-2xl hover:-translate-x-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                    <div className="p-3 text-lg">
                        {props.text}
                    </div>
                </div>
            </Link>
        </div>
    );
}


export default Orange;
