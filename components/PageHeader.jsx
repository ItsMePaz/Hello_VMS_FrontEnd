import "../styles/header.css";
import Logo from "../images/placeholder.png";

function PageHeader({ bgColor }) {
  return (
    <div>
      <div className={"header" + `${bgColor}`}>
        <div className={"logo-placement "}>
          {" "}
          <img className="logo" src={Logo} alt="company logo" />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
