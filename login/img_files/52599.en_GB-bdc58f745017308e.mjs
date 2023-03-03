(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[52599],{780679:(e,o,t)=>{t.d(o,{g:()=>n,t:()=>a});var i=t(667294);const l=(0,i.createContext)(null),a=l.Provider,n=()=>(0,i.useContext)(l)},298361:(e,o,t)=>{t.d(o,{Z:()=>n});var i=t(898781),l=t(349700),a=t(202139);function n(){const e=(0,i.ZP)();return function(o,t){const i=new Date(o),n=new Date-i,r=Math.floor(n/a.FS),s=Math.floor(n/a.UK),d=Math.floor(n/a.F4),c=Math.floor(n/a.VL),_=Math.floor(n/a.N1),u=e.nbt(["{{ minutes }} minute ago", "{{ minutes }} minutes ago"], r, " - ", true),h=e.nbt(["{{ hours }} hour ago", "{{ hours }} hours ago"], s, " - ", true),m=e.nbt(["{{ days }} day ago", "{{ days }} days ago"], d, " - ", true),g=e.nbt(["{{ weeks }} week ago", "{{ weeks }} weeks ago"], c, " - ", true),p=e.nbt(["{{ years }} year ago", "{{ years }} years ago"], _, " - ", true),x=e.nbt(["{{ minutes }}m", "{{ minutes }}m"], r, "minutes ago abbreviated", true),v=e.nbt(["{{ hours }}h", "{{ hours }}h"], s, "hours ago abbreviated", true),f=e.nbt(["{{ days }}d", "{{ days }}d"], d, "days ago abbreviated", true),b=e.nbt(["{{ weeks }}w", "{{ weeks }}w"], c, "weeks ago abbreviated", true),y=e.nbt(["{{ years }}y", "{{ years }}y"], _, "years ago abbreviated", true);return _>0?(0,l.nk)(t?y:p,{years:_}).join(""):c>0?(0,l.nk)(t?b:g,{weeks:c}).join(""):d>0?(0,l.nk)(t?f:m,{days:d}).join(""):s>0?(0,l.nk)(t?v:h,{hours:s}).join(""):r>0?(0,l.nk)(t?x:u,{minutes:r}).join(""):e.bt("Just now", "Just now", " - ", undefined, true)}}},892819:(e,o,t)=>{t.d(o,{Z:()=>r});var i=t(66699),l=t(898781);const a=(e,o)=>{const t=o||0,i=10**t,l=+(t?e*i:e).toFixed(8),a=Math.floor(l),n=l-a,r=n>.5-1e-8&&n<.5+1e-8?a%2==0?a:a+1:Math.round(l);return t?r/i:r},n=e=>{try{(0).toLocaleString([e])}catch(o){return!1}return!0};function r(){const e=(0,l.ZP)();return(o,t,l)=>{let r=0,s=0;const d=l&&l.style||void 0,c=l&&l.shortform||!1,_=l&&l.uplimit||void 0,u=l&&l.currency||void 0,h=!!_&&t>=_,m=_&&h?_:t;if("currency"===d){const{minimumFractionDigits:e,maximumFractionDigits:t}=((e,o)=>{if(o){const{minimumFractionDigits:t,maximumFractionDigits:i}=new Intl.NumberFormat(e,{style:"currency",currency:o}).resolvedOptions();if(void 0!==t&&void 0!==i)return{minimumFractionDigits:t,maximumFractionDigits:i}}return{minimumFractionDigits:2,maximumFractionDigits:2}})(o,u);r=void 0===l||void 0===l.maximum_fraction_digits?t:l.maximum_fraction_digits,s=void 0===l||void 0===l.minimum_fraction_digits?e:l.minimum_fraction_digits}else r=void 0===l||void 0===l.maximum_fraction_digits?0:l.maximum_fraction_digits,s=void 0===l||void 0===l.minimum_fraction_digits?0:l.minimum_fraction_digits;if(c&&m>999&&(r=void 0===l||void 0===l.shortform_maximum_fraction_digits?2:l.shortform_maximum_fraction_digits,s=0),r<s)return String(m);let g=m,p="";const x=[{"100M":{value:1e8,localeKey:e.bt("億", "億", "Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.", undefined, true)}},{"10k":{value:1e4,localeKey:e.bt("万", "万", "Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.", undefined, true)}}],v=[{b:{value:1e9,localeKey:e.bt("B", "B", "Abbreviation for one billion.", undefined, true)}},{m:{value:1e6,localeKey:e.bt("M", "M", "Abbreviation for one million.", undefined, true)}},{k:{value:1e3,localeKey:e.bt("k", "k", "Abbreviation for one thousand.", undefined, true)}}],f=/^zh|ja|ko/.test(o);if(c&&m>999){const e=f?x:v;for(let o=0;o<e.length;o+=1){const t=Object.keys(e[o])[0],i=e[o][t].value;if(m>=i){g=a(m/i*Math.pow(10,r))/Math.pow(10,r),p=e[o][t].localeKey;break}}}if(null==g)return"";const b=g.toLocaleString([n(o)&&"ar-SA"!==o?o:"en-US"],(({maximumFractionDigits:e,minimumFractionDigits:o,style:t,currency:i})=>{const l={maximumFractionDigits:e,minimumFractionDigits:o};return t?{...l,style:t,..."currency"===t?{currency:i,currencyDisplay:"symbol"}:{}}:l})({maximumFractionDigits:r,minimumFractionDigits:s,currency:u,style:d}));return p&&p.length>0?(0,i.Z)(e.bt("{{formattedNumber}}{{numberSuffix}}", "{{formattedNumber}}{{numberSuffix}}", "i18n.usePrettyNumberFormat.prettyNumberFormat", undefined, true),{formattedNumber:b,numberSuffix:p})+(h?"+":""):b+(h?"+":"")}}},458882:(e,o,t)=>{t.d(o,{l:()=>a,r:()=>n});var i=t(667294);const l=(0,i.createContext)(null),a=()=>(0,i.useContext)(l),n=l.Provider},667679:(e,o,t)=>{t.d(o,{Z:()=>a});var i=t(458882),l=t(780679);const a=()=>{const e=(0,l.g)(),o=(0,i.l)();return t=>{const{mobileOptions:i,desktopOptions:l,reason:a,attributionLabel:n}=t;e?e.showDesktopSignupModal({signupFlow:"login"===(null==l?void 0:l.modalType)?{type:"login"}:{type:"signup"},reason:a,attributionLabel:n,...null==l?void 0:l.modalOptions}):o&&o.showMobileSignupModal({reason:a,attributionLabel:n,headingType:null==i?void 0:i.headingType})}}},985913:(e,o,t)=>{t.d(o,{Z:()=>a});var i=t(858142);const l=/\{\{\s*(\w+)\s*\}\}/g,a=(e,o)=>(0,i.Z)(l,e,o)},858791:(e,o,t)=>{t.d(o,{Z:()=>i});const i=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;")},858142:(e,o,t)=>{t.d(o,{Z:()=>i});const i=(e,o,t)=>o?o.replace(e,((e,o)=>t&&Object.prototype.hasOwnProperty.call(t,o)?t[o]:"")):""},66699:(e,o,t)=>{t.d(o,{Z:()=>a});var i=t(985913),l=t(858791);const a=(e,o)=>{const t={};return Object.keys(o).forEach((e=>{t[e]=o[e]?(0,l.Z)(o[e].toString()):""})),(0,i.Z)(e,t)}},758127:(e,o,t)=>{t.d(o,{U:()=>a,Z:()=>n});var i=t(883119),l=t(785893);const a=", ";function n(){return(0,l.jsx)(i.xu,{display:"visuallyHidden",children:a})}},948618:(e,o,t)=>{t.d(o,{Z:()=>a});var i=t(883119),l=t(785893);function a({ariaHidden:e=!1,color:o="darkGray",size:t}){return(0,l.jsx)("span",{"aria-hidden":e,style:{padding:"0 4px"},children:(0,l.jsx)(i.xv,{color:o,inline:!0,size:null!=t?t:"200",children:"·"})})}},815613:(e,o,t)=>{t.d(o,{Z:()=>P});var i=t(829407),l=t(898781),a=t(112690),n=t(927383),r=t(201155),s=t(667679),d=t(52022),c=t(19121),_=t(945698),u=t(62409),h=t(773285),m=t(350118),g=t(698330),p=t(50286),x=t(343341),v=t(640064),f=t(867820),b=t(883119),y=t(785893);const w=({children:e,pulsar:o,testId:t})=>o.show?(0,y.jsx)(b.xu,{position:"relative","data-test-id":t,children:(0,y.jsxs)(b.iP,{tapStyle:"none",onTap:o.onClick,children:[(0,y.jsx)(b.xu,{position:"absolute",marginTop:-5,dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},children:e}),(0,y.jsx)(b.xu,{position:"absolute",marginTop:-12,dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},children:(0,y.jsx)(b.o3,{})})]})}):(0,y.jsx)(b.xu,{"data-test-id":t,children:e});function P({auxData:e,disabled:o,disableLog:t,followEventType:P,id:A,inline:z,invertColors:j,isFollowed:S,isIdeaPin:C,isLegoEnabled:k,isSecondaryButton:F,isUserFollowButton:I,isUserMe:Z,onFollow:T,onUnfollow:B,pinId:D,shouldUseLegoColors:L,showPulsar:M,size:E,textType:U="FollowFollowing",unfollowEventType:R,viewParameter:H,viewType:O}){const N=(0,l.ZP)(),G=(0,p.HG)(),{showToast:W}=(0,x.F9)(),K=(0,d.Z)(),X=(0,a.Z)(),q=(0,s.Z)(),{checkExperiment:$}=(0,h.F)(),J=(0,n.Z)(),V=(0,c.Z)(),Y=V&&V.isAuth,{unauthFollowUserId:Q,setUnauthFollowUserId:ee}=(0,v.f)(),oe=(0,g.mN)()(A),te=(0,m.S6)()(null!=D?D:""),{link_domain:ie,native_creator:le,origin_pinner:ae,pinner:ne}=te||{},re=(0,u.wS)(ie,le,ae,ne),se=null!=oe?oe:re;(0,i.Z)((()=>{!G&&Y&&Q&&A&&Q===A&&T(A)}));const de=J({fn:()=>{Y?S?(B(A),t||X({event_type:R,view_type:O,view_parameter:H,object_id_str:A,aux_data:e})):(T(A),I&&W((({hideToast:e})=>{if(!se)return null;const o=se.username?`/${se.username}/`:"";return(0,y.jsx)(r.Z,{handleHide:e,text:(0,y.jsx)(b.xv,{children:N.bt("Following! Their created Pins will show up in your home feed!", "Following! Their created Pins will show up in your home feed!", "followButton.follow.informationalToastText", undefined, true)}),userId:A,href:o,imageUrl:se.image_medium_url})})),t||X({event_type:P,view_type:O,view_parameter:H,object_id_str:A,aux_data:e})):((0,f.My)(`mweb_unauth_follow_button.tap.${String(O)}`),5===O&&26===P&&(0,f.My)("mweb_unauth_board_page_follow_button.tap"),(0,f.NC)(S?"press_profile_unfollow":"press_profile_follow"),K({action:"click",item:"board-follow-button"}),q({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:C?"tap.unauth_idea_pin.follow_button":"tap.unauth.follow_button",desktopOptions:{modalType:"signup",modalOptions:G&&$("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!G&&$("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),G||ee(null!=A?A:""),(0,f.NC)("clickthrough"))},modalHeader:(0,_.N4)({i18n:N,toFollow:!S})}),ce=!S&&!!M,_e=()=>{if(Z)return N.bt("That's you!", "That's you!", "Follow button is disabled because this is you", undefined, true);if("AddRemove"===U)return S?N.bt("Remove", "Remove", "unfollowButton.removeText", undefined, true):N.bt("Add", "Add", "followButton.addText", undefined, true);const e="FollowUnfollow"===U?N.bt("Unfollow", "Unfollow", "unfollowButton.unfollowText", undefined, true):N.bt("Following", "Following", "Follow button label - followed state", undefined, true);return S?e:N.bt("Follow", "Follow", "Follow button label - unfollowed state", undefined, true)};return(0,y.jsx)(w,{pulsar:ce?{show:!0,onClick:de}:{show:!1},testId:Z||S?"board-unfollow-button":"board-follow-button",children:(0,y.jsx)(b.zx,{color:L||"AddRemove"===U||!k&&F||S?"gray":"red",disabled:Z||o,fullWidth:z,onClick:ce?void 0:({event:o})=>{o.preventDefault(),o.stopPropagation(),t||X({event_type:101,component:13672,element:11951,object_id_str:A,view_type:O,view_parameter:H,aux_data:e}),de()},selected:j?!S:L&&S||!!S&&F,size:E,text:_e(),accessibilityLabel:_e()})})}},80811:(e,o,t)=>{t.d(o,{Z:()=>y});var i=t(667294),l=t(948618),a=t(815613),n=t(298361),r=t(112690),s=t(892819),d=t(19121),c=t(349700),_=t(867820),u=t(50286),h=t(758127),m=t(722556),g=t(898781),p=t(883119),x=t(526760),v=t(785893);function f(e,o){const{full_name:t,username:i}=e,l=(0,v.jsx)(p.rU,{href:`/${i}`,display:"inlineBlock",underline:"hover",children:t});return(0,c.nk)(o.bt("{{ linkToUser }} invited you to join this board", "{{ linkToUser }} invited you to join this board", "boardRep.invite.invitationText", undefined, true),{linkToUser:l})}const b=({children:e})=>{const o=(0,d.Z)(),t=(0,u.HG)(),i=o&&o.isAuth;return t&&i?(0,v.jsx)(p.X6,{accessibilityLevel:2,size:"400",lineClamp:1,children:e}):(0,v.jsx)(p.xv,{lineClamp:1,weight:"bold",children:e})};function y({archivedDate:e,boardUrl:o,canEdit:t,collaborators:d,collaboratorsCount:y=0,containerBackgroundColor:w,coverPhoto:P,followedByMe:A,fullSizeDrawer:z,sensitivityScreen:j,handleInviteResponse:S,hideMeta:C,id:k,invite:F,imagesLego:I=[],isBoardInviteAccepted:Z,isActive:T,isAuthenticated:B,isCollaborative:D,isCollaborator:L,isOwner:M,isProtected:E,isSecret:U,lastModifiedDate:R,layout:H,locale:O,name:N,numCols:G,onEditClick:W,onFollow:K,onUnfollow:X,owner:q,pinCount:$=0,sectionCount:J,showFollowButton:V,viewParameter:Y,viewType:Q,viewerId:ee}){const oe=(0,g.ZP)(),te=(0,n.Z)(),ie=(0,s.Z)(),le=(0,r.Z)(),ae=(0,u.HG)(),ne=ae&&B,re="square"===H?x.M0:x.z9,se=I.map((e=>({url:e.url,name:N}))),de=!!q&&!t&&V,ce=!M&&!L&&!(null==j||!j.show_warning),_e={board_id:k,reason:null==j?void 0:j.reason};(0,i.useEffect)((()=>{ce&&le({event_type:13,component:13861,view_type:215,aux_data:_e})}),[]);const ue=q?q.id:void 0,he=[...d.filter((({id:e})=>e===ue)),...d.filter((({id:e})=>e===ee&&e!==ue)),...d.filter((({id:e})=>![ue,ee].includes(e)))].map((e=>{var o,t;return{name:null!==(o=ne?e.full_name:e.username)&&void 0!==o?o:"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":null!==(t=e.image_medium_url)&&void 0!==t?t:""}}));let me=y>=he.length?y-he.length:0;me=me>99?100:me;const ge=[...he,...Array(me).fill({name:"",src:""})],pe=ne?24:16,xe=pe/3*(2*(he.length>2?3:he.length)+1);return(0,v.jsxs)(p.xu,{"data-test-id":`boardCard-${N}`,position:"relative",height:de?"max(calc(25vh + 10px), 220px)":"100%",width:ne?re:"100%",children:[(0,v.jsx)(m.Z,{canEdit:t,containerBackgroundColor:w,coverPhoto:P,images:se,isProtected:E,isSecret:U,fullSize:z,showSensitivityScreen:ce,isActive:T,onEditClick:W,layout:H}),!C&&(0,v.jsx)(i.Fragment,{children:F?(0,v.jsxs)(i.Fragment,{children:[(0,v.jsxs)(p.xu,{padding:2,alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,v.jsxs)(p.xu,{width:"100%",children:[(0,v.jsx)(p.rU,{href:null!=o?o:"",children:(0,v.jsx)(p.xu,{marginTop:0,marginBottom:1,children:(0,v.jsx)(b,{children:N})})}),Z?(0,v.jsx)(p.xv,{size:"200",lineClamp:1,children:oe.bt("You’ve joined", "You’ve joined", "boardRep.invite.invitationAcceptedText", undefined, true)}):(0,v.jsx)(p.xv,{size:"200",children:f(F.invited_by_user,oe)})]}),(0,v.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},marginStart:2,width:xe,minWidth:xe,height:pe,children:(0,v.jsx)(p.HE,{accessibilityLabel:h.U+(oe.bt("Board has collaborators", "Board has collaborators", "BoardCard.AvatarGroup.Collaborators", undefined, true)),collaborators:ge})})]}),Z?(0,v.jsx)(p.xu,{direction:"row",display:"flex",paddingX:2,children:(0,v.jsx)(p.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,v.jsx)(p.zx,{role:"link",href:null!=o?o:"",fullWidth:!0,size:"lg",text:oe.bt("See board", "See board", "boardRep.invite.seeBoardButton", undefined, true)})})}):(0,v.jsxs)(p.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,v.jsx)(p.xu,{marginBottom:3,paddingX:1,flex:"grow",children:(0,v.jsx)(p.zx,{fullWidth:!0,onClick:()=>{null==S||S(!1)},size:"lg",text:oe.bt("Decline", "Decline", "boardRep.invite.declineButton", undefined, true)})}),(0,v.jsx)(p.xu,{marginBottom:3,paddingX:1,flex:"grow",children:(0,v.jsx)(p.zx,{fullWidth:!0,color:"red",onClick:()=>{null==S||S(!0)},size:"lg",text:oe.bt("Accept", "Accept", "boardRep.invite.acceptButton", undefined, true)})})]})]}):(0,v.jsxs)(p.xu,{height:ne?void 0:x.s0,marginTop:ne?0:1,paddingX:2,paddingY:ne?2:0,children:[(0,v.jsxs)(p.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,v.jsx)(b,{children:N}),D&&(0,v.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},marginStart:2,width:xe,minWidth:xe,height:pe,children:(0,v.jsx)(p.HE,{accessibilityLabel:h.U+(oe.bt("Board has collaborators", "Board has collaborators", "BoardCard.AvatarGroup.Collaborators", undefined, true)),collaborators:ge})})]}),(0,v.jsxs)(p.xu,{alignItems:ae?"center":"start",direction:ae?"row":"column",display:"flex",marginTop:1,children:[(0,v.jsxs)(p.xv,{size:"100",lineClamp:1,children:[(0,v.jsx)(h.Z,{}),(0,c.nk)(oe.nbt(["{{ count }} Pin", "{{ count }} Pins"], $, "profile.ProfilePage.board.BoardCard.PinsCount", true),{count:ie(O,$,{})}),!!J&&(0,v.jsxs)(i.Fragment,{children:[(0,v.jsx)(l.Z,{ariaHidden:!0}),(0,v.jsx)(h.Z,{}),(0,c.nk)(oe.nbt(["{{ count }} section", "{{ count }} sections"], J, "profile.ProfilePage.board.BoardCard.SectionsCount", true),{count:J})]})]}),!e&&(0,v.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{display:ne?"inline-flex":"inline",paddingLeft:ae?7:0}},children:(0,v.jsxs)(p.xv,{color:"subtle",inline:!0,size:"100",lineClamp:1,children:[(0,v.jsx)(h.Z,{}),te(R,!0)]})})]}),de&&(0,v.jsx)(p.xu,{marginTop:2===G?3:void 0,column:2===G?12:void 0,flex:"none",children:(0,v.jsx)(a.Z,{disabled:null==q?void 0:q.blocked_by_me,followEventType:26,id:k,isFollowed:A,onFollow:e=>{B||(0,_.NC)("press_follow_board"),K&&K(e)},onUnfollow:e=>{B||(0,_.NC)("press_unfollow_board"),X&&X(e)},shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:Y,viewType:Q})})]})})]})}},686844:(e,o,t)=>{t.d(o,{Z:()=>a});var i=t(883119),l=t(785893);function a({customCover:e,height:o,imgUrl:t,imgPos:a,width:n}){const r=o/n;let s="center center";if(e&&a){let e=1;e=a.height/a.width>r?n/a.width:o/a.height;s=`-${a.x*e}px -${a.y*e}px`}const d={backgroundImage:`url(${t})`,backgroundPosition:s,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{height:o,width:n}},children:(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:d},children:(0,l.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}},722556:(e,o,t)=>{t.d(o,{Z:()=>u});var i=t(686844),l=t(108211),a=t(898781),n=t(50286),r=t(780280),s=t(883119),d=t(526760),c=t(785893);const _="100%";function u(e){var o,t;const u=(0,a.ZP)(),{containerBackgroundColor:h="white",coverPhoto:m,fullSize:g,images:p,isProtected:x,isSecret:v,showSensitivityScreen:f,isActive:b,canEdit:y,onEditClick:w,layout:P}=e,A=(0,n.HG)(),{isRTL:z,isAuthenticated:j}=(0,r.B)(),S=A&&j,C=p[0],k=!m&&(null===(o=p[0])||void 0===o?void 0:o.name)||u.bt("Cover image", "Cover image", "DrawerImageGroup", undefined, true),F=Array(2).fill(),I=new s.Ry(1),Z="square"===P?d.M0:d.z9,T="square"===P?d.FP:d.FC,B=null!=C&&C.url?(0,c.jsx)(s.Ee,{alt:k,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:C.url}):(0,c.jsx)(s.xu,{color:"secondary",height:"100%",width:"100%"}),D=f?{filter:"blur(20px)"}:{};return(0,c.jsx)(s.zd,{height:g?"100%":void 0,rounding:4,width:"100%",wash:b,children:(0,c.jsxs)(s.xu,{"aria-hidden":!0,display:"flex",height:S?T:"100%",direction:"row",children:[(0,c.jsx)(s.sg,{span:8,children:(0,c.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:D},position:"relative",height:g?"100%":void 0,children:(0,c.jsx)(s.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:_}},overflow:"hidden",width:"100%",children:(0,c.jsxs)(s.xu,{"data-test-id":"drawer-image-group-first-image-container",dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},overflow:"hidden",position:"absolute",top:!0,bottom:!0,right:!0,left:!0,children:[(x||v)&&(0,c.jsx)(s.xu,{left:!z,right:z,margin:2,position:"absolute",top:!0,zIndex:I,children:(0,c.jsx)(l.Z,{backgroundColor:"default",iconColor:"default",privacy:v?"secret":"protected",size:S?32:24})}),S&&null!=m&&m.url?(0,c.jsx)(i.Z,{customCover:m.isCustom,imgPos:m.position||{width:0,height:0,x:0,y:0},imgUrl:null!==(t=m.url)&&void 0!==t?t:"",width:Math.floor(Z/3*2),height:T}):B]})})})}),(0,c.jsx)(s.sg,{span:4,children:(0,c.jsxs)(s.xu,{dangerouslySetInlineStyle:{__style:D},height:"100%",children:[y&&b&&(0,c.jsx)(s.xu,{left:z,right:!z,margin:2,position:"absolute",bottom:!0,zIndex:I,children:(0,c.jsx)(s.hU,{accessibilityLabel:u.bt("Edit", "Edit", "DrawerImageGroup.edit", undefined, true),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:({event:e})=>null==w?void 0:w(e),size:"sm"})}),F.map(((e,o)=>{const t=p[S?o:o+1];return(0,c.jsx)(s.xu,{position:"relative",height:g?"50%":void 0,children:(0,c.jsx)(s.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:_}},overflow:"hidden",width:"100%",children:(0,c.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:0===o?1:"0 1px 1px 1px"}},overflow:"hidden",position:"absolute",top:!0,bottom:!0,right:!0,left:!0,children:null!=t&&t.url?(0,c.jsx)(s.Ee,{alt:t&&t.name||"placeholder",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:t.url}):(0,c.jsx)(s.xu,{color:"secondary",height:"100%",width:"100%"})})})},o)}))]})}),f&&(0,c.jsx)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:(0,c.jsx)(s.X6,{align:"center",color:"light",size:"400",children:u.bt("This board may contain sensitive content", "This board may contain sensitive content", "drawerImageGroup.sensitivityScreen.heading", undefined, true)})})]})})}},526760:(e,o,t)=>{t.d(o,{FC:()=>r,FP:()=>a,M0:()=>l,Xq:()=>s,s0:()=>i,z9:()=>n});const i=40,l=236,a=157,n=320,r=213,s=7},108211:(e,o,t)=>{t.d(o,{Z:()=>n});var i=t(898781),l=t(883119),a=t(785893);function n({backgroundColor:e="darkGray",iconColor:o="inverse",iconSize:t,privacy:n,size:r=20}){const s=(0,i.ZP)();return(0,a.jsx)(l.xu,{display:"flex",direction:"column",alignItems:"center",color:e,width:r,height:r,rounding:"circle",justifyContent:"center",children:(0,a.jsx)(l.JO,{accessibilityLabel:s.bt("Secret board icon", "Secret board icon", "Icon indicating that a board is secret", undefined, true),color:o,icon:"secret"===n?"lock":"security",size:null!=t?t:r/2})})}},340494:(e,o,t)=>{t.d(o,{Z:()=>a});var i=t(19121),l=t(50286);function a(){const e=(0,l.HG)(),o=(0,i.Z)(),t=o&&o.isAuth;if(e&&t){return e=>{var o,t;const i=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,l=null!==(o=null===(t=e.cover_pin)||void 0===t?void 0:t.image_url)&&void 0!==o?o:i,a=e.images&&e.images["170x"]&&e.images["170x"].length?e.images["170x"][0].url:"";return l||a}}return(e,o)=>{var t,i;const l=e.has_custom_cover?e.image_cover_hd_url||e.image_cover_url:"";if(!l)return"";const a=e.cover_images&&e.cover_images["400x300"]?e.cover_images["400x300"].url:void 0,n=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,r=e.cover_images&&e.cover_images["216x146"]?e.cover_images["216x146"].url:void 0,s=null!==(t=null!==(i=null!=a?a:n)&&void 0!==i?i:r)&&void 0!==t?t:"",d=e.image_cover_url||"";return l||(o&&o>2&&s?s:"")||d}}},853492:(e,o,t)=>{t.d(o,{Bw:()=>r,Jx:()=>n,po:()=>i});const i=(e="")=>(null!=e?e:"").substring((null!=e?e:"").lastIndexOf("/")+1),l=e=>({dominant_color:"#FFFFFF",height:1,url:e,width:1}),a=e=>{if(!e)return()=>!0;const o=i(e);return e=>{var t;return"string"==typeof e?i(e)!==o:i(null!==(t=e.url)&&void 0!==t?t:"")!==o}},n=(e,o)=>e.images&&e.images["170x"]?e.images["170x"].filter(a(o)):e.pin_thumbnail_urls?e.pin_thumbnail_urls.filter(a(o)).map(l):[],r=e=>{var o;return null!==(o=e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})&&void 0!==o?o:{x:0,y:0,width:0,height:0}}},62409:(e,o,t)=>{t.d(o,{AH:()=>s,Bk:()=>a,CK:()=>r,Xe:()=>l,kb:()=>n,wS:()=>i});const i=(e,o,t,i)=>{let l;return l=o||(e?e.official_user:t||i),l};function l({hasLinkDomain:e,hasNativeCreator:o,hasOriginPinner:t,pinDomain:i,sourceUserUsername:l,sourceUserFullName:a}){return!o&&(e||t)&&l?{pinCreditLink:`/${l}/`,pinCredit:a}:{pinCreditLink:void 0,pinCredit:!o&&e?i:""}}const a=({i18n:e,isLego:o,hasLinkDomain:t,hasRichMetadataArticle:i,hasRichMetadataTutorial:l,hasRichMetadataRecipeCategorizedIngredients:a,hasRichMetadataProductOfferSummary:n,hasRichSummaryProductOfferSummary:r,richMetadataRecipeFromAggregatedData:s,richMetadataProductName:d,richSummaryProductName:c})=>{const _=a;let u;d&&n&&(u=!0);const h=i,m=l;let g=o?e.bt("From ", "From ", "Closeup pin annotation", undefined, true):e.bt("Saved from ", "Saved from ", "Closeup pin annotation", undefined, true);return!t||s?g=e.bt("Saved by ", "Saved by ", "Closeup pin annotation", undefined, true):u?g=e.bt("Product sold by ", "Product sold by ", "pin annotation", undefined, true):m?(o&&(g=e.bt("From ", "From ", "pin annotation", undefined, true)),g=e.bt("Saved from ", "Saved from ", "pin annotation", undefined, true)):_?g=e.bt("Recipe from ", "Recipe from ", "pin annotation", undefined, true):h&&(g=e.bt("Article from ", "Article from ", "pin annotation", undefined, true)),!n&&c&&r&&(g=e.bt("Product sold by ", "Product sold by ", "pin annotation", undefined, true)),g},n=({hasLinkDomain:e,richMetadata:o,richSummary:t})=>{var i;return e&&(null==o||null===(i=o.recipe)||void 0===i||!i.fromAggregatedData)&&null!=o&&o.products&&o.products[0]&&o.products[0].name&&o.products[0].offerSummary?o.products[0].offerSummary:null!=t&&t.products&&t.products[0]&&t.products[0].name&&t.products[0].offerSummary?t.products[0].offerSummary:void 0},r=({hasRichMetadata:e,hasRichMetadataProducts:o,hasRichMetadataArticle:t,hasRichMetadataRecipe:i})=>e?o?144:t?141:i?145:139:140,s=e=>!!e&&!e.startsWith("https://i.pinimg.com")},927383:(e,o,t)=>{t.d(o,{Z:()=>r});var i=t(898781),l=t(50286),a=t(987318),n=t(945698);const r=()=>{const e=(0,i.ZP)(),o=(0,l.HG)(),{viewer:t,loginForMore:r,limitedLoginModalSubheader:s,limitedLoginModalNextLocation:d}=(0,a.H)();return"LIMITED_LOGIN"===t.type?({modalHeader:t,nextLocation:i})=>l=>{let a=null;l&&(l.nativeEvent&&l.nativeEvent instanceof Event?a=l:l.event&&(a=l.event)),a&&(a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation()),null==r||r.setVisible(!0),null==s||s.setText(t||(o?(0,n.hr)(e):(0,n.Wh)(e))),i&&(null==d||d.setRoute(i))}:({fn:e})=>e}},201155:(e,o,t)=>{t.d(o,{Z:()=>c});var i=t(883119),l=t(785893);function a({ideaPinImages:e}){const o={1:28,2:40,3:48},t=e.map(((e,o)=>{var t,a,n;return(0,l.jsx)(i.xu,{height:48,width:28,color:"default",borderStyle:"sm",overflow:"hidden",rounding:2,dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:o}},children:(0,l.jsx)(i.Ee,{alt:"",src:null!==(t=null==e?void 0:e.url)&&void 0!==t?t:"",color:"#696969",fit:"cover",naturalHeight:null!==(a=null==e?void 0:e.height)&&void 0!==a?a:1,naturalWidth:null!==(n=null==e?void 0:e.width)&&void 0!==n?n:1})},o)}));return(0,l.jsx)(i.kC,{justifyContent:"center",children:(0,l.jsx)(i.kC,{justifyContent:"start",width:o[e.length],children:t})})}var n=t(499128),r=t(898781),s=t(784590),d=t(50286);function c({handleHide:e,text:o,userId:t,href:c,imageUrl:_}){const u=(0,r.ZP)(),h=(0,d.HG)(),m=(0,s.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:t}}),g=Array.isArray(o)?o.join(" "):o;if(0===(m.data||[]).length){const o=_?(0,l.jsx)(i.xu,{height:48,overflow:"hidden",width:48,children:(0,l.jsx)(i.Ee,{alt:u.bt("Image of who you followed", "Image of who you followed", "userFollowingToast.thumbnail.userImage", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:_})}):void 0;return(0,l.jsx)(n.ZP,{duration:5e3,onHide:e,text:g,href:c,iconThumbnail:o,thumbnailShape:"circle"})}const p=(m.data||[]).slice(0,3).map((e=>{var o;return null===(o=e.images)||void 0===o?void 0:o[h?"236x":"170x"]})),x=(0,l.jsx)(a,{ideaPinImages:p});return(0,l.jsx)(n.ZP,{href:c,duration:5e3,onHide:e,iconThumbnail:x,text:g,thumbnailShape:"square"})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/52599.en_GB-bdc58f745017308e.mjs.map