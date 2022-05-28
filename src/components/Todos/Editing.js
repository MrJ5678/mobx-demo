import { useEffect, useRef } from 'react'

function Editing({ todo }) {
  const { isEditing, modifyTodoTitle, title } = todo
  const ref = useRef(null)
  useEffect(() => {
    if (isEditing) {
      ref.current.focus()
    }
  }, [isEditing])

  return (
    <input
      ref={ref}
      type="text"
      defaultValue={title}
      className="edit"
      onBlur={() => modifyTodoTitle(ref.current.value)}
    />
  )
}

export default Editing
