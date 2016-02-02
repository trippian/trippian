import React, {
  Component, PropTypes
}
from 'react'
import {
  connect
}
from 'react-redux'
import {
  JumbotronDestinationWidget, CarouselWidget, SectionHeaderWidget, DestinationListWidget, TripListWidget
}

from '../../components/index'


function mapStateToProps(state) {
  return {
    destination: state.apiTrippian.get('destination')
  }
}

@
connect(mapStateToProps)
export default class DestinationDetail extends Component {
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
    const {
      whyVisit, description, popularTrips
    } = this.props.destination
    return (
      <div>
      <div className="row section">
        <div className="section-body col-sm-12 col-md-12">
          <div className="row section">
            <SectionHeaderWidget title="Why Visit" subTitle="" />
            <div className="section-body">
              {whyVisit}
              <button type="button" className='btn-link' onClick={this.showReadMore.bind(this)} ria-label="Read More">more</button>
              {this.state.isShowReadMore && <p>{description}</p> }
            </div>
          </div>
          <div className="row">
            <CarouselWidget />
          </div>
        </div>
      </div>
      <div className="row section">
        <SectionHeaderWidget title="Popular Trips" subTitle="Lorem ipsum dolor." />
        <div className="section-body">
          <TripListWidget dataList={popularTrips} />
        </div>
      </div>
      <div className="row section">
        <SectionHeaderWidget title="Popular Trippians" subTitle="Lorem ipsum dolor." />
        <div className="section-body">
          <DestinationListWidget  />
        </div>
      </div>
    </div>
    )
  }
}
DestinationDetail.propTypes = {
  destination: PropTypes.object,
  name: PropTypes.string
}

DestinationDetail.displayName = 'DestinationDetail Page'
