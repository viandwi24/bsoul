import { jsx, jsxs } from 'react/jsx-runtime';
import Phaser$1 from 'phaser';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Hello(_a) {
    var name = _a.name;
    return (jsx("div", { children: jsxs("p", { children: ["Hello, ", name] }) }));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var lodash_merge = {exports: {}};

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    asyncTag = '[object AsyncFunction]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    nullTag = '[object Null]',
	    objectTag = '[object Object]',
	    proxyTag = '[object Proxy]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    undefinedTag = '[object Undefined]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeMax = Math.max,
	    nativeNow = Date.now;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    stack || (stack = new Stack);
	    if (isObject(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = safeGet(object, key),
	      srcValue = safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function safeGet(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = merge;
} (lodash_merge, lodash_merge.exports));

var merge = lodash_merge.exports;

function createReactUi(scene, element) {
    var containerDOM = document.createElement('div');
    containerDOM.id = "react-ui-container-".concat(scene.scene.key);
    document.body.appendChild(containerDOM);
    var root = ReactDOM.createRoot(containerDOM);
    var destroy = function () {
        root.unmount();
        containerDOM.remove();
    };
    scene.events.once(Phaser.Scenes.Events.SHUTDOWN, destroy);
    scene.game.events.once(Phaser.Core.Events.DESTROY, destroy);
    return {
        render: function () {
            root.render(element);
        },
        destroy: destroy
    };
}

function PreloadSceneUI(_a) {
    var scene = _a.scene;
    var signature = useState(Math.random().toString(36).substring(7))[0];
    var _b = useState([]), phaserobjects = _b[0], setPhaserobjects = _b[1];
    useEffect(function () {
        var anim = setInterval(function () {
            var phaserobjects = scene.children.list;
            setPhaserobjects(phaserobjects);
        }, 100);
        return function () {
            clearInterval(anim);
        };
    }, []);
    return (jsxs("div", __assign({ 
        // to styles
        style: {
            top: 0,
            right: 0,
            zIndex: 10,
            position: 'fixed',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
        } }, { children: [jsxs("div", { children: ["BSOUL v0.0.1 (Demo vers. ", signature, ") ", jsx("button", __assign({ onClick: function () { return scene.game.gameClient.restart(); } }, { children: "Restart" }))] }), jsxs("div", { children: [jsx("div", __assign({ style: { fontWeight: 700 } }, { children: "GAMEOBJECTS" })), jsx("div", __assign({ style: { fontSize: '14px' } }, { children: phaserobjects.map(function (phaserobject) { return (jsxs("div", { children: [phaserobject.name, " (", phaserobject.type, ")"] }, Math.random())); }) }))] })] })));
}
var DemoScene = /** @class */ (function (_super) {
    __extends(DemoScene, _super);
    function DemoScene() {
        return _super.call(this, {
            key: 'DemoScene'
        }) || this;
    }
    DemoScene.prototype.preload = function () {
        // create react ui
        createReactUi(this, jsx(PreloadSceneUI, { scene: this })).render();
    };
    DemoScene.prototype.create = function () {
        this.scene.launch('TestScene');
    };
    return DemoScene;
}(Phaser$1.Scene));

var GameObjectType;
(function (GameObjectType) {
    GameObjectType["Door"] = "Door";
    GameObjectType["Chest"] = "Chest";
    GameObjectType["Key"] = "Key";
    GameObjectType["Sprite"] = "Sprite";
    GameObjectType["Player"] = "Player";
    GameObjectType["Enemy"] = "Enemy";
    GameObjectType["Trap"] = "Trap";
})(GameObjectType || (GameObjectType = {}));
// Phaser.Physics.Arcade.Sprite
var GameObjectBase = /** @class */ (function (_super) {
    __extends(GameObjectBase, _super);
    function GameObjectBase(scene, x, y, texture, frame) {
        var _this = _super.call(this, scene, x, y, texture, frame) || this;
        _this.gameObjectType = GameObjectType.Sprite;
        _this.objectData = {};
        _this.enableDepthSort = true;
        return _this;
        // console.log('gameobjectbase', x, y, texture, frame)
        // indicator name
        // const indicatorNameTxt = this.scene.add.text(0, 0, this.gameObjectType, {
        //   fontSize: '12px',
        //   color: '#ffffff',
        // })
        // indicatorNameTxt.setOrigin(0.5, 0.5)
        // indicatorNameTxt.setDepth(9999)
        // this.indicatorNameTxt = indicatorNameTxt
        // events
        // scene.events.on(Phaser.Scenes.Events.POST_UPDATE, this.update.bind(this))
        // scene.events.on(Phaser.Scenes.Events.SHUTDOWN, this.destroy.bind(this))
        // this.scene.events.off(Phaser.Scenes.Events.POST_UPDATE, this.update.bind(this))
    }
    GameObjectBase.prototype.setObjectData = function (data, map) {
        this.map = map;
        this.objectData = __assign({}, data || {});
        this.onObjectDataSetted(this.objectData);
    };
    GameObjectBase.prototype.onObjectDataSetted = function (_) { };
    GameObjectBase.prototype.getDataProperty = function (key, defaultValue) {
        var _a;
        var prop = (_a = this.objectData) === null || _a === void 0 ? void 0 : _a.properties.find(function (p) { return p.name === key; });
        if (!prop)
            return defaultValue || undefined;
        if ((prop === null || prop === void 0 ? void 0 : prop.type) === 'string') {
            try {
                var tryparse = JSON.parse(prop.value);
                return tryparse;
            }
            catch (error) {
                return prop.value;
            }
        }
        return prop === null || prop === void 0 ? void 0 : prop.value;
    };
    GameObjectBase.prototype.calculateSortDepthPoint = function () {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2,
        };
    };
    GameObjectBase.prototype.preUpdate = function (time, delta) {
        try {
            _super.prototype.preUpdate.call(this, time, delta);
        }
        catch (error) {
        }
    };
    GameObjectBase.prototype.update = function (time, delta) {
        try {
            _super.prototype.update.call(this, time, delta);
        }
        catch (error) {
        }
    };
    GameObjectBase.prototype.postUpdate = function (time, delta) {
        try {
            // @ts-ignore
            _super.prototype.postUpdate.call(this, time, delta);
        }
        catch (error) { }
    };
    GameObjectBase.prototype.destroy = function (fromScene) {
        _super.prototype.destroy.call(this, fromScene);
    };
    return GameObjectBase;
}(Phaser.Physics.Arcade.Sprite));

var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(scene, map) {
        var _this = 
        // const texture = 'char'
        _super.call(this, scene, 100, 100, 'chars', 'shadow.png') || this;
        _this.map = map;
        _this.controllerIsCreated = false;
        _this.playerSpriteDirection = 'right';
        _this.axis = { x: 0, y: 0 };
        _this.gameObjectType = GameObjectType.Player;
        _this.keyCollected = 0;
        _this.keyTotal = 0;
        _this.outDoorIsOpen = false;
        _this.setTexture('chars', 'shadow.png');
        // set this
        _this.setInteractive();
        scene.physics.add.existing(_this);
        _this.setDisplaySize(8, 4);
        // set
        var player = scene.add.sprite(_this.x, _this.y, 'chars');
        player.setSize(32, 32);
        player.setScale(0.5);
        player.setOrigin(0);
        player.setDepth(_this.depth);
        _this.playerSprite = player;
        // create animations
        player.anims.create({
            key: 'idle',
            frameRate: 5,
            repeat: -1,
            frames: player.anims.generateFrameNames('chars', {
                prefix: 'kobo_kanaeru/idle/0',
                start: 1,
                end: 9,
                suffix: '.png',
            }),
        });
        player.anims.create({
            key: 'walk',
            frameRate: 6,
            repeat: -1,
            frames: player.anims.generateFrameNames('chars', {
                prefix: 'kobo_kanaeru/walk/0',
                start: 1,
                end: 4,
                suffix: '.png',
            }),
        });
        // default anims
        player.play('idle', true);
        // world
        scene.physics.world.bounds.width = map.map.widthInPixels;
        scene.physics.world.bounds.height = map.map.heightInPixels;
        _this.setCollideWorldBounds(true);
        // colliders
        scene.physics.add.collider(_this, map.layers);
        // get spawner
        var spawner = map.getObjInLayer('Spawner_obj', 'spawner_player');
        if (spawner) {
            _this.setPosition(spawner.x + spawner.width / 2, spawner.y + spawner.height / 2);
        }
        // get key total
        _this.keyTotal = map.gameobjects.filter(function (g) { return g.gameObjectType === GameObjectType.Key; }).length;
        return _this;
    }
    Player.prototype.preUpdate = function () {
        this.collideProcess();
        if (this.controllerIsCreated)
            this.controllerUpdate();
    };
    Player.prototype.postUpdate = function () {
        if (this.controllerIsCreated)
            this.interactionUpdate();
        this.syncAllChild();
    };
    Player.prototype.collideProcess = function () {
        this.scene.physics.add.collider(this, this.map.colliders);
        // const collideCallback = (obj1: Phaser.Types.Physics.Arcade.GameObjectWithBody|Phaser.Tilemaps.Tile, obj2: Phaser.Types.Physics.Arcade.GameObjectWithBody|Phaser.Tilemaps.Tile) => {
        //   console.log('collide', obj1, obj2)
        // }
        // const checkCollides = [
        //   // this.scene.physics.overlap(this, this.map.layers),
        //   // this.scene.physics.overlap(this, this.map.colliders),
        //   this.scene.physics.collide(this, this.map.colliders, collideCallback)
        // ]
        // // if have collides, stop player
        // if (checkCollides.some((v) => v)) {
        //   this.setVelocity(0)
        // }
    };
    Player.prototype.syncAllChild = function () {
        this.playerSprite.setPosition(this.x - this.playerSprite.displayWidth / 2, this.y - this.playerSprite.displayHeight + this.playerSprite.displayHeight / 10);
        this.playerSprite.setDepth(this.depth);
    };
    Player.prototype.createController = function () {
        if (this.controllerIsCreated)
            return;
        // create cursors
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        //
        this.controllerIsCreated = true;
    };
    Player.prototype.controllerUpdate = function () {
        var _a, _b, _c, _d;
        var normalSpeed = 80;
        var diagonalSpeed = 56;
        var axis = {
            x: 0,
            y: 0,
        };
        this.setVelocity(0);
        // colliders
        // let isCollideWith: Phaser.Tilemaps.Tile | Phaser.Types.Physics.Arcade.GameObjectWithBody|undefined
        // const isCollide = this.scene.physics.collide(this, this.map.colliders, (_, obj2) => isCollideWith = obj2)
        // if (isCollide) console.log('isCollide', isCollide, isCollideWith)
        if ((_a = this.cursors) === null || _a === void 0 ? void 0 : _a.left.isDown) {
            axis.x = -1;
        }
        else if ((_b = this.cursors) === null || _b === void 0 ? void 0 : _b.right.isDown) {
            axis.x = 1;
        }
        if ((_c = this.cursors) === null || _c === void 0 ? void 0 : _c.up.isDown) {
            axis.y = -1;
        }
        else if ((_d = this.cursors) === null || _d === void 0 ? void 0 : _d.down.isDown) {
            axis.y = 1;
        }
        // // deny axis if collide
        // if (isCollide && isCollideWith) {
        //   const colliderX = (isCollideWith as any)?.x || 0
        //   const colliderY = (isCollideWith as any)?.y || 0
        //   const colliderWidth = (isCollideWith as any)?.width || 0
        //   const colliderHeight = (isCollideWith as any)?.height || 0
        //   if (axis.x === -1) {
        //     if (colliderX + colliderWidth > this.x) {
        //       axis.x = 0
        //     }
        //   } else if (axis.x === 1) {
        //     if (colliderX < this.x) {
        //       axis.x = 0
        //     }
        //   }
        //   if (axis.y === -1) {
        //     if (colliderY + colliderHeight * 2 > this.y) {
        //       axis.y = 0
        //     }
        //   } else if (axis.y === 1) {
        //     if (colliderY < this.y) {
        //       axis.y = 0
        //     }
        //   }
        // }
        // apply animation
        if (axis.x !== this.axis.x || axis.y !== this.axis.y) {
            this.playerSprite.play('walk', true);
        }
        else if (axis.x === 0 && axis.y === 0) {
            this.playerSprite.play('idle', true);
        }
        this.axis = axis;
        // apply speed
        if (axis.x !== 0 && axis.y !== 0) {
            this.setVelocityX(axis.x * diagonalSpeed);
            this.setVelocityY(axis.y * diagonalSpeed);
        }
        else {
            this.setVelocityX(axis.x * normalSpeed);
            this.setVelocityY(axis.y * normalSpeed);
        }
        // apply direction transform
        this.playerSpriteDirection = axis.x === 0 ? this.playerSpriteDirection : axis.x === 1 ? 'right' : 'left';
        this.playerSprite.setFlipX(this.playerSpriteDirection === 'left');
    };
    Player.prototype.interactionUpdate = function () {
        var _this = this;
        var tileSize = {
            width: this.map.map.tileWidth,
            height: this.map.map.tileHeight,
        };
        // item::chest::check
        var chests = this.map.gameobjects
            .filter(function (g) { return g.gameObjectType === GameObjectType.Chest; })
            .filter(function (g) { return (g.x >= _this.x - (tileSize.width / 2) && g.x <= _this.x + (tileSize.width / 2)) && (g.y >= _this.y - (tileSize.height / 2) && g.y <= _this.y + (tileSize.height / 2)); });
        // item::chest::collect
        for (var _i = 0, chests_1 = chests; _i < chests_1.length; _i++) {
            var chest = chests_1[_i];
            if (chest.isClosed())
                chest.openChest();
        }
        // item::key::check
        var keys = this.map.gameobjects
            .filter(function (g) { return g.gameObjectType === GameObjectType.Key; })
            .filter(function (g) { return (g.x >= _this.x - tileSize.width && g.x <= _this.x + tileSize.width) && (g.y >= _this.y - tileSize.height && g.y <= _this.y + tileSize.height); });
        // item::key::collect
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            if (!key.isCollected) {
                key.collect(this.playerSprite);
                this.keyCollected += 1;
            }
        }
        // interact::door::check
        // get door closed
        var closedDoor = this.map.gameobjects
            .filter(function (g) { return g.gameObjectType === GameObjectType.Door; })
            .find(function (g) { return g.firstState === 'closed'; });
        // console.log('closedDoor', closedDoor)
        if (closedDoor && !this.outDoorIsOpen) {
            var areaOverlapWidth = closedDoor.width;
            var areaOverlapHeight = closedDoor.height;
            var areaOverlapX = closedDoor.x - areaOverlapWidth / 2;
            var areaOverlapY = closedDoor.y - areaOverlapHeight / 2 + (areaOverlapHeight / 3);
            var isOverlap = (this.x >= areaOverlapX && this.x <= areaOverlapX + areaOverlapWidth) && (this.y >= areaOverlapY && this.y <= areaOverlapY + areaOverlapHeight);
            if (isOverlap) {
                // if all key collected
                if (this.keyTotal === this.keyCollected) {
                    this.outDoorIsOpen = true;
                    closedDoor.openDoor();
                }
                else {
                    console.log('need key', this.keyTotal, this.keyCollected);
                }
                // closedDoor.openDoor()
                // this.scene.scene.restart()
            }
        }
        else if (closedDoor && this.outDoorIsOpen) {
            var areaOverlapWidth = closedDoor.width;
            var areaOverlapHeight = closedDoor.height;
            var areaOverlapX = closedDoor.x - areaOverlapWidth / 2;
            var areaOverlapY = closedDoor.y - areaOverlapHeight / 2;
            var isOverlap = (this.x >= areaOverlapX && this.x <= areaOverlapX + areaOverlapWidth) && (this.y >= areaOverlapY && this.y <= areaOverlapY + areaOverlapHeight);
            console.log('isOverlap', isOverlap);
            if (isOverlap) {
                try {
                    this.scene.scene.stop(this.scene);
                    this.scene.scene.launch(this.scene);
                }
                catch (error) {
                }
            }
        }
    };
    return Player;
}(GameObjectBase));

