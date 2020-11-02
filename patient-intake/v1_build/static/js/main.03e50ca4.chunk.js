(this["webpackJsonppatient-intake"]=this["webpackJsonppatient-intake"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,a){},33:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(31),r=a.n(c),i=a(7),m=(a(38),a(39),a(1)),o=a(14),s=a.n(o),h=a(8),u=a(9),p=a(11),d=a(10),b=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(i.b,{className:"btn btn-primary",to:"".concat(this.props.link)},"".concat(this.props.label)))}}]),a}(l.a.Component),f=a(17),E=a.n(f),v=(a(30),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"homepage"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"})),l.a.createElement("br",null),l.a.createElement("h1",null,"Welcome to Patient Check-In"),l.a.createElement(b,{label:"Begin Check In >>",link:"/patient-info"}),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(l.a.Component)),N=Object(m.f)(v),g=a(12),y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault(),s()({method:"post",headers:{"content-type":"application/json"},data:n.state}).then((function(e){n.setState({mailSent:e.data.sent})})).catch((function(e){return n.setState({error:e.message})}))},n.state={patient:{fname:"",lname:"",midname:"",email:"",city:"",state:"",zip:""}},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleNext=n.handleNext.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=Object.assign({},this.state.patient),a=e.target,n="checkbox"===a.type?a.checked:a.value;t[a.name]=n,this.setState({patient:t})}},{key:"handleNext",value:function(e){e.preventDefault();this.state.patient;this.props.history.push({pathname:"/review-page",state:this.state})}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("h1",null,"Patient Information"),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"col-form-label"},"First Name:"),l.a.createElement("input",{type:"text",className:"form-control",name:"fname",placeholder:"First Name",value:this.state.fname,onChange:this.handleChange})),l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"col-form-label"},"Middle Name/Initial (optional):"),l.a.createElement("input",{type:"text",className:"form-control",name:"midname",placeholder:"Middle Name",value:this.state.midname,onChange:this.handleChange})),l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"col-form-label"},"Last Name:"),l.a.createElement("input",{type:"text",className:"form-control",name:"lname",placeholder:"Last Name",value:this.state.lname,onChange:this.handleChange}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-6 mb-3"},l.a.createElement("label",null,"City"),l.a.createElement("input",{type:"text",className:"form-control",name:"city",placeholder:"City",value:this.state.city,onChange:this.handleChange})),l.a.createElement("div",{className:"col-md-3 mb-3"},l.a.createElement("label",null,"State"),l.a.createElement("input",{type:"text",className:"form-control",name:"state",placeholder:"State",value:this.state.state,onChange:this.handleChange})),l.a.createElement("div",{className:"col-md-3 mb-3"},l.a.createElement("label",null,"Zip"),l.a.createElement("input",{type:"text",className:"form-control",name:"zip",placeholder:"Zip",value:this.state.zip,onChange:this.handleChange}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"col-form-label"},"Email Address:"),l.a.createElement("input",{type:"text",className:"form-control",name:"email",placeholder:"me@example.com",value:this.state.email,onChange:this.handleChange}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Next >>",onClick:function(t){return e.handleNext(t)}})))}}]),a}(l.a.Component),j=Object(m.f)(y),O=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleNext=n.handleNext.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props?this.props.location.state:Object.assign({});this.setState({patient:Object.assign({},e.patient)})}},{key:"handleChange",value:function(e){var t=Object.assign({},this.state.patient),a=e.target,n="checkbox"===a.type?a.checked:a.value;t[a.name]=n,this.setState({patient:t})}},{key:"handleNext",value:function(e){e.preventDefault();this.state.patient;this.props.history.push({pathname:"/review-page",state:this.state})}},{key:"render",value:function(){return l.a.createElement("div",null,"Blah",l.a.createElement("br",null),l.a.createElement("br",null),"Now for Emergency Contact information")}}]),a}(l.a.Component),C=Object(m.f)(O),k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={patient:""},n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props?this.props.location.state:Object.assign({});this.setState({patient:Object.assign({},e.patient)})}},{key:"handleSubmit",value:function(e){e.preventDefault();this.state.patient;this.props.history.push({pathname:"/emergency-contact",state:this.state})}},{key:"render",value:function(){var e=this,t=this.state.patient,a=t.fname+" "+t.lname;return l.a.createElement("form",null,l.a.createElement("h4",null,"Final Review Page of Patient Information"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{for:"staticEmail",className:"col-sm-2 col-form-label"},"Patient's Name: "),t.fname&&l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",readonly:!0,className:"form-control-plaintext",id:"staticEmail",value:a}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{for:"staticEmail",className:"col-sm-2 col-form-label"},"Email: "),t.email&&l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",readonly:!0,className:"form-control-plaintext",id:"staticEmail",value:t.email}))),l.a.createElement("br",null),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Submit",onClick:function(t){return e.handleSubmit(t)}})))}}]),a}(l.a.Component),x=Object(m.f)(k);function w(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/dashboard",render:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Dashboard"),l.a.createElement(i.b,{to:"/",id:"click-me"},"Home"))}}),l.a.createElement(m.a,{exact:!0,path:"/patient-info",component:Object(m.f)(j)}),l.a.createElement(m.a,{exact:!0,path:"/emergency-contact",component:Object(m.f)(C)}),l.a.createElement(m.a,{exact:!0,path:"/review-page",component:Object(m.f)(x)}),l.a.createElement(m.a,{exact:!0,path:"/",component:N})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.03e50ca4.chunk.js.map