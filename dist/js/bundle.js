/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ "./src/js/particle.js");


window.onload = function () {
  var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight,
      centerX = width / 2,
      centerY = height / 2,
      particles = [],
      numObjects = 40,
      slice = Math.PI * 2 / numObjects,
      colors = ['#CFDBD7', '#F1ADAE', '#09BEAF'];

  window.onresize = function () {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }; // RequestAnimationFrame


  (function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })(); //Utility Function


  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  } //Center Ball


  function centerBall() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, 90, 0, Math.PI * 2);
    var grd = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120);
    grd.addColorStop(0.004, 'rgba(255, 239, 239, 1.000)');
    grd.addColorStop(0.324, 'rgba(244, 168, 168, 1.000)');
    grd.addColorStop(0.692, 'rgba(255, 127, 80, 1.000)');
    grd.addColorStop(1.000, 'rgba(51, 51, 51, 1.000)');
    ctx.fillStyle = grd;
    ctx.fill();
  }

  for (var i = 0; i < numObjects; i++) {
    particles.push(new _particle__WEBPACK_IMPORTED_MODULE_0__["Particle"](canvas, Math.random() * 10 + 16, i * slice, width * Math.random(), randomColor(colors)));
  }

  render();

  function render() {
    ctx.clearRect(0, 0, width, height);
    centerBall();

    for (var _i = 0; _i < numObjects; _i++) {
      var p = particles[_i];
      p.update();
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(render);
  }
};

/***/ }),

