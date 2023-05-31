import React from "react";

const Map = () => {
  return (
    <>
      <section className="map top">
        <iframe
          src=""
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </>
  );
};

export default Map;

// div class="mapouter"><div class="gmap_canvas"><iframe width="770" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=lebanon&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br><style>.mapouter{position:relative;text-align:right;height:510px;width:770px;}</style><a href="https://embedgooglemap.2yu.co">html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:510px;width:770px;}</style></div></div>
