import React from "react";
import "./Timeline.css"
import timelineInfo from "../res/data/timelineInfo.json"


class Timeline extends React.Component {
    render() {
        const yCoord = ["0px", "5500px", "46200px", "46700px", "51250px", "65500px", "66650px", "67800px", "68986.5px", "68999.975px"]

        return (
            <div>
                <style>@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap');</style>
                <section>
                    <div className="events">
                        {
                            timelineInfo.map((entry, index) => (
                                <div key={index} style={{ top: yCoord[index], position: "relative" }}>
                                    <div>
                                        <div class="timeline-middle">
                                            <div class="timeline-circle"></div>
                                        </div>
                                        <div class="timeline-component timeline-content">
                                            <h3>{entry.timepoint} ({entry.year})</h3>
                                            <br />
                                            <p>{entry.joke}</p>
                                        </div>
                                        <div class="timeline-empty"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section >
            </div >
        )
    }
}

export default Timeline