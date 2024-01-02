import { FormEvent } from "react"
import { AnimatePresence } from 'framer-motion'
import useApp from "./hooks/useApp"
import PreviousIntentList from "./components/PreviousIntentsList"
import WinningModal from "./components/modals/WinningModal"
import TutorialModal from "./components/modals/TutorialModal"
import AppForm from "./components/Forms/AppForm"
import useModal from "./hooks/useModal"
import { motion } from 'framer-motion'
import Navbar from "./components/Navbar"

const App = () => {

  const { answer, intent, previousIntents, winner, handleChange, evaluate } = useApp()
  const { modalVisible, toggleVisibility } = useModal()


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    evaluate()
  }

  return (
    <>
      <Navbar toggleVisibility={toggleVisibility} />
      <motion.div className="max-h-dvh flex justify-center w-screen h-dvh relative overflow-hidden ">
        <div className="flex flex-col space-y-8 justify-center h-screen max-h-screen max-w-screen-lg items-center relative p-2">
          <AppForm answer={answer} centered={previousIntents.length === 0} handleChange={handleChange} handleSubmit={handleSubmit} intent={intent} winner={winner} />
          {
            previousIntents.length > 0 &&
            <PreviousIntentList previousIntents={previousIntents} />
          }
        </div>
        <AnimatePresence>
          {modalVisible && <TutorialModal onClick={toggleVisibility} />}
          {winner && <WinningModal />}
        </AnimatePresence>
      </motion.div >
    </>
  )
}

export default App
