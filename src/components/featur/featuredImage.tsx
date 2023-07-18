import React from 'react'
import './styles.css'

const FeaturedImage = (props: {imageURL: string, accentImageUrl: string}) => {
    const {imageURL, accentImageUrl} = props;
    return (
        <div className="featured-image">
            <img className="featured-image__main"src={imageURL} />
            <img className="featured-image__logo"src={accentImageUrl} />
        </div>
    )
}

export default FeaturedImage