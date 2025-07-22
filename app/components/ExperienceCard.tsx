import Image from 'next/image'
import * as motion from "motion/react-client";

function ExperienceCard() {
  return (
    <article className=''>
        <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="/VH-Logo-White-BG-1.png"
            alt="Experience Card Image"
            className='rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            width="32"
            height="32"
        />        
        <div className='px-0 md:px-10'>
            <h4>CEO of Virtual Helper</h4>
            <p>Virtual Helper</p>
            <div>
                <div>Tech Stack</div>
                <div>Tech Stack</div>
                <div>Tech Stack</div>
            </div>
            <p>Started work.... - Ended work...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points about the experience</li>
                <li>Summary points about the experience</li>
                <li>Summary points about the experience</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard