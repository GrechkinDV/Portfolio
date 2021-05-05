import React from "react";

function ServicesSection() {
  return (
    <div>
      <div id="servicesSection">
        <h1>Work Preferences</h1>
        <div id="servicesContainer">
          <div>
            <i className="fas fa-tasks fa-6x" />
            <p>
              My main goal is to deliver a <b>high-quality</b> product:{" "}
              <b>responsive </b>
              design, <b>reliable</b> backend. I've <b>successfully</b>{" "}
              developed a range of projects as a <b>full-stack</b> developer and
              satisfied all <b>requirements</b>.{" "}
            </p>
          </div>
          <div>
            <i className="fas fa-business-time fa-6x" />
            <p>
              Time <b>management</b> skill is essential. It helps me to meet{" "}
              <b>deadlines</b>, spend the <b>saved</b> time on testing &{" "}
              <b>improve</b> quality. I'm <b>responsible</b> for creating a
              product as well as deploying it.
            </p>
          </div>
          <div>
            <i className="fas fa-wrench fa-6x" />
            <p>
              Be sure that your website/application will be built with the most
              up-to-date <b>tools</b>. Reliable and efficient:{" "}
              <b>
                Python 3, Django, JavaScript, React, React Native, HTML, CSS
              </b>
              , etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
