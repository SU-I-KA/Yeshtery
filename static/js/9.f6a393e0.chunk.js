(this["webpackJsonpyeshtery-v8"]=this["webpackJsonpyeshtery-v8"]||[]).push([[9],{50:function(e,t,s){"use strict";s.r(t);var c=s(2),r=s(3),a=s(22),n=s(5),i=s(4),o=s(1),l=s(14),d=s(23),u=s(12),j=s(0),p=function(e){Object(n.a)(s,e);var t=Object(i.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).state={full:[],empty:[]},r.makeArray=r.makeArray.bind(Object(a.a)(r)),r}return Object(r.a)(s,[{key:"makeArray",value:function(){for(var e=[],t=[],s=0;s<this.props.product.rate;s++)e.push(s);for(var c=0;c<5-this.props.product.rate;c++)t.push(c);this.setState({full:e,empty:t})}},{key:"componentDidMount",value:function(){this.makeArray()}},{key:"render",value:function(){var e=this,t=this.props.product,s=t.title,c=t.image,r=t.price,a=t.brand,n=t.rate,i=t.pickup;return Object(j.jsxs)("div",{className:"single-product",children:[Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:c,alt:s})}),Object(j.jsx)("h3",{children:s}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"price",children:[r.value," ",Object(j.jsx)("span",{children:r.symbol})]}),Object(j.jsx)("img",{src:a.img,alt:s})]}),Object(j.jsxs)("div",{className:"rate-wrap",children:[Object(j.jsxs)("div",{className:"stars",children:[this.state.full.map((function(t,s){return Object(j.jsx)("img",{src:e.props.icons.star,alt:"star"},s)})),this.state.empty.map((function(t,s){return Object(j.jsx)("img",{src:e.props.icons.emptyStar,alt:"star"},s)}))]}),Object(j.jsxs)("div",{className:"rate",children:[n," of 5"]})]}),Object(j.jsxs)("div",{className:"pickup",children:["pickup from: ",Object(j.jsx)("span",{children:i})]})]})}}]),s}(o.Component),h=function(e){Object(n.a)(s,e);var t=Object(i.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).handleChange=function(e){var t=e.target.value;console.log(r.props.context.categoriesNames),r.setState({category:t,open:!1},(function(){return r.props.context.getProducts(t)}))},r.showMore=function(){var e=r.props.context.selectedProducts,t=r.state.counter+1;return t>e.length?r.setState({error:{active:!0,msg:"that's it. no more!"}}):r.setState({counter:t})},r.state={category:e.context.sortBy,counter:e.context.initialCount||4,error:{active:!1,msg:""},open:!1},r.handleToggle=r.handleToggle.bind(Object(a.a)(r)),r}return Object(r.a)(s,[{key:"componentDidUpdate",value:function(e,t){this.state.category!==t.category&&this.setState({counter:this.props.context.initialCount,error:{active:!1,msg:""}})}},{key:"handleToggle",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t=this.state,s=t.category,c=t.counter;return Object(j.jsxs)("div",{className:"products-section",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(d.a,{title:"our special selection",text:"premium products recommended just for you"}),Object(j.jsxs)("div",{className:"right-buttons",children:[Object(j.jsxs)("div",{className:"select-wrap ".concat(this.state.open?"active":null),children:[Object(j.jsx)("ul",{className:"default-option",onClick:this.handleToggle,children:Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"option",children:[Object(j.jsx)("input",{type:"radio",name:"selectedProducts"}),Object(j.jsx)("span",{children:s&&s})]})})}),Object(j.jsx)("ul",{className:"select-ul",children:this.props.context.categoriesNames.map((function(t,s){return Object(j.jsx)("li",{children:Object(j.jsxs)("label",{className:"option",children:[Object(j.jsx)("input",{type:"radio",name:"selectedProducts",value:t,onClick:function(t){return e.handleChange(t)}}),Object(j.jsx)("span",{children:t})]})},s)}))})]}),Object(j.jsx)("div",{className:"btn-viewall",children:Object(j.jsx)(l.b,{to:"/",children:"view all"})})]})]}),this.props.context.selectedProducts.length>0?Object(j.jsx)("div",{className:"product-grid",children:this.props.context.selectedProducts.slice(0,c).map((function(t){return Object(j.jsx)(p,{product:t,icons:e.props.context.icons},t.id)}))}):Object(j.jsx)("div",{className:"no-more",children:"no products in that category"}),this.props.context.selectedProducts.length>0&&Object(j.jsx)("div",{className:"more-section",children:this.state.error.active?Object(j.jsx)("div",{className:"no-more",children:this.state.error.msg}):Object(j.jsx)("button",{className:"btn-more",onClick:this.showMore,children:"show more"})})]})}}]),s}(o.Component);t.default=Object(u.c)(h)}}]);
//# sourceMappingURL=9.f6a393e0.chunk.js.map