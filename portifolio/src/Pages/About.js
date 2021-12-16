import JvImage from "../Assets/images/joao-picture.png"
import Header from "../Components/Header";
import Card from "../Components/Card/code.js"
import jsimg from "../Assets/images/js-img.png"
import htmlimg from "../Assets/images/html-img.png"
import cssimg from "../Assets/images/css-img.png"
import reactimg from "../Assets/images/react-img.png"
import gitimg from "../Assets/images/git-img.png"

import PerfectScrollbar from "react-perfect-scrollbar"



const About = () => {



    const codeTipe = [
        {
            name: "JavaScript",
            img: jsimg,
        },
        {
            name: "HTML",
            img: htmlimg,
        },
        {
            name: "CSS",
            img: cssimg,
        },
        {
            name: "React",
            img: reactimg,
        },
        {
            name: "Git",
            img: gitimg,
        },
    ]

    return (
        <>
        <section id="about-section">
            <PerfectScrollbar>
            
            <div class="title-about">
                <h3><span class="text-title1">About me</span></h3>
                <h3><span class="text-title2">Hello! Get to know me.</span></h3>
            </div>
            <div class="about-flex">
            <div>
                <img src={JvImage} alt="My image :)" className="jv-img"/> 
            </div>
            <div>
                <p>My name is João Vitor Brietzke de Lima and I'm from the state of Rio Grande do Sul. I love to design websites and like to give a first impression that makes the user stay on the page. I love programming, and always find an optimal solution for the customer, whether solo or in a team. I have knowledge in <span class="text-title1">html, css, javascript, git and react.</span></p>
                <div className="cardcode-container">
                    {codeTipe ? codeTipe.map((code) => {
                    return <Card props={code}/>
                    }) : ""}
                </div>
            </div>
            </div>
           </PerfectScrollbar> 
        </section>
        </>
    );
};

export default About