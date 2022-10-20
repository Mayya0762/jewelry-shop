import { useState } from 'react';


function Jewelry({anyJewelry}) {
    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    };
    const[showText, setShowText] = useState(false);
    return(
        <div className="products">
{anyJewelry.map((element => {
    const{id, name, price, image, description, showMore} = element;
      
    return(
        <div className="product-card" key={id}>
            
            <img className="hover-image-scale" src={image} width="300px" height="300px" alt="foto" />
            
            <div className="info">
            <h5>{name}</h5>
            <div className='purchase'>
            <h6>Цена: {price} руб.</h6>
            <button className='buy'>Купить</button>
            </div>
            <p className='show' >{showMore ? description : description.substring(0, 22) + "..."}
            <button className='lessMore' onClick={() => showTextClick(element)}>{showMore ? "Меньше..." : "Больше..."}</button></p>
            </div>
            
        </div>
    )
})

)}
        </div>
    )
}
export default Jewelry;
