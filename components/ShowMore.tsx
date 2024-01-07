"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@types";
import { updateSearchParams } from "@utils";
import { CustomButton } from "@components";
import { FaArrowCircleDown } from "react-icons/fa";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          icon={FaArrowCircleDown}
          text="Show More"
          modifier="bg-primary-blue rounded-full text-white"
          clickEvent={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
