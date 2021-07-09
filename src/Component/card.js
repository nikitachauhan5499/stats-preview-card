import React from 'react';
import '../Component/card.scss';

export default function card() {
    return (
        <div className="card-container card-width">
            <div className="left">
                <div className="heading">Get insights that help your business grow.</div>
                <div className="content">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</div>
                <div className="metrics">
                    <div className="metric">
                        <div className="number">10k+</div>
                        <div className="text">companies</div>
                    </div>
                    <div className="metric">
                        <div className="number">314</div>
                        <div className="text">template</div>
                    </div>
                    <div className="metric">
                        <div className="number">12M+</div>
                        <div className="text">queries</div>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="https://image.freepik.com/free-vector/people-working-factory-illustration_74855-2532.jpg" alt="People Working" />
            </div>
        </div>
    )
}
