import { useState } from "react"

const useModal = (initialState: boolean = false) => {

    const [modalVisible, setModalVisible] = useState(initialState)

    const toggleVisibility = () => setModalVisible((visiblity) => !visiblity)

    return {
        modalVisible,
        toggleVisibility
    }
}

export default useModal