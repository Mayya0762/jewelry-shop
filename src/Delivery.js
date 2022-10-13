import image from './one.png';
function Delivery() {
    return(
    <div className='delivery'>
        <div className='rotate' >
            <img src={image} width="400px" alt="foto" className='imgOne'/>
        </div>
        <div>
        <h1>Доставка</h1>
        <h2>По Иркутску</h2>
        <p>Самовывоз (ул. Лермонтова, 267, 2 подъезд)</p>
        <p>Курьером — от 280 ₽</p>
        <h2>По России</h2>
        <p>Почтой России (7-10 рабочих дней) — от 300 ₽</p>
        <p>СДЭК (5-7 рабочих дней) — от 300 ₽ в зависимости от региона.</p>
        <h2>По миру</h2>
        <p>Почтой России — от 650 ₽, срок — от 14 дней</p>
        

        
            <h1>Оплата</h1>
            <p>Вы можете оплатить свой заказ любым удобным способом:</p>
            <ul>
                <li>банковской картой на сайте</li>
                <li>через PayPal (для иностранных граждан)</li>
            </ul>
        </div>
        </div>
        
    
    ) 
    
}
export default Delivery;