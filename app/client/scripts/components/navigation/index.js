import {default as React, Component} from 'react';
import ClassNames from 'classnames';

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
        window.addEventListener('scroll', (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll(e.srcElement.body.scrollTop);
                    ticking = false;
                });
            }
            ticking = true;
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(top) {
        if (this.isAnimating) {
            return;
        }
        // Down
        if (top > this.lastScroll /*&&
            window.innerHeight + window.scrollY >
                ((window.innerHeight * this.state.activeIndex) + window.innerHeight/2) */
        ) {
            this.setState({showNav: false});
            // this.setActive(this.state.activeIndex + 1);
        // Up
        } else if (top < this.lastScroll /*&&
          window.innerHeight + window.scrollY <
            ((window.innerHeight * this.state.activeIndex) - window.innerHeight/1.5) */
        ) {
            this.setState({showNav: true});
            // this.setActive(this.state.activeIndex - 1);
        }

        this.lastScroll = top;
    }

    render() {
        return (
            <nav className={ClassNames('main-nav', {'show-nav': this.state.showNav} )}>
                <div className='nav-container'>
                    <a href='#home' className='logo nav-item'></a>
                    <div className='nav'>
                        <a href='#info' className='nav-item'>{'Info'}</a>
                        <a href='#rsvp' className='nav-item'>{'RSVP'}</a>
                    </div>
                </div>
            </nav>
        );
    }
}