var Chest = /** @class */ (function (_super) {
    __extends(Chest, _super);
    function Chest(scene, x, y, texture, frame) {
        var _this = _super.call(this, scene, x, y, texture, frame) || this;
        _this.state = 'closed';
        _this.frames = [];
        _this.gameObjectType = GameObjectType.Chest;
        return _this;
    }
    Chest.prototype.onObjectDataSetted = function () {
        var _this = this;
        this.state = this.getDataProperty('state', 'closed');
        this.frames = this.getDataProperty('frames', []);
        // create animation
        this.anims.create({
            key: 'chest-open',
            frameRate: 4,
            repeat: 0,
            frames: __spreadArray([], this.frames.map(function (f) { return ({ key: _this.texture.key, frame: f }); }), true),
        });
        if (this.state === 'open')
            this.openChest();
    };
    Chest.prototype.update = function (_time, _delta) {
        // if (this.state === 'closed')
    };
    Chest.prototype.isClosed = function () {
        return this.state === 'closed';
    };
    Chest.prototype.openChest = function () {
        var _this = this;
        this.state = 'open';
        this.anims.play('chest-open');
        setTimeout(function () {
            // create sprite effect
            var collectedFxSprite = _this.scene.add.sprite(_this.x, _this.y, 'particles');
            collectedFxSprite.setScale(0.5);
            collectedFxSprite.setDepth(_this.depth);
            collectedFxSprite.setOrigin(0.5);
            collectedFxSprite.anims.create({
                key: 'collected',
                frameRate: 10,
                repeat: 0,
                frames: collectedFxSprite.anims.generateFrameNames('particles', {
                    prefix: 'collected-tile00',
                    start: 0,
                    end: 5,
                    suffix: '.png',
                }),
            });
            collectedFxSprite.on('animationcomplete', function () {
                collectedFxSprite.destroy(true);
                _this.destroy(true);
            });
            collectedFxSprite.play('collected');
            // create particles for chest
            var particles = _this.scene.add.particles('particles', 'rect.png');
            particles.setDepth(_this.depth);
            // create particle slow level up to top
            var emitter = particles.createEmitter({
                x: _this.x,
                y: _this.y,
                lifespan: 500,
                speed: { min: 0, max: 100 },
                angle: { min: -100, max: -80 },
                scale: { start: 0.5, end: 0 },
                quantity: 2,
                blendMode: 'ADD',
                frequency: 100,
            });
            emitter.startFollow(_this);
            setTimeout(function () { return particles.destroy(true); }, 500);
        }, 500);
    };
    Chest.prototype.closeChest = function () {
        this.state = 'closed';
        this.anims.playReverse('chest-open', true);
    };
    return Chest;
}(GameObjectBase));

