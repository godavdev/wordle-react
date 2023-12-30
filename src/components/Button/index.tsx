import { Variants, motion } from 'framer-motion'

const Button = ({ variants, text }: { variants?: Variants, text: string }) => {
    return (
        <motion.button
            variants={variants}
            className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-800 outline-none focus:bg-purple-800 focus:-translate-y-2 transition-all hover:-translate-y-2"
            type="submit">
            {text}
        </motion.button>
    )
}

export default Button