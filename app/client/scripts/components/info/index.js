import React from 'react';
import Slide from '../slide';
import Row from '../row';
import Column from '../column';

import './styles';

let Info = React.createClass({

    render() {
        return (
            <Slide background='light' id='info' className='info-slide'>
                <img src='/images/dorks.jpg' alt='dummies' className='dummies' />
                <Row className='center-xs content-container between-sm padding-top'>
                    <Column xs='12' sm='6' className='left-align'>
                        <h1>{'Party'}</h1>
                        <p>Hey, we're getting married! And to celebrate we are
                        throwing a party with all our friends and families.</p>

                        <p>Please join us on <strong>Friday September 23rd at 7pm</strong> at
                        Glasserie in Brooklyn, NY, for drinks,
                        dinner, and dancing. We will make it all official at the
                        courthouse earlier, so all you need to be prepared
                        for is party time.</p>

                        <h2>Gifts</h2>
                        <p>Since we live together and are lucky to have
                        just about everything we need we won't be registering
                        anywhere, but any contribution towards our honey moon
                        adventure (Tokyo! Bangkok! Phuket! Tokyo!) would be
                        graciously accepted.</p>

                        <p>You can find us on <a href='https://www.zola.com/registry/krisandraziparty' target='_blank'>zola.com</a>,
                        or if you are familiar with Venmo you can send creative emoji
                        subject lines to <strong>@kristofferh</strong> 😎 👋.</p>

                        <p>It is a huge gift to us to have all of you make the
                        trek to see us in New York. So thank you so much!
                        Tack så mycket! See you soon!</p>

                        <p>xoxo,</p>
                        <p>K + R</p>
                    </Column>
                    <Column xs='12' sm='5' className='left-align'>
                        <h2>About Us</h2>
                        <p>Kris[toffer] is from Sweden, the country! But he lived in
                        Seattle for about 14 years before moving to New York. Razi is
                        from Kansas, the midwest! But she lived in Seattle for
                        roughly 10 years. Kris met Razi on a short visit back to
                        Seattle on New Years Eve thanks to one of their mutual
                        best friends Sara Fisher (thanks Sara!!).</p>

                        <p>Now they live together in Brooklyn with their cat.
                        Kris is a web designer and Razi is a graphic designer.
                        They both really like to travel, eat pizza, drink
                        champagne on New Years, be on boats, and design cool
                        things.</p>

                        <p>On a short trip to Montreal last October, Kris brought
                        along an engagement ring to ask Razi to marry him. Before
                        he could do anything smooth though, Razi put her dumb
                        cold hands in his pocket to warm up and found the ring.</p>

                        <p>(She said yes.)</p>
                    </Column>
                </Row>
            </Slide>
        );
    }
});

export default Info;
