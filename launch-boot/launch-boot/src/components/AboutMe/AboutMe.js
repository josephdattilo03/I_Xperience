import {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './AboutMe.css'
import {default as profile} from "./IMG_1262.png"


class AboutMe extends Component {
    render() {
        return(
            <div class="p-5 text-center" id="abt-me">
                <div id="taupe-box" class="text-center">
                </div>
                <div id="celadon-box" class="">
                </div>
                <div id="funny-ginger-box" class="">
                </div>
                <img id="profile-photo" src={profile}/>
            </div>
        )
    }
}

export default AboutMe