import {default as React, Component} from 'react';

import './styles';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showNav: false
        };
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
    }

    handleScroll() {
        if (this.isAnimating) {
            return;
        }
        // Down
        if (window.scrollY > this.lastScroll /*&&
            window.innerHeight + window.scrollY >
                ((window.innerHeight * this.state.activeIndex) + window.innerHeight/2) */
        ) {
            console.log('down');
            // this.setActive(this.state.activeIndex + 1);
        // Up
        } else if (window.scrollY < this.lastScroll /*&&
          window.innerHeight + window.scrollY <
            ((window.innerHeight * this.state.activeIndex) - window.innerHeight/1.5) */
        ) {
            console.log('up');
            // this.setActive(this.state.activeIndex - 1);
        }

        this.lastScroll = window.scrollY;
    }

    handleCloseClick() {
        this.setState({showNav: false});
    }

    render() {
        return (
            <nav className={'main-nav ' + ' ' + ((this.state.showNav) ? 'show-nav' : '')}>
                <a href='#info' className='nav-item'><span className='text'>{'Info'}</span></a>
                <a href='#rsvp' className='nav-item'><span className='text'>{'RSVP'}</span></a>
                <span className='nav-item close' onClick={this.handleCloseClick}>
                    <span className='close-btn'></span>
                </span>
            </nav>
        );
    }
}
