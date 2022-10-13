function Buttons({filteredJewelry}) {
    return(
        <div className="cont">
            <button className="change" onClick = {() => filteredJewelry("rings")}>Кольца</button>
            <button className="change" onClick = {() => filteredJewelry("earrings")}>Серьги</button>
            <button className="change" onClick = {() => filteredJewelry("pendants")}>Кулоны</button>
            <button className="change" onClick = {() => filteredJewelry("set")}>Комплекты</button>
            <button className="change" onClick = {() => filteredJewelry("additionalElements")}>Дополнительные элементы</button>
        </div>
    )
    
    }
    export default Buttons;
    