import Cover1 from "../assets/img/cover/happy-cover.jpg"
import Cover2 from "../assets/img/cover/history-cover.jpg"
import Cover3 from "../assets/img/cover/math-cover.jpg"
import Cover4 from "../assets/img/cover/math-cover2.jpg"
import Cover5 from "../assets/img/cover/meeting-cover.jpg"
import Cover6 from "../assets/img/cover/robotic-cover.jpg"
import Cover7 from "../assets/img/cover/science-cover.jpg"
import Cover8 from "../assets/img/cover/teamwork-cover.jpg"

function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <div className="container">
        <div className="title">
            <p>Our Gallery</p>
            <h2>The Moment Education</h2>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <img src={Cover1} alt="Foto 1" />
          </div>
          <div className="gallery-item">
            <img src={Cover2} alt="Foto 2" />
          </div>
          <div className="gallery-item">
            <img src={Cover3} alt="Foto 3" />
          </div>
          <div className="gallery-item">
            <img src={Cover4} alt="Foto 4" />
          </div>
          <div className="gallery-item">
            <img src={Cover5} alt="Foto 5" />
          </div>
          <div className="gallery-item">
            <img src={Cover6} alt="Foto 6" />
          </div>
          <div className="gallery-item">
            <img src={Cover7} alt="Foto 6" />
          </div>
          <div className="gallery-item">
            <img src={Cover8} alt="Foto 6" />
          </div>
          <div className="gallery-item">
            <img src={Cover8} alt="Foto 6" />
          </div>
          <div className="gallery-item">
            <img src={Cover7} alt="Foto 6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
