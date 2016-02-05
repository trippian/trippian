import React, {
  Component, PropTypes
}
from 'react'
import {
  connect
}
from 'react-redux'
import {
  JumbotronDestinationWidget, CarouselWidget, SectionHeaderWidget, TrippianListWidget, TripListWidget, GoogleMapWidget
}
from '../../components/index'
import {
  map as appConfig
}
from '../../config/appConfig'

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
      const styles = {
        map: {
          width: '100%',
          height: '400px'
        }
      }
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
          <div className="map_canvas" style={styles.map}>
            <GoogleMapWidget lat={+lat} lng={+lng} zoom={5}></GoogleMapWidget>
          </div>
          <TripListWidget dataList={popularTrips} />
        </div>
      </div>

    < /div>
    )
  }
}
DestinationDetail.propTypes = {
  destination: PropTypes.object,
  name: PropTypes.string
}

DestinationDetail.displayName = 'DestinationDetail Page'
