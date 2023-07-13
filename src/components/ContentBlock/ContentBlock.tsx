import React from 'react'
import './styles.css'

const ContentBlock = (props: {children: JSX.Element | JSX.Element[]}) => {
    const {children} = props;
    
    return (
        <div className="content-block">
            {children}
        </div>
        
    )
}

export default ContentBlock