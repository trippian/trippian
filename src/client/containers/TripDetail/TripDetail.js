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
    console.log('inside destination detail render', this.props.destination)
    const {
      netVote, totalVotes, destination, title, summary, details, feature, album

    } = this.props.trip
    return (
      <div>
      <div className="row section">
        <div className="section-body col-sm-12 col-md-12">
          <div className="row section">
            <SectionHeaderWidget title="Why Visit" subTitle="" />
            <div className="section-body">
              {title}
              <button type="button" className='btn-link' onClick={this.showReadMore.bind(this)} ria-label="Read More">more</button>
              {this.state.isShowReadMore && <p>{title}</p> }
            </div>
          </div>
        </div>
      </div>
      
      {album && 
        <div className="row section">
          <SectionHeaderWidget title="Photos" subTitle="Lorem ipsum dolor." />
          <div className="section-body">
              <CarouselWidget dataList={album}/>
          </div>
        </div>
      }

      <div className="row section">
        <SectionHeaderWidget title="Popular Trips" subTitle="Lorem ipsum dolor." />
        <div className="section-body">
          summary: {summary}
          detail: {details}
        </div>
      </div>

      <div className="row section">
        <div className="row">
        </div>
        <div className="section-body">
      
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
