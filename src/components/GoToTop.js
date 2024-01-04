import React, {useState , useEffect} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 
import { Button } from './Styles'; 
import './gototop.css';

const GoToTop = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	}); 
}; 

useEffect(() => {
    window.addEventListener('scroll', toggleVisible); 
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);


return ( 
    <div style={{height:20}}> 
	<Button className='button'> 
	<FaArrowCircleUp onClick={scrollToTop}  className="icon"
	style={{display: visible ? 'inline' : 'none'}} /> 
	</Button> 
    </div>
); 
} 

export default GoToTop; 
