import React from 'react';
import { A } from 'echweb-shared/hookrouter';

export default class MainMenu extends React.Component {
    render() {
        return <div id="mainMenu">
            <div className="cover">
            </div>
            <div className="flexing">
                <h2 className="menuItem">
                    <A href="/c/log">log</A>
                </h2>
                <h2 className="menuItem">
                    <A href="/c/works">works</A>
                </h2>
                <h2 className="menuItem">
                    <A href="/c/ware">software</A>
                </h2>
                <h2 className="menuItem">
                    <A href="/c/about">about</A>
                </h2>
            </div>
        </div>
    }
}