var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(scene, x, y, texture, frame) {
        var _this = _super.call(this, scene, x, y, texture, frame) || this;
        _this.state = 'closed';
        _this.firstState = 'closed';
        _this.frames = [];
        _this.gameObjectType = GameObjectType.Door;
        return _this;
    }
    Door.prototype.onObjectDataSetted = function () {
        var _this = this;
        this.state = this.getDataProperty('state', 'closed');
        this.firstState = this.state;
        this.frames = this.getDataProperty('frames', []);
        // set anim
        this.anims.create({
            key: 'door-close',
            frameRate: 4,
            repeat: 0,
            frames: __spreadArray([], this.frames.map(function (f) { return ({ key: _this.texture.key, frame: f }); }).reverse(), true),
        });
        this.anims.create({
            key: 'door-open',
            frameRate: 4,
            repeat: 0,
            frames: __spreadArray([], this.frames.map(function (f) { return ({ key: _this.texture.key, frame: f }); }), true),
        });
        // red
        // if (this.state === 'closed') this.setTint(0xff0000)
        // if (this.state === 'open') this.setTint(0x00ff00)
        // console.log('door', this.objectData)
        if (this.state === 'open')
            this.openDoor(true);
        if (this.state === 'closed')
            this.closeDoor(false);
    };
    Door.prototype.isClosed = function () {
        return this.state === 'closed';
    };
    Door.prototype.openDoor = function (withAnim) {
        if (withAnim === void 0) { withAnim = true; }
        this.state = 'open';
        if (withAnim)
            this.anims.play('door-open', true);
    };
    Door.prototype.closeDoor = function (withAnim) {
        var _a;
        if (withAnim === void 0) { withAnim = true; }
        this.state = 'closed';
        if (withAnim)
            this.anims.play('door-close', true);
        // create collider
        var rectCollider = this.scene.add.rectangle(this.x, this.y, this.width, this.height);
        var fillColor = ((_a = this.scene.game.gameClient.phaser.config.physics.arcade) === null || _a === void 0 ? void 0 : _a.debug) ? 0xff0000 : undefined;
        rectCollider.setFillStyle(fillColor, 0.5);
        rectCollider.setOrigin(0.5);
        rectCollider.setDepth(9999);
        this.map.colliders.push(rectCollider);
    };
    Door.prototype.update = function () {
        if (!this.isClosed() || this.firstState === 'open')
            return;
    };
    return Door;
}(GameObjectBase));

