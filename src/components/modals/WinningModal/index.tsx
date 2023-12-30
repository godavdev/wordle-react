import { motion } from 'framer-motion'
import Title from '../../Title'

const WinningModal = () => {
    return (
        <motion.div
            className="w-full h-full bg-green-400 absolute flex justify-center items-center top-0 left-0 z-50"
            initial={{ translateY: "100%" }}
            transition={{ ease: 'easeInOut', duration: .5, }}
            animate={{ translateY: 0 }}>
                <Title value='GG!'/>
        </motion.div>
    )
}

export default WinningModal