// @ts-nocheck
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";

const HomeAdaptive = (): React.ReactElement => {
  const router: NextRouter = useRouter();
  const { query } = router;

  console.log(query);

  useEffect(() => {}, [query]);

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
