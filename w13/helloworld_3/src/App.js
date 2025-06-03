import './App.css';

function App() {
  return (
    <div className='blogs'>
      <div className='section-title'>
        <h2>latest blogs</h2>
      </div>
      <div className='blog-center'>
        <Blog
          img={
            'https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/upload/product/o/2682188615009/20220702053739463582.jpg'
          }
          title={'我所看見的未來 (完全版)'}
          author={'竜樹諒'}
        ></Blog>
        <Blog img={booka.img} title={booka.title} author={booka.author}></Blog>
        <Blog img={bookb.img} title={bookb.title} author={bookb.author}></Blog>
      </div>
    </div>
  );
}
const Blog = ({ img, title, author }) => {
  return (
    <article className='blog'>
      <img src={img} alt={title}></img>
      <div className='blog-content'>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </article>
  );
};

export default App;
