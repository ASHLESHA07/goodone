import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-sm bg-${props.mode} navbar-${props.mode} fixed-top`}>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link class="navbar-brand" to="#">Hidden brand</Link>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="#">ABOUT</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Link</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link disabled">Disabled</Link>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
                    </div>
                </div>
                </div >
        </nav>

    )
}


//   title: PropTypes.string.isRequired,
//   hometext: PropTypes.string
// }
// Navbar.defaultProps = {
//   title: 'set the goal',
//   hometext:'about text here'
// };