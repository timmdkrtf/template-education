import Teacher from "../assets/img/icon/Teacher-white.png"
import Clients from "../assets/img/icon/Client Management.png"
import Wallet from "../assets/img/icon/Wallet.png"
import Mortarboard from "../assets/img/icon/Mortarboard.png"

function Summary(){
    return(
        <div className="summary" id="summary">
            <div className="container">
                <div className="flex-icon">
                    <div className="icon">
                        <img src={Wallet} alt="free-courses" style={{backgroundColor:"#55BBE9"}} />
                        <h1>+59</h1>
                        <p>Free Courses</p>
                    </div>
                    <div className="icon">
                        <img src={Teacher} alt="teacher" style={{backgroundColor:"#E56ACC"}} />
                        <h1>101</h1>
                        <p>Best Teacher</p>
                    </div>
                    <div className="icon">
                        <img src={Mortarboard} alt="Graduate" style={{backgroundColor:"#91C56B"}} />
                        <h1>1261</h1>
                        <p>Best Graduate</p>
                    </div>
                    <div className="icon">
                        <img src={Clients} alt="client" style={{backgroundColor:"#8A71E8"}} />
                        <h1>56</h1>
                        <p>Our klien</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;