


function About(){


    var count= 0

    function incre(){
        count = count +1
        document.getElementById('sp').innerHTML = count
    }

    return(
         <>
        <h1 id='sp'> This is about page</h1>
        <button onClick={incre}> Click me </button>
        </>
    )
}

export default About