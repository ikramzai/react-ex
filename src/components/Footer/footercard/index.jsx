export default function Footercard(props) {
    return (
       <div>
        <h2>contact us</h2>
        <ul className="social-list">
          <li>
            <a href={props.facebook}target="_blank">
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href={props.Twitter}target="_blank">
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href={props.instagram}target="_blank">
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href={props.linkedIn} target="_blank">
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
      
    );
  }
