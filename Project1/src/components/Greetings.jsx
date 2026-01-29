const Greetings =({word1})=> {

 
  const word2 = "React JS";


  return (
    <>
     
      <h1>Greetings</h1>
      <div>
        <p>
          Hello {word1}, Is {word2} easy ?
        </p>
      </div>
    </>
  );
}

export default Greetings;