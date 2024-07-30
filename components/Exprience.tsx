import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";

const Exprience = () => {
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading leading-snug">
      Showcase of My 
      <br/>
        <span className="text-purple">Professional Journey</span>.
      </h1>
      <div className="w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {
            workExperience?.map((work) => (
                <Button key={work?.id} borderRadius="1.75rem" duration={Math.floor(Math.random() * 10000 + 10000)} className="flex-1 text-white border-neutral-200 dark:border-slate-800">
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <img src={work?.thumbnail}  alt={work?.thumbnail} className="lg:w-32 md:w-20 w-16"/>
                        <div className="lg:ms-5">
                            <h1 className="text-start text-xl md:text-2xl font-bold">{work?.title}</h1>
                            <div className="mt-1 mb-2 flex justify-start items-center gap-2">
                                <h3 className="font-medium text-purple text-start">{work?.companyName}</h3>
                                <span className="text-xs md:text-xs text-start">{work?.date?.stateDate} - {work?.date?.endDate}</span>
                            </div>
                            <ul className="text-start text-white-100 mt-3 font-semibold " >{work?.desc?.map((des) => {
                                return (
                                    <li key={des} className="mb-2">{des}</li>
                                )
                            })}</ul>
                        </div>
                    </div>
                </Button>
            ))
        }
      </div>
    </section>
  );
};

export default Exprience;
