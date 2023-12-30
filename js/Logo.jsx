import React from 'react';
import ParallaxEffect from 'echweb-shared/parallax';
import mcrodeLogo from '../mcrode.logo.webm'

export default class Logo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parallax: new ParallaxEffect()
        };
        this.mainDiv = React.createRef();
        this.pleaseScroll = React.createRef();
    }

    componentDidMount() {
        this.state.parallax.register(this.mainDiv.current, true);
        
        setTimeout(() => this.pleaseScroll.current?.classList.add("visible"), 5000)
    }

    render() {
        let divcontainerStyle = {
            height: "100%"
        };
        return (
            <div className="logo" style={{marginBottom: "-150px"}}>
                <div ref={this.pleaseScroll} className="pleaseScroll">
                    <div className="indicator">
                    </div>
                </div>
                <div ref={this.mainDiv} style={divcontainerStyle}>
                    <video loop muted autoPlay>
                        <source src={mcrodeLogo} type="video/webm" />
                    </video>
                </div>
            </div>
        );
    }
}