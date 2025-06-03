import {useEffect,useState} from 'react';
function App(){
  const [name,setName]=useState('');
  const [list,setList]=useState([]);
  const[alert,setAlert]=useState({
    show:false,
    msg:'',
    type:''
  });
  const showAlert=(show=false,msg='please enter something',type='no')=>{
    setAlert({show,msg,type});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name){
      const newitem ={
        id:new Date().getTime().toString(),title:name
      };
      console.log([...list,newitem]);
      setList([...list,newitem]);
      setName('');
      window.alert('woo');
    }else{
      showAlert();
    }
    console.log(alert);
  }
  return(
    <section className='section-center'>
      <form className='grocery' onSubmit={handleSubmit}>
        <h3>菜籃</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='exemple' value={name}
          onChange={(e)=>setName(e.target.value)}></input>
          <button type='submit' className='submit-btn'>submit</button>
        </div>
      </form>
    </section>
  )
}

export default App;
