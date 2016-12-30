
var watch = require('watch')
watch.createMonitor('./app', function (monitor) {
  monitor.files['./app'] // Stat object for my zshrc.
  monitor.on("created", function (f, stat) {
    // Handle new files
    console.log(1)
  })
  monitor.on("changed", function (f, curr, prev) {
    // Handle file changes
      console.log(f)
  })
  monitor.on("removed", function (f, stat) {
    // Handle removed files
      console.log(3)
  })
  // monitor.stop(); // Stop watching
})
