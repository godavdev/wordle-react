import { motion } from 'framer-motion'
import { itemVariant } from '../../data/framerVariants'
const Title = ({ value, animated = true }: { value: string, animated?: boolean }) => {
    return (
        <motion.h2
            className="md:text-7xl text-4xl font-bold"
            variants={animated ? itemVariant : undefined}
            layout>
            {value}
        </motion.h2>
    )
}

export default Title