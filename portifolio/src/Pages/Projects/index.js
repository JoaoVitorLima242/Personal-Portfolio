import Header from "../../Components/Header"
import Card from "../../Components/Card/project.js"
import PerfectScrollbar from "react-perfect-scrollbar"
import barbadaImg from "../../Assets/images/barba.png"
import ALImg from "../../Assets/images/ac.png"
import PLPmg from "../../Assets/images/plp.png"
import TDPmg from "../../Assets/images/tdp.png"
import BIPmg from "../../Assets/images/bip.png"
import CALCmg from "../../Assets/images/calc.png"


const Projects = () => {

    const Projects = [
        {
            id: 0,
            name: "Barbada.com",
            image: barbadaImg,
            href: "https://barbada.com/",
        },
        {
            id: 1,
            name: "Account Login",
            image: ALImg,
            href: "https://joaovitorlima242.github.io/Account-Login/",
        },
        {
            id: 2,
            name: "Product Landing Page",
            image: PLPmg,
            href: "https://joaovitorlima242.github.io/Product-Landing-Page/",
        },
        {
            id: 3,
            name: "Technical Documentation Page",
            image: TDPmg,
            href: "https://joaovitorlima242.github.io/Technical-Documentation-Page/",
        },
        {
            id: 4,
            name: "Business Information Page",
            image: BIPmg,
            href: "https://joaovitorlima242.github.io/Business-info-page/",
        },
        {
            id: 5,
            name: "Calculator",
            image: CALCmg,
            href: "https://joaovitorlima242.github.io/Calculator/",
        },
    ]

    return (
        <>
            <section id="projects">
                <PerfectScrollbar>
                <h1>These are some of my projects</h1>
                <div class="projects-grid">
                    {Projects?.map((Project) => {
                       return <Card prop={Project}/>
                    })}
                </div>
                </PerfectScrollbar>
            </section>
        </>
    )
}

export default Projects