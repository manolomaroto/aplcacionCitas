import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../collections/parties';

import {name as PartiesList } from '../imports/ui/components/partiesList/partiesList';
import { name as Socially } from '../imports/ui/components/socially/socially';

angular.module('socially',[
	angularMeteor,
	PartiesList
]);


/*
aplicacion.component('partiesList',{
	templateUrl: 'client/partiesList.html',
	controllerAs:'partiesList',
	controller($scope,$reactive){
		'ngInject';

		$reactive(this).attach($scope);

		this.helpers({
			parties() {
				return Parties.find({});
			}
		})
	}
})

/* convierte el controller en un compoenent
aplicacion.controller('PartiesListCtrl',function($scope , $reactive){
	'ngInject';
	/*$scope.parties = [{
		'name': 'Bubstep-Free zone',
		'description': 'Can we please just for an evening not listen to dubstep.'
	},{
		'name':'All dubstep all the time',
		'description': 'Get it on'
	},{
		'name':'Savage lounging',
		'description': 'leisure suit required. And only fiercest manners'
	}];

	$reactive(this).attach($scope);

	this.helpers({
		parties(){
			return Parties.find({});
		}
	})
	
});
*/