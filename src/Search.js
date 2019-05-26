import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="pb2 f3 white b">
                <div>
                    <input
                        className="w-50 bw2 b--light-purple helvetica tc f4"
                        type="text"
                        onChange={this.props.handleChange}
                        value={this.props.state.value}
                        placeholder="Search for robots..."
                    />
                </div>
            </div>
        )
    }
}
export default Search;