import './App.css';
import gptLogo from './assets/chatgpt.svg';

function App() {
  return (
    <div className='App'>
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img className='logo' src={gptLogo} alt='' /><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img className='addBtn' src='' alt='' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img className='' src='' alt='' />What is Programming ?</button>
          </div>
        </div>
        <div className='lowerSide'>
  
        </div>
      </div>


      <div className='main'>

      </div>
    </div>
  );
}

export default App;
