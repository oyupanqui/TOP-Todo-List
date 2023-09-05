/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateClock () {\n    const date = document.getElementsByTagName(\"date\")[0]\n    \n    function timeNow(date) {\n        date.textContent = new Date().toLocaleString()\n    }\n\n    setInterval(function () {\n        timeNow(date)\n    }, 1000)\n    return date\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateClock);\n\n//# sourceURL=webpack://top-todo-list/./src/date.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\nfunction loadHome() {\n    const content = document.getElementById(\"content\")\n    const head = document.createElement(\"h2\")\n    head.textContent = \"All Projects\"\n\n    content.appendChild(head)\n\n    const taskDiv = document.createElement(\"div\")\n    taskDiv.classList.add(\"task-list\")\n\n    const data = JSON.parse(localStorage.getItem(\"task\"))\n    console.log(data)\n\n    ;(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.addTasks)(data, taskDiv)\n\n    content.appendChild(taskDiv)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://top-todo-list/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n\n\n(0,_initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ \"./src/date.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _showNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showNav */ \"./src/showNav.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset */ \"./src/reset.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n\n\n\n\nfunction initialize() {\n    (0,_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    ;(0,_showNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    ;(0,_reset__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    ;(0,_storage__WEBPACK_IMPORTED_MODULE_4__.checkStorage)()\n    ;(0,_projects__WEBPACK_IMPORTED_MODULE_5__.addProjectsNav)()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);\n\n//# sourceURL=webpack://top-todo-list/./src/initialize.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   addProjectsNav: () => (/* binding */ addProjectsNav),\n/* harmony export */   myProjects: () => (/* binding */ myProjects)\n/* harmony export */ });\nlet myProjects = []\n\nfunction Project (title, color) {\n    this.title = title\n    this.color = color\n    this.projID = title.toLowerCase().replaceAll(\" \", \"-\")\n}\n\nfunction addProjectsNav () {\n    const projectsArray = JSON.parse(localStorage.getItem(\"project\"))\n    const projectsNav = document.getElementById(\"projects-nav\").parentNode\n\n    projectsArray.forEach(function (p) {\n        const listElem = document.createElement(\"li\")\n        projectsNav.appendChild(listElem)\n\n        const projElem = document.createElement(\"h3\")\n        projElem.classList.add(\"btn-nav\")\n        projElem.classList.add(p.projID)\n        projElem.textContent = p.title\n        \n        projElem.addEventListener(\"mouseover\", (e) => {\n            projElem.style.backgroundColor = p.color\n            return e\n        })\n\n        projElem.addEventListener(\"mouseout\", (e) => {\n            projElem.style.backgroundColor = \"#00000000\"\n            return e\n        })\n\n        listElem.appendChild(projElem)\n    })\n\n    return projectsArray\n}\n\n\n//# sourceURL=webpack://top-todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/reset.js":
/*!**********************!*\
  !*** ./src/reset.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction resetContent () {\n    const content = document.getElementById(\"content\")\n    content.childNodes.forEach(n => n.remove())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetContent);\n\n//# sourceURL=webpack://top-todo-list/./src/reset.js?");

/***/ }),

/***/ "./src/showNav.js":
/*!************************!*\
  !*** ./src/showNav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction showNav() {\n    const navIcon = document.getElementById(\"sandwich\")\n    const navPanel = document.getElementById(\"nav\")\n    navIcon.addEventListener(\"click\", function () {\n        if (navPanel.classList.contains(\"nav-active\")) {\n            navPanel.classList.replace(\"nav-active\", \"nav-inactive\")\n            \n        } else {\n            navPanel.classList.replace(\"nav-inactive\", \"nav-active\")\n        }\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNav);\n\n//# sourceURL=webpack://top-todo-list/./src/showNav.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkStorage: () => (/* binding */ checkStorage)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nfunction checkStorage () {\n    if (localStorage.length === 0) {\n        _projects__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__.Project(\"My Default Project\", \"#ff0000\"))\n        localStorage.setItem(\"project\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.myProjects))\n\n        _tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks.push(new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(\"Launch of NISAR\", \"On January 2024 NASA's first radar mission will be launch\", \"2024-01-01\", \"high\", \"a very special day\", false, \"My Default Project\"))\n        localStorage.setItem(\"task\", JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks))\n    }\n    return localStorage\n}\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   addTasks: () => (/* binding */ addTasks),\n/* harmony export */   myTasks: () => (/* binding */ myTasks)\n/* harmony export */ });\nlet myTasks = []\n\nfunction Task (title, description, dueDate, priority, notes, check, project) {\n    this.title = title\n    this.description = description\n    this.dueDate = dueDate\n    this.priority = priority\n    this.notes = notes\n    this.check = check\n    this.project = project\n    this.projID = project.toLowerCase().replaceAll(\" \", \"-\")\n}\n\nfunction addTasks (taskList, container) {\n    taskList.forEach((d) => {\n        const taskElem = document.createElement(\"div\")\n        taskElem.classList.add(\"task-div\")\n        \n        const taskTitle = document.createElement(\"h4\")\n        taskTitle.textContent = d.title\n\n        taskElem.appendChild(taskTitle)\n\n        container.appendChild(taskElem)\n    })\n}\n\n//# sourceURL=webpack://top-todo-list/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;