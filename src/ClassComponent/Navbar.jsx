import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            search: ""
        }
    }
    postSearch(e){
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({search:""})
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/">News App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-light active" aria-current="page" to="/All">All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/Politics">Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/Science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/Technology">Technology</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Other
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/Education">Education</Link></li>
                                        <li><Link className="dropdown-item" to="/Crime">Crime</Link></li>
                                        <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/Cricket">Cricket</Link></li>
                                        <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" to="/Jokes">Jokes</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Language
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('hi')}>Hindi</button></li>
                                        <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('en')}>English</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e)=>{this.postSearch(e)}}>
                                <input className="form-control me-2" type="search" name='search' value={this.state.search} placeholder="Search" onChange={(e)=>{this.setState({search:e.target.value})}} aria-label="Search"/>
                                    <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
