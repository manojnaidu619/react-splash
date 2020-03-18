import React from 'react'

const ImageList = (props) => {
    return props.images.map((element) => {
      return <img src={element} alt="from Unsplash"/>
    })
}

export default ImageList