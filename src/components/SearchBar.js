import React from 'react'

class SearchBar extends React.Component{
    state = {term: ''}

    onInputChange(event){
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.callMeOnSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} 
                            placeholder="Enter Here!" 
                            onChange={this.onInputChange.bind(this)}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar