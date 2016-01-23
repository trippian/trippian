import React from 'react'


class TrippianSignupFormWidget extends React.Component {

  static propTypes = {
    name: React.PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  handleClick() {
    console.log('clicked', this.refs.nameText.value, this.refs.locationText.value, this.refs.mobileText.value,
      this.refs.emailText.value, this.refs.sloganText.value, this.refs.websiteText.value, this.refs.bioText.value,
      this.refs.tripText.value)
  }

  render() {
    return (
      <form action="" method="POST" role="form">
        <div className="form-group">
            <label >Name</label>
            <input type="text" ref="nameText" className="form-control" id="" placeholder="Name" />
        </div>
        <div className="form-group">
            <label >Location</label>
            <input type="text" ref="locationText" className="form-control" id="" placeholder="Location" />
        </div>
        <div className="form-group">
            <label >Mobile</label>
            <input type="text" ref="mobileText" className="form-control" id="" placeholder="Mobile" />
        </div>
        <div className="form-group">
            <label >Email</label>
            <input type="text" ref="emailText" className="form-control" id="" placeholder="Email" />
        </div>
        <div className="form-group">
            <label >Slogan</label>
            <input type="url" ref="sloganText" name="" id="input" className="form-control" value="" required="required" title="" placeholder="Love travel, enjoy life..." />
        </div>
        <div className="form-group">
            <label >Website</label>
            <input type="url" ref="websiteText" name="" id="input" className="form-control" value="" required="required" title="" placeholder="http://" />
        </div>
        <div className="form-group">
            <label >Short Bio</label>
            <textarea name="requirements" ref="bioText" className="form-control" rows="2"></textarea>
        </div>
        <div className="form-group">
            <label >My Trips</label>
            <textarea name="requirements" ref="tripText" className="form-control" rows="3" placeholder="my amazing trip descriptions, youtube videos, photos..."></textarea>
        </div>
        <div className="form-group">
            <label > Upload Photos</label>
            <input type="file" name="" className="form-control" value="" required="required" title="" placeholder="" />
        </div>
        <div className="form-group">
            <label >My Calendar</label>
            <input type="url" name="" className="form-control" value="" required="required" title="" placeholder="enter your google calendar url" />
            
            <br/>
            <iframe src="https://calendar.google.com/calendar/embed?src=audreyli.me_019tevr02rfokhk2jnug0d3d94%40group.calendar.google.com&ctz=America/Los_Angeles"  width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
            
        </div>
        <div className="form-group">
            <p>
                <button type="submit" type = "submit" onClick={this.handleClick.bind(this)} className="btn btn-primary pull-right">Submit</button>
            </p>
        </div>
    </form>
    )
  }
}
TrippianSignupFormWidget.displayName = 'TrippianSignupFormWidget'

export default TrippianSignupFormWidget
