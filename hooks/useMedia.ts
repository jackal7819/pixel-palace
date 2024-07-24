"use client";

import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export const useMedia = () => {
  const isLargestDesktop = useMediaQuery({
    query: "(min-width: 1920px)",
  });
  const isLargerDesktop = useMediaQuery({
    query: "(min-width: 1680px) and (max-width: 1919px)",
  });
  const isLargeDesktop = useMediaQuery({
    query: "(min-width: 1440px) and (max-width: 1679px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px) and (max-width: 1439px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    if (isLargestDesktop) setDeviceType("4xl");
    else if (isLargerDesktop) setDeviceType("3xl");
    else if (isLargeDesktop) setDeviceType("2xl");
    else if (isDesktop) setDeviceType("xl");
    else if (isLaptop) setDeviceType("lg");
    else if (isTablet) setDeviceType("md");
    else setDeviceType("sm");
  }, [
    isLargestDesktop,
    isLargerDesktop,
    isLargeDesktop,
    isDesktop,
    isTablet,
    isLaptop,
    isMobile,
  ]);

  return { deviceType };
};
