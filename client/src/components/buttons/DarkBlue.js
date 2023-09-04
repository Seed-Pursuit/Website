import React from 'react';
import { Link } from 'react-router-dom';

function DarkBlue(props) {
    return (
        <Link to={props.link}>
            <div className="font-subheading blue-code grid bg-[image:var(--src)] bg-[center_center] bg-100% 100% bg-no-repeat relative min-h-[60px] max-h-[60px]">
                {props.text}
            </div>
        </Link>
    );
}

export default DarkBlue;
