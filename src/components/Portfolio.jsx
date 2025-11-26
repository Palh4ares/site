
import { motion } from "framer-motion"

export default function Portfolio(){
  const projetos = ["Sistema Financeiro","Landing Page E‑commerce","App de Delivery"]
  return(
    <section className='p-20 bg-white'>
      <h2 className='text-4xl font-bold mb-10 text-center'>Portfólio</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
        {projetos.map((p,i)=>(
          <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:i*0.2}}
            className='p-6 bg-gray-100 rounded-xl shadow text-center text-xl font-semibold'>
            {p}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
