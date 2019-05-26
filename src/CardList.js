import React from 'react';
import Card from './Card.js';
class CardList extends React.Component {

    constructor() {
        super()
        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ data, isLoading: false }))
    }


    render() {
        if (this.state.isLoading) {
            return (
                <div className="tc f1 b">
                    <h1>Loading...</h1>
                </div>
            )
        }
        return (
            <div className="flex flex-wrap">
                {this.state.data.map(robot => {
                    if (robot.name.toLowerCase().includes(this.props.value.toLowerCase())) {
                        return <Card name={robot.name} text={robot.company.catchPhrase} key={robot.id} id={robot.id} />
                    }
                    return null
                })}

            </div>
        )
    }
}
export default CardList;