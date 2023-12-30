import { ChangeEvent, useEffect, useState } from "react"
import { evaluateIntent } from "../features/evaluateIntent"
import { validateIntent } from "../validations/intentValidation"
//@ts-ignore
import useSound from 'use-sound'

const useApp = () => {
    const [answer, setAnswer] = useState("")
    const [winner, setWinner] = useState(false)
    const [intent, setIntent] = useState("")
    const [previousIntents, setPreviousIntents] = useState<evaluatedLetter[][]>([])
    //Audios
    const [playWin] = useSound("audio/pickupCoin.wav")
    const [pitch, setPitch] = useState(.75)
    const [playIncorrect] = useSound("audio/hitHurt.wav", { playbackRate: pitch, interrupt: true })

    //Today's answer's fetch
    useEffect(() => {
        setAnswer("REACT".toUpperCase())
    }, [])

    //Intent value change
    const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        if (value.trim().length !== intent.length) {
            setIntent(value.toUpperCase())
        }
    }

    //Evaluate intent
    const evaluate = () => {
        if (validateIntent(intent, answer.length)) {
            const result = evaluateIntent(intent, answer)
            if (result.every(letter => letter.statusType === 'OK')) {
                setWinner(true)
                playWin()
            } else {
                setPreviousIntents([...previousIntents, result])
                setIntent("")
                playIncorrect()
                setPitch((pitch) => pitch + .10)
            }
        }
    }

    return {
        answer,
        winner,
        intent,
        previousIntents,
        handleChange,
        evaluate
    }
}

export default useApp