/**
 <<<<<<< HEAD
 * Created with JetBrains WebStorm.
 * User: jochen
 * Date: 20/03/13
 * Time: 17:09
 * To change this template use File | Settings | File Templates.
 */

/*
 * Idea: create global function storing used module list (for require etc) in browser storage
 */
angular.module('psUtil', []).
	factory('ps', function () {
		"use strict";
		console.log('ps');


		var _bind = Function.prototype.call.bind;
		var _slice = Function.prototype.call.bind(Array.prototype.slice);
		var _shift = Function.prototype.call.bind(Array.prototype.shift);
		var _unshift = Function.prototype.call.bind(Array.prototype.unshift);
		var _push = Function.prototype.call.bind(Array.prototype.push);
		var _pop = Function.prototype.call.bind(Array.prototype.pop);
		var _pop = Function.prototype.call.bind(Array.prototype.pop);

		function _getCtx() {
			console.log('getCtx arguments', arguments);
			var arg = Array.prototype.slice.call(arguments);
			var ctx = arg.shift()[0];
			var def = arg.shift();
//		  var ctx = Array.prototype.slice.call(ctx);

			console.log('ctx:', ctx, ' def: ', def);

			var result = angular.extend(def, ctx);
			console.log('result:', result);

			return result;
		};

		function _bindConsoleMethods(logFn) {
			_.each(logFn, function (fn) {
				this[fn] = console[fn].bind(console);
			}, this);
		};

/*	lodash bindAll does this
function _bind(fn, src) {
			var fn = _shift(arguments);
			var src = _shift(arguments);

			_.each(fn, function (fnName) {
				_.bind(src[fn], src, arguments);
			});

			var result = _bind.apply(src[fn], [src].concat(_slice(arguments)));

			return result;
		}*/

		function include($rootScope) {
			//this will be available to all scope variables
			$rootScope.includeLibraries = true;

			//this method will be available to all scope variables as well
			$rootScope.include = function (libraries) {
				var scope = this;
				//attach each of the libraries directly to the scope variable
				for (var i = 0; i < libraries.length; i++) {
					var key = libraries[i];
					scope[key] = getLibrary(key);
				}
				return scope;
			};
		};

		function addArg(args, extra) {
			return Array.prototype.slice.call(Array.prototype.slice.call(args)).push(extra);
		};

		function _bindFuncAndParm(dest, logFn, src) {
			var args = _.toArray(arguments).slice(3);
			args = _.flatten(args)
			_.each(logFn, function (fn) {
//				dest[fn] = _bind.apply(src[fn],  src,args);
				dest[fn] = _bind.apply(src[fn],  [src].concat(args));
			},this);
		}

		return {
			bindFuncAndParm: _bindFuncAndParm,
			_bind: _bind,
			getCtx: _getCtx,
			bindConsoleMethods: _bindConsoleMethods
//			bindMethod: _bindMethod,

		};
	})
;
