import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
    async callMeOnSubmit(term){
        const response = await axios.get("https://api.unsplash.com/search/photos",{
            params: {query: term},
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID} `
            }
        })

        console.log(response.data.results)
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: "20px"}}>
                <SearchBar callMeOnSubmit={this.callMeOnSubmit}/>
            </div>
        )   
    }
}

export default App