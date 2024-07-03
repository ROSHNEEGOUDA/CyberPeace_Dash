import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const WeekContent = ({ weekTitle, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({maxWidth : 439})

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h3 className={` font-semibold text-gray-700 flex items-center cursor-pointer ${isMobile ? "text-xs" : "text-lg"}`} onClick={toggleOpen}>
                {weekTitle}
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="ml-2" />
            </h3>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} ${isMobile ? "text-xs" : ""}`}>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    {content.map((item, index) => (
                        <li key={item._id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WeekContent;
