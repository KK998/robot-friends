import React from 'react';
import Card from './Card.js';
import robots from './Robots.js'
class CardList extends React.Component {
    render() {
        return (
            <div className="flex flex-wrap">
                {robots.map(robot => {
                    if (robot.name.toLowerCase().includes(this.props.value.toLowerCase())) {
                        return <Card name={robot.name} text={robot.text} key={robot.id} id={robot.id} />
                    }
                    return null
                })}

            </div>
        )
    }
}
export default CardList;