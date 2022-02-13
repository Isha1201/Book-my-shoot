

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCakeCandles,faChild,faBurger,faGem} from '@fortawesome/free-solid-svg-icons'

import './App.css';
export default function Content(){
    return(<>
    <div className='icons'>
   
    <a href=""> <FontAwesomeIcon icon={faCoffee} /></a>
  

    <a href=""> <FontAwesomeIcon icon={faCakeCandles} /></a>
    <a href=""> <FontAwesomeIcon icon={faChild} /></a>
    <a href=""> <FontAwesomeIcon icon={faBurger} /></a>
    
    <a href=""> <FontAwesomeIcon icon={faGem} /></a>
    
    </div>
    <div className="title">
        <span>wedding</span>
        <span> special occasions</span>
        <span>Babies and kids</span>
        <span>commercial</span>
        <span>Faishon shoot</span>
        
    </div>
    </>)
    


}


