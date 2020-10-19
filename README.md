ember-cli-reddit-pixel
==============================================================================

Plugin for ember-cli that injects Reddit Pixel tracking code into HTML <head> content. 

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-reddi-pixel
```


Usage
------------------------------------------------------------------------------

Once your environment is configred to include your Pixel id (and the enabled flag is set to true), the Facebook 
 Pixel tracking code will be injected into your index.html file.
 
A service is provided for simple access to the global `rdt(...)` function inside of your Ember application.
 This service allows you to call the global `rdt(...)` function regardless of your environment - if the 
 Reddit Pixel code hasn't been injected in your head (consequently, the `rdt(...)` function 
 is not available), the service will disregard the function call. 
 
 ```js
// environment.js
 
var ENV = {
	redditPixel: {
    	enabled: false,
	id: 'xxxxxxxxxxxxxxx',

    }
};
 
if (environment === 'production') {
	ENV.redditPixel.enabled = true;
}
 ```
 
```javascript
import { inject } from '@ember/service';

export default Ember.Component.extend({
	redditPixel: inject(),
	
	actions: {
		buttonClicked() {
			this.get('redditPixel').rdt('track', 'SomeEventName');
		}
	}
});

```

In the above example, the global `rdt(...)` function will be called in  the production environment, sending 
 `rdt('track', 'SomeEventName')`. If in the development environment, `rdt('track', 'SomeEventName')` will be
 discarded; only a console.log statement (with the rtd parameters) will be called. 
