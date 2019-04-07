// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
      constructor() {
            this.events = {}; 
      }
	// Register an event handler
      on(eventName, callback) {
            // If exist push to list of callbacks
            if (this.events[eventName]) {
                  this.events[eventName].push(callback);
            // If not add eventName as key with array of callback
            } else {
                  this.events[eventName] = [callback];
            }
      }

	// Trigger all callbacks associated
	// with a given eventName
      trigger(eventName) {
            // if this event is registered
            if (this.events[eventName]) {
                  // Loop through each callback in array and call
                  for (let fn of this.events[eventName]) {
                        fn(); // Call callback function 
                  }
            }
      }

	// Remove all event handlers associated
	// with the given eventName
      off(eventName) {
            // Deleting key from object
            delete this.events[eventName];
      }
}

module.exports = Events;
