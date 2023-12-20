import React from 'react';
import './Home.scss';
import { MdPermMedia } from 'react-icons/md'
import { BsFillCalendar2EventFill } from 'react-icons/bs'
import { MdArticle } from 'react-icons/md'
import Posts from './Posts.jsx';
import { FaBookmark } from "react-icons/fa";

const Home = () => {
    return (
        <div className="main">
            <div className='home'>
                <div className="left">
                    <div className="top">
                        <h2>profile</h2>
                         <img className='img' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" alt="" />
                        
                       
                        <h4>Md Aurangzeb</h4>

                        <p> Front-End Developer || React.Js ||
                             
                            <br /> Working as Software Developer <br />Trainee at Numetry Technology.</p>
                        <hr />
                        <p>Profile viewers</p>
                        <p>View all anylitics</p>

                        <hr />

                        <div className="save">
                            <FaBookmark /> My items
                        </div>

                    </div>
                    <div className="down">
                        <p>Recent</p>
                        <p>Groups</p>
                        <p>Events</p>
                        <p>Followed Hashtags</p>
                        <br />
                        <hr />
                        <br />
                        <span>Discover more</span>
                    </div>
                </div>
                <section className='mid'>
                    {/* top */}
                    <div className="top">
                        <div className="profile__div">
                            <img className='profile' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" alt="" />
                            <div className="input">
                                <input type="text" placeholder='Start a post' />

                            </div>
                        </div>
                        <div className="items">
                            <div className="item">
                                <MdPermMedia />
                                <span>Media</span>
                            </div>
                            <div className="item">
                                <BsFillCalendar2EventFill />
                                <span>Event</span>
                            </div>
                            <div className="item">
                                <MdArticle />
                                <span>Write article</span>
                            </div>
                        </div>
                    </div>
                    {/* posts */}
                    <br />
                    <hr />
                    <br />
                    <Posts />
                </section>
                <div className='right'>
                    <div className="top">
                        <h3>LinkedIn News </h3>
                        <ul>
                            <li>

                                <h5>Big Ideas in tech, finance, retail</h5>
                                <p>Top news • 6,176 readers</p>
                            </li>
                            <li>
                                <h5>More nations eye Indian tourists</h5>
                                <p>1d ago • 893 readers</p>
                            </li>
                            <li>
                                <h5>Indian pilots in turbulent skies</h5>
                                <p>1d ago • 982 readers</p>
                            </li>
                            <li>
                                <h5>Bumper quarter for consumer firms</h5>
                                <p>1d ago</p>
                            </li>
                            <li>
                                <h5>Making India Inc more inclusive</h5>
                                <p>1d ago • 486 readers</p>
                            </li>
                            <li>
                                <h5>Hiring spike in smaller cities</h5>
                                <p>1d ago • 149 readers</p>
                            </li>

                        </ul>
                    </div>
                    <div className="down">
                        <p>Stay updated on the latest in digital technologies.</p>

                        <img src="https://media.licdn.com/dms/image/D5610AQHqR1gGHdWBmQ/image-pad_100_100/0/1687844283957?e=1700222400&v=beta&t=xDGizeR8D07Op7fGNomXWOmGMVLauoYhay9xiUBI3Zw" alt="" />
                        <h6>Hitachi Social Innovation is POWERING GOOD
                            <button>Follow</button>
                        </h6>

                    </div>
                </div>

            </div>
        </div>
    )
}





export default Home