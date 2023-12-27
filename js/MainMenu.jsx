import React from 'react';
import {Gh1, Gh2} from 'echweb-shared/Gh';
import EwLink from 'echweb-shared/EwLink';

export default class MainMenu extends React.Component {
    render() {
        return <div id="mainMenu">
            <div className="cover">
            </div>
            <div className="flexing">
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <EwLink to="/c/log">log</EwLink>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <EwLink to="/c/works">works</EwLink>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <EwLink to="/c/ware">software</EwLink>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <EwLink to="/c/about">about</EwLink>
                </Gh2>
            </div>
        </div>
    }
}