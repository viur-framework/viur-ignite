# Change Log
All notable changes to this project will be documented in this file.

## [3.0.00] - 2018-09-24
After more than a year of development Ignite 3.0.00 now serves as a less foundation library.
Put it into any project for a solid boiler plate.
Functions and output file size have been reduced to the bare minimum.
You have to opt-in and initialize functions to use them.

### Added
- all generic components are now guarded: you have to opt-in
- border mixin is now used in generic components

### Changed
- folders have been restructured 
- »tools« renamed to »mixins«
- gulpfile changed to adopt the new folder structure
- moved utility functions to the corresponding mixin less files (e.g. .shd() to shadow.less) 
- moved .basicInput() to its own less file
- more undocumented changes
- version syntax from "-v" to "--" (&-vSmall is now &--small)

### Removed
- grid.less has been removed, please use display: grid;  
- util.less has been removed
- cleaned up some obsolete vendor prefixes
- camelCase in class names (btnGroup, optionGroup, -vSmall etc.)

## 2.0.00 - 2016-12-19

In this major release ViUR Ignite CSS starts using the mobile first paradigm.

This means some huge changes to the way media queries are handled.
With 2.0.0 just use classes with .mq- prefix.
They are stored within mediaqueries.less and can be stacked (min + max + orientation).
The gulp task merges all media queries to the end of the compiled css file.

Moreover flex layout is no longer the exception but the norm.

## [1.0.24] - 2016-08-16
### Added
- menu variation .menu-vRow
- single element spinner: .single-spinner
- single-spinner support for buttons and menu-links
- :focus states for inputs
- .switch (boolean selection)
- .radio buttons (single selection)
- .check boxes (multiple selection)
- .optionGroup to arrange radios and checks
- .optionGroup-vSelectionList to style radio and check groups as scrollable list
- NESW positioning for .popup element
- util.less elements: text transforms, repsosive format, show/hiding class
- image shapes (rounded, circle, thumbnail)
- .thumnail
- cite element to .blockquote
- kbd (key) element
- added support for .input-vBlock and .textarea-vBlock next to a label (inline)
- table.less: no-border variations
- build task:
	- stylefmt for the correct syntax
	- sourcemap support
	- support for /* ... */ comments in style.css
- Small and large modifier for .popup element

### Changed
- using .menuWrapper for mobile menu instead of .sidebar
- some responsive behaviour of form elements for increased consistency
- now each element is border-box: box-sizing (before there were some exceptions)
- .shd, .center (X, Y), .pointer are now native css classes so you can use those as mixin and in html
- restyled pre/code element
- grid sizes/offsets (third, quarter)
- redrawn headlines/sublines
- .popup-content and .popup-footer now use em instead of rem in font-size
- .content now uses min-width:0; instead of overflow:hidden;
- .single-spinner is now smaller

### Deprecated
- .formActions are deprecated: please use the .bar element instead

### Fixed
- double scroller
- namespacing for tabs (styling affected radio buttons)
- .popup now has a max-height and proper content scrollbars
- .barGroup-vRight and .barGroup-vCenter now float correctly


## [1.0.23] - 2016-07-31
### Added
- center-functions [.center(), .centerX().centerY()]
- key element: a container to present key visuals, claims or slogans
- bar element: for vertical alignment and horizontal distribution, such as navigation bars or inline forms
- pagination
- tab variation: tab-vFullscreen

### Changed
- monoFont to 'Source Code Pro'
- .tab label is now called .tab-label to increase the sturdiness
- .media-image.small is now called .media-image.media-image-vSmall to increase consistency
- breadcrumb items are now namespaced

### Fixed
- placeholder.svg is now linked correctly in image.less
- Tabs work again


## [1.0.22] - 2016-07-28
### Removed
- removed doc styles


## [1.0.21] - 2016-07-24
### Added
- several slider styles


## [1.0.20] - 2016-07-23
- Changelog started here


[Unreleased]: https://github.com/viur-framework/ignite/compare/3.0.00...develop
[3.0.00]: https://github.com/viur-framework/ignite/compare/1.0.24...3.0.00
[1.0.24]: https://github.com/viur-framework/ignite/compare/1.0.23...1.0.24
[1.0.23]: https://github.com/viur-framework/ignite/compare/1.0.22...1.0.23
[1.0.22]: https://github.com/viur-framework/ignite/compare/1.0.21...1.0.22
[1.0.21]: https://github.com/viur-framework/ignite/compare/1.0.20...1.0.21
[1.0.20]: https://github.com/viur-framework/ignite/compare/02a8706fb892b091bfa913d3194736a5d5a1ef4a...1.0.20
