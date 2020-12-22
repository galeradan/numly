import React from 'react'

const MainContent = ({title, children, variant}) => {
    return (
            <>
                <div className="title">
                    {title}
                </div>
                <div className={`container ${variant}`}>
                    {children}
                </div>

            </>
           );
}
export default MainContent