import logo from './logo.svg';
import './App.css';
import menu from './data';
import Menulist from './component/menu';
import Category_xx from './component/Category';

function App() {
  return (
    <div className="App">
      <section class="menu">
        {/* <!--title --> */}
        <div class="title">
          <h2>our menu</h2>
          <div class="underline"></div>
        </div>
        {/* <!-- filter buttons --> */}
        <Category_xx />
        {/* <!-- menu items --> */}
        <Menulist items={menu} />
      </section>

    </div>
  );
}

export default App;
