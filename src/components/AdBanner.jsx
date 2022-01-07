import { Component } from "react";

import banner0 from "./img/banner0.jpg";

class AdBanner extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <div className="imgBx">
            <img className="img" src={banner0} alt="bannerImg" />
          </div>
        </div>
      </>
    );
  }
}

export default AdBanner;
