import { motion } from 'framer-motion'
import Title from '../../Title'
import { MouseEventHandler } from 'react'
const TutorialModal = ({ onClick }: { onClick: MouseEventHandler<HTMLDivElement> }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='w-full h-full p-4 absolute bg-gray-900/60 flex justify-center items-center backdrop-blur-sm z-[100] top-0 left-0 '>
            <div className='w-full h-full absolute' onClick={onClick} />
            <motion.div initial={{ translateY: "200%" }} animate={{ translateY: 0 }} className='w-full px-4 py-8 max-w-lg bg-gray-800 rounded-lg flex items-center flex-col gap-2' >
                <Title value='How to play' size='MEDIUM' /> 
                <p className='md:text-lg'>You have to guess a word</p>
                <p className='md:text-lg text-start'>Every time you check the word you will get some clues.</p>
                <p className='md:text-lg text-start'>If the letter is <span className='font-semibold text-red-600'>red</span>, the letter is not in the word.</p>
                <p className='md:text-lg text-start'>If the letter is <span className='font-semibold text-yellow-400'>yellow</span>, the letter is in the word but is not in the correct position.</p>
                <p className='md:text-lg text-start'>If the letter is <span className='font-semibold text-green-500'>green</span>, the letter is in the word and in the correct position.</p>
                <p className='md:text-lg text-start'>Good luck!</p>
            </motion.div>
        </motion.div>
    )
}

export default TutorialModal