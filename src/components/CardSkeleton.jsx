import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useOutletContext } from "react-router-dom";

const CountryCardSkeleton = () => {
  const [dark] = useOutletContext();
  const baseColor = dark ? "#202124" : "#f0f0f0";
  const highlightColor = dark ? "#3c4043" : "#e0e0e0";

  return (
    <div
      className="w-full h-[370px] overflow-hidden rounded-md"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
      }}
    >
      {/* Image Placeholder */}
      <div className="w-full h-[190px] overflow-hidden p-0 m-0 -mt-1">
        <Skeleton
          height="100%"
          width="100%"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>

      {/* Text Content */}
      <div className="px-4 mt-4">
        <Skeleton
          height={22}
          width="70%"
          className="mb-8"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={16}
          width="80%"
          className="mb-2"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={16}
          width="60%"
          className="mb-2"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={16}
          width="75%"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
    </div>
  );
};

export default CountryCardSkeleton;
