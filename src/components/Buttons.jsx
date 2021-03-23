import React from 'react'


class Buttons extends React.Component{
    render() {
        // console.log(this.props);
        const {handleVote} = this.props
        return (
             <div>
                <button type='button' onClick={handleVote}>Good</button>
                <button type='button' onClick={handleVote}>Neutral</button>
                <button type='button' onClick={handleVote}>Bad</button>
            </div>
        )
    }
}

export default Buttons;