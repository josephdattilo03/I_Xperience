import { Component } from "react";
import React from "react";
import "./TitleCard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AttributesLoop from "../AttributesLoop/AttributesLoop";


function DelayedAnimation(props) {
    return (
        <span class="title-text" id={props.id} style={{animationDelay: props.delay}} >{props.content}</span>
    )
}

class TitleCard extends Component {
    render() {
        const name = "Joseph Dattilo"
        const html = []
        for (let i = 0; i < name.length; i++) {
            html.push({content:name.charAt(i), delay:2.2+.02*i})
        }
        return(
            <div class="text-center p-5" id="title-card">
                <div class="display-1 mt-5"><DelayedAnimation id="hi-text" content="Hi!" delay=".3s"/></div>
                    <div class="display-5" id="my-name-is">
                        <DelayedAnimation content = "My " delay = ".6s"/>
                        <DelayedAnimation content = "name " delay = ".9s"/>
                        <DelayedAnimation content = "is " delay = "1.2s"/>
                        <DelayedAnimation content="." delay="1.5s"/>
                        <DelayedAnimation content="." delay="1.8s"/>
                        <DelayedAnimation content="." delay="2.1s"/>
                    </div>
                <div class="display-3">
                {html.map((component, index) => (
                    <DelayedAnimation id="introduction" content={component.content} delay={component.delay + "s"} />
                ))}
                </div>
                <AttributesLoop/>
            </div>
        )
    }
}

export default TitleCard