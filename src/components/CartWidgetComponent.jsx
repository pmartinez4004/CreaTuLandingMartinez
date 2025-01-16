import myImage from '../img/cartJ.jpg'; 

export default function CartWidget(){
  return (
    <div className='CartContainer'>
      <img src={myImage} alt="Logo" />
      <span className='ContCarrito'>1</span>
    </div>
  );
};