dojo.isIE=function(){var e=void 0,g=navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);g&&(e=parseInt(g[1],10));return e}();
dojo.mixin(dijit,{registerWin:function(e,g){dojo.connect(e.document,"onmousedown",function(e){dijit._justMouseDowned=!0;setTimeout(function(){dijit._justMouseDowned=!1},0);dijit._onTouchNode(g||e.target||e.srcElement)});var k=e.document;k&&(dojo.isIE&&11>dojo.isIE?(k.attachEvent("onactivate",function(e){"#document"!=e.srcElement.tagName.toLowerCase()&&dijit._onFocusNode(g||e.srcElement)}),k.attachEvent("ondeactivate",function(e){dijit._onBlurNode(g||e.srcElement)})):(k.addEventListener("focus",function(e){dijit._onFocusNode(g||
e.target)},!0),k.addEventListener("blur",function(e){dijit._onBlurNode(g||e.target)},!0)));k=null}});UNIFACE.loaded&&dojo.loaded();
(function(){function e(){UNIFACE.dijit.apply(this,arguments)}function g(){return e.apply(this,arguments)}function k(){if(this.control){if(this.control._u_edited||this.control._u_valueBeforeChange!==this.getValue())this.callBack.getEvents().onchange();else this.control._u_valueBeforeChange=this.getValue();this.control._u_edited=!1}}function v(){this.control&&(this.control._u_inSetValue?this.callBack.markAsModified():(this.callBack.getEvents().onedit(),this.control._u_edited=!0))}var r=document.all?
"ie":"ff";if(1!=dojo.version.major)alert("Expected dojo's major version to be 1 but it is "+dojo.version.major+"!");else if(3!=dojo.version.minor)alert("Expected dojo's version to be 1.3 but it is 1."+dojo.version.minor+"!");else if(2>dojo.version.patch)alert("Expected dojo's patch level to be at least 1.3.2 but it is 1.3."+dojo.version.patch+"!");else{var t=!1,l=function(){return{adapt:function(a){""===a&&(a="URIA-emptyString_workaroundForDojo132");return a},adaptBack:function(a){"URIA-emptyString_workaroundForDojo132"===
a&&(a="");return a}}}();UNIFACE.dijit=function(){UNIFACE.widget.AbstractWidget.apply(this,arguments);this.control=null;this.initialAttributes={}};UNIFACE.dijit.vsn="9.7/1";UNIFACE.dijit.prototype=new UNIFACE.widget.AbstractWidget;UNIFACE.dijit.prototype.getElement=function(){return this.control?this.control.focusNode:null};UNIFACE.dijit.prototype.setHtml_disabled=function(a){try{var b=this.control.disabled;this.control.attr("disabled","true"===a);return b}catch(c){}};UNIFACE.dijit.prototype.setHtml_readOnly=
function(a){try{var b=this.control.readOnly;this.control.attr("readOnly","true"===a);var c=this.control.focusNode;dojo&&dojo.isIE&&c&&document.activeElement===c&&c.select&&c.select();return b}catch(d){}};UNIFACE.dijit.prototype.setHtmlProp=function(a,b){try{var c,d=this.control.focusNode;if("disabled"==a)c=this.control.attr(a),this.control.attr(a,"true"===b);else{if("readOnly"===a||"multiple"===a)b="true"===b;c=d[a];d[a]=b}c&&(c=c.toString());return c}catch(f){}};UNIFACE.dijit.prototype.setStyle_visibility=
function(a){try{var b=this.control.domNode.style;this.setCssProperty(b,"visibility",a);b=this.control.focusNode.style;this.setCssProperty(b,"visibility",a,"important")}catch(c){}};UNIFACE.dijit.prototype.setValue=function(a){if(this.control)try{this.control.attr("value",a)}catch(b){}};UNIFACE.dijit.prototype.getValue=function(){if(this.control){var a=this.control.attr("value");return null!=a?a.toString():""}};UNIFACE.dijit.prototype.initialize=function(a){void 0===this.initialAttributes.value&&(this.initialAttributes.value=
this.getCallbackValue())};UNIFACE.dijit.prototype.getCallbackValue=function(){if(this.callBack)return this.callBack.getValue()};UNIFACE.dijit.prototype.preRender=function(a){this.wrapperNode=document.createElement("span");a.parentNode.replaceChild(this.wrapperNode,a);this.initialize(a)};UNIFACE.dijit.prototype.doRender=function(a){var b=this.callBack.getCalculatedProperties();this.wrapperNode.appendChild(a);this.controlClass&&(this.control=new this.controlClass(this.initialAttributes,a),this.control.startup());
t||null==b.uniface||null==b.uniface.theme||(document.body.className=null!=document.body.className?document.body.className+(" "+b.uniface.theme):b.uniface.theme,t=!0)};UNIFACE.dijit.prototype.dispose=function(){if(this.controls)for(var a in this.controls)this.controls.hasOwnProperty(a)&&this.controls[a].destroy();else this.control&&"function"===typeof this.control.destroy&&this.control.destroy()};4<=dojo.isFF&&!UNIFACE.dijit._udojo_focusNode_subscribed&&(UNIFACE.dijit._udojo_focusNode_subscribed=!0,
dojo.subscribe("focusNode",null,function(a){"DIV"===a.tagName&&(a=dijit.getFirstInTabbingOrder(a))&&(a.focus(),dijit.selectInputText(a))}));e.prototype=new UNIFACE.dijit;e.prototype.mapEvents=function(){this.addListener(this.control,"onChange",this.callBack.getEvents().onchange)};g.blockedProperties=new UNIFACE.widget.Props({"style:cursor":"progress","html:readonly":"true"});g.prototype=new e;g.prototype.mapEvents=function(){e.prototype.mapEvents.call(this);this.addListener(this.control.domNode,"ondblclick",
this.callBack.getEvents().detail)};UNIFACE.dijit.textarea=function(){dojo.require("dijit.form.SimpleTextarea");g.apply(this,arguments);this.controlClass=dijit.form.SimpleTextarea};UNIFACE.dijit.textarea.prototype=new g;UNIFACE.dijit.textarea.prototype.setStyleProp=function(a,b){try{if(7===dojo.isIE&&("backgroundColor"===a||"background"===a)){var c=this.getStyleNode(a).style,d=this.control.focusNode.style;this.setCssProperty(d,"backgroundImage","none");this.setCssProperty(d,"backgroundColor","transparent");
this.setCssProperty(c,"backgroundImage","none")}UNIFACE.dijit.prototype.setStyleProp.apply(this,arguments)}catch(f){}};UNIFACE.dijit.textarea.prototype.getAllStyleNodes=function(){var a=[this.control.domNode];7===dojo.isIE&&a.push(this.control.focusNode);return a};UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.textarea",UNIFACE.dijit.textarea);UNIFACE.dijit.richtext=function(){dojo.require("dijit.form.Textarea");g.apply(this,arguments);this.controlClass=dijit.form.Textarea};UNIFACE.dijit.richtext.prototype=
new g;UNIFACE.dijit.richtext.prototype.getValue=function(){var a=UNIFACE.dijit.prototype.getValue.call(this);return""===this.callBack.getValue()&&"\n"===a?"":a};UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.richtext",UNIFACE.dijit.richtext);UNIFACE.dijit.editbox=function(){dojo.require("dijit.form.ValidationTextBox");g.apply(this,arguments);this.controlClass=dijit.form.ValidationTextBox;this.forceError=!1;this.errorText=""};UNIFACE.dijit.editbox.prototype=new g;UNIFACE.dijit.editbox.prototype.blockedProperties=
g.blockedProperties;UNIFACE.dijit.editbox.prototype.setValue=function(a){this.control&&(this.control._u_inSetValue=!0,UNIFACE.dijit.prototype.setValue.call(this,a),this.control._u_inSetValue=!1,this.control._u_valueBeforeChange=this.getValue())};UNIFACE.dijit.editbox.prototype.getStyleNode=function(a){return"text"===a.substring(0,4)||"color"===a||"cursor"===a||"direction"===a||"letterSpacing"===a||"unicodeBidi"===a||"wordSpacing"===a?this.control.focusNode:"display"===a||"list"===a.substring(0,4)?
this.control.domNode.parentNode:this.control.domNode};UNIFACE.dijit.editbox.prototype.setStyleProp=function(a,b){try{var c=this.getStyleNode(a).style;if(7===dojo.isIE&&("backgroundColor"===a||"background"===a)){var d=this.control.focusNode.style;this.setCssProperty(d,"backgroundImage","none");this.setCssProperty(d,"backgroundColor","transparent");this.setCssProperty(c,"backgroundImage","none")}this.setCssProperty(this.getStyleNode(a).style,a,b)}catch(f){}};UNIFACE.dijit.editbox.prototype.getAllStyleNodes=
function(){return[this.control.domNode,this.control.domNode.parentNode,this.control.focusNode]};UNIFACE.dijit.editbox.prototype.mapEvents=function(){this.control.intermediateChanges=!0;this.addListener(this.control.domNode,"ondblclick",this.callBack.getEvents().detail);this.addListener(this.control,"onChange",this.callBack.bind("onedit",v));this.addListener(this.control,"onBlur",this.callBack.bind("onchange",k))};UNIFACE.dijit.editbox.prototype.showError=function(a){this.forceError=!0;this.errorText=
a;this.control._hasBeenBlurred=!0;this.control.validate(!0);this.forceError=!1;var b=this.control;window.setTimeout(function(){b.displayMessage(a)},100)};UNIFACE.dijit.editbox.prototype.setProperties=function(){"ff"===r&&(this.control.domNode.firstChild.style.overflowY="visible")};UNIFACE.dijit.editbox.prototype.doRender=function(a){UNIFACE.dijit.prototype.doRender.call(this,a);var b=this;this.control.isValid=function(a){if(b.forceError)return!b.errorText;a=b.callBack.checkValue(this.attr("displayedValue"),
!0);return a.error?(b.errorText=a.error.toString(),!1):!0};this.control.parse=function(a){var c=b.callBack.checkValue(a,!0);return c.error?a:c.newValue};this.control.getErrorMessage=function(){return b.errorText};var c=this.control._isValidSubset;this.control._isValidSubset=function(){return!b.forceError&&c.call(this)};this.control.onFocus=function(){this._u_valueBeforeChange=b.getValue()}};UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.editbox",UNIFACE.dijit.editbox);UNIFACE.dijit.password=function(){UNIFACE.dijit.editbox.apply(this,
arguments);this.initialAttributes.type="password"};UNIFACE.dijit.password.prototype=new UNIFACE.dijit.editbox;UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.password",UNIFACE.dijit.password);UNIFACE.dijit.checkbox=function(){dojo.require("dijit.form.CheckBox");UNIFACE.dijit.apply(this,arguments);this.controlClass=dijit.form.CheckBox};UNIFACE.dijit.checkbox.prototype=new UNIFACE.dijit;UNIFACE.dijit.checkbox.prototype.setValue=function(a){if(this.control)try{var b=a;"string"==typeof a&&(b=a.match(/^(on|yes|y|true|t|1)$/i));
this.control.attr("checked",b)}catch(c){}};UNIFACE.dijit.checkbox.prototype.getValue=function(){if(this.control)return this.control.checked?"1":"0"};UNIFACE.dijit.checkbox.prototype.getStyleNode=function(a){return"cursor"===a?this.control.focusNode:this.control.domNode};UNIFACE.dijit.checkbox.prototype.getAllStyleNodes=function(){return[this.control.domNode,this.control.focusNode]};UNIFACE.dijit.checkbox.prototype.setStyle_width=function(a){};UNIFACE.dijit.checkbox.prototype.setStyle_display=function(a){try{var b=
this.control.domNode.style;7!==dojo.isIE&&"inline"===a&&(a="inline-block");this.setCssProperty(b,"display",a)}catch(c){}};UNIFACE.dijit.checkbox.prototype.setStyleProp=function(a,b){try{0!==a.indexOf("padding")&&0!==a.indexOf("background")&&UNIFACE.dijit.prototype.setStyleProp.apply(this,arguments)}catch(c){}};UNIFACE.dijit.checkbox.prototype.postRender=function(){UNIFACE.dijit.prototype.postRender.apply(this,arguments);7===dojo.isIE&&(this.control.domNode.style.verticalAlign="middle")};UNIFACE.dijit.checkbox.prototype.mapEvents=
function(){var a=this.callBack.getEvents();this.addListener(this.control,"onClick",a.onchange)};UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.checkbox",UNIFACE.dijit.checkbox);UNIFACE.dijit.button=function(){dojo.require("dijit.form.Button");UNIFACE.dijit.apply(this,arguments);this.controlClass=dijit.form.Button};UNIFACE.dijit.button.prototype=new UNIFACE.dijit;UNIFACE.dijit.button.prototype.blockedProperties=g.blockedProperties;UNIFACE.dijit.button.prototype.getStyleNode=function(a){return"visibility"===
a?this.control.focusNode:"verticalAlign"===a?this.control.domNode:"font"===a.substring(0,4)||"text"===a.substring(0,4)||"color"===a||"unicodeBidi"===a||"direction"===a||"lineHeight"===a||"width"===a||"height"===a?this.control.focusNode.lastChild:this.control.focusNode.parentNode};UNIFACE.dijit.button.prototype.setStyleProp=function(a,b){try{var c=this.getStyleNode(a).style;this.setCssProperty(c,a,b);"cursor"===a&&(c=this.control.focusNode.style,this.setCssProperty(c,a,b),dojo.isIE&&"cursor"===a&&
(c=this.control.focusNode.lastChild.style,this.setCssProperty(c,a,b)))}catch(d){}};UNIFACE.dijit.button.prototype.getAllStyleNodes=function(){var a=[this.control.domNode,this.control.focusNode,this.control.focusNode.parentNode];dojo.isIE&&a.push(this.control.focusNode.lastChild);return a};UNIFACE.dijit.button.prototype.setValue=function(a){this.value=a;if(this.control)try{this.control.label!=a&&(a=this.accesskey(a,!0,!0),this.control.attr("label",a))}catch(b){}else a=this.accesskey(a,!0,!0),this.initialAttributes.label=
a};UNIFACE.dijit.button.prototype.getValue=function(){return this.value};UNIFACE.dijit.button.prototype.setHtml_readOnly=function(a){};UNIFACE.dijit.button.prototype.mapEvents=function(){var a=this.callBack.getEvents();a.detail&&this.addListener(this.control,"onClick",a.detail)};UNIFACE.dijit.button.prototype.postRender=function(){UNIFACE.dijit.prototype.postRender.apply(this,arguments);7===dojo.isIE&&(this.control.domNode.style.verticalAlign="middle");var a=document.createElement("label");a.htmlFor=
this.control.focusNode.id;a.accessKey=this.ackey;this.wrapperNode.appendChild(a);var b=this.control._onMouse,c=this;this.control._onMouse=function(){"mousedown"!==arguments[0].type||c.blocked||(c.hasMousedown=!0);b.apply(this,arguments)}};UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.button",UNIFACE.dijit.button);UNIFACE.dijit.dropdown=function(){dojo.require("dojo.data.ItemFileWriteStore");dojo.require("dijit.form.FilteringSelect");e.apply(this,arguments);this.controlClass=dijit.form.FilteringSelect;
this.initialAttributes.store=new dojo.data.ItemFileWriteStore({data:{identifier:"id",items:[]}})};UNIFACE.dijit.dropdown.prototype=new e;UNIFACE.dijit.dropdown.getCallbackValue=function(){if(this.callBack)return l.adapt(this.callBack.getValue())};UNIFACE.dijit.dropdown.prototype.validate=function(){if(""!==this.control.attr("displayedValue")&&!this.control.isValid())return this.control.invalidMessage};UNIFACE.dijit.dropdown.prototype.getStyleNode=function(a){return"text"===a.substring(0,4)||"color"===
a||"cursor"===a||"letterSpacing"===a||"wordSpacing"===a?this.control.focusNode:"display"===a?this.control.domNode.parentNode:this.control.domNode};UNIFACE.dijit.dropdown.prototype.setStyleProp=function(a,b){try{if(7===dojo.isIE&&("backgroundColor"===a||"background"===a)){var c=this.control.downArrowNode.style;this.setCssProperty(c,"backgroundImage","none");c=this.getStyleNode(a).style;this.setCssProperty(c,"backgroundImage","none")}UNIFACE.dijit.prototype.setStyleProp.apply(this,arguments);if(dojo.isIE&&
"font"===a.substring(0,4)){var d=this.control.domNode.style,f=this.control.focusNode.style,h=d.fontFamily;h&&""!==h&&(f.fontFamily=h);(h=d.fontStyle)&&""!==h&&(f.fontStyle=h);(h=d.fontVariant)&&""!==h&&(f.fontVariant=h);(h=d.fontWeight)&&""!==h&&(f.fontWeight=h)}}catch(e){}};UNIFACE.dijit.dropdown.prototype.getAllStyleNodes=function(){var a=[this.control.domNode,this.control.domNode.parentNode,this.control.focusNode];7===dojo.isIE&&a.push(this.control.downArrowNode);return a};UNIFACE.dijit.dropdown.prototype.setValrep=
function(a){if("object"==typeof a&&a&&(this.initialAttributes.store=new dojo.data.ItemFileWriteStore({data:{identifier:"id",items:[]}}),this.control&&(this.control.store=this.initialAttributes.store),a.constructor===Array)){var b;for(b=0;b<a[1].length;b++)try{this.initialAttributes.store.newItem({name:this.accesskey(a[0][a[1][b]],!1,!1),id:l.adapt(a[1][b])})}catch(c){}}};UNIFACE.dijit.dropdown.prototype.getValrep=function(){if(!this.initialAttributes.store)return null;for(var a=[{},[]],b=this.initialAttributes.store._arrayOfAllItems,
c=0;c<b.length;c++){var d=b[c].id;dojo.isArray(d)&&0<d.length&&(d=d[0]);var f=l.adaptBack(d),d=b[c].name;dojo.isArray(d)&&0<d.length&&(d=d[0]);a[0][f]=d;a[1][c]=f}return a};UNIFACE.dijit.dropdown.prototype.setProperties=function(){"ff"==r&&""===this.control.domNode.style.height&&(this.control.domNode.firstChild.style.overflowY="visible")};UNIFACE.dijit.dropdown.prototype.setValue=function(a){UNIFACE.dijit.prototype.setValue.call(this,l.adapt(a));this.control&&!this.control.isValid()&&this.control.attr("displayedValue",
"")};UNIFACE.dijit.dropdown.prototype.setRepresentation=function(a){this.control.attr("displayedValue",a)};UNIFACE.dijit.dropdown.prototype.getRepresentation=function(){return this.control.attr("displayedValue")};UNIFACE.dijit.dropdown.prototype.getValue=function(){return l.adaptBack(UNIFACE.dijit.prototype.getValue.call(this))};UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.dropdown",UNIFACE.dijit.dropdown);UNIFACE.dijit.dropdown.propertyPropagationList=["color","letterSpacing","textDecoration",
"textTransform","wordSpacing"];UNIFACE.dijit.dropdown.prototype.propagateProperties=function(a){for(var b=UNIFACE.dijit.dropdown.propertyPropagationList,c,d,f=b.length-1;0<=f;f--)d=b[f],(c=this.getStyleNode(d).style[d])&&""!==c&&(a.style[d]=c)};UNIFACE.dijit.dropdown.prototype.postRender=function(){UNIFACE.dijit.prototype.postRender.apply(this,arguments);if(dojo.isIE&&(7===dojo.isIE&&(this.control.domNode.style.verticalAlign="middle"),8<=dojo.isIE)){var a=this.control.domNode.firstChild.firstChild.firstChild;
a&&"dijitArrowButtonInner"===a.className&&(a.innerHTML="\u202f")}var b=this,c=this.control.open;this.control.open=function(){var a=c.apply(this,arguments);this._popupWidget&&(b.propagateProperties(this._popupWidget.domNode.parentNode),this._popupWidget.domNode.style.listStyleType="none");return a}};UNIFACE.dijit.dropdown.prototype.initialize=function(a){function b(a){var b=a.toLowerCase();"string"===typeof c[b]&&(this.initialAttributes[a]=!!c[b].match(/^(on|yes|y|true|t|1)$/i))}UNIFACE.dijit.prototype.initialize.call(this,
a);a&&"string"===typeof a.name&&(this.initialAttributes.name=a.name);var c=this.callBack.getCalculatedProperties();b.call(this,"autoComplete");b.call(this,"hasDownArrow");b.call(this,"ignoreCase")};if(dojo&&dojo.isFF&&dijit&&dijit.form&&dijit.form._ComboBoxMenu&&dijit.form._ComboBoxMenu.prototype){var u=dijit.form._ComboBoxMenu.prototype._onMouseUp;"function"===typeof u&&(dijit.form._ComboBoxMenu.prototype._onMouseUp=function(a){var b="0px",c="9999px";try{if(this.domNode&&this.domNode.style&&(c=parseInt(this.domNode.style.height,
10),b=parseInt(this.domNode.parentNode?this.domNode.parentNode.style.top:this.domNode.style.top,10),a.clientY>b+c))return}catch(d){}u.apply(this,arguments)})}UNIFACE.dijit.listbox=function(){dojo.require("dijit.form.MultiSelect");e.apply(this,arguments);this.controlClass=dijit.form.MultiSelect};UNIFACE.dijit.listbox.prototype=new e;UNIFACE.dijit.listbox.prototype.setValue=function(a){a=l.adapt(a);if(this.control)try{a=UNIFACE.luv.util.uListToArray(a),this.control.attr("value",a),this.control._lastValueReported=
a}catch(b){}};UNIFACE.dijit.listbox.prototype.getValue=function(){if(this.control)return l.adaptBack(UNIFACE.luv.util.arrayToUList(this.control.attr("value")))};UNIFACE.dijit.listbox.getCallbackValue=function(){if(this.callBack)return l.adapt(this.callBack.getValue())};UNIFACE.dijit.listbox.prototype.setSyntax=function(){try{var a=this.callBack.getCalculatedProperties().syntax;void 0!=a.REP&&this.getElement()&&1<parseInt(a.REP.max,10)&&(this.getElement().multiple=1<parseInt(a.REP.max,10))}catch(b){}};
UNIFACE.dijit.listbox.prototype.setValrep=function(a){var b;if("object"==typeof a&&a){var c=this.getElement();if(c){var d=c.childNodes,f=0,h=d.length;if(a.constructor===Array)for(b=0;b<a[1].length;b++){var e;if(f<h){e=d[f];if("option"!==e.nodeName.toLowerCase()){var g=document.createElement("option");e.parentNode.replaceChild(g,e);e=g}f++}else e=document.createElement("OPTION"),c.appendChild(e);e.value=l.adapt(a[1][b]);e.innerHTML="";e.appendChild(document.createTextNode(this.accesskey(a[0][a[1][b]],
!1,!1)))}if(f<h){for(a=[];f<d.length;f++)a.push(d[f]);for(f=0;f<a.length;f++)c.removeChild(a[f])}if("ie"===r)try{var k=c.size;c.size=k+1;c.size=k}catch(w){}}}};UNIFACE.dijit.listbox.prototype.getValrep=function(){var a=this.getElement();if(!a)return null;for(var b=[{},[]],a=a.getElementsByTagName("option"),c=0;c<a.length;c++){var d=l.adaptBack(a[c].value);b[0][d]=a[c].firstChild.nodeValue;b[1][c]=d}return b};UNIFACE.dijit.listbox.prototype.initialize=function(a){UNIFACE.dijit.prototype.initialize.call(this,
a);this.initialAttributes.baseClass="dijitComboBox"};UNIFACE.dijit.listbox.prototype.doRender=function(a){UNIFACE.dijit.prototype.doRender.apply(this,arguments);"true"!==this.callBack.getCalculatedProperties().html.multiple&&(this.control.focusNode.multiple=!1);this.setValrep.call(this,this.callBack.getValrep());this.setSyntax.call(this)};UNIFACE.dijit.listbox.prototype.postRender=function(){UNIFACE.dijit.prototype.postRender.apply(this,arguments);7===dojo.isIE&&(this.control.domNode.style.verticalAlign=
"middle")};UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.listbox",UNIFACE.dijit.listbox);UNIFACE.dijit.radiogroup=function(){dojo.require("dijit.form.CheckBox");UNIFACE.dijit.apply(this,arguments);this.initialAttributes={};this.layout={cols:0,rows:0,verticalOrdering:!1};this.controls=null;this.valueList=[]};UNIFACE.dijit.radiogroup.prototype=new UNIFACE.dijit;UNIFACE.dijit.radiogroup.prototype.getAllStyleNodes=function(){var a=[this.getElement()],b=this.control?this.control.domNode:null;b&&b!==
this.getElement()&&a.push(b);for(var c in this.controls)this.controls.hasOwnProperty(c)&&((b=this.controls[c].focusNode)&&b!==this.getElement()&&a.push(b),b!==this.controls[c].domNode&&(b=this.controls[c].domNode)&&b!==this.getElement()&&a.push(b),(b=this.controls[c].labelNode)&&b!==this.getElement()&&a.push(b));return a};UNIFACE.dijit.radiogroup.prototype.isEmpty=function(){for(var a in this.controls)if(this.controls.hasOwnProperty(a))return!1;return!0};UNIFACE.dijit.radiogroup.prototype.getStyleNode=
function(a){return"textIndent"!==a||this.isEmpty()?this.control.domNode:this.control.labelNode.parentNode};UNIFACE.dijit.radiogroup.prototype.setStyleProp=function(a,b){var c,d;if("textIndent"!==a||this.isEmpty()){if("cursor"===a)for(c in this.controls)this.controls.hasOwnProperty(c)&&(d=this.controls[c].focusNode.style,this.setCssProperty(d,a,b),d=this.controls[c].labelNode.style,this.setCssProperty(d,a,b));UNIFACE.dijit.prototype.setStyleProp.apply(this,arguments)}else for(c in this.controls)this.controls.hasOwnProperty(c)&&
(d=this.controls[c].labelNode.parentNode.style,this.setCssProperty(d,a,b))};UNIFACE.dijit.radiogroup.prototype.setHtml_disabled=function(a){this.setHtmlProp("disabled",a)};UNIFACE.dijit.radiogroup.prototype.setHtml_readOnly=function(a){this.setHtmlProp("readOnly",a)};UNIFACE.dijit.radiogroup.prototype.setHtmlProp=function(a,b){var c;if(null===this.controls)return c;var d,f,e=a;if("readOnly"===a||"disabled"==a)f=this.callBack.getCalculatedProperties(),f="true"===f.html.disabled||"true"===f.html.readOnly,
e="disabled";for(d in this.controls)if(this.controls.hasOwnProperty(d))try{if("disabled"===e)c=this.controls[d][e],this.controls[d].attr(e,f);else{var g=this.controls[d].focusNode;c=g[a];g[a]=b}}catch(m){}c&&(c=c.toString());return c};UNIFACE.dijit.radiogroup.prototype.doRender=function(){UNIFACE.dijit.prototype.doRender.apply(this,arguments);this.initialAttributes.name=this.callBack.getId();this.setValrep(this.callBack.getValrep())};UNIFACE.dijit.radiogroup.insertRadio=function(a,b,c,d){var f=document.createElement("TD");
f.className="unifaceRadioInput";c.appendChild(f);var e=document.createElement("INPUT");e.value=b;f.appendChild(e);var g=new dijit.form.RadioButton(a.initialAttributes,e);g.startup();g.domNode.style.cssText+=";display:-moz-inline-block";a.controls[b]=g;var m=document.createElement("TD");m.className="unifaceRadioLabel";c.appendChild(m);e=document.createElement("LABEL");e.setAttribute("for",g.focusNode.id);var k=a.callBack.getValrep();b=a.accesskey(k[0][b],!0,!0);0!==this.ackey&&(e.accessKey=a.ackey);
e.innerHTML=b;m.appendChild(e);g.labelNode=e;d&&"LEFT"===d?c.insertBefore(m,f):c.appendChild(m)};UNIFACE.dijit.radiogroup.prototype.setValrep=function(a){if(this.wrapperNode){this.wrapperNode.innerHTML="";this.controls={};"object"!==typeof a&&(a=[{},[]]);this.valueList=a=a[1];var b=0,c=0,d=!1,e=this.callBack.getCalculatedProperties();e&&(e=e.uniface);if(e){if(e.columns)try{b=parseInt(e.columns,10)}catch(g){b=0}if(e.rows)try{c=parseInt(e.rows,10)}catch(k){c=0}0<b?0<c?c*b<a.length&&(c=Math.ceil(a.length/
b)):c=Math.ceil(a.length/b):0<c?b=Math.ceil(a.length/c):(b=1,c=a.length);"true"===e.verticalorder&&(d=!0)}this.layout.cols=b;this.layout.rows=c;this.layout.verticalOrdering=d;this.control={};var m=document.createElement("TABLE");m.className="unifaceRadioGroup";this.control.domNode=m;m.style.cssText=7===dojo.isIE?"display:inline-block;":dojo.isFF?"display:inline-block;":"display:inline-table;";this.wrapperNode.appendChild(m);m=document.createElement("TBODY");this.control.domNode.appendChild(m);var l=
[],r=0,n,p;if(d){var q=a.length%b;0===q&&(q=b);for(n=0;n<b;n++)for(p=c,n>=q&&p--,d=0;d<p;d++)l[d*b+n]=r++}else for(q=a.length%c,0===q&&(q=c),d=0;d<c;d++)for(p=b,d>=q&&p--,n=0;n<p;n++)l[d*b+n]=r++;p=c*b;for(var s,d=0;d<p;d++)0===d%b&&(s=document.createElement("TR"),m.appendChild(s)),c=l[d],null!=c&&c<a.length&&UNIFACE.dijit.radiogroup.insertRadio(this,a[c],s,e.align);0<a.length?(this.control.focusNode=this.controls[a[0]].focusNode,this.control.labelNode=this.controls[a[0]].labelNode):(this.control.focusNode=
this.control.domNode,this.control.labelNode=this.control.domNode);this.nodesChanged()}};UNIFACE.dijit.radiogroup.prototype.getValrep=function(){var a=[{},[]],b;for(b=0;b<this.valueList.length;b++){var c=this.valueList[b],d=this.controls[c].labelNode;a[0][c]=d.textContent?d.textContent:d.innerHTML?d.innerHTML:d.firstChild.nodeValue;a[1][b]=c}return a};UNIFACE.dijit.radiogroup.prototype.setValue=function(a){this.value=a;this.controls&&this.applyValue()};UNIFACE.dijit.radiogroup.prototype.applyValue=
function(){if("undefined"!=typeof this.controls[this.value])this.controls[this.value].attr("checked",!0);else for(var a in this.controls)this.controls.hasOwnProperty(a)&&this.controls[a].attr("checked",!1)};UNIFACE.dijit.radiogroup.prototype.getValue=function(){var a,b=this.value;for(a in this.controls)if(this.controls[a].checked){b=a;break}return b};UNIFACE.dijit.radiogroup.prototype.mapEvents=function(){var a=this.callBack.getEvents(),b;for(b in this.controls)this.controls.hasOwnProperty(b)&&this.addListener(this.controls[b],
"onClick",a.onchange)};UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.radiogroup",UNIFACE.dijit.radiogroup);UNIFACE.dijit.datepicker=function(){dojo.require("dijit.form.DateTextBox");e.apply(this,arguments);this.controlClass=dijit.form.DateTextBox};UNIFACE.dijit.datepicker.prototype=new e;UNIFACE.dijit.datepicker.convertUnifaceDatePattern=function(a){return a=a.replace(/[dz]?d|aa[a\*]?|mmm\*?|[mz]?m|[wz]?w|(:?xx)?xx|(:?yy)?yy|[zh]?h|[zn]?n|[zs]?s|[a-z']/gi,function(a){a=a.replace(/[zd]d/i,"dd");
a=a.replace(/aaa/i,"EEE");a=a.replace(/aa\*/i,"EEEE");a=a.replace(/aa/i,"EEEEE");a=a.replace(/m/gi,"M");a=a.replace(/MMM\*/,"MMMM");a=a.replace(/zM/i,"MM");a=a.replace(/[zw]w/i,"w");a=a.replace(/YY/i,"yy");a=a.replace(/YYYY/i,"yyyy");a=a.replace(/xxxx/i,"YYYY");a=a.replace(/xx/i,"YY");a=a.replace(/[zh]h/i,"HH");a=a.replace(/h/i,"H");a=a.replace(/[zn]n/i,"mm");a=a.replace(/n/i,"m");a=a.replace(/[zs]s/i,"ss");"'"!==a&&/^[^dmwhs]$/i.test(a)&&(a="");return a})};UNIFACE.dijit.datepicker.prototype.setValue=
function(a){if(this.control){var b=this.control.isValid;this.control.isValid=function(){return!0};try{this.control.attr("displayedValue",a)}catch(c){}finally{this.control.isValid=b}}};UNIFACE.dijit.datepicker.prototype.getValue=function(){if(this.control)return this.control.attr("displayedValue").toString()};UNIFACE.dijit.datepicker.prototype.initialize=function(a){a=this.callBack.getCalculatedProperties().syntax;var b=a.DISpattern;void 0==b&&(b=a.DIS,b=void 0==b?"dd-MMM-yyyy":UNIFACE.dijit.datepicker.convertUnifaceDatePattern(b),
a.DISpattern=b);void 0==this.initialAttributes.constraints&&(this.initialAttributes.constraints={});this.initialAttributes.constraints.datePattern=b;void 0===this.initialAttributes.displayedValue&&(this.initialAttributes.displayedValue=this.getCallbackValue())};UNIFACE.dijit.datepicker.prototype.postRender=function(){UNIFACE.dijit.prototype.postRender.apply(this,arguments);7===dojo.isIE&&(this.control.domNode.style.verticalAlign="middle")};UNIFACE.dijit.datepicker.prototype.getStyleNode=function(a){return"textIndent"===
a?7===dojo.isIE?this.control.focusNode:this.control.domNode:"text"===a.substring(0,4)||"color"===a||"letterSpacing"===a||"wordSpacing"===a?this.control.focusNode:"display"===a||"list"===a.substring(0,4)?this.control.domNode.parentNode:this.control.domNode};UNIFACE.dijit.datepicker.prototype.setStyleProp=function(a,b){try{if(7!==dojo.isIE||"backgroundColor"!==a&&"background"!==a||(this.getStyleNode(a),this.setCssProperty(this.control.domNode.style,"backgroundImage","none")),"cursor"===a&&this.setCssProperty(this.control.focusNode.style,
a,b),UNIFACE.dijit.prototype.setStyleProp.apply(this,arguments),dojo.isIE){var c=this.getStyleNode("lineHeight").style.lineHeight;if(c&&"normal"!==c)if(8===dojo.isIE)this.control.focusNode.style.lineHeight="normal";else if(7===dojo.isIE){var d=this.control.focusNode.parentNode.style;/^\d*$/.test(c)?d.height=c+"em":d.height=c}}}catch(e){}};UNIFACE.dijit.datepicker.prototype.getAllStyleNodes=function(){return[this.control.domNode,this.control.domNode.parentNode,this.control.focusNode]};UNIFACE.widgetFactory.addCreator("UNIFACE.dijit.datepicker",
UNIFACE.dijit.datepicker)}})();