var EnemyType;
(function (EnemyType) {
    EnemyType["Mage"] = "mage";
})(EnemyType || (EnemyType = {}));
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(scene, x, y, texture, frame) {
        var _this = _super.call(this, scene, x, y, texture, frame) || this;
        _this.state = 'idle';
        _this.enemyType = EnemyType.Mage;
        _this.gameObjectType = GameObjectType.Enemy;
        // if mage
        if (_this.enemyType === EnemyType.Mage) {
            _this.enemyBody = scene.add.rectangle(0, 0, 16, 16, 0xff0000);
        }
        return _this;
    }
    Enemy.prototype.onObjectDataSetted = function (_) {
        console.log('enemy data setted', this.objectData);
    };
    Enemy.prototype.preUpdate = function (time, delta) {
        _super.prototype.preUpdate.call(this, time, delta);
        this.enemyBody.setPosition(this.x, this.y);
        this.enemyBody.setDepth(99999);
    };
    return Enemy;
}(GameObjectBase));

var Key = /** @class */ (function (_super) {
    __extends(Key, _super);
    function Key(scene, x, y, texture, frame) {
        var _this = _super.call(this, scene, x, y, texture, frame) || this;
        _this.state = 'closed';
        _this.frames = [];
        _this.isCollected = false;
        _this.gameObjectType = GameObjectType.Key;
        return _this;
    }
    Key.prototype.onObjectDataSetted = function () {
        var _this = this;
        this.frames = this.getDataProperty('frames', []);
        // set anim
        this.anims.create({
            key: 'normal',
            frameRate: 6,
            repeat: -1,
            frames: __spreadArray([], this.frames.map(function (f) { return ({ key: _this.texture.key, frame: f }); }), true),
        });
        this.anims.play('normal', true);
    };
    Key.prototype.collect = function (player) {
        var _this = this;
        if (this.isCollected)
            return;
        this.isCollected = true;
        // animate "taking object" - scale down, fade out, destroy
        this.scene.tweens.add({
            targets: this,
            scaleX: 1.5,
            scaleY: 1.5,
            duration: 250,
            ease: 'Power2',
            onComplete: function () {
                var collectedFxSprite = _this.scene.add.sprite(_this.x, _this.y, 'particles');
                collectedFxSprite.setScale(0.5);
                collectedFxSprite.setDepth(_this.depth);
                collectedFxSprite.setOrigin(0.5);
                collectedFxSprite.anims.create({
                    key: 'collected',
                    frameRate: 14,
                    repeat: 0,
                    frames: collectedFxSprite.anims.generateFrameNames('particles', {
                        prefix: 'collected-tile00',
                        start: 0,
                        end: 5,
                        suffix: '.png',
                    }),
                });
                collectedFxSprite.on('animationcomplete', function () {
                    collectedFxSprite.destroy(true);
                });
                collectedFxSprite.anims.play('collected', true);
                _this.scene.tweens.add({
                    targets: _this,
                    scaleX: 0.3,
                    scaleY: 0.3,
                    x: player.x + player.width / 4,
                    y: player.y + player.height / 4,
                    alpha: 0.2,
                    duration: 500,
                    ease: 'Power2',
                    onComplete: function () {
                        _this.destroy(true);
                    }
                });
            }
        });
    };
    return Key;
}(GameObjectBase));

