(this["webpackJsonpyeshtery-v8"]=this["webpackJsonpyeshtery-v8"]||[]).push([[5],{48:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s(3),a=s(22),i=s(5),r=s(4),o=s(1),l=s(14),j=s(23),d=s(24),h=s(12),b=s(0),u=function(e){Object(i.a)(s,e);var t=Object(r.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).handleChange=function(e){var t=e.target.value,s=e.target.name;console.log(n.props.context.categoriesNames),n.setState({category:t,open:!1},(function(){return n.props.context.filterItems(s,t)}))},n.state={category:e.context.sortBy,open:!1},n.handleToggle=n.handleToggle.bind(Object(a.a)(n)),n}return Object(n.a)(s,[{key:"handleToggle",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t=this.state.category;return Object(b.jsxs)("div",{className:"gifts-section",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(j.a,{title:"gifts on budget",text:"choose your gift within your budget"}),Object(b.jsxs)("div",{className:"right-buttons",children:[Object(b.jsxs)("div",{className:"select-wrap ".concat(this.state.open?"active":null),children:[Object(b.jsx)("ul",{className:"default-option",onClick:this.handleToggle,children:Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"option",children:[Object(b.jsx)("input",{type:"radio",name:"gifts"}),Object(b.jsx)("span",{children:t&&t})]})})}),Object(b.jsx)("ul",{className:"select-ul",children:this.props.context.categoriesNames.map((function(t,s){return Object(b.jsx)("li",{children:Object(b.jsxs)("label",{className:"option",children:[Object(b.jsx)("input",{type:"radio",name:"gifts",value:t,onClick:function(t){return e.handleChange(t)}}),Object(b.jsx)("span",{children:t})]})},s)}))})]}),Object(b.jsx)("div",{className:"btn-viewall",children:Object(b.jsx)(l.b,{to:"/",children:"view all"})})]})]}),Object(b.jsx)("div",{className:"gift-grid",children:this.props.context.gifts.map((function(e){var t=e.id,s=e.offer,c=e.symbol,n=e.image,a={backgroundColor:"transparent",backgroundImage:"url(".concat(n,")"),backgroundRepeat:"no-repeat",backgroundPosition:"0% 0%",backgroundAttachment:"scroll",backgroundSize:"cover"};return Object(b.jsx)("div",{className:"gift-".concat(t," single-gift"),style:a,children:Object(b.jsxs)("h2",{children:[s," ",Object(b.jsx)("span",{children:c})]})},t)}))}),Object(b.jsx)(d.a,{width:"30%"})]})}}]),s}(o.Component);t.default=Object(h.c)(u)}}]);
//# sourceMappingURL=5.7bcb07f6.chunk.js.map