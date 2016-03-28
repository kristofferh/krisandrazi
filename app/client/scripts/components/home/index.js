import {default as React, Component} from 'react';
import throttle from 'lodash.throttle';
import Slide from '../slide';

import crest from './crested.svg';

import './styles';

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.mqls = [ // list of window.matchMedia() queries
            window.matchMedia('(min-width: 1000px)'),
            window.matchMedia('(min-width: 600px)')
        ];
        this.handleScroll = this.handleScroll.bind(this);
    }

    initDoohickies() {
        this.svg = document.getElementById('home-svg');
        this.doohickies = this.svg.getElementsByClassName('doohickey');
        this.medium = this.svg.getElementsByClassName('medium');
        this.large = this.svg.getElementsByClassName('large');
        this.fika = document.getElementById('fika');
        this.teepeecat = document.getElementById('teepeecat');
        this.sail = document.getElementById('sail');
        this.hotdog = document.getElementById('hot-dog');
        this.partyHat = document.getElementById('party-hat');
        this.pitsha = document.getElementById('pitsha');
        this.wine = document.getElementById('wine');
        this.donut = document.getElementById('donut');
    }

    mediaQueryResponse() {
        if (this.mqls[0].matches) {
            this.setLarge();
        } else if (this.mqls[1].matches) {
            this.setMedium();
        } else {
            this.setSmall();
        }
    }

    resetHidden() {
        [].forEach.call(this.doohickies, function(doohickey) {
            doohickey.classList.remove('hide');
        });
    }

    hideBySize(els) {
        [].forEach.call(els, function(doohickey) {
            doohickey.classList.add('hide');
        });
    }

    setLarge() {
        this.svg.setAttribute('viewBox', '0 0 1000 500');
        this.resetHidden();
    }

    setMedium() {
        this.svg.setAttribute('viewBox', '200 0 650 500');
        this.resetHidden();
        this.hideBySize(this.large);
    }

    setSmall() {
        // Small screen, hide some of the flares.
        this.svg.setAttribute('viewBox', '320 0 400 480');
        this.hideBySize(this.large);
        this.hideBySize(this.medium);
    }

    componentDidMount() {
        let ticking = false;
        this.initDoohickies();

        // Media queries.
        for (var i = 0; i < this.mqls.length; i++) {
            this.mediaQueryResponse(this.mqls[i]);
            this.mqls[i].addListener(this.mediaQueryResponse.bind(this));
        }

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
        let top = window.scrollY;
        let style = `rotate(${top}deg)`;
        this.donut.style.webkitTransform = style;
        this.donut.style.MozTransform = style;
        this.donut.style.msTransform = style;
        this.donut.style.transform = style;
    }

    render() {
        return (
            <Slide className='slide--full-height' id='home-slide' rowClassNames='center-xs middle-xs'>
                <span className='home-stuff' dangerouslySetInnerHTML={{__html: crest}} />
            </Slide>
        );
    }
}
