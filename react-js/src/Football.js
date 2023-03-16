function Football() 
{
    const shoot = function()
    {
        alert("Great Shot!")
    }

    return (
        <button onClick={shoot}>Take the shot!</button>
    )


}

export default Football;