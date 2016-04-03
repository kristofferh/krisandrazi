import {default as React, Component} from 'react';
import ClassNames from 'classnames';
import logo from './logo.svg';
import './styles';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showNav: true
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
            }
            ticking = true;
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (this.isAnimating) {
            return;
        }
        // Down
        if (window.scrollY > this.lastScroll && window.scrollY > 80) {
            this.setState({showNav: false});
        // Up and always show at the top
        } else if (window.scrollY < this.lastScroll || window.scrollY < 80) {
            this.setState({showNav: true});
        }

        this.lastScroll = window.scrollY;
    }

    handleClick(e) {
        e.preventDefault();
        let el = e.target;

        if (el && el.href) {
            this.scrollToId(el.href.split('#')[1]);
        }
    }

    scrollToId(elementId) {
        if (document.getElementById(elementId)) {
            let scrollEnd = document.getElementById(elementId).offsetTop;
            let distance = Math.abs(scrollEnd - window.scrollY);
            let duration = Math.round(distance / 5);
            if (duration > 10) {
                this.smoothScrollTo(scrollEnd, Math.round(distance / 5));
            } else {
                window.scrollTo(0, scrollEnd);
            }
        }
    }

    smoothScrollTo(to, duration) {
        let body = document.body;
        if (duration <= 0) {
            return;
        }
        var difference = to - body.scrollTop;
        var perTick = difference / duration * 10;
        setTimeout(() => {
            body.scrollTop = body.scrollTop + perTick;
            if (body.scrollTop === to) {
                return;
            }
            this.smoothScrollTo(to, duration - 10);
        }, 10);
    }


    render() {
        return (
            <nav className={ClassNames('main-nav', {'show-nav': this.state.showNav} )}>
                <div className='nav-container' onClick={this.handleClick}>
                    <a href='#home' className='logo nav-item'>
                        <span id='svg-logo' className='svg-logo' dangerouslySetInnerHTML={{__html: logo}} />
                    </a>
                    <div className='nav'>
                        <a href='#info' className='nav-item'>{'Info'}</a>
                        <a href='#venue' className='nav-item'>{'Venue'}</a>
                        <a href='#rsvp' className='nav-item'>{'RSVP'}</a>
                    </div>
                </div>
            </nav>
        );
    }
}
