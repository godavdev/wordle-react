import { Variants, motion } from 'framer-motion'

const Letter = ({ value, status = "ANS", variants }: { value: string, status?: statusType, variants?: Variants }) => {
    return (
        <motion.div variants={variants}
            className={`${status === "OK" ? `bg-green-500` : status === 'WRONG' ? `bg-red-600` : status === 'POSITION' ? `bg-yellow-400` : status === 'PENDING' ? `bg-slate-800` : `bg-white text-black`} md:h-20 h-12 aspect-square md:text-6xl text-4xl flex justify-center items-center rounded-md  transition-all duration-300`}>
            {value}
        </motion.div>
    )
}

export default Letter