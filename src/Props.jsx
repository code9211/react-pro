function Props(props) {

    console.log(props);


    return (
        <>
            <h1>{props.username}</h1>
            <button onClick={() => { props.update(props.username + 1) }}>click me</button>
        </>
    )
}


export default Props 