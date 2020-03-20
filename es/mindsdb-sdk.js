import axios from 'axios';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var setQueryParams = function setQueryParams(paramsObj, url) {
  var params = "";

  if (paramsObj) {
    paramsObj.forEach(function (item, i) {
      if (item.value) {
        var key = encodeURIComponent(item.key);
        var value = encodeURIComponent(item.value);
        var kvp = key + "=" + value;
        params = params.concat(i > 0 ? "&".concat(kvp) : kvp);
      }
    });

    if (url.slice(-1) === "/") {
      url = url.substring(0, url.length - 1);
    }

    return params.length > 0 ? url + "?" + params : url;
  }

  return url;
};

var connection = {
  url: null,
  api: null,
  token: {
    key: "apiKey",
    value: null
  },
  version: 0.2
};

var connect = function connect(url, params) {
  connection.token.value = params.find(function (param) {
    return param.key === "apiKey";
  }).value;
  connection.url = setQueryParams([connection.token], url);
  connection.api = axios.create({
    baseURL: url,
    timeout: 20000
  });
};

var disconnect = function disconnect() {
  connection.url = null;
  connection.token = {
    key: "apiKey",
    value: null
  };
  connection.api = null;
};

var ping = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    var request, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            request = setQueryParams([connection.token], "/util/ping");
            _context.next = 3;
            return connection.api.get(request);

          case 3:
            response = _context.sent;

            if (!(response.status === 200 && _typeof(response.data) === "object" && response.data.status === "ok")) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", true);

          case 6:
            return _context.abrupt("return", false);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ping(_x) {
    return _ref.apply(this, arguments);
  };
}();

var predictor = function predictor(opts) {
  return new Predictor(opts);
};

var dataSource = function dataSource(opts) {
  return new DataSource(opts);
};

