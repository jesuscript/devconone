Accounts.onEmailVerificationLink(function(token, done){
  Accounts.verifyEmail(token, function(err){
    if(err){
      console.log("err", err);
    }else{
      done();
      Session.set("showVerifiedFeedback", true);
      setTimeout(function(){
        Session.set("showVerifiedFeedback");
      }, 10000);
    }
  });
});
