import React from 'react';
import { formatPhone } from '../../utils';

const CarrierCardDetails = props => {
  return <div className="card container card-container">
    <div className="grey lighten-4 card-content-carrierPrice">
      <div>
        <h5>${props.price} <span>per load</span></h5>
      </div>
      <div className="card-content-carrierCapabilities">
        <h6>Capabilities:</h6>
        {props.capabilities.map((capability, index) =>
          <h6 key={index}> {capability} </h6>
        )}
      </div>
    </div>
    <div className="card-content-contactInfo">
      <h6>{props.contactName}<span>|</span></h6>
      <h6>{props.contactEmail}<span>|</span></h6>
      <h6>{formatPhone(props.contactPhone)}</h6>
    </div>
  </div>
}

export default CarrierCardDetails;
