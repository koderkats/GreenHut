import React from 'react'

export default (function Global() {
	let me = {}

	me.isDev = true
	me.isProd = !me.isDev
	me.isDebug = me.isDev
	me.logFunc = true
	me.logLog = true
	me.logDir = true

	me.GlobalContext = React.createContext({});

	me.shortTime = function() {
		return Math.floor(new Date()).toString().split('').slice(-5).join('');
	}
	me.func = function(file, func, msg) {
		if (me.isDebug && me.logFunc && arguments[0]!=false){
			const {color, weight} = {color:'blue', weight: 'bold'}
			console.group(`${func}`);
			console.groupEnd();
			console.log(`%c    ${me.shortTime()} [FUNC] ${file} ${func} `, `color: ${color}; font-weight: ${weight};`, msg ? msg : '');
		}
	}
	
	me.log = function(file, func, msg) {
		if (me.isDebug && me.logLog, arguments[0]!=false){
			const {color, weight} = {color:'green', weight: 'none'}
			console.log(`%c        ${me.shortTime()} [LOG ] ${file} ${func} `, `color: ${color}; font-weight: ${weight};`, msg ? msg : '');
		}
	}
	
	me.dir = function(file, func, obj, msg) {
		if (me.isDebug && me.logDir, arguments[0]!=false){
			const {color, weight} = {color:'purple', weight: 'bold'}
			console.log(`%c        ${me.shortTime()} [DIR ] ${file} ${func} %c ${msg ? msg : ''}`, `color: ${color}; font-weight: ${weight};`, `color:fuchsia; font-weight:none`);
			console.dir(obj);
		}
	}
	me.which = which;
	me.switch = which;
	return me;
})();

export function which(key, obj, def) {
	function isFunction(x) { return (typeof x === 'function'); }
	function defined(x) { return (typeof x !== 'undefined'); }
	const value = obj[key];
	if (typeof value !== 'undefined') return isFunction(value) ? value() : value;
	if (typeof def !== 'undefined') return isFunction(def) ? def() : def;
	return null;
}