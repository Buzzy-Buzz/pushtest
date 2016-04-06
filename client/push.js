/**
 * Created by adamginsburg on 6/04/2016.
 */
Meteor.startup(function(){
    if (Meteor.isCordova){
        Push.debug = true

        Push.addListener('token', function(token) {
            alert('(Test) Push token received: ' + JSON.stringify(token));
        });

        Push.addListener('error', function(err) {
            alert('(Test) Push error: '+err);
        });

        Push.addListener('message', function(notification) {
            alert('(Test) Push message: '+notification.message);
        });

        Push.addListener('alert', function(notification) {
            alert('(Test) Push alert: '+notification.message);
        });

        alert('(Test) Registered Push events');
    } else {
        console.warn('NOT registering Push events');
    }
})
