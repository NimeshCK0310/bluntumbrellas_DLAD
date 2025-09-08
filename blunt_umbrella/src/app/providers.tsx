"use client";
import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <AppProgressBar
        height="5px"
        color="#49479f"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;