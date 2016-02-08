import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'
import {
  connect
}
from 'react-redux'
import {
  JumbotronDestinationWidget, SectionHeaderWidget, TrippianListWidget, TripListWidget, GoogleMapWidget
}
from '../../components/index'
import {
  DestinationDetail as appConfig
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
                <SectionHeaderWidget title={appConfig.whyVisitTitle} subTitle={appConfig.whyVisitSubtitle} />
                <div className="section-body">
                  {whyVisit}
                  {this.state.isShowReadMore && <p>{description}</p> }
                </div>
              </div>
            </div>
          </div>
          <div className="row section">
            <div className="section-body col-sm-12 col-md-12">
              <div className="row section">
                <SectionHeaderWidget title={appConfig.descriptionTitle} subTitle={appConfig.descriptionSubTitle} />
                <div className="section-body">
                  {description}
                </div>
              </div>
            </div>
          </div>

          <div className="row section">
            <SectionHeaderWidget title={appConfig.popularTripsTitle} subTitle={appConfig.popularTripsSubtitle} />
            <div className="section-body">
              <TripListWidget dataList={popularTrips} />
              <div className="map_canvas" style={styles.map}>
                <GoogleMapWidget lat={+lat} lng={+lng} zoom={5} />
              </div>
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
