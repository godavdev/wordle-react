import { motion } from 'framer-motion'
import { ChangeEventHandler, FormEventHandler } from 'react'
import AutoFocusInput from '../../Inputs/AutoFocusInput'
import Title from '../../Title'
import { containerVariant, itemVariant } from '../../../data/framerVariants'
import Letter from '../../Letter'
import Button from '../../Button'

const AppForm = ({ handleSubmit, answer, intent, handleChange, winner, centered = true }: { handleSubmit: FormEventHandler<HTMLFormElement>, answer: string, intent: string, handleChange: ChangeEventHandler<HTMLInputElement>, winner: boolean, centered: boolean }) => {
    return (
        <motion.form
            onSubmit={handleSubmit}
            variants={containerVariant}
            initial='hidden'
            animate='visible'
            className={`flex w-full md:h-1/2 max-h-[1/2] ${centered ? `justify-center` : `justify-end`} flex-col space-y-4 items-center`}>
            <Title value="React Wordle" />
            {!winner && <AutoFocusInput answer={answer} intent={intent} onChange={handleChange} />}
            <motion.div variants={itemVariant} className='flex flex-col'>
                <motion.div variants={containerVariant} initial='hidden' animate='visible' exit='hidden' className="flex flex-wrap gap-2 md:gap-4">
                    {
                        answer.split("").map((_, index) => <Letter value='' status='PENDING' key={`A${index}`} />)
                    }
                </motion.div>
                <motion.div variants={containerVariant} initial='hidden' animate='visible' exit='hidden' className="flex w-full gap-2 flex-wrap absolute md:gap-4">
                    {
                        intent && intent.split("").map((value, index) => <Letter key={index} variants={itemVariant} value={value} />)
                    }
                </motion.div>
            </motion.div>
            <Button variants={itemVariant} text='Check' />
        </motion.form>
    )
}

export default AppForm