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
        if (window.scrollY > this.lastScroll) {
            this.setState({showNav: false});
        // Up
        } else if (window.scrollY < this.lastScroll) {
            this.setState({showNav: true});
        }

        this.lastScroll = window.scrollY;
    }

    render() {
        return (
            <nav className={ClassNames('main-nav', {'show-nav': this.state.showNav} )}>
                <div className='nav-container'>
                    <a href='#home' className='logo nav-item'>
                        <span id='svg-logo' className='svg-logo' dangerouslySetInnerHTML={{__html: logo}} />
                    </a>
                    <div className='nav'>
                        <a href='#info' className='nav-item'>{'Info'}</a>
                        <a href='#rsvp' className='nav-item'>{'RSVP'}</a>
                    </div>
                </div>
            </nav>
        );
    }
}
