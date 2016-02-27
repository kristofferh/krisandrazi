import '../styles/base';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import {IntlProvider, addLocaleData} from 'react-intl';

import es from 'react-intl/lib/locale-data/es';

addLocaleData(es);


const esMessages = {
    'greeting': '¡Hola! {name} ¿Cómo estás hoy?'
};

ReactDOM.render(
    <IntlProvider locale='en' messages={esMessages}>
        <Home />
    </IntlProvider>,
  document.getElementById('party')
);
