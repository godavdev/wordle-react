import { motion } from 'framer-motion'
import { itemVariant } from '../../data/framerVariants'
type sizeType = "BIG" | "MEDIUM"
const Title = ({ value, size = "BIG", animated = true }: { value: string, size?: sizeType, animated?: boolean }) => {
    return (
        <motion.h2
            className={`${size === "BIG" ? `md:text-7xl text-4xl` : `md:text-5xl text-2xl`} font-bold`}
            variants={animated ? itemVariant : undefined}
            layout >
            {value}
        </motion.h2 >
    )
}

export default Title