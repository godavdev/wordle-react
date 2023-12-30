import { motion } from 'framer-motion'
import { containerVariant, itemVariant } from '../../data/framerVariants'
import Letter from '../Letter'

const PreviousIntentList = ({ previousIntents }: { previousIntents: evaluatedLetter[][] }) => {
    return (
        <motion.div
            variants={containerVariant}
            initial='hidden'
            animate='visible' 
            className="flex w-full flex-col max-h-[1/2] h-1/2 scrollbar-track-slate-700/40 scrollbar-thumb-purple-600 scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar overflow-auto justify-start space-y-4 items-center">
            {previousIntents.map((val, index) =>
                <motion.div variants={itemVariant} key={`intent${index}`} className="flex md:gap-4 gap-2">
                    {val.map(({ value, statusType }, index2) =>
                        <Letter key={`intent${index}index${index2}`} value={value} status={statusType} />
                    )}
                </motion.div>
            )}
        </motion.div>
    )
}

export default PreviousIntentList