import React, { ReactPropTypes } from "react";

export class Clock extends React.Component<{}, any> {
    
    constructor(props: ReactPropTypes) {
        super(props);
        this.state = { clock: new Date().toISOString() };
    }

    getLatestTimeHandler = () => {
        this.setState({ clock: new Date().toISOString() });
    };

    render() {
        return (
            <div className="clock">
                <p>{this.state.clock}</p>
                <button onClick={() => this.getLatestTimeHandler()} className="primary">
                    Get Latest Time
                </button>
            </div>
        );
    }
}

export default Clock;
