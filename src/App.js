import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';


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
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt='' /><p className='txt'>I’m ChatGPT, an AI language model created by OpenAI. My main function is to assist with a variety of tasks, including answering questions, generating content, and offering suggestions. </p>
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={gptImgLogo} alt='' /><p className='txt'>I’m ChatGPT, an AI language model created by OpenAI. My main function is to assist with a variety of tasks, including answering questions, generating content, and offering suggestions.I’m ChatGPT, an AI language model created by OpenAI. My main function is to assist with a variety of tasks, including answering questions, generating content, and offering suggestions.I’m ChatGPT, an AI language model created by OpenAI. My main function is to assist with a variety of tasks, including answering questions, generating content, and offering suggestions.</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a message' /><button className='send'><img src={sendBtn} alt='Send' /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
