import React from 'react';
import Card from './Card.js';
import robots from './Robots.js'
class CardList extends React.Component {
    render() {
        return (
            <div className="flex flex-wrap justify-center">
                { robots.map(robot => <Card name={robot.name} text={robot.text} key={robot.id} id={robot.id} />) }
            </div>
        )
    }
}
export default CardList;