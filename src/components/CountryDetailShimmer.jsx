import React from "react";
import Skeleton from "react-loading-skeleton";
import { useOutletContext } from "react-router-dom";

const CountryDetailShimmer = () => {
  const [dark] = useOutletContext();
  const baseColor = dark ? "#202124" : "#f0f0f0";
  const highlightColor = dark ? "#3c4043" : "#e0e0e0";
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <div className="flex flex-col lg:flex-row lg:items-center pt-16 pb-1 lg:gap-12 min-[1040px]:gap-20 w-full">
        <div className="w-full sm:max-w-[450px] h-60 min-w-[320px]">
          <Skeleton height={240} baseColor={baseColor}
          highlightColor={highlightColor}/>
        </div>

        <div className="lg:ml-16">
          <Skeleton width={200} height={20} className="mb-4 mt-4 sm:mt-0"  baseColor={baseColor}
          highlightColor={highlightColor} />

          <Skeleton width={180} baseColor={baseColor}
          highlightColor={highlightColor} />

          <Skeleton width={120} baseColor={baseColor}
          highlightColor={highlightColor} />

          <Skeleton width={140}  baseColor={baseColor}
          highlightColor={highlightColor}/>
          <Skeleton width={140} baseColor={baseColor}
          highlightColor={highlightColor}/>

          <Skeleton width={140} baseColor={baseColor}
          highlightColor={highlightColor}/>
        </div>

        <div className="lg:ml-auto pr-8 space-y-1">
          <Skeleton width={140} className="mb-2" baseColor={baseColor}
          highlightColor={highlightColor} />
          <Skeleton width={140} className="mb-2"  baseColor={baseColor}
          highlightColor={highlightColor}/>

          <Skeleton width={140} className="mb-2" baseColor={baseColor}
          highlightColor={highlightColor} />
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap lg:ml-[565px]">
        {Array(7)
          .fill()
          .map((_, idx) => (
            <Skeleton key={idx} width={100} height={25} className="mb-2" baseColor={baseColor}
          highlightColor={highlightColor}/>
          ))}
      </div>
    </div>
  );
};

export default CountryDetailShimmer;
