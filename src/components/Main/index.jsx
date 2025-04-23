import "./style.css";
import image from "./tokyo.jpg";
import image2 from "./kyoto.jpg";
import image3 from "./osaka.jpg";
export default function Main() {
  return (
    <div className="main">
      <div className="card">
        <img src={image} alt="" className="card-imge" />
        <h2> tokyo </h2>
        <p>Stroll under sakura canopies in Shinjuku Gyoen and along the Meguro River.</p>
        <a href="#" className="read-more">Read More</a>
      </div>
      <div className="card">
        <img src={image2} alt="" className="card-imge" />
        <h2> Kyoto </h2>
        <p>Sip matcha in bamboo-lined tea houses and wander through moss temples.</p>
        <a href="#" className="read-more">Read More</a>
      </div>
      <div className="card">
        <img src={image3} alt="" className="card-imge" />
        <h2> Osaka </h2>
        <p>Explore cherry-lit castles and pastel street food stalls in Dotonbori.</p>
        <a href="#" className="read-more">Read More</a>
      </div>
     
    </div>
  );
}
