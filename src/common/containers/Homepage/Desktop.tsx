// @ts-nocheck
import DesktopHeader from "common/components/wrapper/Layout/DesktopHeader";
import { IRootState } from "common/store/reducers";
import { getSEOFooterData } from "common/store/shared/SEOReducer/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = (): React.ReactElement => {
  const dispatch = useDispatch();
  const FooterLinks = useSelector((state: IRootState) => state.seo.footerLinks);

  // for fetching seo footer content if not present already
  useEffect(() => {
    if (!FooterLinks?.updatedNonIndexedLinks) {
      console.log("get data");

      dispatch(getSEOFooterData());
    }
  }, []);

  console.log("1");

  return (
    <>
      <DesktopHeader />
    </>
  );
};

export default Home;
