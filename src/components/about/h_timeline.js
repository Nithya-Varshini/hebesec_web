import React from 'react';
import './h_timeline.css';

function TimelineComponent() {
    return (
        <div className="demo">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="main-timeline">
                    <div className="timeline" data-heading="2011">
                        <div className="timeline-content">
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus repellat temporibus vitae voluptate.
                            </p>
                            <a href="#" className="read-more">read more</a>
                        </div>
                        <span className="year">
                            <span>2011</span>
                        </span>
                    </div>
 
                    <div className="timeline" data-heading="2012">
                        <div className="timeline-content">
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus repellat temporibus vitae voluptate.
                            </p>
                            <a href="#" className="read-more">read more</a>
                        </div>
                        <span className="year">
                            <span>2012</span>
                        </span>
                    </div>
 
                    <div className="timeline bottom" data-heading="2015">
                        <span className="year">
                            <span>2015</span>
                        </span>
                        <div className="timeline-content">
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus repellat temporibus vitae voluptate.
                            </p>
                            <a href="#" className="read-more">read more</a>
                        </div>
                    </div>
 
                    <div className="timeline bottom" data-heading="2016">
                        <span className="year">
                            <span>2016</span>
                        </span>
                        <div className="timeline-content">
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus repellat temporibus vitae voluptate.
                            </p>
                            <a href="#" className="read-more">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default TimelineComponent;