/***/ "./src/js/particle.js":
/*!****************************!*\
  !*** ./src/js/particle.js ***!
  \****************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Particle = /*#__PURE__*/function () {
  /**
   * コンストラクター
   * @param {Number} x
   * @param {Number} y
   * @param {Number} radius
   * @param {Number} angle
   * @param {Number} distance
   */
  function Particle(canvas, radius, angle, distance, color) {
    _classCallCheck(this, Particle);

    this.canvas = canvas;
    this.radius = radius;
    this.angle = angle;
    this.distance = distance;
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.speed = 1;
  }

  _createClass(Particle, [{
    key: "update",
    value: function update() {
      this.distance += -this.speed;
      this.angle += .01;
      this.x = this.canvas.width / 2 + Math.cos(this.angle) * this.distance;
      this.y = this.canvas.height / 2 + Math.sin(this.angle) * this.distance;

      if (this.x > this.canvas.width) {
        this.distance *= -1;
      }

      if (this.x < 0) {
        this.distance *= -1;
      }

      if (this.y > this.canvas.height) {
        this.distance *= -1;
      }

      if (this.y < 0) {
        this.distance *= -1;
      }
    }
  }]);

  return Particle;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnRpY2xlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNlbnRlclgiLCJjZW50ZXJZIiwicGFydGljbGVzIiwibnVtT2JqZWN0cyIsInNsaWNlIiwiTWF0aCIsIlBJIiwiY29sb3JzIiwib25yZXNpemUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInJhbmRvbUludEZyb21SYW5nZSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQ29sb3IiLCJsZW5ndGgiLCJjZW50ZXJCYWxsIiwiYmVnaW5QYXRoIiwiYXJjIiwiZ3JkIiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsU3R5bGUiLCJmaWxsIiwiaSIsInB1c2giLCJQYXJ0aWNsZSIsInJlbmRlciIsImNsZWFyUmVjdCIsInAiLCJ1cGRhdGUiLCJzYXZlIiwieCIsInkiLCJyYWRpdXMiLCJjb2xvciIsInJlc3RvcmUiLCJhbmdsZSIsImRpc3RhbmNlIiwic3BlZWQiLCJjb3MiLCJzaW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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cUIsQ0FBckIsR0FBeUJPLElBQUksQ0FBQ3dDLEdBQUwsQ0FBUyxLQUFLSixLQUFkLElBQXVCLEtBQUtDLFFBQTlEOztBQUNBLFVBQUksS0FBS04sQ0FBTCxHQUFTLEtBQUs3QyxNQUFMLENBQVlLLEtBQXpCLEVBQWdDO0FBQzlCLGFBQUs4QyxRQUFMLElBQWlCLENBQUMsQ0FBbEI7QUFDRDs7QUFDRCxVQUFJLEtBQUtOLENBQUwsR0FBUyxDQUFiLEVBQWdCO0FBQ2QsYUFBS00sUUFBTCxJQUFpQixDQUFDLENBQWxCO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLTCxDQUFMLEdBQVMsS0FBSzlDLE1BQUwsQ0FBWU8sTUFBekIsRUFBaUM7QUFDL0IsYUFBSzRDLFFBQUwsSUFBaUIsQ0FBQyxDQUFsQjtBQUNEOztBQUNELFVBQUksS0FBS0wsQ0FBTCxHQUFTLENBQWIsRUFBZ0I7QUFDZCxhQUFLSyxRQUFMLElBQWlCLENBQUMsQ0FBbEI7QUFDRDtBQUNGO0FBcENIOztBQUFBO0FBQUEsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9tYWluLmpzXCIpO1xuIiwiaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tICcuL3BhcnRpY2xlJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyksXHJcbiAgICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICB3aWR0aCA9IGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodCA9IGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgY2VudGVyWCA9IHdpZHRoIC8gMixcclxuICAgICAgICBjZW50ZXJZID0gaGVpZ2h0IC8gMixcclxuICAgICAgICBwYXJ0aWNsZXMgPSBbXSxcclxuICAgICAgICBudW1PYmplY3RzID0gNDAsXHJcbiAgICAgICAgc2xpY2UgPSBNYXRoLlBJICogMiAvIG51bU9iamVjdHMsXHJcbiAgICAgICAgY29sb3JzID0gWycjQ0ZEQkQ3JywgJyNGMUFEQUUnLCAnIzA5QkVBRiddO1xyXG5cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICB3aWR0aCA9IGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGhlaWdodCA9IGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy9VdGlsaXR5IEZ1bmN0aW9uXHJcbiAgICBmdW5jdGlvbiByYW5kb21JbnRGcm9tUmFuZ2UobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmFuZG9tQ29sb3IoY29sb3JzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV1cclxuICAgIH1cclxuXHJcbiAgICAvL0NlbnRlciBCYWxsXHJcbiAgICBmdW5jdGlvbiBjZW50ZXJCYWxsKCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIDkwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgdmFyIGdyZCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjZW50ZXJYLCBjZW50ZXJZLCAwLCBjZW50ZXJYLCBjZW50ZXJZLCAxMjApO1xyXG4gICAgICAgIGdyZC5hZGRDb2xvclN0b3AoMC4wMDQsICdyZ2JhKDI1NSwgMjM5LCAyMzksIDEuMDAwKScpO1xyXG4gICAgICAgIGdyZC5hZGRDb2xvclN0b3AoMC4zMjQsICdyZ2JhKDI0NCwgMTY4LCAxNjgsIDEuMDAwKScpO1xyXG4gICAgICAgIGdyZC5hZGRDb2xvclN0b3AoMC42OTIsICdyZ2JhKDI1NSwgMTI3LCA4MCwgMS4wMDApJyk7XHJcbiAgICAgICAgZ3JkLmFkZENvbG9yU3RvcCgxLjAwMCwgJ3JnYmEoNTEsIDUxLCA1MSwgMS4wMDApJyk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyZDtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2JqZWN0czsgaSsrKSB7XHJcbiAgICAgICAgcGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKFxyXG4gICAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAxMCArIDE2LFxyXG4gICAgICAgICAgICBpICogc2xpY2UsXHJcbiAgICAgICAgICAgIHdpZHRoICogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgcmFuZG9tQ29sb3IoY29sb3JzKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpO1xyXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY2VudGVyQmFsbCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2JqZWN0czsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gcGFydGljbGVzW2ldO1xyXG4gICAgICAgICAgICBwLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5hcmMocC54LCBwLnksIHAucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gcC5jb2xvcjtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKVxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUGFydGljbGUge1xyXG4gIC8qKlxyXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv+ODvFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGFuZ2xlXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRpc3RhbmNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY2FudmFzLCByYWRpdXMsIGFuZ2xlLCBkaXN0YW5jZSwgY29sb3IpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMuc3BlZWQgPSAxO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmRpc3RhbmNlICs9IC10aGlzLnNwZWVkO1xyXG4gICAgdGhpcy5hbmdsZSArPSAuMDE7XHJcbiAgICB0aGlzLnggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIHRoaXMuZGlzdGFuY2U7XHJcbiAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgTWF0aC5zaW4odGhpcy5hbmdsZSkgKiB0aGlzLmRpc3RhbmNlO1xyXG4gICAgaWYgKHRoaXMueCA+IHRoaXMuY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIHRoaXMuZGlzdGFuY2UgKj0gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy54IDwgMCkge1xyXG4gICAgICB0aGlzLmRpc3RhbmNlICo9IC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMueSA+IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICB0aGlzLmRpc3RhbmNlICo9IC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMueSA8IDApIHtcclxuICAgICAgdGhpcy5kaXN0YW5jZSAqPSAtMTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9