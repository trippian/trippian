import React from 'react'

const renderItem = () => {

}
const renderExpanded = () => {
  return (
    <div class="inquiry-item-detail col-sm-12 col-md-12">
           <span class="text-muted">
            3 days, 2 people, Jan. 2 ~ Jan. 5
           </span>
           <h4>Contact Info</h4>
           <b>Email:</b> me@audreyli.me
           <br/>
           <b>Mobile:</b> 123 456 789
           <br/>
           <h4>Detail</h4>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod enim ullam ipsum eos ex aperiam ad harum omnis eum beatae, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fugiat totam minus neque quaerat, illo quisquam velit perferendis nihil earum!...</p>
       </div>
  )
}
const InquiryListItemWidget = ({
  isExpanded = false
}) => {
  return (
    <li className={ `list-group-item ${isExpanded? 'active': ''}` }>
        <div className="item-content-container">
            <div className="item-detail-left col-sm-12 col-md-8">
                <a href="#" className=""> <b> James Smith</b>
                    <span className="text-muted">
                        3 days, 2 people, Jan. 2 ~ Jan. 5
                    </span>
                </a>
            </div>
            <div className="right-icons-container col-sm-12 col-md-4">
                <a href="" className="icon-right pull-right" title="delete"> <i className="fa fa-check"></i></a>
                <a href="" className="icon-right pull-right" title="delete"> <i className="fa fa-close"></i></a>
                <a href="" className="icon-right pull-right" title="delete"> <i className="fa fa-trash"></i></a>
            </div>
        </div>
        {isExpanded ? renderExpanded() : null}
    </li>
  )
}

InquiryListItemWidget.displayName = 'InquiryListItemWidget'

export default InquiryListItemWidget
