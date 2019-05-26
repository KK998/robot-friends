import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div className="mw5 center bg-near-white br3 pa3 pa4-ns mv3 ba b--black-10 grow shadow-5">
                <img className=" br-100 ba b--black-10 " src={`https://robohash.org/${this.props.id}?200x200`} alt="robot" />
                <h1 className="f4 purple tc">{this.props.name}</h1>
                <hr className="mw3 bb bw1 b--black-10" />
                <p className="lh-copy tj measure center f6 black-70">{this.props.text}</p>
            </div>
        )
    }
}

export default Card;