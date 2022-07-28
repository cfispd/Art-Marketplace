
function Like() {

    const num=[];
  
    for( let i =1; i<9; i++){
      num.push("https://picsum.photos/100/60?random="+i+10)
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
            You May Like
          </p>
          {renderPainting()}
        </header>
      </div>
    );
  }
  
  export default Like;
  