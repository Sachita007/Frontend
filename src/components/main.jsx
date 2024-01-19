import { useState } from 'react';
import Hero from './hero';


import {motion , AnimatePresence} from "framer-motion"

function Main() {

 

  
  const [featurekey, setFeatureKey] =  useState(0)


  const features = [{
    name:"Test1",
    title:"Kickstart your project with these tools",
    dic:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum."
  },
  {
      name: "Test2",
      title: "1Kickstart your project with these tools",
      dic: "1Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum."
    }, 
    {
      name: "Test3",
      title: "2Kickstart your project with these tools",
      dic: "1Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum."
    },]

  const ratings = [{
    id:1,
    url:"https://preview.cruip.com/cube/images/testimonial-01.jpg",
    name:"User1",
    description:"The only tool that has the technology to meet our unique and complex needs."
  },
    {
      id: 2,
      url: "https://preview.cruip.com/cube/images/testimonial-01.jpg",
      name: "User1",
      description: "The only tool that has the technology to meet our unique and complex needs."
    },
    {
      id: 3,
      url: "https://preview.cruip.com/cube/images/testimonial-01.jpg",
      name: "User1",
      description: "The only tool that has the technology to meet our unique and complex needs."
    }]

  const difFunctions = [
    {
      id:1,
      url:"https://preview.cruip.com/cube/images/features-icon-01.svg",
      name:"OtpLess",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      id: 2,
      url: "https://preview.cruip.com/cube/images/features-icon-01.svg",
      name: "OtpLess",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      id: 3,
      url: "https://preview.cruip.com/cube/images/features-icon-01.svg",
      name: "OtpLess",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      id: 4,
      url: "https://preview.cruip.com/cube/images/features-icon-01.svg",
      name: "OtpLess",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }
  ]

  const handleFeatureClick = (key)=>{
      setFeatureKey(key)
  }
  return (
    <>
    
      <section className="ml-auto mr-auto  max-w-[72rem]">
      <div className="flex flex-col justify-center pb-[3rem]">
        <div className='text-center flex justify-center flex-col'>

            <Hero><div className="md:text-[5rem] text-[3rem] md:pr-[10rem] pl-[2rem] pr-[2rem] md:pl-[10rem] mt-[4rem]"><p className="font-bold">A powerful suite of user-centric products</p></div></Hero>
            <Hero><div className="text-[#64748b] text-[1.25rem] mt-[1rem] pl-[2rem] pr-[2rem] md:pr-[10rem] md:pl-[10rem]"><p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p></div></Hero>
          <div className='flex justify-center mt-[2rem]'>
              <Hero><div className='bg-[#6366f1] pl-[1rem] hover:scale-105 text-[1.2rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] rounded-md'><button>Get Started Free</button></div></Hero>
              <Hero><div className='bg-[#334155] pl-[1rem] hover:scale-105 text-[1.2rem] pr-[1rem] ml-[1rem] pt-[0.5rem] pb-[0.5rem] rounded-md'><button>Read Docs</button></div></Hero>
          </div>
        </div>
        <Hero> <div className="container md:w-[920px] md:h-[518px] mx-auto mt-[3rem]">
          <img src="https://preview.cruip.com/cube/images/hero-image.png" className="block" alt="Hero Image" />
          </div></Hero>
          <div className="grid  gap-[4rem] md:grid-cols-3 sm:grid-cols-2 mt-[4rem] pl-[2rem] pr-[2rem] md:pr-[9rem] md:pl-[9rem] pt-[3rem]">
            {ratings.map(item => (
              <div key={item.id}>
                <Hero>
                <div className="flex flex-col items-center text-center" >
                  <img src={item.url} className="h-[40px] w-[40px] rounded-full"></img>
                  <div className="text-yellow-300 mt-[0.75rem]">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                </div>
                <div>
                  <p className="text-[#64748b] italic">{item.description}</p>
                </div>
                </Hero>
              </div>
            )) }
          

        </div>
      </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </section>

  {/* -------------------------------------------------------------------------------------------------- */}
      
      <Hero>
      <section className="ml-auto mr-auto  max-w-[72rem]">
      <div>
          <div className="secBackImg">
            <img src="https://preview.cruip.com/cube/images/features-illustration.svg" className="h-[453px] w-[1440px]"></img>
          </div>
        <div className='text-center flex justify-center flex-col'>
            <div className="md:text-[3rem] text-[2rem] md:pr-[10rem] pl-[2rem] pr-[2rem] md:pl-[10rem] mt-[3rem]"><p className="font-bold">Many tools to express your creativity</p></div>
          <div className="text-[#64748b] text-[1.25rem] mt-[1rem] pl-[2rem] pr-[2rem] md:pr-[13rem] md:pl-[13rem] "><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p></div>
          <div className='flex justify-center mt-[2rem]'>
          </div>
        </div>

            

        </div>

    </section>
      </Hero>
      <Hero>
        <div className="flex flex-row pl-[350px] md:pl-0 mt-[2rem] text-white justify-center overflow-hidden overflow-x-auto">
          {
            difFunctions.map(item => (
              <div key={item.id}>
                <div className='w-[322.7px] bg-[#1e293b] bg-opacity-80 mr-[24px] p-[1.5rem] text-left ' >
                  <div><img className='w-[56px] h-[56px] mb-[0.75rem]' src={item.url} alt={item.id}></img></div>
                  <div className="font-bold text-[1.25rem]">{item.name}</div>
                  <div className='text-[#64748b] mt-[0.75rem]'>{item.description}</div>
                  <div className='text-right text-[#6366f1] mt-[1rem]'><button className='hover:scale-110'>Learn More <span className='text-[1.5rem  pt-[1rem]'>&#8594;</span></button></div>
                </div>
              </div>
            ))
          }
      
        </div>
      </Hero>
    {/* -------------------------------------------------------------------------------------------------- */}
    <Hero>
    <section className="relative border-t-1 border-[#1e293b] mt-[10rem]">
        
      <div className="thirdSec" aria-hidden="true"> </div>
        <div className="secBackImg mt-[10rem] block"><img className="h-[453px] w-[1440px]" src="https://preview.cruip.com/cube/images/features-illustration-02.svg"></img></div>
        <div className="ml-auto mr-auto  max-w-[72rem] ">
          <div className="pt-[2rem]">
            <div className="md:text-[3rem] text-[2rem] md:pr-[10rem] pl-[2rem] pr-[2rem] md:pl-[10rem] mt-[3rem]"><p className="font-bold">Features to help you create your best designs</p></div>
          </div>

          <div className="bg-[#1e293b] bg-opacity-65 mt-[2rem] rounded-md flex flex-col md:flex-row  ">
            <div className="p-[2.5rem]">
              <div className="flex gap-[1rem] flex-row  md:min-w-[28rem]">{features.map((item, index, array) => (<button className={` pr-[1rem] pl-[1rem] pt-[0.3rem] pb-[0.3rem] rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-110 ${index === featurekey ? 'bg-[#6366f1]' :'bg-[#334155]'} `} onClick={()=>(handleFeatureClick(index))} key={item.name}>{item.name}</button>))}
            
              </div>
              <div className='overflow-hidden'>
                {
                    <AnimatePresence mode='wait'>
                    <motion.div
                        className="p-[2.5rem] w-full"
                        key={featurekey}
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' ,delay:0.2 }}
                    >
                    <h3 className="text-[2.75rem] font-bold mt-[1rem] text-left">{features[featurekey].title}</h3>
                    <div className="text-left text-[#64748b] mt-[1rem]  text-[1.1rem]"><p>{features[featurekey].dic}</p></div>
                  </motion.div>
                  </AnimatePresence>
                }
                
              </div>

            </div>
            <img src="https://preview.cruip.com/cube/images/features-image.png" className="w-[480px] h-[414px] "></img>
          </div>

        </div>
    </section>
      </Hero>
      <Hero>
        <section className="relative border-t-1 border-[#1e293b] mt-[10rem]">

          <div className="thirdSec" aria-hidden="true"> </div>
          <div className="secBackImg mt-[10rem] block"><img className="h-[453px] w-[1440px]" src="https://preview.cruip.com/cube/images/features-illustration-02.svg"></img></div>
          <div className="ml-auto mr-auto  max-w-[72rem] ">
            <div className="pt-[2rem]">
              <div className="md:text-[4rem] text-[2rem] md:pr-[10rem] pl-[2rem] pr-[2rem] md:pl-[10rem] mt-[3rem]"><p className="font-bold">Features to help you create your best designs</p></div>
            </div>

            <Hero><div className="text-[#64748b] text-[1.25rem] mt-[1rem] pl-[2rem] pr-[2rem] md:pr-[10rem] md:pl-[10rem]"><p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p></div></Hero>
            <div className='flex justify-center mt-[2rem]'>
              <Hero><div className='bg-[#6366f1] text-[1.2rem]  hover:scale-105 pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] rounded-md'><button>Get Started Free</button></div></Hero>
              <Hero><div className='bg-[#334155] text-[1.2rem] hover:scale-105 pl-[1rem] pr-[1rem] ml-[1rem] pt-[0.5rem] pb-[0.5rem] rounded-md'><button>Read Docs</button></div></Hero>
          </div>
          </div>
        </section>
      </Hero>
    </>
  )
}

export default Main