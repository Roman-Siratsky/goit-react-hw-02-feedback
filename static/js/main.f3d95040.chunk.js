(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(7),o=n.n(c),i=(n(14),n(9)),s=n(2),u=n(3),d=n(5),l=n(4),b=(n(15),n(0)),h=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.totalCounter,n=t.positiveFeedbackCounter,r=t.good,a=t.bad,c=t.neutral;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Statistics"}),e()>0?Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Good: "+r}),Object(b.jsx)("p",{children:"Neutral: "+c}),Object(b.jsx)("p",{children:"Bad: "+a}),Object(b.jsx)("p",{children:"Total: "+e()}),Object(b.jsx)("p",{children:"Positive Feedback: "+n()+"%"})]}):Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"No Feedbacks yet"})})]})}}]),n}(a.a.Component),j=n(8),p=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){console.log(this.props);var t=Object(j.a)(this.props.options,3),e=t[0],n=t[1],r=t[2];return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"button",onClick:e,children:"Good"}),Object(b.jsx)("button",{type:"button",onClick:r,children:"Neutral"}),Object(b.jsx)("button",{type:"button",onClick:n,children:"Bad"})]})}}]),n}(a.a.Component),O=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state=Object(i.a)({},t.props.state),t.handleIncrement=function(){t.setState((function(t){return{good:t.good+1}}))},t.handleDecrement=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.handleNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t}return Object(u.a)(n,[{key:"totalCounter",value:function(){var t=this.state;return t.good+t.neutral+t.bad}},{key:"positiveFeedbackCounter",value:function(){var t=this.state.good;switch(this.totalCounter()){case 0:return 0;default:return Math.ceil(t/this.totalCounter()*100)}}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Please Leave Feedback"}),Object(b.jsx)(p,{options:[this.handleIncrement,this.handleDecrement,this.handleNeutral]}),Object(b.jsx)(h,{totalCounter:this.totalCounter.bind(this),positiveFeedbackCounter:this.positiveFeedbackCounter.bind(this),good:this.state.good,bad:this.state.bad,neutral:this.state.neutral})]})}}]),n}(r.Component);o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{state:{good:0,neutral:0,bad:0}})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f3d95040.chunk.js.map