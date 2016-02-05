import React, {
  Component, PropTypes
}
from 'react'
import {
  connect
}
from 'react-redux'
import {
  JumbotronDestinationWidget, CarouselWidget, SectionHeaderWidget, TripListWidget
}

from '../../components/index'


function mapStateToProps(state) {
  return {
    trip: state.apiTrippian.get('trip')
  }
}

@
connect(mapStateToProps)
export default class TripDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowReadMore: false
    }
  }
  showReadMore() {
    this.setState({
      isShowReadMore: !this.state.isShowReadMore
    })
  }

  render() {
    console.log('inside trip detail render', this.props.trip)
    const {
      netVote, totalVotes, destination, title, summary, details, feature, album

    } = this.props.trip
    return (
      <div>
        <div className="row section">
          <SectionHeaderWidget title="Summary"/>
          <div className="section-body">
            {summary}
          </div>
        </div>

        {album && 
          <div className="row section">
            <SectionHeaderWidget title="Photos"/>
            <div className="section-body">
                <CarouselWidget dataList={album}/>
            </div>
          </div>
        }
        
        <div className="row section">
          <SectionHeaderWidget title="Detail"/>
          <div className="section-body">
            {summary}
          </div>
        </div>

        <div className="row section">
          <div className="section-body">
            Map 
          </div>
        </div>
    </div>
    )
  }
}
TripDetail.propTypes = {
  destination: PropTypes.object,
  name: PropTypes.string
}

TripDetail.displayName = 'TripDetail Page'
