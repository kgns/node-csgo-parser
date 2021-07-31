'use strict';
/* jshint node: true, mocha:true */

require('../lib/miscHelper');
var assert = require('chai').assert;

describe('CSGOParser Misc', function(){
	var deagle={
	    'name': 'Desert Eagle',
	    'type': 'Pistol',
	    'index': '1',
	    'skins': [
	        'Urban DDPAT',
	        'Blaze',
	        'Night',
	        'Hypnotic',
	        'Mudder',
	        'Golden Koi',
	        'Cobalt Disruption',
	        'Crimson Web',
	        'Urban Rubble',
	        'Heirloom',
	        'Meteorite',
	        'Hand Cannon',
	        'Pilot',
	        'Conspiracy',
	        'Naga',
	        'Bronze Deco',
	        'Midnight Storm',
	        'Sunset Storm 壱',
	        'Sunset Storm 弐'
	    ]
	};

	describe('Private Object Prototype getLangValue', function() {
		it('getLangValue caps', function() {
			assert.equal(deagle.getLangValue('NAME'), deagle.name);
		});
		it('getLangValue normal', function() {
			assert.equal(deagle.getLangValue('name'), deagle.name);
		});
		it('getLangValue mix', function() {
			assert.equal(deagle.getLangValue('NaMe'), deagle.name);
		});
	});

	describe('Private String Prototype prepareLang', function() {
		it('return string without #', function() {
			assert.equal('#Test'.prepareLang(), 'Test');
		});
		it('return same string', function() {
			assert.equal('Test'.prepareLang(), 'Test');
		});
	});

	describe('Private Array Prototype pushUnique', function() {
		var table=[];
		it('push first element', function() {
			table.pushUnique('test1');
			assert.equal(table.length, 1);
		});
		it('unique element', function() {
			table.pushUnique('test1');
			assert.equal(table.length, 1);
		});
		it('push second element', function() {
			table.pushUnique('test2');
			assert.equal(table.length, 2);
		});
	});
	describe('Private Array Prototype pushUniqueNamedObject', function() {
		var table=[];
		var element1={name:'test1'};
		var element2={name:'test2'};
		it('push first element', function() {
			table.pushUniqueNamedObject(element1);
			assert.equal(table.length, 1);
		});
		it('unique element', function() {
			table.pushUniqueNamedObject(element1);
			assert.equal(table.length, 1);
		});
		it('push second element', function() {
			table.pushUniqueNamedObject(element2);
			assert.equal(table.length, 2);
		});
	});

	describe('Private String Prototype containsOnSpaceSplit', function() {
		it('find before string', function() {
			assert.isTrue('test all string'.containsOnSpaceSplit('test'));
		});
		it('find middle string', function() {
			assert.isTrue('test all string'.containsOnSpaceSplit('all'));
		});
		it('find end string', function() {
			assert.isTrue('test all string'.containsOnSpaceSplit('string'));
		});
		it('not find string', function() {
			assert.isFalse('test all string'.containsOnSpaceSplit('remove'));
		});
	});
});
