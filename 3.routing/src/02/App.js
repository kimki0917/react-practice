import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});

    useEffect(() => {
        const handlePopState = e => {
            //console.log(e.state);
            setRoute(e.state);
        };
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        }
    }),[];

    const handleLinkClick = (e) => {
        e.preventDefault();

        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        window.history.pushState({page: url}, e.target.text, url);
        setRoute({page: url});
    }

    return (
        <div>
            {
                (() => {
                    let component = null;
                    switch (route.page) {
                        case '/':
                            component = <Main/>;
                        case '/gallery':
                            component = <Gallery/>;
                        case '/guestbook':
                            component = <Guestbook/>;
                            default:
                                return null
                    }
                            })()
                }
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}