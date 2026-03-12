import Image from "next/image";
import React from "react";
import { AnimateImageContainer } from "./AnimateIn";

const ImageContainer = () => {
  return (
    <div className="w-[100vw]  relative left-1/2 -ml-[50vw] h-screen overflow-hidden my-10">
      {/* w-[100vw]: Makes the div exactly as wide as the screen
          relative left-1/2 -translate-x-1/2: Centers the wide div 
          regardless of the parent's padding (md:px-52)
      */}
      <AnimateImageContainer>
        <div>
          <Image
            src={"/student2.webp"}
            alt="Student Image"
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </AnimateImageContainer>
    </div>
  );
};

export default ImageContainer;
