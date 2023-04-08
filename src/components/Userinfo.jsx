import React from "react";
import { FcOrganization } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { ImCross } from "react-icons/im";


export default function Userinfo({use,handleClose,last}) {
    function getDat(d) {
        let date = new Date(d);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        if (dt < 10) {
            dt = "0" + dt;
        }
        if (month < 10) {
            month = "0" + month;
        }
        let str = dt + "-" + month + "-" + year;
        return str;
    }

    return (
        <div className="userinfo" id={last?"animate":""}>
            <div className="top">
                <div className="left">

                <div className="t1">
                    <img src={use.avatar_url}></img>
                </div>
                <div className="t2">
                    <h2>{use.name}</h2>
                    <h3 className="username">@{use.login}</h3>
                    <h3 className="joined">Joined {getDat(use.created_at)}</h3>
                </div>
                </div>
                <div className="right">
                <ImCross style={{cursor:"pointer"}} onClick={()=>handleClose(use.id)} color="red"/>
                </div>
            </div>
            {/* {use.bio != null && <p className="bio">Bio:{use.bio}</p>} */}
            <div className="mid">
                <div className="mid-item">
                    <p>Repos</p>
                    <h2>{use.public_repos}</h2>
                </div>
                <div className="mid-item">
                    <p>Followers</p>
                    <h2>{use.followers}</h2>
                </div>
                <div className="mid-item">
                    <p>Following</p>
                    <h2>{use.following}</h2>
                </div>
            </div>
            <div className="last">
                <div className="row">
                    <div className="cell">
                        <MdLocationOn />{" "}
                        {use.location == null ? (
                            <p className="dim">Not Available</p>
                        ) : (
                            <p>{use.location}</p>
                        )}
                    </div>
                    <div className="cell">
                        <FiLink />{" "}
                        {use.blog == "" ? (
                            <p className="dim">Not Available</p>
                        ) : (
                            <a target="_blank" href={use.blog}>
                                Click Here
                            </a>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="cell">
                        <FaTwitter />{" "}
                        {use.twitter_username == null ? (
                            <p className="dim">Not Available</p>
                        ) : (
                            <p>{use.twitter_username}</p>
                        )}
                    </div>
                    <div className="cell">
                        <FcOrganization />{" "}
                        {use.company == null ? (
                            <p className="dim">Not Available</p>
                        ) : (
                            <p>{use.company}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
