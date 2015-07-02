Meteor.methods({
  signup: function(doc){
    Accounts.sendVerificationEmail(Accounts.createUser({
      email: doc.email,
      password: Meteor.uuid(),
      profile: {
        name: doc.name
      }
    }));
  },
  isEmailRegistered: function(email){
    return !!Meteor.users.findOne({"emails.address": email});
  }
});
