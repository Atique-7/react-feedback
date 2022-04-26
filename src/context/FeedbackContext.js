import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  // Loading screen state
  const [isLoading, setIsLoading] = useState(true)

  // Feedback data state
  const [feedback, setFeedback] = useState([])

  // to fetch data from @json-server
  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id")

    const data = await response.json()

    setFeedback(data)

    setIsLoading(false)
  }

  const [feedbackEdit, setFeedbackEdit] = useState([{ item: {}, edit: false }])

  const [reset, setReset] = useState(false)

  const addFeedbackItem = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
    console.log(data)
  }

  const deleteFeedbackItem = async (id) => {
    await fetch(`/feedback/${id}`, {
      method: "DELETE",
    })

    setFeedback(feedback.filter((item) => item.id !== id))
  }

  const editFeedbackItem = (item) => {
    setFeedbackEdit({ item: item, edit: true })
  }

  const updateFeedbackItem = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        reset,
        setReset,
        setFeedbackEdit,
        isLoading,

        // Functions.
        deleteFeedbackItem,
        addFeedbackItem,
        editFeedbackItem,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
