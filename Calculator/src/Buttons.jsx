function Buttons({btnValues, btnClick}) {

    return (
        <div>
            {
                btnValues.map(
                    (btnValue) => <button 
                        className="btn"
                        onClick={()=> btnClick(btnValue)}
                    >{btnValue}</button>                                       
                )
            }            
        </div>
    );
}

export default Buttons