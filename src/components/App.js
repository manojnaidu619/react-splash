import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import './ImageList.css'

class App extends React.Component {

    state = {images: []}

    callMeOnSubmit = async (term) => {
        const response = await axios.get("https://api.unsplash.com/search/photos",{
            params: {query: term},
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID} `
            }
        })
        console.log(response.data.results)
        this.setState({images: response.data.results})
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: "20px"}}>
                <SearchBar callMeOnSubmit={this.callMeOnSubmit}/>
                <div className="container">
                    <ImageList images={this.state.images}/>
                </div>
            </div>
        )   
    }
}

export default App