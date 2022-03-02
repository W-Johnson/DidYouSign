import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpotify,
    faLinkedin,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss"
export default function SocialMedia() {
    return (
        <div className="social-container">
            <a href="https://open.spotify.com/playlist/4nilmblUJ6MOkTK1JDhDcI?si=6492813515f0499c"
               className="spotify social" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faSpotify} size="2x" />
            </a>
            <a href="https://www.instagram.com/wiilliiamj/"
                    className="instagram social" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com/JhsnWilliam"
               className="twitter social" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/william-johnson-035633206/"
                     className="linkedin social" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

        </div>
    );
}