// @ts-nocheck
import React from "react";

const HomeAdaptive = (): React.ReactElement => {
  const sendEvent = () => {
    window?.gtag("event", "payload?.action_name", {
      event_category: "123",
      event_label: "345",
    });

    window?.dataLayer?.push({
      event: "pageview",
      page: "/pages/index",
    });
  };

  return (
    <>
      <button onClick={sendEvent}>Send event</button>
    </>
  );
};

export default HomeAdaptive;
