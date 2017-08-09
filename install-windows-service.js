var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name: 'Express WEBSITE',
    description: 'The nodejs.org server for express-app.',
    script: require('path').join(__dirname, 'app.js')
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
    console.log('install Completed');
    svc.start();
});

svc.on('uninstall', function () {
    console.log('Uninstall Completed');
});

//svc.uninstall();


svc.install();