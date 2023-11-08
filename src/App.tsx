function App() {
  const url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
  return (
    <div className="App">
      <div className="columnita" />
      <div className="contenido">
        <div className="titulito">
          Un titulito
        </div>
        <div className="grid-container">
          <div className="grid">
            <div className="item">
              <img src={url} alt='' />
            </div>
            <div className="item">
              <img src={url} alt='' />
            </div>
            <div className="item">
              <img src={url} alt='' />
            </div>
            <div className="item">
              <img src={url} alt='' />
            </div>
            <div className="item">
              <img src={url} alt='' />
            </div>
            <div className="item">
              <img src={url} alt='' />
            </div>
            <div className="item">
              <img src={url} alt='' />
            </div>
            <div className="item">
              <img src={url} alt='' />
            </div>
            <div className="item">
              <img src={url} alt='' />
            </div>
            <div className="item">
              <img src={url} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
