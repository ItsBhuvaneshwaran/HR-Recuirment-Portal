import Navbar from "../component/navabar"
import './layout.css'

export const MainLayout = (props) => {
    return(
        <div className="main-layout">            
            <Navbar />
            {/* {console.log(props?.children,'props?.children')} */}
            <main id="main" className="content">
                {props?.children}
            </main>
            {/* <Navbar /> */}
            {/* <main> </main> --> this is one of html tag */}
        </div>
    )
}