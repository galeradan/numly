import React from 'react'

const MainContent = ({title, children}) => {
    return (
            <>
                <div className="title">
                    {title}
                </div>
                <div className="content">
                    {children}
                </div>

            </>
           );
}
export default MainContent