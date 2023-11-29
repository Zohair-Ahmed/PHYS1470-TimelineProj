import React from "react";
import "./Header.css"

class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="text text-1">Timeline</div>
                <div class="text text-2">of the </div>
                <div class="text text-3">Universe</div>
                <div class="text text-4">.</div>
                <br />
                <div style={{fontSize: "40px"}} class="text-5">Zohair Ahmed (215867633) & Shaheer Lone (217277807)</div>
            </div>
        )
    }
}

export default Header