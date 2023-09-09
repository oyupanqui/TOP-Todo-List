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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFormBtns: () => (/* binding */ addFormBtns),\n/* harmony export */   addSubmitBtns: () => (/* binding */ addSubmitBtns)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n/* Open and close form*/\n\nfunction openForm (div) {\n    div.classList.add(\"active\")\n    div.classList.remove(\"inactive\")\n}\n\nfunction closeForm (div, form) {\n    div.classList.add(\"deactivating\")\n    div.classList.remove(\"active\")\n    removeBlank()\n\n    setTimeout(() => {\n        div.classList.add(\"inactive\")\n        div.classList.remove(\"deactivating\")\n        form.reset()\n    }, 1000)\n}\n\n/* Add and remove blank background*/\n\nfunction addBlank () {\n    document.getElementsByClassName(\"blank\")[0].style.display = \"block\"\n}\n\nfunction removeBlank () {\n    document.getElementsByClassName(\"blank\")[0].style.display = \"none\"\n}\n\n/* Functions to open the form*/\n\nfunction addSubmitBtns () {\n    const taskBtn = document.getElementById(\"form-task-div\")\n    const createTaskBtn = document.getElementById(\"add-task\")\n    createTaskBtn.addEventListener(\"click\", function () {\n        openForm(taskBtn)\n        addBlank()\n    })\n\n    const projBtn = document.getElementById(\"form-project-div\")\n    const createProjBtn = document.getElementById(\"add-project\")\n    createProjBtn.addEventListener(\"click\", function () {\n        openForm(projBtn)\n        addBlank()\n    })\n    return createTaskBtn, createProjBtn\n}\n\n/* Form  confirmation*/\n\nfunction formTaskConfirm (div, btn, form) {\n    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.parseTaskForm)()\n    removeBlank()\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault()\n    })\n    btn.addEventListener(\"click\", function () {\n        closeForm(div, form)\n    })\n}\n\nfunction formProjConfirm (div, btn, form) {\n    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.parseProjectForm)()\n    removeBlank()\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault()\n    })\n    btn.addEventListener(\"click\", function () {\n        closeForm(div, form)\n    })\n}\n\n/* Form  confirmation*/\n\nfunction addFormBtns () {\n    const taskForm = document.getElementById(\"task-form\")\n    const projForm = document.getElementById(\"proj-form\")\n\n    const taskFormConfirm = document.getElementById(\"form-task-confirmation\")\n    const projFormConfirm = document.getElementById(\"form-project-confirmation\")\n\n    const taskFormDiv = document.getElementById(\"form-task-div\")\n    const projFormDiv = document.getElementById(\"form-project-div\")\n\n    formTaskConfirm(taskFormDiv, taskFormConfirm, taskForm)\n    formProjConfirm(projFormDiv, projFormConfirm, projForm)\n\n    const taskFormCancel = document.getElementById(\"form-task-cancel\")\n    const projFormCancel = document.getElementById(\"form-project-cancel\")\n\n    taskFormCancel.addEventListener(\"click\", () => {\n        closeForm(taskFormDiv, taskForm)\n    })\n        \n    projFormCancel.addEventListener(\"click\", () => {\n        closeForm(projFormDiv, projForm)\n    })\n    return taskFormConfirm, projFormConfirm, taskFormCancel, projFormCancel\n}\n\n//# sourceURL=webpack://top-todo-list/./src/form.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset */ \"./src/reset.js\");\n\n\n\n\nfunction loadHome() {\n    const content = document.getElementById(\"content\")\n    const head = document.createElement(\"h2\")\n    head.textContent = \"All Projects\"\n\n    content.appendChild(head)\n\n    const taskDiv = document.createElement(\"div\")\n    taskDiv.classList.add(\"task-list\")\n    \n    ;(0,_storage__WEBPACK_IMPORTED_MODULE_0__.pullData)()\n\n    ;(0,_tasks__WEBPACK_IMPORTED_MODULE_1__.addTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks, taskDiv)\n\n    content.appendChild(taskDiv)\n\n    document.getElementById(\"form-task-confirmation\").addEventListener(\"click\", function () {\n        ;(0,_reset__WEBPACK_IMPORTED_MODULE_2__.resetTaskList)()\n        ;(0,_tasks__WEBPACK_IMPORTED_MODULE_1__.addTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks, taskDiv, true)\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://top-todo-list/./src/home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ \"./src/date.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _showNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showNav */ \"./src/showNav.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset */ \"./src/reset.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\n\n\n\n\n\nfunction initialize() {\n    (0,_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    ;(0,_showNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    ;(0,_reset__WEBPACK_IMPORTED_MODULE_3__.resetContent)()\n    ;(0,_form__WEBPACK_IMPORTED_MODULE_4__.addSubmitBtns)()\n    ;(0,_form__WEBPACK_IMPORTED_MODULE_4__.addFormBtns)()\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);\n\n//# sourceURL=webpack://top-todo-list/./src/initialize.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetContent: () => (/* binding */ resetContent),\n/* harmony export */   resetProjectList: () => (/* binding */ resetProjectList),\n/* harmony export */   resetTaskList: () => (/* binding */ resetTaskList)\n/* harmony export */ });\nfunction resetContent () {\n    const content = document.getElementById(\"content\")\n    content.childNodes.forEach(n => n.remove())\n}\n\nfunction resetTaskList () {\n    const taskDiv = document.getElementsByClassName(\"task-div\")\n    let taskLen = taskDiv.length\n    for (let i = 0; i<taskLen; i++) {\n        taskDiv[0].remove()\n    }\n}\n\nfunction resetProjectList () {\n    const projectDiv = document.getElementsByClassName(\"project-div\")\n    let projectLen = projectDiv.length\n    for (let i = 0; i<projectLen; i++) {\n        projectDiv[0].remove()\n    }\n}\n\n//# sourceURL=webpack://top-todo-list/./src/reset.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseProjectForm: () => (/* binding */ parseProjectForm),\n/* harmony export */   parseTaskForm: () => (/* binding */ parseTaskForm),\n/* harmony export */   pullData: () => (/* binding */ pullData)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n/* Push data to local storage*/\n\nfunction taskToStorage (task) {\n    _tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks.push(task)\n    localStorage.setItem(\"task\", JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks))\n}\n\nfunction projectToStorage (project) {\n    _projects__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(project)\n    localStorage.setItem(\"project\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.myProjects))\n}\n\n/* Pull data from local storage*/\n\nfunction pullData () {\n    if (localStorage.getItem(\"task\") === null) {\n        _tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks.push(new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(\"Launch of NISAR\", \"On January 2024 NASA's first radar mission will be launch\", \"2024-01-01\", \"high\", \"a very special day\", false, \"My Default Project\"))\n        localStorage.setItem(\"task\", JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks))\n    }\n\n    if (localStorage.getItem(\"project\") === null) {\n        _projects__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__.Project(\"My Default Project\", \"#ff0000\"))\n        localStorage.setItem(\"project\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.myProjects))\n    } else {\n        JSON.parse(localStorage.getItem(\"task\")).map(function (task) {\n            let newTask = new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(task.title, task.description, task.dueDate, task.priority, task.notes, task.check, task.project, task.project.toLowerCase().replaceAll(\" \", \"-\"))\n            return _tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks.push(newTask)\n        })\n        JSON.parse(localStorage.getItem(\"project\")).map(function (proj) {\n            let newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project(proj.title, proj.color, proj.title.toLowerCase().replaceAll(\" \", \"-\"))\n            return _projects__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(newProject)\n        })\n    }\n    return _tasks__WEBPACK_IMPORTED_MODULE_1__.myTasks, _projects__WEBPACK_IMPORTED_MODULE_0__.myProjects\n}\n\n/* Parse data from the form to push data to local storage*/\n\nfunction parseTaskForm () {\n    const taskConfirm = document.getElementById(\"form-task-confirmation\")\n    taskConfirm.addEventListener(\"click\", function () {\n        const formTitle = document.getElementById(\"form-task-title\").value\n        const formDescription = document.getElementById(\"form-task-description\").value\n        const formDate = document.getElementById(\"form-task-date\").value\n        const formPriority = document.getElementById(\"form-priority\").value\n        const formNotes = document.getElementById(\"form-task-notes\").value\n        const formCheck = document.getElementById(\"form-task-check\").checked\n        const formProj = document.getElementById(\"form-task-project\").value\n        \n        const newTask = new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task (formTitle, formDescription, formDate, formPriority, formNotes, formCheck, formProj)\n        taskToStorage(newTask)\n    })\n    return taskConfirm\n}\n\nfunction parseProjectForm () {\n    const projConfirm = document.getElementById(\"form-project-confirmation\")\n    projConfirm.addEventListener(\"click\", function () {\n        const formTitle = document.getElementById(\"form-project-title\").value\n        const formColor = document.getElementById(\"form-project-color\").value\n        \n        const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project (formTitle, formColor)\n        projectToStorage(newProject)\n    })\n    return projConfirm\n}\n\n//# sourceURL=webpack://top-todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   addTasks: () => (/* binding */ addTasks),\n/* harmony export */   myTasks: () => (/* binding */ myTasks)\n/* harmony export */ });\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset */ \"./src/reset.js\");\n\n\nlet myTasks = []\n\nfunction Task (title, description, dueDate, priority, notes, check, project) {\n    this.title = title\n    this.description = description\n    this.dueDate = dueDate\n    this.priority = priority\n    this.notes = notes\n    this.check = check\n    this.project = project\n    this.projID = project.toLowerCase().replaceAll(\" \", \"-\")\n}\n\nfunction addTasks (taskList, container) {\n    (0,_reset__WEBPACK_IMPORTED_MODULE_0__.resetTaskList)()\n    taskList.forEach((d) => {\n        const taskElem = document.createElement(\"div\")\n        taskElem.classList.add(\"task-div\")\n        \n        const taskTitle = document.createElement(\"div\")\n        taskTitle.textContent = \"Title: \" + d.title\n        taskElem.appendChild(taskTitle)\n\n        const taskDate = document.createElement(\"div\")\n        taskDate.textContent = \"Due date: \" + d.dueDate\n        taskElem.appendChild(taskDate)\n\n        const taskPriority = document.createElement(\"div\")\n        taskPriority.textContent = \"Priority: \" + d.priority\n        taskElem.appendChild(taskPriority)\n\n        const taskCheck = document.createElement(\"div\")\n        if (d.check === true) {\n            taskCheck.textContent = \"Status: \" + \"done\"\n        } else {\n            taskCheck.textContent = \"Status: \" + \"pending\"\n        }\n        taskElem.appendChild(taskCheck)\n\n        const taskProject = document.createElement(\"div\")\n        taskProject.textContent = \"Project: \" + d.project\n        taskElem.appendChild(taskProject)\n\n        container.appendChild(taskElem)\n    })\n}\n\n//# sourceURL=webpack://top-todo-list/./src/tasks.js?");

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