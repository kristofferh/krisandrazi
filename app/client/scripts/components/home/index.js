import {default as React, Component} from 'react';
import classNames from 'classnames';
import Slide from '../slide';

import crest from './crested.svg';

import './styles';

export default class Home extends Component{

    constructor(props) {
        super(props);
        if (window.matchMedia) {
            this.mqls = [ // list of window.matchMedia() queries
                window.matchMedia('(min-width: 1000px)'),
                window.matchMedia('(min-width: 600px)')
            ];
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    initDoohickies() {
        this.svg = document.getElementById('home-svg');
        this.svgContainer = document.getElementById('svg-container');
        // IE doesn't understand this.svg.getElementsByClassName so query the
        // document instead.
        this.doohickies = document.getElementsByClassName('doohickey');
        this.medium = document.getElementsByClassName('medium-nugget');
        this.large = document.getElementsByClassName('large-nugget');
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

    hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
    }

    addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
    }

    removeClass(el, className) {
        if (el.classList){
            el.classList.remove(className);
        }
    }

    resetHidden() {
        [].forEach.call(this.doohickies, (doohickey) => {
            // IE doesn't understand classList on SVGs, but I don't care about IE.
            this.removeClass(doohickey, 'hide');
        });
    }

    hideBySize(els) {
        [].forEach.call(els, (doohickey) =>{
            this.addClass(doohickey, 'hide');
        });
    }

    setLarge() {
        this.svg.setAttribute('viewBox', '0 0 1000 500');
        this.svgContainer.style.paddingBottom = '50%';
        this.resetHidden();
    }

    setMedium() {
        this.svg.setAttribute('viewBox', '200 0 650 500');
        this.svgContainer.style.paddingBottom = '76%';
        this.resetHidden();
        this.hideBySize(this.large);
    }

    setSmall() {
        // Small screen, hide some of the flares.
        this.svg.setAttribute('viewBox', '320 0 400 480');
        this.svgContainer.style.paddingBottom = '120%';
        this.hideBySize(this.large);
        this.hideBySize(this.medium);
    }

    componentWillMount() {
        // IE makes everything difficult.
        let ua = window.navigator.userAgent;
        this.msie = !!ua.match(/MSIE|Trident/);
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
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(() => {
                        this.handleScroll();
                        ticking = false;
                    });
                } else {
                    this.handleScroll();
                }
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
            <Slide className={classNames({'slide--full-height': !this.msie})} id='home-slide' rowClassNames='center-xs middle-xs'>
                <span id='svg-container' className='svg-container' dangerouslySetInnerHTML={{__html: crest}} />
            </Slide>
        );
    }
}
