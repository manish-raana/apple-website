import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations'
import {exploreVideo} from '../utils/index'

const Features = () => {
    const videoRef = useRef();
    useGSAP(()=>{
        animateWithGsap('#features_title',{y:0, opacity:1})
    },[])
  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full'>
                <h1 id='features_title' className='section-heading'>
                    Explore the full story
                </h1>
            </div>
            <div className='flex flex-col items-center justify-center overflow-hidden'>
                <div className='mt-32 mb-24 pl-24'>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h2>
                </div>
                <div className='flex-center flex-col sm:px-10'>
                    <div className='relative h-[50vh] w-full items-center'>
                        <video 
                            playsInline 
                            id='exploreVideo'
                            className='w-full h-full object-cover object-center'
                            preload='none'
                            muted
                            autoPlay
                            ref={videoRef}
                        >
                            <source src={exploreVideo}type='video/mp4'/>
                        </video>
                    </div>
                    <div className='flex flex-col w-full relative'>
                        <div className='feature-video-container'>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore1Img} alt='titanium' className='feature_video g_grow'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features