import * as React from "react"
import * as moment from "moment"
import { 
  Badge,
  Spinner, 
  Table 
} from 'react-bootstrap'
import { Campaign } from "../../types/campaign"
import './styles.scss'

interface Props {
  data: Array<Campaign>
  loading: boolean
}

const List = ({
  data,
  loading
}: Props) => {
  return (
    <div className="campaign-list">
      {
        !loading ? 
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Active</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((c: Campaign, index: number) => {
                const curDate = moment(new Date()).format()
                const start = moment(c.startDate, 'MM/DD/YYYY').format()
                const end = moment(c.endDate, 'MM/DD/YYYY').format()
                const isActive = curDate >= start && curDate <= end
                
                return <tr key={index}>
                  <td>{c.name}</td>
                  <td>{c.startDate}</td>
                  <td>{c.endDate}</td>
                  <td>
                    <div className="status">
                      <Badge variant={!!isActive ? "success": "danger"}>&nbsp;</Badge> {!!isActive ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td>{c.Budget}</td>
                </tr>
              })
            }
          </tbody>
        </Table> : <Spinner animation="grow" />
      }
    </div>
  )
}

export default List