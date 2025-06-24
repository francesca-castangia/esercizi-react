export function MuoseClicker (){
    function handleButtonClick(event){
        console.log(event.currentTarget.name)
    }

    function handleImageClick(event){
        event.stopPropagation();
        console.log(event.currentTarget.name);
    }

    return(
        <div>
            <button name="one" onClick={handleButtonClick}>Click me</button>
            <button name="two" src="https://via.placeholder.com/50" alt="example" onClick={handleButtonClick}>
                <img width={24} height={24} onClick={handleImageClick} />
                Click me
            </button>
        </div>
    )
}

export default MuoseClicker