import * as types from '../types';
import { Payload } from '../../types/campaign'

const getCampaigns = () => {
  return {
    type: types.FETCH_CAMPAIGNS
  }
}

const addCampaigns = (campaigns: Payload[]) => {
  return {
    type: types.ADD_CAMPAIGNS,
    payload: campaigns
  }
}

const searchCampaignsByName = (name: string) => {
  return {
    type: types.SEARCH_BY_NAME,
    payload: name
  }
}

const searchCampaignsByDate = (startDate: string, endDate: string) => {
  return {
    type: types.SEARCH_BY_DATE,
    payload: {
      startDate,
      endDate
    }
  }
}

export {
  getCampaigns,
  addCampaigns,
  searchCampaignsByName,
  searchCampaignsByDate
}