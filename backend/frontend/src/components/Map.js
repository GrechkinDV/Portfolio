import React from "react";

function Map() {
  return (
    <div style={{ height: "70vh" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193940.4590997702!2d49.49099426405152!3d40.57869869097908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403096dcd0923f6b%3A0xdf4767c369322a71!2z0KHRg9C80LPQsNC40YIsINCQ0LfQtdGA0LHQsNC50LTQttCw0L0!5e0!3m2!1sru!2s!4v1620162059097!5m2!1sru!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      />
    </div>
  );
}

export default Map;
