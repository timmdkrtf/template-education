import TeamWork from "../assets/img/cover/teamwork-cover.jpg"

function About(){
    return(
        <div className="about" id="about">
            <div className="container">
                <div className="content">
                    <div className="img-left">
                        <img src={TeamWork} alt="" />
                    </div>
                    <div className="text-right">
                        <b>About</b>
                        <h2>We Are Expert in E-Learning</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat in dolorem voluptates rerum, aliquam nihil facilis corrupti voluptate est ad minima rem.</p>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;