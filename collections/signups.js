SignupSchema = new SimpleSchema({
  name: {
    type: String
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    unique: true,
    custom: function(){
      if(Meteor.isClient && this.isSet){
        var s = SignupSchema.namedContext("signupForm");

        Meteor.call("isEmailRegistered", this.value,  function(err, res){
          if(res){
            s.addInvalidKeys([
              {name: "email", type: "alreadySubscribed"}
            ]);
          }
        });
      }
    }
  }
});

SimpleSchema.messages({
  alreadySubscribed: "Already subscribed"
});
