export interface State {
  results: string[]
  fetching: boolean
  fetched: boolean
  error: any
}

export const initialState: State = {
  results: [],
  fetching: false,
  fetched: false,
  error: ''
}