var GameObjectClassContructor = {
    'Door': Door,
    'Chest': Chest,
    'Key': Key,
    'Enemy': Enemy,
};

var initAnimatedTiles = function (scene, map) {
    console.log('[Tilemap] [Plugins] [initAnimatedTiles] map', map);
    // init animated tiles data
    console.log('[Tilemap] [Plugins] [initAnimatedTiles] map.tilesets', map.tilesets);
    // add middleware
    for (var _i = 0, _a = map.layers; _i < _a.length; _i++) {
        var layer = _a[_i];
        layer.tilemapLayer.cullCallback = middlewareCullCallback.bind(scene);
    }
};
function middlewareCullCallback(layer, cam, outputArray, renderOrder) {
    var tiles = Phaser$1.Tilemaps.Components.CullTiles(layer, cam, outputArray, renderOrder);
    tiles = tiles.map(processTile.bind(this));
    return tiles;
}
function processTile(tile) {
    // get current time
    var time = this.time.now;
    var tileData = getTileData(tile);
    if (!tileData || !tileData.animation)
        return tile;
    // get animation data
    var animationData = tileData.animation;
    var animationDuration = animationData.reduce(function (acc, curr) { return acc + curr.duration; }, 0);
    var animationTime = time % animationDuration;
    // get current tile
    var currentTile = tile;
    var currentDuration = 0;
    for (var _i = 0, animationData_1 = animationData; _i < animationData_1.length; _i++) {
        var animation = animationData_1[_i];
        currentDuration += animation.duration;
        if (animationTime < currentDuration) {
            currentTile = new Phaser$1.Tilemaps.Tile(tile.layer, animation.tileid + 1, tile.x, tile.y, tile.width, tile.height, tile.baseWidth, tile.baseHeight);
            break;
        }
    }
    return currentTile;
}
function getTileData(tile) {
    var tileIndex = tile.index - 1;
    var tileData = tile.tileset.tileData[tileIndex];
    return tileData;
}

var initColliderTiles = function (scene, map) {
    console.log('[Tilemap] initColliderTiles', scene, map);
    // loop tiles
    for (var _i = 0, _a = map.map.layers; _i < _a.length; _i++) {
        var layer = _a[_i];
        layer.tilemapLayer.forEachTile(function (tile) {
            var data = tile.getTileData();
            if (!data || !(data === null || data === void 0 ? void 0 : data.objectgroup))
                return;
            // process tile
            var objShapes = getShapeColliderFromGameObjects(scene, tile);
            if (objShapes.length > 0) {
                objShapes.forEach(function (shape) {
                    map.colliders.push(shape);
                    scene.physics.add.existing(shape, true);
                });
            }
        });
    }
};
var getShapeColliderFromGameObjects = function (scene, tile) {
    var _a;
    var colliders = [];
    var data = tile.getTileData();
    if (!data || !(data === null || data === void 0 ? void 0 : data.objectgroup))
        return colliders;
    // process tile
    var tileWorldPos = tile.tilemapLayer.tileToWorldXY(tile.x, tile.y);
    var objectsgroups = data.objectgroup.objects;
    for (var _i = 0, objectsgroups_1 = objectsgroups; _i < objectsgroups_1.length; _i++) {
        var obj = objectsgroups_1[_i];
        var objectX = tileWorldPos.x + obj.x;
        var objectY = tileWorldPos.y + obj.y;
        var objectW = obj.width;
        var objectH = obj.height;
        var objShape = void 0;
        var fillColor = ((_a = scene.game.gameClient.phaser.config.physics.arcade) === null || _a === void 0 ? void 0 : _a.debug) ? 0xff0000 : undefined;
        var rect = scene.add.rectangle(objectX, objectY, objectW, objectH, fillColor);
        rect.setDepth(9999);
        rect.setOrigin(0);
        objShape = rect;
        // if any shape
        if (objShape) {
            colliders.push(objShape);
        }
    }
    return colliders;
};

