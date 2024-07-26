import { BiStar } from "react-icons/bi";
import { FaPlay, FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({amount}) => {
  return (
    <div className="card-skeleton bg-[--border-color] min-w-64">
      <Skeleton
        width="100%"
        baseColor="var(--secondary-color)"
        className="h-[380px]"
      />
      <div className="p-3">
        <div className="flex items-center gap-6">
          <div className="flex gap-2 items-center">
            <Skeleton width={15}/>
            <Skeleton width={100}/>
          </div>
        </div>

        <div className="h-14 w-full overflow-hidden text-ellipsis mt-2">
            <Skeleton />
        </div>

        <div className="flex flex-col gap-1">
          <Skeleton className=" w-full px-5 py-2"/>
          <Skeleton className=" w-full px-5 py-2 mt-1"/>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
