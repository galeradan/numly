import React from 'react'

const MainContent = ({title, children, variant}) => {
    return (
            <>
                <div className="title">
                    {title}
                </div>
                <div className={variant}>
                    {children}
                </div>

            </>
           );
}
export default MainContent