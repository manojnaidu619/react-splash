import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {

    state = {images: []}

    callMeOnSubmit = async (term) => {
        const response = await axios.get("https://api.unsplash.com/search/photos",{
            params: {query: term},
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID} `
            }
        })
        const allImages = []
        response.data.results.map((element) => {
            allImages.push(element.urls.regular)
        })
        this.setState({images: allImages})
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: "20px"}}>
                <SearchBar callMeOnSubmit={this.callMeOnSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )   
    }
}

export default App