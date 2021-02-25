(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(11),c=n.n(s),i=(n(16),n(17),n(2)),o=n.n(i),l=n(8),u=n(7),d=n(3),b=n(4),j=n(6),h=n(5),p=(n(9),n(0)),f=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={name:"",address:"",email:"",phone:""},a}return Object(b.a)(n,[{key:"handleChange",value:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(Object(l.a)({},t.target.id,t.target.textContent));case 2:return e.next=4,console.log(t.target.textContent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"personal-info-container",children:[Object(p.jsx)("span",{className:"badge name",id:"name","data-placeholder":"Full Name",onKeyPress:function(t){return e.handleChange(t)},contentEditable:"true"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"address badge",id:"address","data-placeholder":"Full Address",onKeyPress:function(t){return e.handleChange(t)},contentEditable:"true"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"phone sub-info badge",id:"email","data-placeholder":"Phone Number",onKeyPress:function(t){return e.handleChange(t)},contentEditable:"true"}),Object(p.jsx)("span",{className:"email sub-info badge",id:"phone","data-placeholder":"Email Address",onKeyPress:function(t){return e.handleChange(t)},contentEditable:"true"})]})}}]),n}(a.Component),x=function(e){return Object(p.jsxs)("div",{className:"education-container",id:e.userID,children:[Object(p.jsx)("h3",{className:"main-title",children:e.title}),Object(p.jsx)("pre",{className:"underline",children:"_______________________________________________________________________________"})]})},O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={university:"",major:"",dateStart:"",dateEnd:""},a}return Object(b.a)(n,[{key:"handleChange",value:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(Object(l.a)({},t.target.id,t.target.textContent));case 2:return e.next=4,console.log(t.target.textContent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"sub-heading-container",children:[Object(p.jsx)("span",{className:"sub-heading badge",id:"university","data-placeholder":"Educational Institution",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)}}),Object(p.jsx)("span",{id:"dateEnd",className:"sub-heading-date badge","data-placeholder":"End M Y",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)}}),Object(p.jsx)("span",{className:"date-dash badge",children:"-"}),Object(p.jsx)("span",{id:"dateStart",className:"sub-heading-date badge","data-placeholder":"Start M Y",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)}})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"sub-heading-container",id:"major-container",children:Object(p.jsx)("span",{className:"sub-heading-descriptor badge",id:"major","data-placeholder":"Field of study / major",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)}})}),Object(p.jsx)("br",{})]})}}]),n}(a.Component),g=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={educationCount:1,educations:[Object(p.jsx)(O,{},"0")]},a}return Object(b.a)(n,[{key:"addEducation",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("clicked"),e.next=3,this.setState((function(e){return{educations:e.educations.concat(Object(p.jsx)(O,{},e.educations.length))}}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteEducation",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.educations,e.next=3,console.log(t);case 3:return e.next=5,t.pop();case 5:return e.next=7,this.setState((function(e){return{educations:t}}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"education-container",children:[Object(p.jsx)(x,{title:"Education"}),this.state.educations.map((function(e,t){return Object(p.jsx)(O,{},t)})),Object(p.jsx)("button",{className:"add-button bottom-button",onClick:function(){return e.addEducation()},children:"Add Education"}),Object(p.jsx)("button",{className:"delete-Button bottom-button",onClick:function(){return e.deleteEducation()},children:"Delete Education"})]})}}]),n}(a.Component),m=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={company:"",dateStart:"",dateEnd:"",position:"",location:"",responsibilities:""},a}return Object(b.a)(n,[{key:"createFirstBullet",value:function(e){""==e.target.value&&"responsibilities"==e.target.id&&(e.target.value+="\u2022 ")}},{key:"handleChange",value:function(e){if(e.target.blur(),"Enter"==e.key&&"responsibilities"==e.target.id){e.preventDefault(),e.target.focus();console.log("it detected"),e.target.value+="\n".concat("\u2022"," ")}else e.target.focus(),this.setState(Object(l.a)({},e.target.id,e.target.textContent))}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"sub-heading-container",children:[Object(p.jsx)("span",{className:"sub-heading badge",id:"company","data-placeholder":"Place of Employment",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)}}),Object(p.jsx)("span",{id:"dateEnd",className:"sub-heading-date badge","data-placeholder":"End M Y",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)}}),Object(p.jsx)("span",{className:"date-dash badge",children:"-"}),Object(p.jsx)("span",{id:"dateStart",className:"sub-heading-date badge","data-placeholder":"Start M Y",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)}})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"sub-heading-container",id:"major-container",children:[Object(p.jsx)("span",{className:"sub-heading-descriptor badge",id:"position","data-placeholder":"Position",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)}}),Object(p.jsx)("span",{className:"employment-location badge",id:"location","data-placeholder":"location",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)}})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"sub-heading-container responsiblities-container",id:"major-container",children:Object(p.jsx)("textarea",{className:"responsibilities badge",id:"responsibilities",placeholder:"Responsibilities... type enter for new bulletpoint",contentEditable:"true",onKeyPress:function(t){return e.handleChange(t)},onClick:function(t){return e.createFirstBullet(t)}})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})}}]),n}(a.Component),v=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={experienceCount:1,experiences:[Object(p.jsx)(m,{},"0")]},a}return Object(b.a)(n,[{key:"addExperience",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("clicked"),e.next=3,this.setState((function(e){return{experiences:e.experiences.concat(Object(p.jsx)(m,{},e.experiences.length))}}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteExperience",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.experiences,e.next=3,console.log(t);case 3:return e.next=5,t.pop();case 5:return e.next=7,this.setState((function(e){return{experiences:t}}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{title:"Experience"}),this.state.experiences.map((function(e,t){return Object(p.jsx)(m,{},t)})),Object(p.jsx)("button",{className:"add-button bottom-button",onClick:function(){return e.addExperience()},children:"Add Experience"}),Object(p.jsx)("button",{className:"delete-Button bottom-button",onClick:function(){return e.deleteExperience()},children:"Delete Experience"})]})}}]),n}(a.Component),_=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={experienceCount:1,experiences:[]},a}return Object(b.a)(n,[{key:"createFirstBullet",value:function(e){""==e.target.value&&"responsibilities"==e.target.id&&(e.target.value+="\u2022 ")}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{title:"Skills",userID:"skills"}),Object(p.jsxs)("div",{className:"sub-heading-container skills-container",id:"major-container",children:[Object(p.jsx)("textarea",{className:"responsibilities skills",id:"responsibilities left-skills skills",placeholder:"Type skills as you see fit",contentEditable:"true"}),Object(p.jsx)("textarea",{className:"responsibilities skills",id:"responsibilities right-skills skills",placeholder:"Type skills as you see fit",contentEditable:"true"})]})]})}}]),n}(a.Component),y=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={placeholder:"a placeholder"},a}return Object(b.a)(n,[{key:"togglePreview",value:function(){var e=document.querySelectorAll("#skills"),t=document.querySelectorAll(".bottom-button");"none"!==t[0].style.display?(t.forEach((function(e){e.style.display="none"})),e[0].style.marginTop="-25px"):(t.forEach((function(e){e.style.display="initial"})),e.forEach((function(e){e.style.marginTop=""}))),this.toggleTextArea()}},{key:"toggleTextArea",value:function(){var e=document.querySelectorAll("textarea");console.log(e[0].style.border),"none"!==e[0].style.border?e.forEach((function(e){e.style.border="none",e.style.resize="none"})):e.forEach((function(e){e.style.border="",e.style.resize=""}))}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"hide-buttons",onClick:function(){return e.togglePreview()},children:"Toggle Production View"})})}}]),n}(a.Component);var k=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(y,{}),Object(p.jsxs)("div",{className:"inner-app",children:[Object(p.jsx)(f,{}),Object(p.jsx)(g,{}),Object(p.jsx)(v,{}),Object(p.jsx)(_,{})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),E()},9:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.a243dd9d.chunk.js.map