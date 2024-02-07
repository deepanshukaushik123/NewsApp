import React, { Component } from 'react'

export default function NewsItem(props) {
    return (
        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className="card mb-2">
                <img src={props.pic ? props.pic : "/Images/NoImage.jpg"} height="160px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className='d-flex justify-content-between source'>
                        <p>{props.source}</p>
                        <p>{props.date}</p>
                    </div>
                    <hr />
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target='_blank' rel="noreferrer" className="btn btn-secondary w-100 btn-sm">Read Full article</a>
                </div>
            </div>
        </div>
    )
}

