import React from 'react';

class Search extends React.Component {
    render() {

        return (
            <div className="pb2 f3 white b">
                <p> Search for robots:</p>
                <div>
                    <input
                        style={{ width: '50%' }}
                        type="text"
                        value={this.props.name}
                    />
                    <button>Search</button>
                </div>
            </div>
        )
    }
}
export default Search;