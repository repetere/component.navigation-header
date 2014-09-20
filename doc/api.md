#Index

**Classes**

* [class: navigationHeader](#navigationHeader)
  * [new navigationHeader()](#new_navigationHeader)
  * [navigationHeader.getOptions()](#navigationHeader#getOptions)

**Events**

* [event: "openSubNav"](#event_openSubNav)

**Functions**

* [getEventTarget(e)](#getEventTarget)
* [showNav(style)](#showNav)
* [showSubNav(style)](#showSubNav)

**Members**

* [navStyles](#navStyles)
* [subNavStyles](#subNavStyles)
 
<a name="navigationHeader"></a>
#class: navigationHeader
**Members**

* [class: navigationHeader](#navigationHeader)
  * [new navigationHeader()](#new_navigationHeader)
  * [navigationHeader.getOptions()](#navigationHeader#getOptions)

<a name="new_navigationHeader"></a>
##new navigationHeader()
A module that a fixed navigation header.

**Author**: Yaw Joseph Etse  
**License**: MIT  
**Copyright**: Copyright (c) 2014 Typesettin. All rights reserved.  
<a name="navigationHeader#getOptions"></a>
##navigationHeader.getOptions()
Returns current navigation header config object.

**Returns**: `object` - - navigation header instance configuration object  
<a name="event_openSubNav"></a>
#event: "openSubNav"
recalculate the window dimensions.

**Params**

- event `object` - event object  

<a name="getEventTarget"></a>
#getEventTarget(e)
recalculate the window dimensions.

**Params**

- e `object` - event object  

**Returns**: `object` - dom element event target  
<a name="showNav"></a>
#showNav(style)
set the navigation style

**Params**

- style `number` - index of style in @this.navStyles  

<a name="showSubNav"></a>
#showSubNav(style)
show the sub navigation style

**Params**

- style `number` - index of style in @this.navStyles  

<a name="navStyles"></a>
#navStyles
navigation style options array

<a name="subNavStyles"></a>
#subNavStyles
sub navigation style object mapper to navigation style, this allows for quick assignmnent of a navigation style and a sub navigaiton style

