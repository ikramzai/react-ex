import "./style.css";
import download from "./download.jpg";
export default function Header() {
  return (
    <div className="header">
      <h3>logo</h3>

      <ul>
        <li>
          <a href="#">menu </a>
        </li>
        <li>
          <a href="#">menu</a>
        </li>
        <li>
          <a href="#">menu</a>
        </li>
      </ul>

      <img src={download} alt="" className="logo" />
    </div>
  );
}
