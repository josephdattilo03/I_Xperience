import { Component } from "react";
import "./ContactMe.css";

class ContactMe extends Component {
    render() {
        return (
            <div id="contact-me">
                <div class="row text-center">
                    <div class="col">
                        <h1 class="display-1 text-decoration-underline mt-5">Lets Talk</h1>
                        <div class="d-inline">
                            
                        </div>
                    </div>
                    <form class="col">
                        <input
                            id="email-input"
                            class="d-block"
                            type="text"
                            placeholder="Email"
                        />
                        <textarea
                            placeholder="Write Something..."
                            className="d-block"
                        ></textarea>
                        <div class="form-check container d-flex">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Business?
                            </label>
                        </div>
                        <div class="form-check container d-flex">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                checked
                            />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Questions?
                            </label>
                        </div>
                        <input
                            id="send-btn"
                            class="d-block text-center"
                            type="submit"
                            value="Send"
                        ></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactMe;
