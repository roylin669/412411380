import logo from './logo.svg';
import './App.scss';
function App() {
  return (
    <div className='back'>
      <Earth />
      <Earth />
    </div>
  );
}
const Earth = () => {
  return (
    <div className='earth'>
      <h2>hello world</h2>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://images.unsplash.com/photo-1632395627760-72e6eca7f9c7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ></img>
      </div>
      <p>this is my first react code</p>
    </div>
  );
};
export default App;
