import Teacher from "../assets/img/icon/Teacher.png"
import Online from "../assets/img/icon/Online.png"
import AlurProgram from "../assets/img/icon/Flow Chart.png"

function Benefit(){
    return (
        <div className="benefit">
            <div className="container">
                <div className="parent-card">
                    <div className="card">
                        <img src={Online} alt="Online Icon" />
                        <h5>Online Learning</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nostrum quisquam itaque, om</p>
                    </div>
                    <div className="card">
                        <img src={Teacher} alt="Teacher Icon" />
                        <h5>Best Teacher</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui doloribus voluptatem earum </p>
                    </div>
                    <div className="card">
                        <img src={AlurProgram} alt="Flow Icon" />
                        <h5>Easy to Learn</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam soluta nulla eaque deser</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;