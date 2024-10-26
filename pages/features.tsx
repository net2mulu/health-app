import FeatureHero from "@/components/landing/features/FeatureHero";
import FeatureLists from "@/components/landing/features/FeatureLists";
import FeatureTabs from "@/components/landing/features/FeatureTabs";
import React from "react";

const Features = () => {
  return (
    <div>
      <FeatureHero />
      <FeatureTabs />
      <FeatureLists />
    </div>
  );
};

export default Features;