var predictors = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    var mergeParams, request, response, rawData, predictorList;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
            request = setQueryParams(mergeParams, "/predictors");
            _context2.next = 4;
            return connection.api.get(request);

          case 4:
            response = _context2.sent;
            rawData = response.data || [];
            predictorList = rawData.map(predictor);
            return _context2.abrupt("return", predictorList);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function predictors(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var dataSources = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
    var mergeParams, request, response, rawData, dataSourceList;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
            request = setQueryParams(mergeParams, "/datasources");
            _context3.next = 4;
            return connection.api.get(request);

          case 4:
            response = _context3.sent;
            rawData = response.data || [];
            dataSourceList = rawData.map(dataSource);
            return _context3.abrupt("return", dataSourceList);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function dataSources(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var saveFile = function saveFile(response, source) {
  var url = window.URL.createObjectURL(new Blob([response.data]));
  var link = document.createElement("a");
  link.href = url;
  var contentDisposition = response.headers["content-disposition"];
  var fileName = null;

  if (contentDisposition) {
    var fileNameMatch = contentDisposition.match(/filename="?(.+)"?/);

    if (fileNameMatch.length === 2) {
      fileName = fileNameMatch[1];
    }
  }

  if (!fileName && source) {
    var parts = source.split("/");
    var end = parts[parts.length - 1];
    parts = end.split("\\");
    end = parts[parts.length - 1];
    fileName = end;
  }

  fileName = fileName || "unknown";
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};

var Predictor = function Predictor(_data) {
  var _this = this;

  _classCallCheck(this, Predictor);

  _defineProperty(this, "loaded", false);

  _defineProperty(this, "name", "");

  _defineProperty(this, "version", "");

  _defineProperty(this, "is_active", false);

  _defineProperty(this, "data_source", "");

  _defineProperty(this, "predict", null);

  _defineProperty(this, "accuracy", 0);

  _defineProperty(this, "status", "");

  _defineProperty(this, "train_end_at", null);

  _defineProperty(this, "updated_at", null);

  _defineProperty(this, "created_at", null);

  _defineProperty(this, "data_preparation", null);

  _defineProperty(this, "data_analysis", null);

  _defineProperty(this, "model_analysis", null);

  _defineProperty(this, "columns", null);

  _defineProperty(this, "load", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
      var mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/predictors/".concat(_this.name));
              _context4.next = 4;
              return connection.api.get(request);

            case 4:
              response = _context4.sent;
              Object.assign(_this, response.data);
              return _context4.abrupt("return", _this);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());

  _defineProperty(this, "rename", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
      var mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/predictors/".concat(params.oldName, "/rename?new_name=").concat(params.newName));
              _context5.next = 4;
              return connection.api.get(request);

            case 4:
              response = _context5.sent;
              return _context5.abrupt("return", response.data);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());

  _defineProperty(this, "loadColumns", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params) {
      var mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/predictors/".concat(_this.name, "/columns"));
              _context6.next = 4;
              return connection.api.get(request);

            case 4:
              response = _context6.sent;
              _this.columns = response.data;
              return _context6.abrupt("return", _this);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }());

  _defineProperty(this, "learn", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref7, params) {
      var dataSourceName, fromData, toPredict, kwargs, data, mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              dataSourceName = _ref7.dataSourceName, fromData = _ref7.fromData, toPredict = _ref7.toPredict, kwargs = _ref7.kwargs;
              data = {
                to_predict: toPredict
              };

              if (kwargs) {
                data.kwargs = kwargs;
              }

              if (dataSourceName) {
                data.data_source_name = dataSourceName;
              } else if (fromData) {
                data.from_data = fromData;
              }

              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/predictors/".concat(_this.name));
              _context7.next = 8;
              return connection.api.put(request, data);

            case 8:
              response = _context7.sent;
              return _context7.abrupt("return", response.data);

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x7, _x8) {
      return _ref8.apply(this, arguments);
    };
  }());

  _defineProperty(this, "queryPredict", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(when, params) {
      var mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/predictors/".concat(_this.name, "/predict"));
              _context8.next = 4;
              return connection.api.post(request, {
                when: when
              });

            case 4:
              response = _context8.sent;
              return _context8.abrupt("return", response.data);

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x9, _x10) {
      return _ref9.apply(this, arguments);
    };
  }());

  _defineProperty(this, "delete", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(params) {
      var mergeParams, request;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/predictors/".concat(_this.name));
              _context9.next = 4;
              return connection.api.delete(request);

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x11) {
      return _ref10.apply(this, arguments);
    };
  }());

  _defineProperty(this, "upload", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(file, onProgress, params) {
      var mergeParams, fd, config, request;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              fd = new FormData();
              fd.append("file", file);
              config = {
                onUploadProgress: function onUploadProgress(progressEvent) {
                  if (onProgress) {
                    var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    onProgress(percentCompleted);
                  }
                }
              };
              request = setQueryParams(mergeParams, "/predictors/upload");
              _context10.next = 7;
              return connection.api.post(request, fd, config);

            case 7:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x12, _x13, _x14) {
      return _ref11.apply(this, arguments);
    };
  }());

  _defineProperty(this, "download", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(params) {
      var mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/predictors/".concat(_this.name, "/download"));
              _context11.next = 4;
              return connection.api.get(request, {
                responseType: "blob"
              });

            case 4:
              response = _context11.sent;
              saveFile(response);
              return _context11.abrupt("return", _this);

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x15) {
      return _ref12.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getDownloadUrl", function () {
    return "".concat(connection.url, "/predictors/").concat(_this.name, "/download");
  });

  Object.assign(this, _data);
};

