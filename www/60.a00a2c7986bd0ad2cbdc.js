(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{cRhG:function(t,n,i){"use strict";i.r(n),i.d(n,"ProfilePageModule",function(){return u});var c=i("ofXK"),e=i("3Pt+"),o=i("TEn/"),r=i("tyNb"),a=i("fXoL"),b=i("tk/3");function s(t,n){if(1&t&&(a.Mb(0,"div"),a.Mb(1,"ion-card"),a.Mb(2,"ion-card-content",4),a.Kb(3,"img",5),a.Mb(4,"ion-card-title"),a.fc(5),a.Lb(),a.Mb(6,"p"),a.fc(7),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t){const t=a.Vb();a.zb(3),a.Zb("src",t.character.image,a.cc),a.zb(2),a.hc(" ",t.character.name," "),a.zb(2),a.gc(t.character.status)}}const f=[{path:"",component:(()=>{class t{constructor(t,n){this.activatedRoute=t,this.http=n}ngOnInit(){this.profileId=this.activatedRoute.snapshot.paramMap.get("id"),this.http.get("https://rickandmortyapi.com/api/character/"+this.profileId).subscribe(t=>this.character=t)}}return t.\u0275fac=function(n){return new(n||t)(a.Jb(r.a),a.Jb(b.a))},t.\u0275cmp=a.Db({type:t,selectors:[["app-profile"]],decls:11,vars:1,consts:[["slot","start"],["defaultHref","userslist"],["sizeMd","4","offsetMd","4"],[4,"ngIf"],[1,"ion-text-center"],["alt","",3,"src"]],template:function(t,n){1&t&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-title"),a.fc(3,"Perfil"),a.Lb(),a.Mb(4,"ion-buttons",0),a.Kb(5,"ion-back-button",1),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"ion-content"),a.Mb(7,"ion-grid"),a.Mb(8,"ion-row"),a.Mb(9,"ion-col",2),a.ec(10,s,8,3,"div",3),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.zb(10),a.Yb("ngIf",n.character))},directives:[o.n,o.w,o.v,o.f,o.c,o.d,o.k,o.m,o.u,o.j,c.i,o.g,o.h,o.i],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(f)],r.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(n){return new(n||t)},imports:[[c.b,e.a,o.x,p]]}),t})()}}]);