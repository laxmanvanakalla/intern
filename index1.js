function ser(orgg,callback){
  var _= require('underscore');
  const octokit = require('@octokit/rest')();
  octokit.authenticate({
    type: 'token',
    token: '04c94dbaee672c1816e741592c05194e3d569a25'
  });
  var a={};
  octokit.repos.getForOrg({
    org: 'google',
    type: 'public'
  }).then(({data, headers, status}) => {
    a=_.sortBy(data,'forks');
  });
  setTimeout(dothis,10000);
  const name='';
  var cont=[];
  function dothis(){

    a=a.slice(a.length-5,a.length);

    var cnt=0;
    a.map(function (rep){
       octokit.repos.getContributors({owner:orgg, repo:rep.name})
       .then((res)=>{
         cont[cnt]=res.data;
         if(cnt==4){callback(null,a);}
         cnt++;
       })
      .catch((er)=>{
        console.log(er);
      });
    });
  }



};

// var l=ser('google',(err,a)=>{console.log(typeof(a);console.log(typeof(err));  } );
var l=ser('google',(err,a)=>{return a});
setTimeout(()=>{
  console.log(l)
},50000);
module.exports=ser;
