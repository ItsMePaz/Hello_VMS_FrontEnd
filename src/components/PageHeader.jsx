import "../styles/header.css";
import Logo from "../images/placeholder.png";

function PageHeader({ bgColor }) {
  return (
    <div>
      <div className={"header" + `${bgColor}`}>
        <div className={"logo-placement "}>
          {" "}
          <img
            src={Logo}
            alt=""
            className="tw-mb-[3em] tw-w-[6em] tw-h-[6em] xl:tw-mt-[4.4%] sm:tw-mt-[8%] tw-mt-[15%]"
          />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
