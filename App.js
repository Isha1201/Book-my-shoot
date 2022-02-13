import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './navbar.js';
 import  Carousel from 'react-bootstrap/Carousel';
 import Content from './Content.js';
 import Contact from './Contact.js';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/Contact"></Route>
          <Contact/>
        </Routes>
      </Router> */}
     <Navbar/>
       
      
      <div className="aboutus">
        <h2 className='head'>LUXMI STUDIO</h2>
        <div className="ab1">
          <h1 className="ab">About us</h1>
          <div className="ppp">
          <div className="para">
            <div className='leftside'>
              <div className="green">Photos are the token of our life events. They remain in the memory and after so many years when we see them again they actually help us to feel the same way. There are many mega events of our life in which we hire professional photographers. At present time, marriage photo shoots are in the huge demand and actually the skilled and 
              experienced photographers are not available as per the expectations of the people.Our photographers can photograph the day as a story for you so you can relive each moment every time you look back at the wedding photographs. Save the Date cards, Guest signing book, Wedding album, Parents albums, Wall portraits and canvases, Gift books, Wedding calendars, Thank You cards. You could add any products to your packages.</div>
            </div>
          
          
            <div className='leftside'>
              <div className="blue">           
                 <img src="https://assets.vogue.in/photos/5f3e60a418ed58cd147adc28/4:3/w_2275,h_1706,c_limit/Wedding%20photography.jpg" className='a'></img>
                </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
  
        
        

    <div>
      <Carousel>
        <Carousel.Item>
         
            <img className="d-block w-100" id="imgh" src="https://whatknot.in/wp-content/uploads/2020/04/DSC_8714.jpg" alt="1st image"></img>
           
            <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         
            <img className="d-block w-100" id="imgh" src="https://www.alfaazphotography.com/wp-content/uploads/2019/10/How-to-find-right-Indian-Wedding-Photographer-0015-1024x691.jpg" alt="1st image"></img>
            <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         
        <img className="d-block w-100" id="imgh" src="https://www.alfaazphotography.com/wp-content/uploads/2019/10/How-to-find-right-Indian-Wedding-Photographer-0028.jpg" alt="1st image"></img>
            <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         
        <img className="d-block w-100" id="imgh" src="https://www.meghnarathorephotography.com/wp-content/uploads/2022/01/ruchika-newborn-baby-photoshoot-props-backdrops-wraps-themes-meghna-rathore-photoshoot-indoor-studio-7.jpg" alt="1st image"></img>
            <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div>
      <Content/>
    </div>
      <div className="Kids">
        <h1>Babies and kids photoshoot</h1>
        <div className="kids">
         <div><img src="https://media.gettyimages.com/photos/indian-children-laughing-during-birthday-party-picture-id148193931"></img></div>
          <div><img src="https://d3btuubl2bvm9d.cloudfront.net/images/4efd7f9321e511e484950e2f866a9102/1407905030088_mid.jpg">

          </img>
          </div>
         <div><img src="https://d3btuubl2bvm9d.cloudfront.net/images/4aaad80d747911e4ae4c0e2f866a9102/1434785231163-mid.jpg">

          </img>
          </div>
         <div> <img src="https://d3btuubl2bvm9d.cloudfront.net/images/6cd2935b9e1811e3b14f0e2f866a9102/1501222881491-mid.%20Baby%20Photography"></img>
        
        </div>
        </div>
      </div>
      <div className="Kids">
        <h1>Featured Special Occasion photoshoot</h1>
        <div className="kids">
         <div><img src="https://d3btuubl2bvm9d.cloudfront.net/images/0632df6b3b2611e3b6330e2f866a9102/1539091710666-mid.jpg"></img></div>
          <div><img src="https://d3btuubl2bvm9d.cloudfront.net/images/2c9f81524d0cce7a014d2ccda6e50019/1430975925743-mid.jpg">
          </img>
          </div>
         <div><img src="https://editaphotography.in/wp-content/uploads/2019/08/Pre-maternity_photographer_Pune_012-thegem-portfolio-carusel-3x.jpg">

          </img>
          </div>
         <div> <img src="https://d3btuubl2bvm9d.cloudfront.net/images/6a90c3b48b1a11e4ae4c0e2f866a9102/1419391423179_mid.jpg"></img>
        
        </div>
        </div>
      </div>
      <div className="Kids">
        <h1>Featured Wedding Photoshoots</h1>
        <div className="kids">
         <div><img src="https://d3btuubl2bvm9d.cloudfront.net/images/2c9f84875d683ee6015d6a0ac1ee0017/1534927591928-mid.JPG"></img></div>
          <div><img src="https://static.toiimg.com/photo/msid-87904473/87904473.jpg?179896">
          </img>
          </div>
         <div><img src="https://www.weddingsonline.in/blog/wp-content/uploads/2019/05/7.jpg">
          </img>
          </div>
         <div> <img src="https://www.findbanquet.com/blog/wp-content/uploads/2021/02/south-indian-haldi-970x647.png"></img>
        
        </div>
       
        </div>
      </div>
      <Contact/>
    </div>
  );
}

export default App;
