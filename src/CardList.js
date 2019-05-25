import React from 'react';
import Card from './Card.js';
import robots from './Robots.js'
class CardList extends React.Component {
    render() {
        const CardList = robots.map(robot => {
            return <Card url={robot.url} name={robot.name} text={robot.text} key={robot.id} />
        })

        return (
            <div className="flex flex-wrap justify-center">
                {CardList}
            </div>
        )
    }
}
export default CardList;