import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';

function App() {
  return (
    <div className='App'>
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img className='logo' src={gptLogo} alt='Logo' /><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img className='addBtn' src={addBtn} alt='new chat' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img className='' src={msgIcon} alt='Query' />What is Programming ?</button>
            <button className='query'><img className='' src={msgIcon} alt='Query' />How to use an API ?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img className='listItemsImg' src={home} alt='Home' />Home</div>
          <div className='listItems'><img className='listItemsImg' src={saved} alt='Saved' />Save</div>
          <div className='listItems'><img className='listItemsImg' src={rocket} alt='Upgrade' />Upgrade to Pro</div>
        </div>
      </div>


      <div className='main'>

      </div>
    </div>
  );
}

export default App;
