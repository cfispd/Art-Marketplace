function Popular() {

  const num=[];
  
  for( let i =1; i<9; i++){
    num.push("https://picsum.photos/100/60?random="+i)
  }

  const renderPainting = ()=>{
    return num.map((photo)=>{
      return <img src={photo} className="popular"></img>
    })
  };


  return (
    <div>
      <header className="App-header">
        <p>
          Popular on Marketplace
        </p>
        {renderPainting()}

      </header>
    </div>
  );
}

export default Popular;
