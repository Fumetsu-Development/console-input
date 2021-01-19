# usage
## basic usage
```javascript
const { input, output } = require('@shinigami_dev/console.input');

const question = input('Name? ');
// Console logs: Name?
output(`name: ${question}`);
// Console logs: Name? <input>
```
* `input()` & `output()` are logged *in the order they are defined*.
## input
```javascript
const { input } = require('@shinigami_dev/console.input');

const question = input('Name? ')
// Console logs: Name?
// After input is entered the proccess is exited if output() is not called.
```
## output
```javascript
const { input, output } = require('@shinigami_dev/console.input');

const question = input('Name? ');
// Console logs: Name?
output(`name: ${question}`);
// Console logs: Name? <input>
// Input needs to be called for output() to function.
```