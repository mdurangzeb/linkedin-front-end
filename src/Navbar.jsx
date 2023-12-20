import React from 'react';
import './Navbar.scss';
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {FaNetworkWired} from 'react-icons/fa'
import {BsFillHandbagFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {IoNotificationsSharp} from 'react-icons/io5'
import {BsPersonCircle} from 'react-icons/bs'
import {PiDotsNineBold} from 'react-icons/pi'


const Navbar = () => {
  return (
    <nav>
        <div className="left">

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAYFBMVEUAfrv///8Ae7oAd7hhm8kWfrvl7/aZvdq1zuMAcLWTudhEjsP1+fzd6fMAebkAc7ZOlcYZg76Dr9Pt9Pkuh7+jxN5BisGqyOB3qtGItNbK3ezF2OlVmshppM7U4++91edq7N+fAAAC0ElEQVRoge3b2ZKiMBQG4CyAgGFHNhXe/y0HumWkk6OVOJWTrpr8N30Rm6/B09k0hD4ilrqsiN1UZb2IHSTfP5qa85xZhglhOed1c5TjkFtX9/AwfsppgeZuKdJdRoYf9CrH2PBKx5vchOgwIWGzyjVecT3Da0qEC3ilBVkcyQupcydyXpPSfs8FhZXEdl/9Kq7c3xrGnJQAL9oyKNsCu/J5NWbbMNpkY4X6/86HZp850GhApPmFHnNBG8skGI/mA5UT4NRZ1ShygyLzUYEpHTDoIgPkCUNu1Ye9Pm6E/p2VAExph7AKCED57ExGuGfSCgDGeJ/h2p4x+m6eAvKI0pUAj1vgLEOAm8YaKPlVgq8JDrwW2fQDntBgQpLjAx8R4W0e1kdfbHSpkOeAjIfd7X7rEPdPDjhzNOH2+fVhOU++UvCPaoTJedv6bOD8NsZzJEQ0L+lwToz/L9qznPbQqjQ+hm5WnC8/pnAiG1uzJcI6Yggp/fOvDzOp7TGC8vOiDq6ib03um5+UK8QHOZIb03x70Oovfdsmu20fyCycYXjNor95bS7n4NxtT6Z918Zy0b2DV1p3sDOWGbQqOUZ3ZmEq15PyejmaC0JT+XVx/Y3mDNJU1slFq8psyEJrjWJDplo7ylZkreWRFVnoLIOtyPRuUY6muF/mV72KzkdTn8mnMl8nIkVSDdAqWK8L/USeq2J/mjnvwSeiUdwfyNfk+C4W8u7llqZVpX+X5XEQ2nbQKW5z+SZdFNzZCizIk9JLJECF25DVMVDZp7Ykq6MBu6PIM3RJFBn6SDVBkXtIVkvMgnyCZLUaLMgp0C8mal/iZS972cte9rKXvexlL3vZy172sgWZdYGcw15WqDR20DVK5WVae+vKJ6LsXaP5Jf7juPv+trvvrLv7nr67swnuzmO4O4Pi8NyNu7NGDs9XOTxT5vAcncOzg3Q7Lzninpf8A1JjNrkAS/gtAAAAAElFTkSuQmCC" alt="" />
        <div className="input">
            <AiOutlineSearch size={20}/>
            <input type="text" placeholder='Search' />
            
        </div>
        </div>
        <div className="tabs">
            <div className="tab">
                <AiFillHome/>
                <span>Home</span>
            </div>
            <div className="tab">
                <FaNetworkWired/>
                <span>My Network</span>
            </div>
            <div className="tab">
                <BsFillHandbagFill/>
                <span>jobs</span>
            </div>
            <div className="tab">
                <AiFillMessage/>
                <span>Messaging</span>
            </div>
            <div className="tab">
                <IoNotificationsSharp/>
                <span>Notifications</span>
            </div>
            <div className="tab">
                <BsPersonCircle/>
                <span>Me</span>
            </div>
        </div>

        <div className="extra">
            <PiDotsNineBold size={20}/>
            <span>For Business</span>
        </div>
        <a href="">Try Primium for free</a>
    </nav>
  )
}

export default Navbar