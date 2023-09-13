import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from '../../assets/arrow.svg';

export const RedRect = ({ ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const textStyle = {
        color: isHovered ? 'white' : 'black',
    };
    const buttonStyle = {
        boxShadow: "inset 0px 5px 5px 0px rgba(0, 0, 0, 0.25)",
    }
    return (
        <Link to="/">
            <div className=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="p-1 bg-orange rounded-tl-[20px] rounded-br-[20px] w-[196px] h-[43px] relative"
                    style={buttonStyle}
                >
                    <div className="flex">
                        <p className="p-2" style={textStyle}>{props.text}</p>
                        <img src={arrow} alt="" />
                    </div>

                </div>
            </div>
        </Link>

    );
};

