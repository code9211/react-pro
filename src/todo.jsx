function clickme(params) {

    alert('this is outer function')
}


function Todo() {

    const usernam='sumit ruhela'
    function clickme(){
        alert('clicked me')
    }
    function sum(a,b) {
        return a+b;
    }
    return (
        <div>
            <h1>sumit ruhela</h1>
            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/5/g/7/-original-imagqhswqrx7sn3w.jpeg?q=70&crop=false" alt="" />

            <button onClick={clickme}>click here</button>
            <h1>{usernam}</h1>
            <h1>sum  of 2 and 5={sum(2,5)}</h1>
        </div>
    )
}

export default Todo