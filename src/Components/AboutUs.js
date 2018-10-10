import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


const AboutUs = () => {
    return (
    <div>
        This is the about us page
         {/* <Link to="/">Home</Link> */}
    

     {/* <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
        <div class="container">
        <br></br>
    <h1 class="header center teal-text text-lighten-2">Signature Music Teachers</h1>
        <div class="row center">
        <h5 class="header col s12 light"></h5>
        </div>
     </div>
    </div>
    <div class="parallax"><img src="background1.jpg" alt="piano" />
</div> 
</div>
</div> */}



    <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 center">
              <h3><i class="mdi-content-send brown-text"></i></h3>
              <h4>About Signature Music Teachers</h4>
              <p class="left-align light">Signature Music Teachers was founded in October of 2018.
                The basis for Signture Music Teachers is to help students select a music tutor that is right for them.
                ADD MORE HERE....
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>

    );
};


export default AboutUs;