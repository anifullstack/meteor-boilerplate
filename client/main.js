import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import React from 'react';
import ReactDOM from 'react-dom';
import { routes, onAuthChange } from '../imports/routes/routes';

import '../imports/startup/simple-schema-config.js';

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);

});



Meteor.startup(() => {

    ReactDOM.render(routes, document.getElementById('app'));
});
