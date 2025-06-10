const booka = {
  img: 'https://img.pchome.com.tw/cs/items/DJBQD8D900HJ3FK/000001_1717258128.jpg',
  title: '我獨自升級',
  author: 'Chugong',
};
const bookb = {
  img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/093/07/0010930781.jpg&v=62d141fak&w=348&h=348',
  title: '青春之箱',
  author: '三浦糀',
};
const bookc = {
  img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/092/16/0010921685.jpg&v=624ebd6bk&w=348&h=348',
  title: 'SAKAMOTO DAYS 坂本日常',
  author: '鈴木祐斗',
};
export { booka, bookb, bookc };
var data = [
  {
    id: 1,
    img: 'https://img.pchome.com.tw/cs/items/DJBQD8D900HJ3FK/000001_1717258128.jpg',
    title: '我獨自升級',
    author: 'Chugong',
  },
  {
    id: 2,
    img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/093/07/0010930781.jpg&v=62d141fak&w=348&h=348',
    title: '青春之箱',
    author: '三浦糀',
  },
  {
    id: 3,
    img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/092/16/0010921685.jpg&v=624ebd6bk&w=348&h=348',
    title: 'SAKAMOTO DAYS 坂本日常',
    author: '鈴木祐斗',
  },
];
function Booklist() {
  return (
    <section className='blog-center'>
      {data.map(function callfun(value, index) {
        const { id, img, title, author } = value;
        return <Blog key={id} img={img} title={title} author={author}></Blog>;
      })}
    </section>
  );
}
const Blog = ({ img, title, author }) => {};
export default Booklist;
