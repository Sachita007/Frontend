import { useEffect,useRef } from "react"
import {motion,useInView, useAnimation} from 'framer-motion'


function Hero(props) {
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})
    const mainControll = useAnimation()

    useEffect(()=>{
        if (isInView){
         mainControll.start("visible")
        }
},[isInView])
  return (
    <div ref={ref}>
      <motion.div
      variants={{
        hidden :{opacity:0, y:75},
        visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate={mainControll}
      transition={{duration:0.5,delay:0.25}}
      >
          {props.children}
      </motion.div>
      </div>
  )
}

export default Hero