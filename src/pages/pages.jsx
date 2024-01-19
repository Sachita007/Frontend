// src/components/CubeClone.js
import "./pages.css"
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
const CubeClone = () => {
    return (
        <div className="m-auto text-white text-center">
            <div className="backGround absolute z-[-10] left-[50%]" aria-hidden="true">
                <img src="https://preview.cruip.com/cube/images/hero-illustration.svg" className="backImg"></img>
            </div>
            <Header/>
            <Main/>
           
            <Footer/>    

           
        </div>
    );
};

export default CubeClone;
