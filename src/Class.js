/**
 * Simple OOP Class facility.
 * Thanks to Dean Edwards and Vladimir Agafonkin for inspiration!
 *
 *
 * @author Dmitry Khavilo `2012
 * @email wm.morgun@gmail.com
 * @licence MIT
 */

var Class = function () {
	'use strict';
};

Class.extend = function (extendedProps) {
	'use strict';
	var constructing = true,
		ExtendedClass,
		tempClass,
		prop;

	ExtendedClass = function () {
		if (!constructing && typeof this.construct === 'function') {
			this.construct();
		}

	};

	ExtendedClass.prototype = this.prototype;

	tempClass = new ExtendedClass();
	constructing = false;

	ExtendedClass.prototype = tempClass;
	ExtendedClass.extend = Class.extend;
	ExtendedClass.prototype.ancestor = this.prototype;

	for (prop in extendedProps)
	{
		ExtendedClass.prototype[prop] = extendedProps[prop];
	}

	return ExtendedClass;
};
