import "./Home.css";

function Home() {
    return (
      <div>
        <h1 className="welcome">Welcome to the Resume Builder! ❤️</h1>
        <p className="opening"> This is your home page. Click the below emoji and have fun😆</p>
        <label className="swap swap-flip ">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  <div className="swap-on"><div className="evil">😈</div>
    <div className="descr">
      Remember ! Before downloading your Resume make sure you are in the <b>LIGHT MODE</b>
    </div>
  </div>
  <div className="swap-off">
    <div className="good">😇</div><div className="descr">
    In the Form section, enter your details.<br></br>
    In the Preview section, see your details being displayed <br></br>
    In the Portfolio section, you can download your resume!
     </div>
    </div>
</label>

<div class="container">
        <div class="box-card">
            <div class="face front">😊</div>
            <div class="face back">😆</div>
            <div class="face right">😭</div>
            <div class="face left">😂</div>
            <div class="face top">🥹</div>
            <div class="face bottom">😍</div>
        </div>
    </div>

      </div>
    );
  }
  
  export default Home;