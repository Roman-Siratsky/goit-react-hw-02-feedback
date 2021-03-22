import React from 'react';

class Statistic extends React.Component{
    render() {
        const {totalCounter, positiveFeedbackCounter, good, bad, neutral} = this.props
        return <div>
            <h2>Statistics</h2>
            {totalCounter() > 0
                ? <div>
                    <p>{'Good: ' + good}</p>
                    <p>{'Neutral: ' + neutral}</p>
                    <p>{'Bad: ' + bad}</p>
                    <p>{'Total: ' + totalCounter()}</p>
                    <p>{'Positive Feedback: ' + positiveFeedbackCounter() + '%'}</p>
                </div>
                : <div>
                    <p>No Feedbacks yet</p>
                </div>}
        </div>
    }
}

export default Statistic;