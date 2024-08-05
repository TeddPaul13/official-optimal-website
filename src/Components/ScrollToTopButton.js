import React, {useState, useEffect} from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import "../App.css";


function ScrollToTopButton() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200){
            setVisible(true)
        }else if( scrolled <= 200){
            setVisible(false)
        }
    };
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    };

    // Add event listener when the component mounts and remove when component mounts to minimise memory leaks.

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);
  return (
  
    <div className='d-flex justify-content-left'>
        <ArrowCircleUpIcon className='scrollUp' onClick = {scrollToTop} style={{display: visible? "flex" : "none"}}/>
    </div>
   
  )
}

export default ScrollToTopButton