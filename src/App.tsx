import { FormEvent } from "react"
import { AnimatePresence } from 'framer-motion'
import useApp from "./hooks/useApp"
import PreviousIntentList from "./components/PreviousIntentsList"
import WinningModal from "./components/modals/WinningModal"
import AppForm from "./components/Forms/AppForm"

const App = () => {

  const { answer, intent, previousIntents, winner, handleChange, evaluate } = useApp()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    evaluate()
  }

  return (
    <div className="max-h-screen flex justify-center w-screen h-screen relative overflow-hidden ">
      <AnimatePresence>
        {winner && <WinningModal />}
      </AnimatePresence>
      <div className="flex flex-col space-y-8 justify-center h-screen max-h-screen max-w-screen-lg items-center relative p-2">
        <AppForm answer={answer} centered={previousIntents.length === 0} handleChange={handleChange} handleSubmit={handleSubmit} intent={intent} winner={winner} />
        {
          previousIntents.length > 0 &&
          <PreviousIntentList previousIntents={previousIntents} />
        }
      </div>
    </div >
  )
}

export default App
