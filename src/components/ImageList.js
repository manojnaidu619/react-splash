import React from 'react'

const ImageList = (props) => {
    return props.images.map(({description, id, urls}) => {
      return <img key={id} src={urls.regular} alt={description} />
    })
}

export default ImageList