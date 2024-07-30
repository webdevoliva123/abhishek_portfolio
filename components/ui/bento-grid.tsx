'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./globe";
import { GlobeDemo } from "./grid-globe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '../../data/confetti.json'
import MagicButton from "./magic-button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy =() =>{
   navigator.clipboard.writeText("abhishekyadav10602@gmail.com")
   setCopied(true)
   setTimeout(() => {
    setCopied(false)
   },2000)
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  border border-white/[0.1] justify-between flex flex-col space-y-4  ",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center h-full"}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex item-center justify-center text-white font-bold"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            `${[1,3,4,5]?.includes(id) && 'group-hover/bento:translate-x-2' } transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-50">
            {title}
          </div>

          {id == 2 && <GlobeDemo />}
          {id == 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                {["React.js", "Next.js", "TypeScript"]?.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                ))}
                
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                {["Node.js", "Express.js", "MongoDB"]?.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-6 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                ))}
                
              </div>
            </div>
            
          )}
          {id == 6 && (
            <div className="mt-5 relative ">
             {copied && <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay : copied,
                  animationData,
                  rendererSettings : {
                    preserveAspectRatio : 'xMidYMid slice'
                  }
                }} />
              </div>}
              <MagicButton title={copied ? 'Email Copied' : 'Copy My Email'} icon={<IoCopyOutline />} position="left" otherClass={`!bg-[#161a31]`} handleClick={handleCopy}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
