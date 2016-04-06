import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
    Meteor.loginWithPassword({id:"gFfC2F6duGSjM3NXh"}, "password")
});

Template.hello.helpers({
  userID() {
    return Meteor.userId();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
      Meteor.loginWithPassword({id:"gFfC2F6duGSjM3NXh"}, "password")
  },
});
