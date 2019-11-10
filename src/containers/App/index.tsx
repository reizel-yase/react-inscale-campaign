import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { 
  Col,
  Form,
  FormControl,
  InputGroup,
  Navbar,
  Row
} from 'react-bootstrap'

import { 
  addCampaigns, 
  getCampaigns,
  filterCampaigns
} from '../../action/creators'
import List from "../../components/List"
import { Campaign, Payload } from "../../types/campaign"
import { State } from '../../reducers'
import '../../styles/index.scss'

declare global {
  interface Window { AddCampaigns: any; }
}

interface Props {
  adding: boolean
  fetching: boolean
  campaigns: Array<Campaign>
  dispatch: any
}

interface AppState {
  fetching: boolean
  campaigns: Array<Campaign>
  searchStartDate: string
  searchEndDate: string
  searchName: string
}

class AppComponent extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props)

    this.state = {
      campaigns: [],
      fetching: props.fetching || props.adding,
      searchStartDate: '',
      searchEndDate: '',
      searchName: ''
    }

    window.AddCampaigns = (campaigns: Payload[]) => {
      this.props.dispatch(addCampaigns(campaigns))
    }

    this.searchByName = this.searchByName.bind(this)
    this.searchByStartDate = this.searchByStartDate.bind(this)
    this.searchByEndDate = this.searchByEndDate.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(getCampaigns())
  }

  componentWillReceiveProps(props: any) {
    if (props.campaigns) {
      this.setState({
        campaigns: props.campaigns,
        fetching: props.fetching
      })
    }
  }

  filterCampaigns() {
    const { searchStartDate, searchEndDate, searchName } = this.state

    this.props.dispatch(filterCampaigns(searchName,searchStartDate, searchEndDate))
  }

  searchByName(e: any) {
    const { searchStartDate, searchEndDate } = this.state

    this.setState({
      searchName: e.target.value
    })

    this.props.dispatch(filterCampaigns(e.target.value, searchStartDate, searchEndDate))
  }

  searchByStartDate(e: any) {
    const { searchName, searchEndDate } = this.state
    this.setState({
      searchStartDate: e.target.value
    })

    this.props.dispatch(filterCampaigns(searchName, e.target.value, searchEndDate))
  }

  searchByEndDate(e: any) {
    const { searchName, searchStartDate } = this.state

    this.setState({
      searchEndDate: e.target.value
    })

    this.props.dispatch(filterCampaigns(searchName, searchStartDate, e.target.value))
  }

  render() {
    const { campaigns, fetching } = this.state

    return (
      <div id="app">
        <Navbar>
          <Navbar.Brand href="#home">React Campaigns</Navbar.Brand>
        </Navbar>        
        <div id="wrapper">
          <Row>
            <Col>
              <div className="filters">
                <Row>
                  <Col md={5}>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Search by name"
                        aria-label="Search by name"
                        aria-describedby="basic-addon2"
                        onChange={this.searchByName}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={{ span: 6, offset: 1 }}>
                    <Row>
                      <Col md={6}>
                        <Form.Control 
                          type="text" 
                          placeholder="Start Date" 
                          onChange={this.searchByStartDate}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Control 
                          type="text" 
                          placeholder="End Date" 
                          onChange={this.searchByEndDate}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <List data={campaigns} loading={fetching} />
            </Col>
            <Col>
            </Col>
          </Row>
        </div>                   
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  adding: state.adding,
  fetching: state.fetching,
  campaigns: state.campaigns,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    dispatch
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
