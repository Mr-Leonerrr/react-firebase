import React from 'react'
import PropTypes from 'prop-types'
const Counter = ({initial}) => {
    const [counter, setCounter] = React.useState(initial)
    const add = () => setCounter(counter + 1)
    const decrease = () => setCounter(counter - 1)
    const reset = () => setCounter(initial)
    return(
        <>
        <hr/>
            <h1>contador</h1>
            <h1>El valor de la variable contador es: {counter}</h1>
            <h1>
                {
                    counter > 2 ? 'Es mayor a dos': 'Es menor o igual a dos'
                }
            </h1>
            <button onClick={add}>Add</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}>Decrease</button>
    
        </>
    )

}

Counter.propTypes = {
    initial: PropTypes.number.isRequired
}

Counter.defaultProps = {
    initial: 0
}


export default Counter

