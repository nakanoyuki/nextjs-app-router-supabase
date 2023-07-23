import create from 'zustand'

type EditedTask = {
  id: string
  title: string | null
}

type LoginUser = {
  id: string | undefined
  email: string | undefined
}

type State = {
  editedTask: EditedTask
  updateEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
  loginUser: LoginUser
  updateLoginUser: (payload: LoginUser) => void
  resetLoginUser: () => void
}
