import React from 'react'


class Buttons extends React.Component{
    render() {
        console.log(this.props);
        const [handleIncrement, handleDecrement, handleNeutral] = this.props.options
        return (
             <div>
                <button type='button' onClick={handleIncrement}>Good</button>
                <button type='button' onClick={handleNeutral}>Neutral</button>
                <button type='button' onClick={handleDecrement}>Bad</button>
            </div>
        )
    }
}

export default Buttons;