import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';

import { browserHistory } from 'react-router';


import PrivateHeader from './PrivateHeader';




export default () => {
    return (
        <div>
            <PrivateHeader title = "Dashboard"/>
            <div className="page-content">
                TBD
            </div>
        </div>);
};
