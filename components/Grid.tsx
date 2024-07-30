import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about-me' className='py-10'>
        <BentoGrid>
            {
                gridItems?.map((item) => (
                    <BentoGridItem id={item?.id} key={item?.id} title={item?.title} description={item?.description} className={item?.className} img={item?.img} imgClassName={item?.imgClassName} titleClassName={item?.titleClassName} spareImg={item?.spareImg} />
                ))
            }
        </BentoGrid>
    </section>
  )
}

export default Grid