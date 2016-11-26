import { Meteor } from 'meteor/meteor';
import { Parties } from '../collections/parties';

Meteor.startup(() => {
    if (Parties.find().count() === 0){
        const parties = [{
		'name': 'Bubstep-Free zone',
		'description': 'Can we please just for an evening not listen to dubstep.'
	},{
		'name':'All dubstep all the time',
		'description': 'Get it on'
	},{
		'name':'Savage lounging',
		'description': 'leisure suit required. And only fiercest manners'
	}];

    parties.forEach((party) => {
        Parties.insert(party)
    });
    }
});