import React from 'react'
import './index.css'

function TeamCard(props) {
    return (
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" >
            <div class="member">
                <div class="member-img">
                    <img src={props.memImage} class="team-mem-image" alt="" />
                    <div class="social">
                        <a href={`https://linkedin.com/${props.linkedIn}`} target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="member-info">
                    <h4>{props.name}</h4>
                    <span>{props.role}</span>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
