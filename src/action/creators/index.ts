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

const filterCampaigns = (name: string, startDate: string, endDate: string) => {
  return {
    type: types.FILTER_CAMPAIGNS,
    payload: {
      name,
      startDate,
      endDate
    }
  }
}

export {
  getCampaigns,
  addCampaigns,
  filterCampaigns
}