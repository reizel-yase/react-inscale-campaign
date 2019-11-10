import { Campaign } from "./types/campaign"

export interface State {
  campaigns: Campaign[]
  fetching: boolean
  fetched: boolean
  adding: boolean
  added: boolean
  error: any
}

export const initialState: State = {
  campaigns: [],
  fetching: false,
  fetched: false,
  adding: false,
  added: false,
  error: ''
}
