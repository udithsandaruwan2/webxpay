export const revalidate = 300;

import React from "react";
import Banner from "@/components/pricing/banner";
import Header from "@/components/common/header";
import Pricing from "@/components/pricing/pricing";
import Footer from "@/components/common/footerAutoYear";

const Page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Page;
