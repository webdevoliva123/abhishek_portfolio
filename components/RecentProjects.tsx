import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading leading-snug'>
        My Project Arsenal: <br/><span className='text-purple'>A Showcase of Innovation</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects?.map((project) => {
                return (
                    <div key={project?.id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={project?.link} href={project?.link}>
                           <div className='relative flex items-center justify-center sm:w-[570px]  w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[rgb(19,22,45)]'>
                                <img src='/bg.png' alt='bg-img' className='object-bottom object-contain  w-full h-full'/>
                            </div>
                            <img src={project?.img} alt={project?.title} className='z-10 absolute bottom-0'/>
                           </div>
                           <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {project?.title}
                           </h1>
                           <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{project?.des}</p>
                           <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>{
                                project?.iconLists?.map((icon,idx) => {
                                    return (
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{
                                            transform : `translateX(-${5* idx * 2}px)`
                                        }}>
                                            <img src={icon} alt={icon} className={'p-2'} />
                                        </div>
                                    )
                                })}</div>
                                <div className='gap-2 flex justify-end items-center'>
                                    <p className='flex lg:text-lg md:text-xs text-sm text-purple'>Check Live Site </p>
                                    <span>🚀</span>
                                    
                                </div>
                           </div>
                        </PinContainer>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default RecentProjects