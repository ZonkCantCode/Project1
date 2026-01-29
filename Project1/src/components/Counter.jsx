



const Counter = ({counter, setCounter}) => {

    return (
        <>  
    <h1>Counter</h1>
      <div className="card">
        {/* <button onClick={handleClick}> */}
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
          count is {counter}
        </button>
      </div>
    </>
    );
}
export default Counter;