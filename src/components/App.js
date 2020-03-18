import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
    callMeOnSubmit(term){
        console.log(term)
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