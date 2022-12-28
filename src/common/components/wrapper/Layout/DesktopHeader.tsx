import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("common/components/wrapper/Header"));

interface DesktopHeaderProps {
  from?: string;
  trackEvent?: (event: string, eventData: any) => void;
}

const DesktopHeader = ({ from = "", trackEvent }: DesktopHeaderProps) => {
  const [loader, setLoader] = useState(true);
  console.log(2);

  useEffect(() => {
    // setLoader(false);
  }, []);

  return (
    <div>
      {/* {loader && <h1>Test</h1>} */}
      <Header />
    </div>
  );
};

export default DesktopHeader;
