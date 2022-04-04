function Functional(props) {
    return(
        <div>
            <h1>I'm a functional component</h1>
            <h2> It is {props.time}</h2>
            <button onClick={()=> props.setType('class')}>Switch to
                class!</button>
        </div>
    )
}

export default Functional
