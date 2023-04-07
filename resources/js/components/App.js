import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer, ContainerPage , Demo , About ,Service,Subscribe ,FooterInfo} from "./index";

function App() {
    return (
        <div>
            <Header />
            <ContainerPage>
                <Demo/>
                <About/>
                <Service/>
                <Subscribe/>
                <FooterInfo/>
            </ContainerPage>

            <Footer />
        </div>
        // <div className="container">
        //     <div className="row justify-center">
        //           {/* components are here */}

        //     </div>
        // </div>
    );
}

export default App;