var TilemapDefaultConfig = {
    depthStart: 10,
    depthBetweenLayers: 15,
};
var Tilemap = /** @class */ (function () {
    function Tilemap(scene, key, url) {
        var _this = this;
        this.scene = scene;
        this.key = key;
        this.tilesets = [];
        this.layers = [];
        this.config = TilemapDefaultConfig;
        this.isCreated = false;
        this.gameobjects = [];
        this.gameobjects_groups = [];
        this.object_resortables = [];
        this.colliders = [];
        console.log('[Tilemap] load', key, url);
        var loader = scene.load.tilemapTiledJSON({
            key: key,
            url: url,
        });
        loader.once(Phaser$1.Loader.Events.FILE_COMPLETE, function (fKey, fType, file) {
            if (key === fKey && fType === 'tilemapJSON') {
                console.log('[Tilemap] load complete', key, url);
                var mapData = file;
                _this.data = mapData;
                // console.log('mapData', mapData)
                // this.data = this.buildData(data)
                // load tilesets
                for (var _i = 0, _a = mapData.tilesets; _i < _a.length; _i++) {
                    var tileset = _a[_i];
                    if (scene.textures.exists(tileset.name))
                        return;
                    var tilesetUrl = (url.split('/').splice(0, url.split('/').length - 1).join('/')) + '/' + tileset.image;
                    var opts = {
                        frameWidth: tileset.tilewidth,
                        frameHeight: tileset.tileheight,
                    };
                    scene.load.spritesheet(tileset.name, tilesetUrl, opts);
                }
                scene.load.start();
            }
        });
        scene.events.once(Phaser$1.Scenes.Events.CREATE, function () {
            _this.create();
        });
        scene.events.on(Phaser$1.Scenes.Events.PRE_UPDATE, this.preUpdate.bind(this));
        scene.events.on(Phaser$1.Scenes.Events.UPDATE, this.update.bind(this));
        scene.events.on(Phaser$1.Scenes.Events.POST_UPDATE, this.postUpdate.bind(this));
        // on destroy
        scene.events.once(Phaser$1.Scenes.Events.DESTROY, function () {
            scene.events.off(Phaser$1.Scenes.Events.PRE_UPDATE, _this.preUpdate.bind(_this));
            scene.events.off(Phaser$1.Scenes.Events.UPDATE, _this.update.bind(_this));
            scene.events.off(Phaser$1.Scenes.Events.POST_UPDATE, _this.postUpdate.bind(_this));
        });
        scene.load.start();
    }
    Tilemap.prototype.preload = function () {
        // create tilesets
        // const tilesets: Phaser.Tilemaps.Tileset[] = []
        // for (const tileset of map.tilesets) {
        //   tilesets.push(
        //     map.addTilesetImage(
        //       tileset.name,
        //       tileset.name,
        //       tileset.tileWidth,
        //       tileset.tileHeight,
        //       undefined,
        //       tileset.tileSpacing,
        //     )
        //   )
        // }
    };
    Tilemap.prototype.create = function () {
        var _a, _b;
        if (this.isCreated)
            return;
        console.log('tilemap data', this.data);
        var map = this.scene.add.tilemap(this.key, this.data.tilewidth || 16, this.data.tileheight || 16, this.data.width, this.data.height);
        this.map = map;
        console.log('[Tilemap] map', map);
        // create tilesets
        var tilesets = [];
        for (var _i = 0, _c = this.data.tilesets; _i < _c.length; _i++) {
            var tileset = _c[_i];
            // create tileset
            var t = map.addTilesetImage(tileset.name, tileset.name, tileset.tilewidth, tileset.tileheight, undefined, tileset.tilespacing);
            tilesets.push(t);
        }
        this.tilesets = tilesets;
        // create layers
        var _tmpCurrLayerDepth = this.config.depthStart;
        var layers = [];
        for (var _d = 0, _e = map.layers; _d < _e.length; _d++) {
            var layer = _e[_d];
            var l = map.createLayer(layer.name, tilesets);
            l.setName('tilemap_layer_' + layer.name);
            l.setDepth(_tmpCurrLayerDepth);
            l.setCollisionByProperty({ collides: true });
            layers.push(l);
            _tmpCurrLayerDepth += this.config.depthBetweenLayers;
            console.log('[Tilemap] [create] layer', layer.name, l.name);
        }
        this.layers = layers;
        // create objects
        var objects_layers = this.map.objects
            .filter(function (o) { return o instanceof Phaser$1.Tilemaps.ObjectLayer; });
        for (var _f = 0, objects_layers_1 = objects_layers; _f < objects_layers_1.length; _f++) {
            var layer = objects_layers_1[_f];
            var _loop_1 = function (object_data) {
                // console.log((object_data as any).class)
                var bestT = map.tilesets[0];
                map.tilesets.forEach(function (t) {
                    if (t.firstgid <= (object_data.gid || 0)) {
                        bestT = t;
                    }
                });
                // let objectData: any
                if (bestT) {
                    try {
                        // console.log(this.data.tilesets)
                        // objectData = bestT.tileData[(object_data.gid || 0) - bestT.firstgid]
                        // objectData = [this.data.tilesets || []]
                        //   .find(t => t.name === bestT.name)?.tiles
                        var tilesData = ((_a = this_1.data.tilesets.find(function (t) { return t.name === bestT.name; })) === null || _a === void 0 ? void 0 : _a.tiles) || [];
                        var id_1 = (object_data.gid || 0) - bestT.firstgid;
                        var tileData = tilesData.find(function (t) { return t.id === id_1; });
                        // console.log(bestT, tilesData, tileData)
                        // console.log(objectData, object_data)
                        if (tileData) {
                            var objClass_1 = tileData.class;
                            if (objClass_1) {
                                console.log('[Tilemap] [create] [object_layer] [object]', object_data.name, objClass_1);
                                var getObjClassConstructor = function () { return GameObjectClassContructor[objClass_1]; };
                                var tileset = this_1.getTilesetFromGid(object_data.gid);
                                var actualX = object_data.x + object_data.width * 0.5;
                                var actualY = object_data.y - object_data.height * 0.5;
                                var obj = new (getObjClassConstructor())(this_1.scene, actualX, actualY, tileset.name, object_data.gid - this_1.map.getTileset(tileset.name).firstgid);
                                // const tD = {...tileData}
                                obj.setName(object_data.name);
                                obj.setDepth(0);
                                obj.setInteractive();
                                var newData_1 = {
                                    properties: []
                                };
                                if (tileData.properties) {
                                    newData_1.properties = __spreadArray([], tileData.properties.map(function (m) { return ({ name: m.name, value: m.value, type: m.type }); }), true);
                                    // console.log('Ada properties default', objClass, tileData)
                                    if (object_data.properties) {
                                        // console.log('Ada properties custom', objClass, object_data)
                                        object_data.properties.forEach(function (p) {
                                            try {
                                                var findIndex = newData_1.properties.findIndex(function (m) { return m.name === p.name && m.type === p.type; });
                                                if (findIndex >= 0)
                                                    newData_1.properties[findIndex].value = p.value;
                                            }
                                            catch (error) {
                                                console.error("ada p error ".concat(error), error);
                                            }
                                        });
                                    }
                                    // console.log('ada properties akhir', objClass, newData)
                                    obj.setObjectData(newData_1, this_1);
                                }
                                else {
                                    obj.setObjectData(__assign({}, newData_1), this_1);
                                }
                                // if (objClass === 'Door') console.log('Door', tD, object_data)
                                // if (tD.properties && tD.properties.length > 0 && object_data.properties && object_data.properties?.length > 0) {
                                //   const newTd = {...tD}
                                //   object_data.properties?.forEach((p: any) => {
                                //     const f = newTd.properties.find((fp: any) => fp.name === p.name)
                                //     if (f) {
                                //       f.value = p.value
                                //     } else {
                                //       newTd.properties.push(p)
                                //     }
                                //   })
                                //   obj.setObjectData({...newTd}, this)
                                //   console.log('door ada', tD, object_data)
                                // } else {
                                //   obj.setObjectData({...tD}, this)
                                // }
                                this_1.scene.add.existing(obj);
                                this_1.gameobjects.push(obj);
                                // if (tD.properties && tD.properties.length > 0) {
                                //   object_data.properties?.forEach((p: any) => {
                                //     const f = tD.properties.find((fp: any) => fp.name === p.name)
                                //     if (f) {
                                //       f.value = p.value
                                //     } else {
                                //       tD.properties.push(p)
                                //     }
                                //   })
                                // }
                                // const findObjGroup = this.gameobjects_groups.find(g => g.name === objClass)
                                // if (findObjGroup) {
                                //   const obj = this.addObjectFromTiled(
                                //     findObjGroup,
                                //     object_data,
                                //     object_data.name,
                                //     {...tileData},
                                //   )
                                //   if (obj) this.gameobjects.push(obj)
                                // } else {
                                //   const classMappingConstructor = {
                                //     'Door': Door,
                                //     'Chest': Chest
                                //   }
                                //   const getObjClassConstructor = () => classMappingConstructor[objClass]
                                //   const group = this.scene.physics.add.staticGroup({ classType: getObjClassConstructor(), name: objClass })
                                //   this.gameobjects_groups.push(group)
                                //   const obj = this.addObjectFromTiled(
                                //     group,
                                //     object_data,
                                //     object_data.name,
                                //     {...tileData},
                                //   )
                                //   if (obj) this.gameobjects.push(obj)
                                // }
                            }
                        }
                    }
                    catch (error) { }
                }
            };
            var this_1 = this;
            // console.log('[Tilemap] [create] [object_layer]', layer.name)
            // const group = this.scene.physics.add.staticGroup({ classType: Door })
            for (var _g = 0, _h = layer.objects; _g < _h.length; _g++) {
                var object_data = _h[_g];
                _loop_1(object_data);
            }
            // const object_classes = ['Door', 'Chest', 'Sprite']
            // for (const objClass of object_classes) {
            //   map.createFromObjects(
            //     layer.name,
            //     {
            //     }
            //   )
            // }
        }
        // plugins
        // plugin::collider
        initColliderTiles(this.scene, this);
        // plugin::tiles
        initAnimatedTiles(this.scene, this.map);
        //
        this.isCreated = true;
        console.log('[Tilemap] [create] [end]', (_b = this.getLayerByName('LAYER_PLAYER')) === null || _b === void 0 ? void 0 : _b.depth);
    };
    Tilemap.prototype.preUpdate = function (time, delta) {
        this.gameobjects.forEach(function (obj) { return obj.preUpdate.bind(obj)(time, delta); });
    };
    Tilemap.prototype.update = function (time, delta) {
        var _a;
        // resort with depth
        this.sortDepthLayers();
        var centerDepth = ((_a = this.getLayerByName('LAYER_PLAYER')) === null || _a === void 0 ? void 0 : _a.depth) || 0;
        var sorted = this.gameobjects.sort(function (a, b) {
            return a.calculateSortDepthPoint().y - b.calculateSortDepthPoint().y;
        });
        // set depth
        for (var i = 0; i < sorted.length; i++) {
            var obj = sorted[i];
            obj.setDepth((centerDepth - this.gameobjects.length / 2) + i);
        }
        this.gameobjects.forEach(function (obj) { return obj.update.bind(obj)(time, delta); });
    };
    Tilemap.prototype.postUpdate = function (time, delta) {
        this.gameobjects.forEach(function (obj) { return obj.postUpdate.bind(obj)(time, delta); });
    };
    Tilemap.prototype.sortDepthLayers = function () {
        var _this = this;
        var currDepth = this.config.depthStart;
        this.layers.forEach(function (l) {
            if (l.name === 'tilemap_layer_LAYER_PLAYER') {
                l.setDepth(currDepth + Math.floor(_this.gameobjects.length / 2) + 2);
                currDepth += _this.gameobjects.length + 2 + _this.config.depthBetweenLayers;
                return true;
            }
            else {
                l.setDepth(currDepth);
            }
            currDepth += _this.config.depthBetweenLayers;
        });
        // console.log(this.layers.map(l => [l.name, l.depth].join(',')))
    };
    /**
     * Get layer by name
     * @param name
    */
    Tilemap.prototype.getLayerByName = function (name) {
        return this.layers.find(function (l) { return l.name === "tilemap_layer_".concat(name); });
    };
    Tilemap.prototype.getObjInLayer = function (layerName, objName) {
        var layer = this.map.getObjectLayer(layerName);
        if (!layer)
            return undefined;
        var obj = layer.objects.find(function (o) { return o.name === objName; });
        if (!obj)
            return undefined;
        return obj;
    };
    Tilemap.prototype.addObjectFromTiled = function (group, object, key, objectData) {
        var tileset = this.getTilesetFromGid(object.gid);
        var actualX = object.x + object.width * 0.5;
        var actualY = object.y - object.height * 0.5;
        var obj = group
            .get(actualX, actualY, tileset.name, object.gid - this.map.getTileset(tileset.name).firstgid)
            // .setDepth(depth || actualY)
            .setName(key);
        obj.setObjectData(objectData || {}, this);
        return obj;
        // const ob = (new (group.classType(this.scene, actualX, actualY, tileset.name, object.gid! - this.map.getTileset(tileset.name)!.firstgid) as any))
        //   .setDepth(depth || actualY)
        //   .setName(key)
        // ob.setObjectData(objectData || {}, this)
        // return ob
    };
    Tilemap.prototype.getTilesetFromGid = function (gid) {
        var tilesetSortFirstgid = this.tilesets.sort(function (a, b) { return a.firstgid - b.firstgid; });
        var bestTileset = tilesetSortFirstgid[0];
        for (var _i = 0, tilesetSortFirstgid_1 = tilesetSortFirstgid; _i < tilesetSortFirstgid_1.length; _i++) {
            var tileset = tilesetSortFirstgid_1[_i];
            if (gid >= tileset.firstgid) {
                bestTileset = tileset;
            }
        }
        return bestTileset;
    };
    return Tilemap;
}());

