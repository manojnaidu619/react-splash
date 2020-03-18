import React from 'react'

const ImageList = (props) => {
    return props.images.map(({description, id, urls}) => {
      return <img key={id} className={id} src={urls.small} alt={description} />
    })
}

export default ImageList