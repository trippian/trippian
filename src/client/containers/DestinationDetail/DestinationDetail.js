import React, {
  Component, PropTypes
}
from 'react'
import {
  connect
}
from 'react-redux'
import {
  JumbotronDestinationWidget, CarouselWidget, SectionHeaderWidget, TrippianListWidget, TripListWidget
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
    console.log('inside destination detail render', this.props.destination)
    const {
      whyVisit, description, popularTrips, album, lat = '', lng = ''
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
          <TripListWidget dataList={popularTrips} />
        </div>
      </div>

      <div className="row section">
        <div className="row">
        Position: {lat} {lng}
        </div>
        <div className="section-body">
         
        < iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9971829383094!2d2.2923237802887466!3d48.85826410877076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fe1f3bfb4ad%3A0x7bd31375becf28cd!2sEiffel+Tower%2C+5+Avenue+Anatole+France%2C+75007+Paris%2C+France!5e0!3m2!1sen!2sus!4v1452992121001"
        width = "100%"
        height = "450"
        frameBorder = "0"
        allowFullScreen > < /iframe>
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