var TestScene = /** @class */ (function (_super) {
    __extends(TestScene, _super);
    function TestScene() {
        return _super.call(this, {
            key: 'TestScene'
        }) || this;
    }
    TestScene.prototype.preload = function () {
        // load assets
        // load chars
        // const charUrl = this.game.gameClient.assetUrl('chars/femalestaffdark_yellow.png')
        // this.load.spritesheet('char', charUrl, { frameWidth: 32, frameHeight: 32 })
        // load chars
        this.load.atlas('chars', this.game.gameClient.assetUrl('chars/chars.png'), this.game.gameClient.assetUrl('chars/chars.json'));
        // load particles
        this.load.atlas('particles', this.game.gameClient.assetUrl('particles/particles.png'), this.game.gameClient.assetUrl('particles/particles.json'));
        // preload and init map
        var mapUrl = this.game.gameClient.assetUrl("maps/test.json?".concat(Math.random()));
        this.map = new Tilemap(this, 'tilemap_base' + Math.random(), mapUrl);
    };
    TestScene.prototype.create = function () {
        var _this = this;
        // init map
        this.map.create();
        // player
        var player = new Player(this, this.map);
        player.createController();
        this.map.gameobjects.push(player);
        // camera
        this.cameras.main.startFollow(player);
        this.cameras.main.setZoom(6);
        // objects
        // const obj = this.add.sprite(100, 100, 'item_dungeon_chest_16')
        // obj.setDepth(99999)
        // obj.anims.create({
        //   key: 'open',
        //   frames: [0, 1, 2].map((i) => ({ key: 'item_dungeon_chest_16', frame: i })),
        // })
        // obj.anims.play('open', true)
        // test create text in center of screen
        var text = this.add.text(0, 0, 'Hello Phaser!', {
            fontSize: '64px',
            color: '#ffffff',
        });
        text.setOrigin(0.5, 0.5);
        text.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
        // on pointer move display pointer position localion
        this.input.on('pointermove', function (pointer) {
            text.setText("Hello, Welcome to BSOUL! ".concat(pointer.x, ", ").concat(pointer.y));
        });
        this.input.on('pointerdown', function (pointer) {
            var tile = _this.map.map.getTileAtWorldXY(pointer.worldX, pointer.worldY, false, undefined, 'Decoration_bottom');
            console.log('pointerdown', pointer, tile);
        });
    };
    return TestScene;
}(Phaser$1.Scene));

