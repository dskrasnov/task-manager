(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{151:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),i=n(18),s=n.n(i),o=n(12),u=n(205),l=n(49),b=n(153),d=n(186),j=n(183),O=Object(j.a)((function(e){return{gridAndWrapper:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},alertList:{paddingTop:e.spacing(1),paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},taskPagination:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},appLoadingIndicator:{zIndex:e.zIndex.drawer+1,color:"#fff"},buttonLoadingIndicator:{position:"absolute",top:"50%",left:"50%",marginTop:-10,marginLeft:-10}}})),p=n(3),x=function(){var e=O();return Object(p.jsx)(b.a,{open:!0,className:e.appLoadingIndicator,children:Object(p.jsx)(d.a,{color:"inherit"})})},f=n(187),g=n(188),h=n(79),m=n(189),v="FETCH_TASKS",k="SET_TASKS",y="CREATE_TASK",S="EDIT_TASK",E="ADD_ERROR",w="REMOVE_ERROR",T="SET_TASK_LIST_STATE",D="SET_AUTHORIZATION_STATE",I="SET_DIALOG_OPEN",_="SET_DIALOG_BUSY",A="SET_DIALOG_FIELD_VALUE",C="SET_DIALOG_FIELD_ERROR",N="RESET_DIALOG_FIELD_ERROR",L="SET_DIALOG_GENERAL_ERROR",R="RESET_DIALOG_GENERAL_ERROR",F="RESET_DIALOG_STATE",G="LOGIN",P="LOGOUT",V="READ_AUTHORIZATION_DATA",W="READ_TASK_LIST_DATA",z="SHOW_NOTIFICATION",B="HIDE_NOTIFICATION",U=function(){return{type:P}},M=function(e,t){return{type:I,dialogName:e,payload:t}},H="https://uxcandy.com/~shapoval/test-task-backend/v2/",K="dskrasnov",q="ok",J="error",Z={NO_SORTING:"NO_SORTING",ID:"id",USERNAME:"username",EMAIL:"email",STATUS:"status"},Y={ASC:"asc",DESC:"desc"},Q="\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",X=1,$=2,ee="taskManage",te="login",ne="token",re="tokenExpires",ae="success",ce="info",ie={pagesTotal:0,currentPage:1,sortingField:Z.NO_SORTING,sortingDirection:Y.ASC,isInitialDataLoaded:!1},se=function(){var e=Object(o.c)((function(e){return e.authorizationState.isAuthorized})),t=e?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438",n=Object(o.b)(),r=Object(a.useCallback)((function(){n(e?U():M(te,!0))}),[e,n]);return Object(p.jsx)(f.a,{position:"static",children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(h.a,{variant:"h6",children:"\u0417\u0430\u0434\u0430\u0447\u0438"}),Object(p.jsx)("div",{style:{flexGrow:1}}),Object(p.jsx)(m.a,{color:"inherit",onClick:r,children:t})]})})},oe=n(192),ue=n(209),le=n(191),be=function(e){var t=e.error,n=t.id,r=t.text,a=e.onClose;return Object(p.jsxs)(ue.a,{severity:"error",variant:"filled",closeText:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClose:function(){return a(n)},children:[Object(p.jsx)(le.a,{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}),r]})},de=function(e){return{type:w,payload:e}},je=function(){var e=O(),t=Object(o.b)(),n=Object(a.useCallback)((function(e){return t(de(e))}),[t]),r=Object(o.c)((function(e){return e.errors}));return r.length?Object(p.jsx)("div",{className:e.alertList,children:Object(p.jsx)(oe.a,{container:!0,direction:"column",spacing:1,className:e.gridAndWrapper,children:r.map((function(e){return Object(p.jsx)(oe.a,{item:!0,children:Object(p.jsx)(be,{error:e,onClose:n})},e.id)}))})}):null},Oe=n(207),pe=n(214),xe=n(215),fe=n(190),ge=n(98),he=n.n(ge),me=n(99),ve=n.n(me),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return{type:v,params:e,isInitialDataLoading:t,isUnnecessaryForHistory:n}},ye=[{field:Z.NO_SORTING,label:"\u0411\u0435\u0437 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"},{field:Z.ID,label:"\u041f\u043e \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443"},{field:Z.USERNAME,label:"\u041f\u043e \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"},{field:Z.EMAIL,label:"\u041f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"},{field:Z.STATUS,label:"\u041f\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0443"}],Se=function(){var e=Object(o.c)((function(e){return e.taskListState.sortingField})),t=Object(o.c)((function(e){return e.taskListState.sortingDirection})),n=e!==Z.NO_SORTING,r=t===Y.ASC,c=r?"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e":"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",i=Object(o.b)(),s=Object(a.useCallback)((function(){return i(M(ee,!0))}),[i]),u=Object(a.useCallback)((function(e){var t=e.target.value;return i(ke({sortingField:t}))}),[i]),l=Object(a.useCallback)((function(){return i(ke({sortingDirection:r?Y.DESC:Y.ASC}))}),[i,r]);return Object(p.jsx)(g.a,{children:Object(p.jsxs)(oe.a,{container:!0,justify:"space-between",alignItems:"center",wrap:"nowrap",spacing:2,children:[Object(p.jsx)(oe.a,{item:!0,children:Object(p.jsx)(m.a,{variant:"contained",color:"secondary",onClick:s,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})}),Object(p.jsxs)(oe.a,{item:!0,zeroMinWidth:!0,container:!0,justify:"flex-end",alignItems:"center",wrap:"nowrap",children:[Object(p.jsx)(oe.a,{item:!0,zeroMinWidth:!0,children:Object(p.jsx)(Oe.a,{value:e,style:{maxWidth:"100%"},onChange:u,children:ye.map((function(e){return Object(p.jsx)(pe.a,{value:e.field,children:e.label},e.field)}))})}),n&&Object(p.jsx)(oe.a,{item:!0,children:Object(p.jsx)(xe.a,{title:c,children:Object(p.jsx)(fe.a,{onClick:l,children:r?Object(p.jsx)(he.a,{}):Object(p.jsx)(ve.a,{})})})})]})]})})},Ee=n(197),we=n(206),Te=n(198),De=n(199),Ie=n(100),_e=n.n(Ie),Ae=n(101),Ce=n.n(Ae),Ne=function(e,t){return{type:A,dialogName:e,payload:t}},Le=function(e){var t=e.id,n=e.username,r=e.email,c=e.text,i=e.isEdited,s=e.isDone,u=Object(o.c)((function(e){return e.authorizationState.isAuthorized})),l=Object(o.b)(),b=Object(a.useCallback)((function(){l(Ne(ee,{id:t,username:n,email:r,text:c,oldText:c,isEdited:i,isDone:s})),l(M(ee,!0))}),[l,t,n,r,c,i,s]);return Object(p.jsxs)(Ee.a,{style:{position:"relative"},children:[(i||s)&&Object(p.jsxs)(we.a,{style:{position:"absolute",top:2,right:2},children:[i&&Object(p.jsx)(xe.a,{title:"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430",children:Object(p.jsx)(_e.a,{fontSize:"small"})}),s&&Object(p.jsx)(xe.a,{title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430",children:Object(p.jsx)(Ce.a,{fontSize:"small"})})]}),Object(p.jsxs)(Te.a,{children:[Object(p.jsx)(h.a,{component:"span",children:Object(p.jsx)("b",{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c:"})}),Object(p.jsx)(h.a,{paragraph:!0,noWrap:!0,children:n}),Object(p.jsx)(h.a,{component:"span",children:Object(p.jsx)("b",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430:"})}),Object(p.jsx)(h.a,{paragraph:!0,noWrap:!0,children:r}),Object(p.jsx)(h.a,{component:"span",children:Object(p.jsx)("b",{children:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438:"})}),Object(p.jsx)(h.a,{paragraph:!0,children:c})]}),u&&Object(p.jsx)(De.a,{children:Object(p.jsx)(m.a,{size:"small",color:"primary",onClick:b,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})},Re=function(){var e=O(),t=Object(o.c)((function(e){return e.tasks}));return Object(p.jsx)("div",{className:e.gridAndWrapper,children:Object(p.jsx)(oe.a,{container:!0,spacing:2,className:e.gridAndWrapper,children:t.length?t.map((function(e){return Object(p.jsx)(oe.a,{item:!0,xs:12,md:4,children:Object(p.jsx)(Le,{id:e.id,username:e.username,email:e.email,text:e.text,isEdited:e.isEdited,isDone:e.isDone})},e.id)})):Object(p.jsx)(oe.a,{item:!0,xs:12,children:Object(p.jsx)(h.a,{align:"center",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447 \u043f\u0443\u0441\u0442."})})})})},Fe=n(208),Ge=function(){var e=O(),t=Object(o.c)((function(e){return e.taskListState.pagesTotal})),n=Object(o.c)((function(e){return e.taskListState.currentPage})),r=Object(o.b)();if(t<2)return null;return Object(p.jsx)(oe.a,{container:!0,alignItems:"center",justify:"center",className:e.taskPagination,children:Object(p.jsx)(oe.a,{item:!0,children:Object(p.jsx)(Fe.a,{variant:"outlined",shape:"rounded",count:t,page:n,onChange:function(e,t){t!==n&&r(ke({currentPage:t}))}})})})},Pe=n(212),Ve=function(){return{type:B}},We=function(){var e=Object(o.c)((function(e){return e.notification})),t=e.isOpen,n=e.type,r=e.text,c=Object(o.b)(),i=Object(a.useCallback)((function(e,t){"clickaway"!==t&&c(Ve())}),[c]);return Object(p.jsx)(Pe.a,{open:t,autoHideDuration:5e3,onClose:i,children:Object(p.jsx)(ue.a,{severity:n,variant:"filled",elevation:4,onClose:i,children:r})})},ze=n(21),Be=n(7),Ue=n(200),Me=n(201),He=n(202),Ke=n(210),qe=n(203),Je=n(211),Ze=n(204),Ye=function(e){return{type:F,dialogName:e}},Qe=function(e,t){return{type:C,dialogName:e,payload:t}},Xe=function(e){return{type:R,dialogName:e}},$e=function(e,t){return{type:N,dialogName:e,payload:t}},et=function(e,t){var n=Object(o.c)((function(t){return t.dialogState[e].isOpen})),r=Object(o.c)((function(t){return t.dialogState[e].isBusy})),c=Object(o.c)((function(t){return t.dialogState[e].generalError})),i=Object(o.b)(),s=Object(a.useCallback)((function(){r||i(M(e,!1))}),[r,i,e]),u=Object(a.useCallback)((function(){return i(Ye(e))}),[i,e]),l=Object(a.useCallback)((function(t){var n=t.target,r=n.name,a=n.value;i(Xe(e)),i($e(e,r)),i(Ne(e,Object(ze.a)({},r,a)))}),[i,e]),b=Object(a.useCallback)((function(n){var r=t(Object(ze.a)({},n.target.name,n.target.value));i(Qe(e,r))}),[e,i,t]);return{isOpen:n,isBusy:r,generalError:c,close:s,resetState:u,changeField:l,validateField:b}},tt=n(56),nt=function(e){var t=e.busy,n=e.children,r=e.color,a=e.disabled,c=Object(tt.a)(e,["busy","children","color","disabled"]),i=O(),s=a||t;return Object(p.jsxs)(m.a,Object(Be.a)(Object(Be.a)({color:r,disabled:s},c),{},{children:[n,t&&Object(p.jsx)(d.a,{size:20,color:r,className:i.buttonLoadingIndicator})]}))},rt=function(){return{type:y}},at=function(){return{type:S}},ct=function(){var e=Object(a.useCallback)((function(e){return Object(Be.a)(Object(Be.a)(Object(Be.a)(Object(Be.a)({},void 0!==e.username&&0===e.username.length&&{username:Q}),void 0!==e.text&&0===e.text.length&&{text:Q}),void 0!==e.email&&!/.+@.+\..+/.test(e.email)&&{email:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0430\u0434\u0440\u0435\u0441\u0430"}),void 0!==e.email&&0===e.email.length&&{email:Q})}),[]),t=et(ee,e),n=t.isOpen,r=t.isBusy,c=t.generalError,i=t.close,s=t.resetState,u=t.changeField,l=t.validateField,b=!!Object(o.c)((function(e){return e.dialogState[ee].fieldValue.id})),d=b?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",j=b?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",O=Object(o.c)((function(e){return e.dialogState[ee].fieldValue.username})),x=Object(o.c)((function(e){return e.dialogState[ee].fieldValue.email})),f=Object(o.c)((function(e){return e.dialogState[ee].fieldValue.text})),g=Object(o.c)((function(e){return e.dialogState[ee].fieldValue.isDone})),h=Object(o.c)((function(e){return e.dialogState[ee].fieldError.username})),v=Object(o.c)((function(e){return e.dialogState[ee].fieldError.email})),k=Object(o.c)((function(e){return e.dialogState[ee].fieldError.text})),y=!!h,S=!!v,E=!!k,w=y||S||E,T=r||b,D=Object(o.b)(),I=Object(a.useCallback)((function(e){var t=e.target,n=t.name,r=t.checked;D(Xe(ee)),D($e(ee,n)),D(Ne(ee,Object(ze.a)({},n,r)))}),[D]),_=Object(a.useCallback)((function(t){t.preventDefault(),D(Xe(ee));var n=e(Object(Be.a)(Object(Be.a)(Object(Be.a)({},!b&&{username:O}),!b&&{email:x}),{},{text:f}));(D(Qe(ee,n)),n.username||n.email||n.text)||D((b?at:rt)())}),[D,e,b,O,x,f]);return Object(p.jsxs)(Ue.a,{open:n,onClose:i,onExited:s,children:[Object(p.jsx)(Me.a,{children:d}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:_,children:[Object(p.jsxs)(He.a,{children:[Object(p.jsx)(Ke.a,{required:!0,fullWidth:!0,margin:"normal",label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",name:"username",value:O,error:y,helperText:h,disabled:T,onChange:u,onBlur:l}),Object(p.jsx)(Ke.a,{required:!0,fullWidth:!0,margin:"normal",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",name:"email",value:x,error:S,helperText:v,disabled:T,onChange:u,onBlur:l}),Object(p.jsx)(Ke.a,{required:!0,fullWidth:!0,multiline:!0,rows:4,margin:"normal",label:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",name:"text",value:f,error:E,helperText:k,disabled:r,onChange:u,onBlur:l}),b&&Object(p.jsx)(qe.a,{control:Object(p.jsx)(Je.a,{color:"primary",name:"isDone",checked:g,onChange:I}),label:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430"}),c&&Object(p.jsxs)(ue.a,{severity:"error",variant:"filled",children:[Object(p.jsx)(le.a,{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}),c]})]}),Object(p.jsxs)(Ze.a,{children:[Object(p.jsx)(m.a,{color:"primary",disabled:r,onClick:i,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(p.jsx)(nt,{color:"primary",disabled:w,type:"submit",busy:r,children:j})]})]})]})},it=function(){return{type:G}},st=function(){var e=Object(a.useCallback)((function(e){return Object(Be.a)(Object(Be.a)({},void 0!==e.username&&0===e.username.length&&{username:Q}),void 0!==e.password&&0===e.password.length&&{password:Q})}),[]),t=et(te,e),n=t.isOpen,r=t.isBusy,c=t.generalError,i=t.close,s=t.resetState,u=t.changeField,l=t.validateField,b=Object(o.c)((function(e){return e.dialogState[te].fieldValue.username})),d=Object(o.c)((function(e){return e.dialogState[te].fieldValue.password})),j=Object(o.c)((function(e){return e.dialogState[te].fieldError.username})),O=Object(o.c)((function(e){return e.dialogState[te].fieldError.password})),x=!!j,f=!!O,g=x||f,h=Object(o.b)(),v=Object(a.useCallback)((function(t){t.preventDefault(),h(Xe(te));var n=e({username:b,password:d});h(Qe(te,n)),n.username||n.password||h(it())}),[e,b,d,h]);return Object(p.jsxs)(Ue.a,{open:n,onClose:i,onExited:s,children:[Object(p.jsx)(Me.a,{children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:v,children:[Object(p.jsxs)(He.a,{children:[Object(p.jsx)(Ke.a,{required:!0,fullWidth:!0,margin:"normal",label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",name:"username",value:b,error:x,helperText:j,disabled:r,onChange:u,onBlur:l}),Object(p.jsx)(Ke.a,{required:!0,fullWidth:!0,margin:"normal",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",value:d,error:f,helperText:O,disabled:r,onChange:u,onBlur:l}),c&&Object(p.jsxs)(ue.a,{severity:"error",variant:"filled",children:[Object(p.jsx)(le.a,{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}),c]})]}),Object(p.jsxs)(Ze.a,{children:[Object(p.jsx)(m.a,{color:"primary",disabled:r,onClick:i,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(p.jsx)(nt,{color:"primary",disabled:g,type:"submit",busy:r,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})},ot=function(){return{type:V}},ut=function(){return{type:W}},lt=function(){var e=Object(o.c)((function(e){return e.taskListState.isInitialDataLoaded})),t=Object(o.b)();return Object(a.useEffect)((function(){Object(l.b)().listen((function(e){e.action===l.a.Pop&&t(ut())})),t(ut()),t(ot())}),[t]),Object(p.jsxs)(p.Fragment,{children:[!e&&Object(p.jsx)(x,{}),e&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(se,{}),Object(p.jsx)(je,{}),Object(p.jsx)(Se,{}),Object(p.jsx)(Re,{}),Object(p.jsx)(Ge,{}),Object(p.jsx)(We,{}),Object(p.jsx)(ct,{}),Object(p.jsx)(st,{})]})]})},bt=n(42),dt=n(102),jt=n(104),Ot=n(55),pt=[],xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case k:return Object(Ot.a)(r);default:return e}},ft=[],gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case E:return[].concat(Object(Ot.a)(e),[{id:Date.now().toString(36)+Math.random().toString(36).substr(2),text:r}]);case w:return e.filter((function(e){return e.id!==r}));default:return e}},ht={isOpen:!1,type:"",text:""},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.notificationType,a=t.text;switch(n){case z:return{isOpen:!0,type:r,text:a};case B:return Object(Be.a)(Object(Be.a)({},e),{},{isOpen:!1});default:return e}},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case T:return Object(Be.a)(Object(Be.a)({},e),r);default:return e}},kt=(r={},Object(ze.a)(r,ee,{fieldValue:{id:null,username:"",email:"",text:"",oldText:null,isEdited:!1,isDone:!1},fieldError:{username:null,email:null,text:null},generalError:null,isOpen:!1,isBusy:!1}),Object(ze.a)(r,te,{fieldValue:{username:"",password:""},fieldError:{username:null,password:null},generalError:null,isOpen:!1,isBusy:!1}),r),yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.dialogName,a=t.payload;switch(n){case I:return Object(Be.a)(Object(Be.a)({},e),{},Object(ze.a)({},r,Object(Be.a)(Object(Be.a)({},e[r]),{},{isOpen:a})));case _:return Object(Be.a)(Object(Be.a)({},e),{},Object(ze.a)({},r,Object(Be.a)(Object(Be.a)({},e[r]),{},{isBusy:a})));case A:return Object(Be.a)(Object(Be.a)({},e),{},Object(ze.a)({},r,Object(Be.a)(Object(Be.a)({},e[r]),{},{fieldValue:Object(Be.a)(Object(Be.a)({},e[r].fieldValue),a)})));case C:return Object(Be.a)(Object(Be.a)({},e),{},Object(ze.a)({},r,Object(Be.a)(Object(Be.a)({},e[r]),{},{fieldError:Object(Be.a)(Object(Be.a)({},e[r].fieldError),a)})));case N:return Object(Be.a)(Object(Be.a)({},e),{},Object(ze.a)({},r,Object(Be.a)(Object(Be.a)({},e[r]),{},{fieldError:Object(Be.a)(Object(Be.a)({},e[r].fieldError),{},Object(ze.a)({},a,kt[r].fieldError[a]))})));case F:return Object(Be.a)(Object(Be.a)({},e),{},Object(ze.a)({},r,kt[r]));case L:return Object(Be.a)(Object(Be.a)({},e),{},Object(ze.a)({},r,Object(Be.a)(Object(Be.a)({},e[r]),{},{generalError:a})));case R:return Object(Be.a)(Object(Be.a)({},e),{},Object(ze.a)({},r,Object(Be.a)(Object(Be.a)({},e[r]),{},{generalError:kt[r].generalError})));default:return e}},St={isAuthorized:!1},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case D:return Object(Be.a)({},r);case P:return St;default:return e}},wt=Object(bt.combineReducers)({tasks:xt,errors:gt,notification:mt,taskListState:vt,dialogState:yt,authorizationState:Et}),Tt=n(13),Dt=n.n(Tt),It=n(8),_t=n(40),At=n.n(_t),Ct=function(e){return{type:E,payload:e}},Nt=function(e,t){return{type:T,payload:e,isUnnecessaryForHistory:t}},Lt=function(e){return{type:k,payload:e}},Rt=function(e){var t=e.status,n=Object(tt.a)(e,["status"]),r=parseInt(t,2),a=!!(r&X),c=!!(r&$);return Object(Be.a)(Object(Be.a)({},n),{},{isEdited:a,isDone:c})},Ft=Dt.a.mark(Pt),Gt=Dt.a.mark(Vt);function Pt(e){var t,n,r,a,c,i,s,o,u,l,b,d,j,O,p,x,f;return Dt.a.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:return t=e.params,n=t.currentPage,r=t.sortingField,a=t.sortingDirection,c=e.isInitialDataLoading,i=e.isUnnecessaryForHistory,g.prev=1,g.next=4,Object(It.e)();case 4:return s=g.sent,o=s.taskListState,u=Object(Be.a)(Object(Be.a)(Object(Be.a)(Object(Be.a)({},o),n&&{currentPage:n}),r&&{sortingField:r}),a&&{sortingDirection:a}),l=u.currentPage?"&page=".concat(u.currentPage):"",b=u.sortingField!==Z.NO_SORTING?"&sort_field=".concat(u.sortingField):"",d=u.sortingField!==Z.NO_SORTING?"&sort_direction=".concat(u.sortingDirection):"",g.next=12,Object(It.b)(At.a.get,"".concat(H,"?developer=").concat(K).concat(l).concat(b).concat(d));case 12:j=g.sent,O=j.data,p=O.message,x=O.status,g.t0=x,g.next=g.t0===q?19:g.t0===J?29:32;break;case 19:if(f=Math.ceil(p.total_task_count/3),!(n&&n>1&&n>f)){g.next=24;break}return g.next=23,Object(It.d)(ke(Object(Be.a)(Object(Be.a)({currentPage:f||1},r&&{sortingField:r}),a&&{sortingDirection:a}),c,i));case 23:return g.abrupt("return");case 24:return g.next=26,Object(It.d)(Nt(Object(Be.a)(Object(Be.a)(Object(Be.a)({pagesTotal:f},n&&{currentPage:n}),r&&{sortingField:r}),a&&{sortingDirection:a}),i));case 26:return g.next=28,Object(It.d)(Lt(p.tasks.map(Rt)));case 28:return g.abrupt("break",32);case 29:return g.next=31,Object(It.d)(Ct(p));case 31:return g.abrupt("break",32);case 32:g.next=38;break;case 34:return g.prev=34,g.t1=g.catch(1),g.next=38,Object(It.d)(Ct("\u041f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0437\u0430\u0434\u0430\u0447 \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a."));case 38:if(!c){g.next=41;break}return g.next=41,Object(It.d)(Nt({isInitialDataLoaded:!0}));case 41:case"end":return g.stop()}}),Ft,null,[[1,34]])}function Vt(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.g)(v,Pt);case 2:case"end":return e.stop()}}),Gt)}var Wt=Vt,zt=function(e,t){return{type:_,dialogName:e,payload:t}},Bt=function(e,t){return{type:L,dialogName:e,payload:t}},Ut=function(e,t){return{type:z,notificationType:e,text:t}},Mt=Dt.a.mark(Kt),Ht=Dt.a.mark(qt);function Kt(){var e,t,n,r,a,c,i,s,o,u,l,b;return Dt.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,Object(It.d)(zt(ee,!0));case 3:return d.next=5,Object(It.e)();case 5:return e=d.sent,t=e.dialogState[ee].fieldValue,n=t.username,r=t.email,a=t.text,(c=new FormData).append("username",n),c.append("email",r),c.append("text",a),d.next=16,Object(It.b)(At.a.post,"".concat(H,"create?developer=").concat(K),c);case 16:i=d.sent,s=i.data,o=s.message,u=s.status,d.t0=u,d.next=d.t0===q?23:d.t0===J?34:39;break;case 23:return d.next=25,Object(It.e)();case 25:return l=d.sent,b=l.tasks,d.next=29,Object(It.d)(Lt([Rt(o)].concat(Object(Ot.a)(b.slice(0,-1)))));case 29:return d.next=31,Object(It.d)(M(ee,!1));case 31:return d.next=33,Object(It.d)(Ut(ae,"\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0430!"));case 33:return d.abrupt("break",39);case 34:return d.next=36,Object(It.d)(Qe(ee,o));case 36:return d.next=38,Object(It.d)(zt(ee,!1));case 38:return d.abrupt("break",39);case 39:d.next=47;break;case 41:return d.prev=41,d.t1=d.catch(0),d.next=45,Object(It.d)(Bt(ee,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a."));case 45:return d.next=47,Object(It.d)(zt(ee,!1));case 47:case"end":return d.stop()}}),Mt,null,[[0,41]])}function qt(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.f)(y,Kt);case 2:case"end":return e.stop()}}),Ht)}var Jt=qt,Zt=n(34),Yt=n.n(Zt),Qt=Dt.a.mark($t),Xt=Dt.a.mark(en);function $t(){var e,t,n,r,a,c,i,s,o,u;return Dt.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,Object(It.d)(zt(te,!0));case 3:return l.next=5,Object(It.e)();case 5:return e=l.sent,t=e.dialogState[te].fieldValue,n=t.username,r=t.password,(a=new FormData).append("username",n),a.append("password",r),l.next=14,Object(It.b)(At.a.post,"".concat(H,"login?developer=").concat(K),a);case 14:c=l.sent,i=c.data,s=i.message,o=i.status,l.t0=o,l.next=l.t0===q?21:l.t0===J?33:38;break;case 21:return u=new Date((new Date).getTime()+864e5),l.next=24,Object(It.b)(Yt.a.set,ne,s.token,{expires:u,sameSite:"strict"});case 24:return l.next=26,Object(It.b)(Yt.a.set,re,u,{expires:u,sameSite:"strict"});case 26:return l.next=28,Object(It.d)(ot());case 28:return l.next=30,Object(It.d)(M(te,!1));case 30:return l.next=32,Object(It.d)(Ut(ce,"\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443."));case 32:return l.abrupt("break",38);case 33:return l.next=35,Object(It.d)(Qe(te,s));case 35:return l.next=37,Object(It.d)(zt(te,!1));case 37:return l.abrupt("break",38);case 38:l.next=46;break;case 40:return l.prev=40,l.t1=l.catch(0),l.next=44,Object(It.d)(Bt(te,"\u041f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a."));case 44:return l.next=46,Object(It.d)(zt(te,!1));case 46:case"end":return l.stop()}}),Qt,null,[[0,40]])}function en(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.f)(G,$t);case 2:case"end":return e.stop()}}),Xt)}var tn=en,nn=Dt.a.mark(an),rn=Dt.a.mark(cn);function an(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.b)(Yt.a.remove,ne);case 2:return e.next=4,Object(It.b)(Yt.a.remove,re);case 4:return e.next=6,Object(It.d)(Ut(ce,"\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."));case 6:case"end":return e.stop()}}),nn)}function cn(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.f)(P,an);case 2:case"end":return e.stop()}}),rn)}var sn=cn,on=function(e){return{type:D,payload:e}},un=Dt.a.mark(dn),ln=Dt.a.mark(jn),bn=function(e){return new Date(e).getTime()-(new Date).getTime()};function dn(){var e,t;return Dt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(It.b)(Yt.a.get,ne);case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,Object(It.b)(Yt.a.get,re);case 7:return e=n.sent,n.next=10,Object(It.d)(on({isAuthorized:!0}));case 10:return n.next=12,Object(It.b)(bn,e);case 12:return t=n.sent,n.next=15,Object(It.c)(t);case 15:return n.next=17,Object(It.d)(U());case 17:case"end":return n.stop()}}),un)}function jn(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.g)(V,dn);case 2:case"end":return e.stop()}}),ln)}var On=jn,pn=n(103),xn=Dt.a.mark(hn),fn=Dt.a.mark(mn),gn=function(e){return e?e.split("&").reduce((function(e,t){var n=t.split("="),r=Object(pn.a)(n,2),a=r[0],c=r[1];return Object(Be.a)(Object(Be.a)({},e),{},Object(ze.a)({},a,c))}),{}):{}};function hn(){var e,t,n,r,a,c,i,s,o,u,b,d,j,O,p;return Dt.a.wrap((function(x){for(;;)switch(x.prev=x.next){case 0:return e=Object(l.b)(),x.next=3,Object(It.b)(gn,e.location.search.substr(1));case 3:return t=x.sent,n=t.page,r=t.sort_field,a=t.sort_direction,c=parseInt(n,10),i=!Number.isNaN(c)&&c>0,s=Object.values(Z).includes(r),o=Object.values(Y).includes(a),x.next=13,Object(It.e)();case 13:return u=x.sent,b=u.taskListState.isInitialDataLoaded,d=!b,j=ie.currentPage,O=ie.sortingField,p=ie.sortingDirection,x.next=19,Object(It.d)(ke(Object(Be.a)(Object(Be.a)(Object(Be.a)(Object(Be.a)({},ie),i?{currentPage:c}:{currentPage:j}),s?{sortingField:r}:{sortingField:O}),o?{sortingDirection:a}:{sortingDirection:p}),d,!0));case 19:case"end":return x.stop()}}),xn)}function mn(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.f)(W,hn);case 2:case"end":return e.stop()}}),fn)}var vn=mn,kn=Dt.a.mark(En),yn=Dt.a.mark(wn),Sn=function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")};function En(e){var t,n,r,a,c,i,s,o,u,b;return Dt.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:if(t=e.payload,n=t.currentPage,r=t.sortingField,a=t.sortingDirection,!e.isUnnecessaryForHistory&&(n||r||a)){d.next=3;break}return d.abrupt("return");case 3:return c=Object(l.b)(),d.next=6,Object(It.e)();case 6:return i=d.sent,s=i.taskListState,o=r||s.sortingField,u=o===Z.NO_SORTING,b=Sn(Object(Be.a)(Object(Be.a)({page:n||s.currentPage},!u&&{sort_field:o}),!u&&{sort_direction:a||s.sortingDirection})),d.next=13,Object(It.b)(c.push,"?".concat(b));case 13:case"end":return d.stop()}}),kn)}function wn(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.f)(T,En);case 2:case"end":return e.stop()}}),yn)}var Tn=wn,Dn=Dt.a.mark(_n),In=Dt.a.mark(An);function _n(){var e,t,n,r,a,c,i,s,o,u,l,b,d,j,O,p,x,f;return Dt.a.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,g.next=3,Object(It.d)(zt(ee,!0));case 3:return g.next=5,Object(It.b)(Yt.a.get,ne);case 5:if(e=g.sent){g.next=14;break}return g.next=9,Object(It.d)(U());case 9:return g.next=11,Object(It.d)(Bt(ee,"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u043f\u0440\u0430\u0432 \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438. \u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443."));case 11:return g.next=13,Object(It.d)(zt(ee,!1));case 13:return g.abrupt("return");case 14:return g.next=16,Object(It.e)();case 16:return t=g.sent,n=t.dialogState[ee].fieldValue,r=n.id,a=n.text,c=n.oldText,i=n.isEdited,s=n.isDone,o=parseInt(((s&&$)^((i||a!==c)&&X)).toString(2),10),(u=new FormData).append("text",a),u.append("status",o),u.append("token",e),g.next=31,Object(It.b)(At.a.post,"".concat(H,"edit/").concat(r,"?developer=").concat(K),u);case 31:l=g.sent,b=l.data,d=b.message,j=b.status,g.t0=j,g.next=g.t0===q?38:g.t0===J?49:58;break;case 38:return g.next=40,Object(It.e)();case 40:return O=g.sent,p=O.tasks,g.next=44,Object(It.d)(Lt(p.map((function(e){return e.id===r?Object(Be.a)(Object(Be.a)({},e),{},{text:a,status:o,isEdited:i,isDone:s}):e}))));case 44:return g.next=46,Object(It.d)(M(ee,!1));case 46:return g.next=48,Object(It.d)(Ut(ae,"\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430!"));case 48:return g.abrupt("break",58);case 49:if(x=d.token,f=Object(tt.a)(d,["token"]),!x){g.next=53;break}return g.next=53,Object(It.d)(Bt(ee,x));case 53:return g.next=55,Object(It.d)(Qe(ee,f));case 55:return g.next=57,Object(It.d)(zt(ee,!1));case 57:return g.abrupt("break",58);case 58:g.next=66;break;case 60:return g.prev=60,g.t1=g.catch(0),g.next=64,Object(It.d)(Bt(ee,"\u041f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a."));case 64:return g.next=66,Object(It.d)(zt(ee,!1));case 66:case"end":return g.stop()}}),Dn,null,[[0,60]])}function An(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.f)(S,_n);case 2:case"end":return e.stop()}}),In)}var Cn=An,Nn=Dt.a.mark(Ln);function Ln(){return Dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.a)([Wt(),Jt(),tn(),sn(),On(),vn(),Tn(),Cn()]);case 2:case"end":return e.stop()}}),Nn)}var Rn=Ln,Fn=Object(dt.composeWithDevTools)({trace:!0}),Gn=Object(jt.a)(),Pn=Object(bt.createStore)(wt,Fn(Object(bt.applyMiddleware)(Gn)));Gn.run(Rn);var Vn=Pn;s.a.render(Object(p.jsxs)(c.a.StrictMode,{children:[Object(p.jsx)(u.a,{}),Object(p.jsx)(o.a,{store:Vn,children:Object(p.jsx)(lt,{})})]}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.a3eff419.chunk.js.map