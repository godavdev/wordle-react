import { ChangeEventHandler } from "react"

const AutoFocusInput = ({ onChange, intent, answer }: { onChange: ChangeEventHandler<HTMLInputElement>, intent: string, answer: string }) => {
  return (
    <input
      onBlur={({ target }) => target.focus()}
      onChange={onChange}
      type="text"
      className="sr-only"
      maxLength={answer.length}
      value={intent}
      autoFocus={true} />
  )
}

export default AutoFocusInput