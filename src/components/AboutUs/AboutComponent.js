import React from 'react';
import haris from "../../images/haris.JPG"
import yousuf from "../../images/yousuf.jpg"
import bilalA from "../../images/bilal.JPG"
import bilalz from "../../images/bilalz.JPG"
import "../../styles/AboutComponent.css"
function SingleComponent(props) {

    return (
        <div className='about'>

            <div className='about--container'>

                <div className='about--photo'>
                    <img src={yousuf} />
                </div>

                <div className='about--descLeft'>

                    <h3>Muhammad Yousuf</h3>

                    <h4>Architect</h4>

                    <p>Muhammad Yousuf was the Architect of the team, he played a major role in documentation design and coding area and also leaded the team in technical aspect</p>
                </div>
            </div>



            <div className='about--container'>

                <div className='about--descRight'>

                    <h3>Ali Muhammad Haris</h3>

                    <h4>Developer</h4>

                    <p>He was the developer in the team and assisted the team with his documentation design and coding skills</p>
                </div>

                <div className='about--photoRight'>
                    <img src={haris} />
                </div>
            </div>


            <div className='about--container'>

                <div className='about--photo'>
                    <img src={bilalA} />
                </div>

                <div className='about--descLeft'>

                <h3>Bilal Ahmed</h3>

                <h4>Developer</h4>

                    <p>He was also the developer in the team. His contribution were in UI design , document design and coding.</p>
                </div>
            </div>

            <div className='about--container'>

                <div className='about--descRight'>

                    <h3>Bilal Zafar</h3>

                    <h4>Project Manager</h4>

                    <p>Bilal Zafar was the project Manager of this team and his role was to assist the team in coding and documentation aspect.</p>
                </div>

                <div className='about--photoRight'>
                    <img src={bilalz} />
                </div>

            </div>

        </div>

    );
}

export default SingleComponent;