var DataSource = function DataSource(_data2) {
  var _this2 = this;

  _classCallCheck(this, DataSource);

  _defineProperty(this, "loaded", false);

  _defineProperty(this, "source_type", "url");

  _defineProperty(this, "name", "");

  _defineProperty(this, "source", "");

  _defineProperty(this, "missed_files", false);

  _defineProperty(this, "created_at", null);

  _defineProperty(this, "updated_at", null);

  _defineProperty(this, "row_count", 0);

  _defineProperty(this, "columns", null);

  _defineProperty(this, "data", null);

  _defineProperty(this, "missedFileList", null);

  _defineProperty(this, "load", /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(params) {
      var mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/datasources/".concat(_this2.name));
              _context12.next = 4;
              return connection.api.get(request);

            case 4:
              response = _context12.sent;
              Object.assign(_this2, response.data);
              return _context12.abrupt("return", _this2);

            case 7:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x16) {
      return _ref13.apply(this, arguments);
    };
  }());

  _defineProperty(this, "upload", /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(file, onProgress, params) {
      var mergeParams, fd, config, request;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _this2.source_type = "file";
              _this2.source = file.name;
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              fd = new FormData();
              fd.append("name", _this2.name);
              fd.append("source_type", _this2.source_type);
              fd.append("source", _this2.source);
              fd.append("file", file);
              config = {
                onUploadProgress: function onUploadProgress(progressEvent) {
                  if (onProgress) {
                    var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    onProgress(percentCompleted);
                  }
                }
              };
              request = setQueryParams(mergeParams, "/datasources/".concat(_this2.name));
              _context13.next = 12;
              return connection.api.put(request, fd, config);

            case 12:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function (_x17, _x18, _x19) {
      return _ref14.apply(this, arguments);
    };
  }());

  _defineProperty(this, "uploadFromUrl", /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(url, params) {
      var data, mergeParams, request;
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _this2.source_type = "url";
              _this2.source = url;
              data = {
                name: _this2.name,
                source_type: _this2.source_type,
                source: _this2.source
              };
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/datasources/".concat(_this2.name));
              _context14.next = 7;
              return connection.api.put(request, data);

            case 7:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function (_x20, _x21) {
      return _ref15.apply(this, arguments);
    };
  }());

  _defineProperty(this, "download", /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(params) {
      var url, mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              url = _this2.getDownloadUrl();
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, url);
              _context15.next = 5;
              return connection.api.get(request, {
                responseType: "blob"
              });

            case 5:
              response = _context15.sent;
              saveFile(response, _this2.source);
              return _context15.abrupt("return", _this2);

            case 8:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function (_x22) {
      return _ref16.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getDownloadUrl", function () {
    return _this2.source_type === "url" ? _this2.source : "".concat(connection.url, "/datasources/").concat(_this2.name, "/download");
  });

  _defineProperty(this, "delete", /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(params) {
      var mergeParams, request;
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/datasources/".concat(_this2.name));
              _context16.next = 4;
              return connection.api.delete(request);

            case 4:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));

    return function (_x23) {
      return _ref17.apply(this, arguments);
    };
  }());

  _defineProperty(this, "loadData", /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(params) {
      var mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/datasources/".concat(_this2.name, "/data"));
              _context17.next = 4;
              return connection.api.get(request);

            case 4:
              response = _context17.sent;
              _this2.data = response.data;
              return _context17.abrupt("return", _this2.data);

            case 7:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));

    return function (_x24) {
      return _ref18.apply(this, arguments);
    };
  }());

  _defineProperty(this, "loadDataQuality", /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(params) {
      var mergeParams, request, response, data;
      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/datasources/".concat(_this2.name, "/analyze"));
              _context18.next = 4;
              return connection.api.get(request);

            case 4:
              response = _context18.sent;

              try {
                data = response.data["data_analysis"]["input_columns_metadata"];
              } catch (error) {
                data = null;
              }

              _this2.dataQuality = data;
              return _context18.abrupt("return", data);

            case 8:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }));

    return function (_x25) {
      return _ref19.apply(this, arguments);
    };
  }());

  _defineProperty(this, "loadMissedFileList", /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(params) {
      var mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/datasources/".concat(_this2.name, "/missed_files"));
              _context19.next = 4;
              return connection.api.get(request);

            case 4:
              response = _context19.sent;
              _this2.missedFileList = response.data;
              return _context19.abrupt("return", _this2.missedFileList);

            case 7:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));

    return function (_x26) {
      return _ref20.apply(this, arguments);
    };
  }());

  _defineProperty(this, "uploadFile", /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(_ref21, params) {
      var column, rowIndex, extension, file, fd, mergeParams, request, response;
      return regeneratorRuntime.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              column = _ref21.column, rowIndex = _ref21.rowIndex, extension = _ref21.extension, file = _ref21.file;
              fd = new FormData();
              fd.append("file", file);
              fd.append("extension", extension);
              mergeParams = params ? [].concat(_toConsumableArray(params), [connection.token]) : [connection.token];
              request = setQueryParams(mergeParams, "/datasources/".concat(_this2.name, "/files/").concat(column, ":").concat(rowIndex));
              _context20.next = 8;
              return connection.api.put(request, fd);

            case 8:
              response = _context20.sent;
              return _context20.abrupt("return", response.status === 200);

            case 10:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    }));

    return function (_x27, _x28) {
      return _ref22.apply(this, arguments);
    };
  }());

  Object.assign(this, _data2);
};

var MindsDB = {
  connect: connect,
  disconnect: disconnect,
  ping: ping,
  predictors: predictors,
  dataSources: dataSources,
  DataSource: dataSource,
  Predictor: predictor
};

export default MindsDB;
