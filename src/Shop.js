import { useState } from 'react';
import { data } from './data';
import './App.css';
import Jewelry from './Jewelry';
import Buttons from './Buttons';

function Shop() {
    const [jewelry, setJewelry] = useState(data);

    const chosenJewelry = (searchTerm) => {
      const newJewelry =data.filter(element => element.searchTerm === searchTerm);
      setJewelry(newJewelry);
    }
      
        return ( <div>
            <Buttons filteredJewelry={chosenJewelry}/>
            <Jewelry anyJewelry={jewelry}/>
         </div>
    
       
      );
    }
    
    
export default Shop;