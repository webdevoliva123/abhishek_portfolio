import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading leading-snug">
        <span className="text-purple">Peruse the testimonials</span>
        <br />
        extolling my work !
      </h1>
      <div className="flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 my-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {companies?.map((companies) => (
          <div key={companies?.id} className="flex md:max-w-60 max-w-32 gap-4">
            <img src={companies?.img} alt={companies?.name} className="md:w-12 w-5" />
            <img src={companies?.nameImg} alt={companies?.name} className="md:w-42 w-40 object-contain" />
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Clients;
