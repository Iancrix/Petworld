(this.webpackJsonppetworld=this.webpackJsonppetworld||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){},38:function(e,t,a){e.exports=a(93)},43:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(36),i=a.n(s),c=a(1),o=a(2),l=a(4),m=a(3),p=(a(43),a(5)),u=(a(17),a(7)),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).getImage=function(){return{backgroundImage:"url(".concat(e.props.image,")")}},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"category mr-sm"},n.a.createElement(u.b,{to:"".concat(this.props.path,"/"),className:"cat-link",onClick:this.onClick},n.a.createElement("li",{className:"nav-category "+this.props.addOnStyle},n.a.createElement("div",{className:"nav-category-img",style:this.getImage()}),n.a.createElement("span",{className:"nav-category-name"},this.props.name))))}}]),a}(r.Component),d=Object(p.e)(h),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isHovered:!1,showSidemenu:!1},e.showSidemenu=function(){return e.props.isHoveredNI||e.state.isHovered?{display:"flex"}:{display:"none"}},e.handleOver=function(t){t.stopPropagation(),e.setState({isHovered:!0,showSidemenu:!0})},e.handleExit=function(t){t.stopPropagation(),e.setState({isHovered:!1,showSidemenu:!1}),e.props.setNIExit()},e.getSidemenuCategories=function(){switch(e.props.nameNavItem){case"pets":return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{path:"/pets/Dog",name:"dogs",cat:"Dog",image:"/categories/pets/dogs.jpg",addOnStyle:"red-h"}),n.a.createElement(d,{path:"/pets/Cat",name:"cats",cat:"Cat",image:"/categories/pets/cats.jpg",addOnStyle:"red-h"}));case"products":return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{path:"/products/Nutrition",name:"nutrition",image:"/categories/products/nutrition.jpeg",addOnStyle:"blue-h"}),n.a.createElement(d,{path:"/products/Costumes",name:"costumes",image:"/categories/products/costumes.jpg",addOnStyle:"blue-h"}),n.a.createElement(d,{path:"/products/Toys",name:"toys",image:"/categories/products/toys.jpg",addOnStyle:"blue-h"}));default:return n.a.createElement(n.a.Fragment,null)}},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("ul",{className:"ls dropdown-sidemenu "+this.props.addOnClasses,style:this.showSidemenu(),onMouseOver:this.handleOver,onMouseLeave:this.handleExit},this.getSidemenuCategories())}}]),a}(r.Component),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={isHovered:!1},e.handleOver=function(t){t.stopPropagation(),e.setState({isHovered:!0})},e.handleExit=function(t){t.stopPropagation(),e.setState({isHovered:!1})},e.setExit=function(){e.setState({isHovered:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{onMouseOver:this.handleOver,onMouseLeave:this.handleExit},n.a.createElement("li",{className:"nav-item "+this.props.color+" "+this.props.color+"-h"},n.a.createElement(u.b,{to:"/"+this.props.path,className:"nav-block nav-link"},n.a.createElement("div",{className:"nav-title"},this.props.content)),this.props.hasSidemenu&&!this.props.isMobileResponsive?n.a.createElement(g,{nameNavItem:this.props.name,isHoveredNI:this.state.isHovered,addOnClasses:this.props.color,setNIExit:this.setExit}):""))}}]),a}(r.Component),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={width:0,height:0,addOnClasses:"",hoveredNavitem:"",isMobileResponsive:!1,showMobileMenu:!1},e.updateWindowDimensions=function(){e.setState({width:window.innerWidth,height:window.innerHeight})},e.onToggle=function(){e.setState((function(e){return{showMobileMenu:!e.showMobileMenu}}))},e.getResponsiveStyle=function(){return e.state.isMobileResponsive?e.state.showMobileMenu?{display:"block",animation:"slide-out 0.5s forwards"}:{display:"none",animation:"slide-in 0.5s forwards"}:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"componentDidUpdate",value:function(){this.state.width<=1045&&!this.state.isMobileResponsive?this.setState({isMobileResponsive:!0,showMobileMenu:!1}):this.state.width>1045&&this.state.isMobileResponsive&&this.setState({isMobileResponsive:!1,showMobileMenu:!0})}},{key:"render",value:function(){return n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-container"},n.a.createElement("i",{className:"logo-icon"}),n.a.createElement("span",{className:"logo-name"},"petworld"),n.a.createElement("div",{className:"nav-left-container"},n.a.createElement("div",{className:"toggle-nav-list"},n.a.createElement("div",{className:"toggle-nav-items",onClick:this.onToggle},n.a.createElement("i",{className:"toggle-icon"}))),n.a.createElement("div",{className:this.state.isMobileResponsive?"dropdown-menu":"no-dropdown-menu",style:this.getResponsiveStyle()},n.a.createElement("ul",{className:(this.state.isMobileResponsive,"nav-left-list ls")},n.a.createElement("div",{className:"left-nav"},n.a.createElement(f,{path:"",name:"home",content:"HOME",color:"yellow",hasSidemenu:!0,setStyleSidemenu:this.changeStyleSM,isMobileResponsive:this.state.isMobileResponsive}),n.a.createElement(f,{path:"pets/Dog/",name:"pets",content:"PETS",color:"red",hasSidemenu:!0,setStyleSidemenu:this.changeStyleSM,isMobileResponsive:this.state.isMobileResponsive}),n.a.createElement(f,{path:"products/Nutrition",name:"products",content:"PRODUCTS",color:"blue",hasSidemenu:!0,setStyleSidemenu:this.changeStyleSM,isMobileResponsive:this.state.isMobileResponsive}),n.a.createElement(f,{path:"about",name:"about",content:"ABOUT",color:"brown",hasSidemenu:!1,setStyleSidemenu:this.changeStyleSM,isMobileResponsive:this.state.isMobileResponsive})),n.a.createElement("div",{className:"right-nav"},n.a.createElement(u.b,{className:"sign-link",to:""},n.a.createElement("li",{className:"nav-item beige beige-h sign-item"},"SIGN IN"))))))))}}]),a}(r.Component),y=(a(49),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"animated-scenery"},n.a.createElement("div",{className:"sky"}),n.a.createElement("div",{className:"forest"}),n.a.createElement("div",{className:"path"},n.a.createElement("div",{className:"dog"})),n.a.createElement("div",{className:"urban-path"}),n.a.createElement("div",{className:"street"},n.a.createElement("div",{className:"car"})),n.a.createElement("div",{className:"urban-path-2"}))}}]),a}(r.Component)),E=a(8),b=a(15),w=a.n(b),N=a(18),k=(a(51),a(52),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={checked:e.props.item.isChecked},e.onClick=function(){e.props.setCheckboxItem(e.props.category,e.props.item.name,!e.state.checked)},e.getStyle=function(){return e.state.checked?{background:"#ef5866",color:"white",borderBottom:"5px solid white"}:{background:"#2daaff",color:"black"}},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.state.checked!==this.props.item.isChecked&&(console.log("it changed"),this.setState({checked:this.props.item.isChecked}))}},{key:"render",value:function(){return n.a.createElement("li",{className:"filter-dropdown-item",onClick:this.onClick,style:this.getStyle()},n.a.createElement("div",{className:"filter-dropdown-inner"},n.a.createElement("div",{className:"filter-dropdown-item-title"},this.props.item.name),n.a.createElement("div",{className:"right"},n.a.createElement("div",{className:"item-count"},"(",this.props.item.count,")"),n.a.createElement("input",{className:"checkbox-dropdown",type:"checkbox",checked:this.state.checked,readOnly:!0}))))}}]),a}(r.Component)),S=(a(53),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={showDropdown:e.props.showDropdownList},e.showList=function(){return e.state.showDropdown?{display:"block"}:{display:"none"}},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.state.showDropdown!==this.props.showDropdownList&&this.setState({showDropdown:this.props.showDropdownList})}},{key:"render",value:function(){var e=this;return n.a.createElement("ul",{className:"filter-dropdown-list ls",style:this.showList()},this.props.itemsList.map((function(t,a){return n.a.createElement(k,{key:a,item:t,category:e.props.category,setCheckboxItem:e.props.setCheckboxItem,activeFilters:e.props.activeFilters})})))}}]),a}(r.Component)),C=(a(54),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={showDropdownList:e.props.filterItem.showDropdownList},e.onClick=function(t){e.setState({showDropdownList:e.props.setDropdownList(e.props.filterItem.category,!e.state.showDropdownList)})},e.getAnim=function(){return e.state.showDropdownList?{transform:"rotate(-180deg)"}:{transform:"rotate(0deg)"}},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.state.showDropdownList!==this.props.filterItem.showDropdownList&&this.setState({showDropdownList:this.props.filterItem.showDropdownList})}},{key:"render",value:function(){return n.a.createElement("li",{className:"ls filter-list-item"},n.a.createElement("div",{className:"relative"},n.a.createElement("div",null,n.a.createElement("div",{className:"filter-item-title"},this.props.filterItem.category),n.a.createElement("button",{className:"filter-item-btn",onClick:this.onClick},n.a.createElement("div",{className:"filter-btn-text"},"Any"),n.a.createElement("i",{className:"dropdown-icon-smooth",style:this.getAnim()}))),n.a.createElement("div",null,n.a.createElement(S,{showDropdownList:this.state.showDropdownList,category:this.props.filterItem.category,itemsList:this.props.filterItem.items,setCheckboxItem:this.props.setCheckboxItem}))))}}]),a}(r.Component)),O=(a(55),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={showFilterList:!0},e.onClick=function(){e.setState({showFilterList:!e.state.showFilterList})},e.getStyle=function(){return e.state.showFilterList?{borderRadius:"7px 7px 0px 0px"}:{borderRadius:"7px"}},e.getAnim=function(){return e.state.showFilterList?{transform:"rotate(-180deg)"}:{transform:"rotate(0deg)"}},e.getStyleList=function(){return e.state.showFilterList?{display:"block"}:{display:"none"}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"filter-container"},n.a.createElement("div",{className:"filter-toggle",onClick:this.onClick,style:this.getStyle()},n.a.createElement("div",{className:"filter-toggle-title"},n.a.createElement("i",{className:"filter-icon"}),n.a.createElement("span",{className:"filter-text"},"FILTER SEARCH")),n.a.createElement("i",{className:"dropdown-icon",style:this.getAnim()})),n.a.createElement("ul",{className:"filter-list",style:this.getStyleList()},this.props.filterCategories.map((function(t,a){return n.a.createElement(C,{key:a,filterItem:t,setCheckboxItem:e.props.setCheckboxItem,setDropdownList:e.props.setDropdownList})}))),n.a.createElement("div",{className:"filter-end",style:this.getStyleList()}))}}]),a}(r.Component)),x=(a(21),a(56),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).getImage=function(){return{backgroundImage:"url(".concat(e.props.pet.image,")")}},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"pd-sm"},n.a.createElement("div",{className:"card box-shadow-3d"},n.a.createElement("div",{className:"card-img",style:this.getImage()}),n.a.createElement("div",{className:"card-body"}),n.a.createElement("div",{className:"card-body-responsive"},n.a.createElement("div",{className:"card-body-inner"},n.a.createElement("i",{className:"card-icon"}),n.a.createElement("span",{className:"card-name"},this.props.pet.name),n.a.createElement("ul",{className:"char ls inherit"},n.a.createElement("li",{className:"inherit"},n.a.createElement("ul",{className:"ls point inherit"},n.a.createElement("li",{className:"card-item"},this.props.pet.age),n.a.createElement("li",{className:"card-item inherit"},n.a.createElement("div",{className:"bullet"},"\u2022"),this.props.pet.breed)))),n.a.createElement("span",{className:"card-country"},this.props.pet.location,", ",this.props.pet.country),n.a.createElement("p",{className:"card-p"},this.props.pet.description," "),n.a.createElement(u.b,{to:"/pets/pet/".concat(this.props.pet._id),className:"inherit"},n.a.createElement("div",{className:"card-btn"},"View page"))))))}}]),a}(r.Component)),P=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).onClick=function(t){console.log("delete filter"),e.props.setCheckboxItem(e.props.category,e.props.name,!1)},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"fil"},n.a.createElement("div",{className:"fil-pr"},n.a.createElement("span",{className:"fil-txt"},this.props.name),n.a.createElement("div",{className:"fil-cls",onClick:this.onClick},n.a.createElement("i",{className:"x-icon"}))))}}]),a}(r.Component),j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={currentPage:e.props.currentPage,maxPages:e.props.maxPages},e.onClickFwd=function(t){var a=e.state.currentPage+1;e.props.changePage(a)},e.getStyleBwd=function(){return e.state.currentPage<=1?{opacity:"0.6"}:{}},e.onClickBwd=function(t){var a=e.state.currentPage-1;e.props.changePage(a)},e.getStyleFwd=function(){return e.state.currentPage>=e.state.maxPages?{opacity:"0.6"}:{}},e.getActiveFilters=function(){var t=[];return e.props.activeFilters.forEach((function(a){a.filters.map((function(r,s){return t.push(n.a.createElement(P,{key:r+s,name:r,category:a.category,setCheckboxItem:e.props.setCheckboxItem}))}))})),t},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.state.currentPage!==this.props.currentPage&&this.setState({currentPage:this.props.currentPage}),this.state.maxPages!==this.props.maxPages&&this.setState({maxPages:this.props.maxPages})}},{key:"render",value:function(){return n.a.createElement("div",{className:"results-container"},n.a.createElement("div",{className:"page-toggler"},n.a.createElement("div",{className:"filter-minis"},this.getActiveFilters()),n.a.createElement("div",{className:"page-indexer"},n.a.createElement("button",{className:"backwards",onClick:this.onClickBwd,style:this.getStyleBwd()},n.a.createElement("i",{className:"bck-icon"})),n.a.createElement("div",{className:"current"},n.a.createElement("span",{className:"current-txt"},this.state.currentPage)),n.a.createElement("button",{className:"forwards",onClick:this.onClickFwd,style:this.getStyleFwd()},n.a.createElement("i",{className:"fwd-icon"})))),n.a.createElement("div",{className:"grid"},this.props.pets.map((function(e,t){return n.a.createElement(x,{key:t,pet:e})}))))}}]),a}(r.Component),D=a(19),L=a.n(D),F=a(13),I=a.n(F),M=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={filterCategories:[{category:"Breed",items:[],showDropdownList:!1},{category:"Genre",items:[],showDropdownList:!1},,{category:"Age",items:[],showDropdownList:!1}],activeFilters:[{category:"Breed",filters:[]},{category:"Genre",filters:[]},{category:"Age",filters:[]}],pets:[],currentPage:1,elementsPerPage:8,maxPages:1,totalElements:0,animalType:e.props.match.params.animalType},e.setCheckboxItem=function(t,a,r){var n=e.state.filterCategories.map((function(e){if(e.category===t)for(var n in e.items)if(e.items[n].name===a){e.items[n].isChecked=r;break}return e}));if(e.setState({filterCategories:n}),r){var s=e.state.activeFilters.find((function(e){return e.category===t})),i=t+"_"+s.filters.length;e.addQuery(i,a);var c=e.state.activeFilters.map((function(e){return e.category===t&&e.filters.push(a),e}));e.setState({activeFilters:c})}else{var o=e.state.activeFilters.find((function(e){return e.category===t})).filters.findIndex((function(e){return e===a}));e.state.activeFilters.forEach((function(a){a.category===t&&a.filters.forEach((function(a,r){var n=t+"_"+r;e.deleteQuery(n)}))}));var l=e.state.activeFilters.map((function(e){return e.category===t&&e.filters.splice(o,1),e}));l.forEach((function(a){a.category===t&&a.filters.forEach((function(a,r){var n=t+"_"+r;e.addQuery(n,a)}))})),e.setState({activeFilters:l})}return r},e.setDropdownList=function(t,a){var r=e.state.filterCategories.map((function(e){return e.category===t?e.showDropdownList=a:a&&(e.showDropdownList=!1),e}));return e.setState({filterCategories:r}),a},e.updateCategories=function(){e.setState({filterCategories:e.state.filterCategories.map((function(e){return e.items=[],e})),activeFilters:e.state.activeFilters.map((function(e){return e.filters=[],e}))}),I.a.get("http://localhost:5000/pets/".concat(e.props.match.params.animalType,"/count")).then((function(t){e.setState({filterCategories:e.state.filterCategories.map((function(e){if(Object.keys(t.data).includes(e.category.toLowerCase())){var a=t.data[e.category.toLowerCase()];e.items;for(var r in a)e.items.push({name:a[r]._id,count:a[r].count,isChecked:!1})}return e}))})})).catch((function(e){return console.log(e)}))},e.onClickTest=function(){e.resetQuery()},e.changePage=function(){var t=Object(N.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a>0&&a<=e.state.maxPages)){t.next=4;break}return t.next=3,e.setState({currentPage:a});case 3:e.addQuery("page_index",e.state.currentPage.toString());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getQueryParams=function(){return L.a.parse(e.props.history.location.search)},e.resetQuery=function(){e.props.history.replace(Object(E.a)(Object(E.a)({},e.props.history.location),{},{search:""}))},e.addQuery=function(t,a){var r=new URLSearchParams(e.props.history.location.search);r.set(t,a),e.props.history.replace(Object(E.a)(Object(E.a)({},e.props.history.location),{},{search:r.toString()}))},e.deleteQuery=function(t){var a=new URLSearchParams(e.props.history.location.search);a.delete(t),e.props.history.replace(Object(E.a)(Object(E.a)({},e.props.history.location),{},{search:a.toString()}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.addQuery("page_index",this.state.currentPage.toString()),this.updateCategories()}},{key:"componentDidUpdate",value:function(e){var t=this;this.state.animalType!==this.props.match.params.animalType&&(this.setState({animalType:this.props.match.params.animalType}),console.log(this.props.match.params.animalType),this.updateCategories()),new URLSearchParams(this.props.history.location.search).get("page_index")||(this.addQuery("page_index","1"),this.setState({currentPage:1})),this.props.location!==e.location&&(console.log("location changed !!!"),I.a.get("http://localhost:5000/pets/".concat(this.props.match.params.animalType,"/filter").concat(this.props.history.location.search)).then((function(e){t.setState({pets:e.data.pets,totalElements:e.data.count,maxPages:e.data.maxPages}),e.data.count<=(t.state.currentPage-1)*t.state.elementsPerPage&&t.changePage(1)})).catch((function(e){return console.log(e)})))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container-full"},n.a.createElement("div",{className:"search-container"},n.a.createElement(O,{filterCategories:this.state.filterCategories,setCheckboxItem:this.setCheckboxItem,setDropdownList:this.setDropdownList}),n.a.createElement(j,{pets:this.state.pets,changePage:this.changePage,currentPage:this.state.currentPage,maxPages:this.state.maxPages,activeFilters:this.state.activeFilters,setCheckboxItem:this.setCheckboxItem})))}}]),a}(r.Component),A=Object(p.e)(M),R=(a(86),a(87),a(88),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"list-item-container box-shadow-3d"},n.a.createElement("div",{className:"list-item-img"},n.a.createElement("img",{src:this.props.product.image,className:"img-item"})),n.a.createElement("div",{className:"list-item-info"},n.a.createElement("div",{className:"item-name"},n.a.createElement("h2",{className:"item-name-txt"},this.props.product.name)),n.a.createElement("div",{className:"item-price"},n.a.createElement("span",{className:"price-tag-symbol"},"$"),n.a.createElement("span",{className:"item-price-txt"},this.props.product.price)),n.a.createElement("div",{className:"item-units"},n.a.createElement("span",{className:"item-units-txt"},this.props.product.units," available units")),n.a.createElement("div",{className:"item-category"},n.a.createElement("span",{className:"item-category-txt"},this.props.product.category," for ",this.props.product.animaltype,"s"))))}}]),a}(r.Component)),T=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={currentPage:e.props.currentPage,maxPages:e.props.maxPages},e.onClickFwd=function(t){var a=e.state.currentPage+1;e.props.changePage(a)},e.getStyleBwd=function(){return e.state.currentPage<=1?{opacity:"0.6"}:{}},e.onClickBwd=function(t){var a=e.state.currentPage-1;e.props.changePage(a)},e.getStyleFwd=function(){return e.state.currentPage>=e.state.maxPages?{opacity:"0.6"}:{}},e.getActiveFilters=function(){var t=[];return e.props.activeFilters.forEach((function(a){a.filters.map((function(r,s){return t.push(n.a.createElement(P,{key:r+s,name:r,category:a.category,setCheckboxItem:e.props.setCheckboxItem}))}))})),t},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.state.currentPage!==this.props.currentPage&&this.setState({currentPage:this.props.currentPage}),this.state.maxPages!==this.props.maxPages&&this.setState({maxPages:this.props.maxPages})}},{key:"render",value:function(){return n.a.createElement("div",{className:"results-container"},n.a.createElement("div",{className:"page-toggler"},n.a.createElement("div",{className:"filter-minis"},this.getActiveFilters()),n.a.createElement("div",{className:"page-indexer"},n.a.createElement("button",{className:"backwards",onClick:this.onClickBwd,style:this.getStyleBwd()},n.a.createElement("i",{className:"bck-icon"})),n.a.createElement("div",{className:"current"},n.a.createElement("span",{className:"current-txt"},this.state.currentPage)),n.a.createElement("button",{className:"forwards",onClick:this.onClickFwd,style:this.getStyleFwd()},n.a.createElement("i",{className:"fwd-icon"})))),n.a.createElement("div",{className:"list-grid"},this.props.products.map((function(e,t){return n.a.createElement(R,{key:t,product:e})}))))}}]),a}(r.Component),Q=(a(89),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handleChange=function(t){e.props.setSearchString(t.target.value)},e.onSubmit=function(t){t.preventDefault(),e.props.applySearch()},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.state.search!==this.props.searchString&&this.setState({search:this.props.searchString})}},{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"search-box-container"},n.a.createElement("div",{className:"search-title"},n.a.createElement("span",{className:"search-txt"},"SEARCH:")),n.a.createElement("div",{className:"search-input"},n.a.createElement("input",{type:"text",className:"input-search",name:"search",value:this.state.search,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),n.a.createElement("input",{type:"submit",className:"btn-search",value:""}))))}}]),a}(r.Component)),U=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={filterCategories:[{category:"Animal",items:[],showDropdownList:!1},{category:"Size",items:[],showDropdownList:!1},{category:"Brand",items:[],showDropdownList:!1},{category:"Price",items:[],showDropdownList:!1}],products:[],activeFilters:[{category:"Animal",filters:[]},{category:"Size",filters:[]},{category:"Brand",filters:[]},{category:"Price",filters:[]}],currentPage:1,elementsPerPage:8,maxPages:1,totalElements:0,productType:e.props.match.params.productType,searchString:""},e.setSearchString=function(t){e.setState({searchString:t})},e.applySearch=function(){e.state.searchString?e.addQuery("searchfor",e.state.searchString):e.deleteQuery("searchfor")},e.updateCategories=function(){e.setState({filterCategories:e.state.filterCategories.map((function(e){return e.items=[],e})),activeFilters:e.state.activeFilters.map((function(e){return e.filters=[],e}))}),I.a.get("http://localhost:5000/products/".concat(e.props.match.params.productType,"/count")).then((function(t){e.setState({filterCategories:e.state.filterCategories.map((function(e){if(Object.keys(t.data).includes(e.category.toLowerCase())){var a=t.data[e.category.toLowerCase()];for(var r in a)e.items.push({name:a[r]._id,count:a[r].count,isChecked:!1})}return e}))})})).catch((function(e){return console.log(e)}))},e.setCheckboxItem=function(t,a,r){var n=e.state.filterCategories.map((function(e){if(e.category===t)for(var n in e.items)if(e.items[n].name===a){e.items[n].isChecked=r;break}return e}));if(e.setState({filterCategories:n}),r){var s=e.state.activeFilters.find((function(e){return e.category===t})),i=t+"_"+s.filters.length;e.addQuery(i,a);var c=e.state.activeFilters.map((function(e){return e.category===t&&e.filters.push(a),e}));e.setState({activeFilters:c})}else{var o=e.state.activeFilters.find((function(e){return e.category===t})).filters.findIndex((function(e){return e===a}));e.state.activeFilters.forEach((function(a){a.category===t&&a.filters.forEach((function(a,r){var n=t+"_"+r;e.deleteQuery(n)}))}));var l=e.state.activeFilters.map((function(e){return e.category===t&&e.filters.splice(o,1),e}));l.forEach((function(a){a.category===t&&a.filters.forEach((function(a,r){var n=t+"_"+r;e.addQuery(n,a)}))})),e.setState({activeFilters:l})}return r},e.setDropdownList=function(t,a){var r=e.state.filterCategories.map((function(e){return e.category===t?e.showDropdownList=a:a&&(e.showDropdownList=!1),e}));return e.setState({filterCategories:r}),a},e.changePage=function(){var t=Object(N.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a>0&&a<=e.state.maxPages)){t.next=4;break}return t.next=3,e.setState({currentPage:a});case 3:e.addQuery("page_index",e.state.currentPage.toString());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getQueryParams=function(){return L.a.parse(e.props.history.location.search)},e.resetQuery=function(){e.props.history.replace(Object(E.a)(Object(E.a)({},e.props.history.location),{},{search:""}))},e.addQuery=function(t,a){var r=new URLSearchParams(e.props.history.location.search);r.set(t,a),e.props.history.replace(Object(E.a)(Object(E.a)({},e.props.history.location),{},{search:r.toString()}))},e.deleteQuery=function(t){var a=new URLSearchParams(e.props.history.location.search);a.delete(t),e.props.history.replace(Object(E.a)(Object(E.a)({},e.props.history.location),{},{search:a.toString()}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.addQuery("page_index",this.state.currentPage.toString()),this.updateCategories()}},{key:"componentDidUpdate",value:function(e){var t=this;this.state.productType!==this.props.match.params.productType&&(this.setState({productType:this.props.match.params.productType}),this.updateCategories()),new URLSearchParams(this.props.history.location.search).get("page_index")||(this.addQuery("page_index","1"),this.setState({currentPage:1})),this.props.location!==e.location&&I.a.get("http://localhost:5000/products/".concat(this.props.match.params.productType,"/filter").concat(this.props.history.location.search)).then((function(e){t.setState({products:e.data.products,totalElements:e.data.count,maxPages:e.data.maxPages}),e.data.count<=(t.state.currentPage-1)*t.state.elementsPerPage&&t.changePage(1)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container-full"},n.a.createElement("div",{className:"box-container"},n.a.createElement(Q,{setSearchString:this.setSearchString,applySearch:this.applySearch,searchString:this.state.searchString})),n.a.createElement("div",{className:"search-container"},n.a.createElement(O,{filterCategories:this.state.filterCategories,setCheckboxItem:this.setCheckboxItem,setDropdownList:this.setDropdownList}),n.a.createElement(T,{products:this.state.products,changePage:this.changePage,currentPage:this.state.currentPage,maxPages:this.state.maxPages,activeFilters:this.state.activeFilters,setCheckboxItem:this.setCheckboxItem})))}}]),a}(r.Component),B=Object(p.e)(U),_=(a(90),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={pet:{rescue:{}}},e.getImage=function(){return{backgroundImage:"url(".concat(e.state.pet.image,")")}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("hola"),I.a.get("http://localhost:5000/pets/".concat(this.props.match.params.idAnimal)).then((function(t){e.setState({pet:t.data}),console.log(t.data)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log(this.state.pet),n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"container-profile"},n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"photo-profile"},n.a.createElement("div",{className:"profile-img",style:this.getImage()})),n.a.createElement("div",{className:"info-profile"},n.a.createElement("div",{className:"name-profile"},this.state.pet.name),n.a.createElement("div",{className:"description-profile"},this.state.pet.description),n.a.createElement("div",{className:"perks-profile"},n.a.createElement("div",{className:"perk"},n.a.createElement("div",{className:"perk-pr"},n.a.createElement("span",{className:"perk-txt"},"Amigable"))),n.a.createElement("div",{className:"perk"},n.a.createElement("div",{className:"perk-pr"},n.a.createElement("span",{className:"perk-txt"},"Jugueton"))),n.a.createElement("div",{className:"perk"},n.a.createElement("div",{className:"perk-pr"},n.a.createElement("span",{className:"perk-txt"},"Tierno")))))),n.a.createElement("div",{className:"char-profile"},n.a.createElement("div",{className:"char-title"},"PET DETAILS"),n.a.createElement("div",{className:"char-container"},n.a.createElement("div",{className:"char-left"},n.a.createElement("div",{className:"chars-title"},"Characteristics"),n.a.createElement("ul",{className:"char-ls"},n.a.createElement("div",{className:"char-item"},"Age: \xa0",n.a.createElement("div",{className:"char-value"},this.state.pet.age)),n.a.createElement("div",{className:"char-item"},"Breed: \xa0",n.a.createElement("div",{className:"char-value"},this.state.pet.breed)),n.a.createElement("div",{className:"char-item"},"Genre: \xa0",n.a.createElement("div",{className:"char-value"},this.state.pet.genre)),n.a.createElement("div",{className:"char-item"},"Location: \xa0",n.a.createElement("div",{className:"char-value"},this.state.pet.location)))),n.a.createElement("div",{className:"char-right"},n.a.createElement("div",{className:"chars-title"},"Rescue Details"),n.a.createElement("ul",{className:"char-ls"},n.a.createElement("div",{className:"char-item"},"Name: \xa0",n.a.createElement("div",{className:"char-value"},this.state.pet.rescue.name)),n.a.createElement("div",{className:"char-item"},"City: \xa0",n.a.createElement("div",{className:"char-value"},this.state.pet.rescue.city)),n.a.createElement("div",{className:"char-item"},"Email: \xa0",n.a.createElement("div",{className:"char-value"},this.state.pet.rescue.email)),n.a.createElement("div",{className:"char-item"},"Contact: \xa0",n.a.createElement("div",{className:"char-value"},this.state.pet.rescue.contact)))))),n.a.createElement("div",{className:"btn-profile"},n.a.createElement("div",{className:"btn-adoption"},"START ADOPTION PROCESS"))))}}]),a}(r.Component)),H=Object(p.e)(_);a(91);function W(){return n.a.createElement("div",{className:"footer-container"})}a(92);function z(){return n.a.createElement("div",{className:"about"},n.a.createElement("h1",{className:"autor"},"Made by Ian Chona"))}var G=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(y,null),n.a.createElement(W,null))}}),n.a.createElement(p.a,{exact:!0,path:"/pets/pet/:idAnimal",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(H,null),n.a.createElement(W,null))}}),n.a.createElement(p.a,{exact:!0,path:"/pets/:animalType",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(A,null),n.a.createElement(W,null))}}),n.a.createElement(p.a,{exact:!0,path:"/products/:productType",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(B,null),n.a.createElement(W,null))}}),n.a.createElement(p.a,{exact:!0,path:"/about",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(z,null),n.a.createElement(W,null))}}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u.a,null,n.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.5a7ac746.chunk.js.map