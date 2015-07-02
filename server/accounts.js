Meteor.startup(function(){
  Accounts.emailTemplates.from = "DevCon <devcon@ethdev.com>";
  Accounts.emailTemplates.verifyEmail.subject = function(user){
    return "Please confirm your email address";
  };
});