var gameClientDefaultConfig = {
    phaser: {
        type: Phaser$1.WEBGL,
        width: "100%",
        height: "100%",
        render: {
            antialias: false,
            pixelArt: true,
            roundPixels: false
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: [
            DemoScene,
            TestScene
        ]
    }
};
var GameClient = /** @class */ (function () {
    function GameClient(config) {
        this.config = merge(gameClientDefaultConfig, config);
        this.createPhaser();
    }
    GameClient.prototype.createPhaser = function () {
        var p = new Phaser$1.Game(this.config.phaser);
        this.phaser = p;
        // register main game engine instance to phaser
        Object.defineProperty(this.phaser, 'gameClient', {
            value: this,
            writable: false,
        });
    };
    GameClient.prototype.destroy = function () {
        this.phaser.destroy(false, false);
    };
    GameClient.prototype.restart = function () {
        this.destroy();
        console.clear();
        this.createPhaser();
    };
    GameClient.prototype.stopAllScenes = function () {
        this.phaser.scene.getScenes().forEach(function (scene) {
            var keep = scene.KEEP_BACKGROUND;
            if (keep)
                return;
            scene.scene.stop();
        });
    };
    GameClient.prototype.publicUrl = function (path) {
        return path;
    };
    GameClient.prototype.assetUrl = function (path) {
        return this.publicUrl("assets/".concat(path));
    };
    GameClient.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, __spreadArray(["[DEBUG]"], args, false));
    };
    return GameClient;
}());

export { GameClient, Hello, gameClientDefaultConfig };
