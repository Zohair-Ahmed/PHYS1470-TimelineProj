import React from "react";
import "./Universe.css"
import Scale from "../scale/Scale"
import Timeline from "../timeline/Timeline"

class Universe extends React.Component {
    render() {
        return (
            <div className="universeContainer">
                <Scale />
                <Timeline />
            </div>
        )
    }
}

export default Universe;
