import t from"axios";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e,n,r,a,o,u){try{var c=t[o](u),i=c.value}catch(t){return void n(t)}c.done?e(i):Promise.resolve(i).then(r,a)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var u=t.apply(e,r);function c(t){n(u,a,o,c,i,"next",t)}function i(t){n(u,a,o,c,i,"throw",t)}c(void 0)}))}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);e>n;n++)r[n]=t[n];return r}var i=function(t,e){var n="";return t?(t.forEach((function(t,e){if(t.value){var r=encodeURIComponent(t.key)+"="+(t.noEncodeURIComponent?t.value:encodeURIComponent(t.value));n=n.concat(e>0?"&".concat(r):r)}})),n.length>0?e+"?"+n:e):e},s={url:null,api:null,token:{key:"apikey",value:null},version:.2},p=function(){var t=r(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i([s.token],"/util/ping"),t.next=3,s.api.get(r);case 3:if(200!==(a=t.sent).status||"object"!==e(a.data)||"ok"!==a.data.status){t.next=6;break}return t.abrupt("return",!0);case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=r(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i([].concat(u(e),[s.token]),"/config/logs"),t.next=3,s.api.get(n);case 3:return t.abrupt("return",t.sent.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=r(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i([s.token],"/config/install_options"),t.next=3,s.api.get(e);case 3:return t.abrupt("return",t.sent.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=r(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i([s.token],"/config/vars"),t.next=3,s.api.get(e);case 3:return t.abrupt("return",t.sent.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(t){return new g(t)},h=function(t){return new k(t)},v=function(t,e){var n=window.URL.createObjectURL(new Blob([t.data])),r=document.createElement("a");r.href=n;var a=t.headers["content-disposition"],o=null;if(a){var u=a.match(/filename="?(.+)"?/);2===u.length&&(o=u[1])}if(!o&&e){var c=e.split("/"),i=c[c.length-1];c=i.split("\\"),o=i=c[c.length-1]}r.setAttribute("download",o=o||"unknown"),document.body.appendChild(r),r.click(),r.remove(),window.URL.revokeObjectURL(n)},g=function t(e){var n=this;a(this,t),o(this,"loaded",!1),o(this,"name",""),o(this,"version",""),o(this,"is_active",!1),o(this,"data_source",""),o(this,"predict",null),o(this,"accuracy",0),o(this,"status",""),o(this,"train_end_at",null),o(this,"updated_at",null),o(this,"created_at",null),o(this,"data_preparation",null),o(this,"data_analysis",null),o(this,"model_analysis",null),o(this,"columns",null),o(this,"load",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],a="/predictors/",void 0!==n.name&&""!==n.name&&(a+="".concat(n.name)),o=i(r,a),t.next=6,s.api.get(o);case 6:return Object.assign(n,t.sent.data),t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"rename",function(){var t=r(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e?[].concat(u(e),[s.token]):[s.token],r=i(n,"/predictors/".concat(e.oldName,"/rename?new_name=").concat(e.newName)),t.next=4,s.api.get(r);case 4:return t.abrupt("return",t.sent.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"loadColumns",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],a=i(r,"/predictors/".concat(n.name,"/columns")),t.next=4,s.api.get(a);case 4:return n.columns=t.sent.data,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"learn",function(){var t=r(regeneratorRuntime.mark((function t(e,r){var a,o,c,p,f,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.dataSourceName,o=e.fromData,p={to_predict:e.toPredict},(c=e.kwargs)&&(p.kwargs=c),a?p.data_source_name=a:o&&(p.from_data=o),f=r?[].concat(u(r),[s.token]):[s.token],l=i(f,"/predictors/".concat(n.name)),t.next=8,s.api.put(l,p);case 8:return t.abrupt("return",t.sent.data);case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),o(this,"queryPredict",function(){var t=r(regeneratorRuntime.mark((function t(e,r,a){var o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r?[].concat(u(r),[s.token]):[s.token],c=i(o,"/predictors/".concat(n.name,"/predict")),t.next=4,s.api.post(c,{when:e,format_flag:a});case 4:return t.abrupt("return",t.sent.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()),o(this,"delete",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],a=i(r,"/predictors/".concat(n.name)),t.next=4,s.api.delete(a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"upload",function(){var t=r(regeneratorRuntime.mark((function t(e,n,r){var a,o,c,p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r?[].concat(u(r),[s.token]):[s.token],(o=new FormData).append("file",e),c={onUploadProgress:function(t){n&&n(Math.round(100*t.loaded/t.total))}},p=i(a,"/predictors/upload"),t.next=7,s.api.post(p,o,c);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()),o(this,"download",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],a=i(r,"/predictors/".concat(n.name,"/download")),t.next=4,s.api.get(a,{responseType:"blob"});case 4:return v(t.sent),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"getDownloadUrl",(function(){return"".concat(s.url,"/predictors/").concat(n.name,"/download")})),Object.assign(this,e)},k=function t(e){var n=this;a(this,t),o(this,"loaded",!1),o(this,"source_type","url"),o(this,"name",""),o(this,"source",""),o(this,"missed_files",!1),o(this,"created_at",null),o(this,"updated_at",null),o(this,"row_count",0),o(this,"columns",null),o(this,"data",null),o(this,"missedFileList",null),o(this,"load",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],a=i(r,"/datasources/".concat(n.name)),t.next=4,s.api.get(a);case 4:return Object.assign(n,t.sent.data),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"upload",function(){var t=r(regeneratorRuntime.mark((function t(e,r,a){var o,c,p,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.source_type="file",n.source=e.name,o=a?[].concat(u(a),[s.token]):[s.token],(c=new FormData).append("name",n.name),c.append("source_type",n.source_type),c.append("source",n.source),c.append("file",e),p={onUploadProgress:function(t){r&&r(Math.round(100*t.loaded/t.total))},timeout:6e5},f=i(o,"/datasources/".concat(n.name)),t.next=12,s.api.put(f,c,p);case 12:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()),o(this,"uploadFromUrl",function(){var t=r(regeneratorRuntime.mark((function t(e,r){var a,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.source_type="url",n.source=e,a={name:n.name,source_type:n.source_type,source:n.source},o=r?[].concat(u(r),[s.token]):[s.token],c=i(o,"/datasources/".concat(n.name)),t.next=7,s.api.put(c,a);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),o(this,"download",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.getDownloadUrl(),a=e?[].concat(u(e),[s.token]):[s.token],o=i(a,r),t.next=5,s.api.get(o,{responseType:"blob"});case 5:return v(t.sent,n.source),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"getDownloadUrl",(function(){return"url"===n.source_type?n.source:"".concat(s.url,"/datasources/").concat(n.name,"/download")})),o(this,"delete",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],a=i(r,"/datasources/".concat(n.name)),t.next=4,s.api.delete(a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"loadData",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],a=i(r,"/datasources/".concat(n.name,"/data")),t.next=4,s.api.get(a);case 4:return n.data=t.sent.data,t.abrupt("return",n.data);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"loadDataQuality",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],a=i(r,"/datasources/".concat(n.name,"/analyze")),t.prev=2,t.next=5,s.api.get(a);case 5:o={data_preparation:(c=t.sent).data.data_preparation,data_analysis_v2:c.data.data_analysis_v2,useable_input_columns:c.data.useable_input_columns,current_phase:c.data.current_phase,versionNative:c.data.version,status:c.data&&c.data.status},t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),Object.assign(n,{error:t.t0}),console.error(t.t0);case 13:return n.dataQuality=o,t.abrupt("return",o);case 15:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()),o(this,"loadMissedFileList",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],a=i(r,"/datasources/".concat(n.name,"/missed_files")),t.next=4,s.api.get(a);case 4:return n.missedFileList=t.sent.data,t.abrupt("return",n.missedFileList);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"uploadFile",function(){var t=r(regeneratorRuntime.mark((function t(e,r){var a,o,c,p,f,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.column,o=e.rowIndex,c=e.extension,p=e.file,(f=new FormData).append("file",p),f.append("extension",c),l=r?[].concat(u(r),[s.token]):[s.token],d=i(l,"/datasources/".concat(n.name,"/files/").concat(a,":").concat(o)),t.next=8,s.api.put(d,f);case 8:return t.abrupt("return",200===t.sent.status);case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),Object.assign(this,e)},w=function t(e){var n=this;a(this,t),o(this,"loaded",!1),o(this,"source_type","url"),o(this,"integration",[]),o(this,"load",function(){var t=r(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?[].concat(u(e),[s.token]):[s.token],t.prev=1,a=i(r,"config/all_integrations"),t.next=5,s.api.get(a);case 5:return Object.assign(n,t.sent),t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(1),Object.assign(n,{error:t.t0}),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()),o(this,"delete",function(){var t=r(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.api.delete("/config/integrations/".concat(e.db_name));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"check",function(){var t=r(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.api.get("/config/integrations/".concat(e.database_name,"/check"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o(this,"edit",function(){var t=r(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n?[].concat(u(n),[s.token]):[s.token],a=i(r,"/config/integrations/".concat(e.params.database_name)),t.next=4,s.api.post(a,e);case 4:return t.abrupt("return",t.sent.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),o(this,"create",function(){var t=r(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n?[].concat(u(n),[s.token]):[s.token],a=i(r,"/config/integrations/".concat(e.params.database_name)),t.next=4,s.api.put(a,e);case 4:return t.abrupt("return",t.sent.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),o(this,"newDataset",function(){var t=r(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n?[].concat(u(n),[s.token]):[s.token],t.prev=1,a=i(r,"/datasources/".concat(e.name)),t.next=5,s.api.put(a,e);case 5:return t.abrupt("return",t.sent);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),Object.assign(this,e)},y={connect:function(e,n){s.token.value=n.find((function(t){return"apikey"===t.key})).value,s.url=i([s.token],e),s.api=t.create({baseURL:e})},disconnect:function(){s.url=null,s.token={key:"apikey",value:null},s.api=null},ping:p,logs:f,dependencies:l,installDependencies:function(){var t=r(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i([s.token],"/config/install/".concat(e)),t.next=3,s.api.get(n);case 3:return t.abrupt("return",t.sent.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getEnvs:d,predictors:function(){var t=r(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e?[].concat(u(e),[s.token]):[s.token],r=i(n,"/predictors/"),t.next=4,s.api.get(r);case 4:return a=(t.sent.data||[]).map(m),t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),dataSources:function(){var t=r(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e?[].concat(u(e),[s.token]):[s.token],r=i(n,"/datasources/"),t.next=4,s.api.get(r);case 4:return a=(t.sent.data||[]).map(h),t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),DataSource:h,Predictor:m,DataBase:function(t){return new w(t)}};export default y;
