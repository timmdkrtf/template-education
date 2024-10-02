import Navbar from "../components/Navigation"
import Home from "../components/Home"
import Benefit from "../components/Benefit"
import About from "../components/About"
import Packet from "../components/Packet"
import Summary from "../components/Summary"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

function Landing(){
    return(
        <>
            <Navbar />
            <Home />
            <Benefit />
            <About />
            <Packet />
            <Summary />
            <Gallery />
            <Footer />
        </>
    );
}

export default Landing;