!function(){var e=[],t=!1,o=[],i=new Promise((e=>{"loading"!==document.readyState?e():window.addEventListener("DOMContentLoaded",(()=>e()))}));function n(e,t){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return}if(t&&"function"==typeof t.postMessage)try{t.postMessage(JSON.stringify({type:"likesMessage",data:e}),"*")}catch(e){return}}function l(){const t=[];document.querySelectorAll("div.jetpack-likes-widget-unloaded").forEach((o=>{if(!(e.indexOf(o.id)>-1)&&r(o)){e.push(o.id);var i,n=/like-(post|comment)-wrapper-(\d+)-(\d+)-(\w+)/.exec(o.id);n&&5===n.length&&(i={blog_id:n[2],width:o.width},"post"===n[1]?i.post_id=n[3]:"comment"===n[1]&&(i.comment_id=n[3]),i.obj_id=n[4],t.push(i))}})),t.length>0&&n({event:"initialBatch",requests:t},window.frames["likes-master"])}function s(){var e;if(t){!function(){for(let e=o.length-1;e>=0;e--){const t=o[e];if(!r(t)){const i=t&&t.parentElement&&t.parentElement.parentElement;i.classList.remove("jetpack-likes-widget-loaded"),i.classList.remove("jetpack-likes-widget-loading"),i.classList.add("jetpack-likes-widget-unloaded"),i.querySelectorAll(".comment-likes-widget-placeholder").forEach((e=>e.style.display="block")),o.splice(e,1),t.remove()}}}();var i=[...document.querySelectorAll("div.jetpack-likes-widget-unloaded")].filter((e=>r(e)));i.length>0&&l();for(var n=0,c=i.length;n<=c-1;n++)(e=i[n].id)&&a(e)}else setTimeout(s,500)}function a(e){if(void 0===e)return;const t=document.querySelector("#"+e);t.querySelectorAll("iframe").forEach((e=>e.remove()));const i=t.querySelector(".likes-widget-placeholder");if(i&&i.classList.contains("post-likes-widget-placeholder")){const e=document.createElement("iframe");e.classList.add("post-likes-widget","jetpack-likes-widget"),e.name=t.dataset.name,e.src=t.dataset.src,e.height="55px",e.width="100%",e.frameBorder="0",e.scrolling="no",e.title=t.dataset.title,i.after(e)}if(i.classList.contains("comment-likes-widget-placeholder")){const e=document.createElement("iframe");e.class="comment-likes-widget-frame jetpack-likes-widget-frame",e.name=t.dataset.name,e.src=t.dataset.src,e.height="18px",e.width="100%",e.frameBorder="0",e.scrolling="no",t.querySelector(".comment-like-feedback").after(e),o.push(e)}t.classList.remove("jetpack-likes-widget-unloaded"),t.classList.add("jetpack-likes-widget-loading"),t.querySelector("iframe").addEventListener("load",(e=>{n({event:"loadLikeWidget",name:e.target.name,width:e.target.width},window.frames["likes-master"]),t.classList.remove("jetpack-likes-widget-loading"),t.classList.add("jetpack-likes-widget-loaded")}))}function r(e){const t=e.getBoundingClientRect().top,o=e.getBoundingClientRect().bottom;return t+2e3>=0&&o<=window.innerHeight+2e3}window.addEventListener("message",(function(e){let o=e&&e.data;if("string"==typeof o)try{o=JSON.parse(o)}catch(e){return}const s=o&&o.type,a=o&&o.data;if("likesMessage"!==s||void 0===a.event)return;if("https://widgets.wp.com"===e.origin)switch(a.event){case"masterReady":i.then((()=>{t=!0;const e={event:"injectStyles"},o=document.querySelector(".sd-text-color"),i=document.querySelector(".sd-link-color"),s=o&&getComputedStyle(o)||{},a=i&&getComputedStyle(i)||{};if(document.querySelectorAll("iframe.admin-bar-likes-widget").length>0){n({event:"adminBarEnabled"},window.frames["likes-master"]);const t=document.querySelector("#wpadminbar .quicklinks li#wp-admin-bar-wpl-like > a"),o=document.querySelector("#wpadminbar");e.adminBarStyles={background:t&&getComputedStyle(t).background,isRtl:o&&"rtl"===getComputedStyle(o).direction}}document.body.classList.contains("single")&&n({event:"reblogsEnabled"},window.frames["likes-master"]),e.textStyles={color:s.color,fontFamily:s["font-family"],fontSize:s["font-size"],direction:s.direction,fontWeight:s["font-weight"],fontStyle:s["font-style"],textDecoration:s["text-decoration"]},e.linkStyles={color:a.color,fontFamily:a["font-family"],fontSize:a["font-size"],textDecoration:a["text-decoration"],fontWeight:a["font-weight"],fontStyle:a["font-style"]},n(e,window.frames["likes-master"]),l()}));break;case"showLikeWidget":{const e=document.querySelector(`#${a.id} .likes-widget-placeholder`);e&&(e.style.display="none");break}case"showCommentLikeWidget":{const e=document.querySelector(`#${a.id} .likes-widget-placeholder`);e&&(e.style.display="none");break}case"killCommentLikes":document.querySelectorAll(".jetpack-comment-likes-widget-wrapper").forEach((e=>e.remove()));break;case"clickReblogFlair":wpcom_reblog&&"function"==typeof wpcom_reblog.toggle_reblog_box_flair&&wpcom_reblog.toggle_reblog_box_flair(a.obj_id);break;case"showOtherGravatars":{const e=document.querySelector("#likes-other-gravatars");if(!e)break;const t=e.querySelector("ul");e.style.display="none",t.innerHTML="",e.querySelectorAll(".likes-text span").forEach((e=>e.textContent=a.total)),(a.likers||[]).forEach((e=>{if("http"!==e.profile_URL.substr(0,4))return;const o=document.createElement("li");o.innerHTML=`\n\t\t\t\t\t<a href="${encodeURI(e.profile_URL)}" rel="nofollow" target="_parent" class="wpl-liker">\n\t\t\t\t\t\t<img src="${encodeURI(e.avatar_URL)}"\n\t\t\t\t\t\t\talt=""\n\t\t\t\t\t\t\tstyle="width: 30px; height: 30px; padding-right: 3px;" />\n\t\t\t\t\t</a>\n\t\t\t\t`,t.append(o),o.classList.add(e.css_class),o.querySelector("img").alt=e.name}));const o=document.querySelector(`*[name='${a.parent}']`),i=o.getBoundingClientRect(),n=o.ownerDocument.defaultView,l={top:i.top+n.pageYOffset,left:i.left+n.pageXOffset};e.style.left=l.left+a.position.left-10+"px",e.style.top=l.top+a.position.top-33+"px";const s=Math.floor(a.width/37);let r=37*Math.ceil(a.likers.length/s)+13;r>204&&(r=204);const c=37*s-7;e.style.height=r+"px",e.style.width=c+"px";const d=37*s;t.style.width=d+"px",e.style.display="block";const m=t.offsetWidth-t.clientWidth;m>0&&(e.style.width=c+m+"px",t.style.width=d+m+"px")}}})),document.addEventListener("click",(e=>{const t=document.querySelector("#likes-other-gravatars");t&&!t.contains(e.target)&&(t.style.display="none")}));var c,d,m,p=(c=250,d=s,function(){clearTimeout(m),m=setTimeout(d,c)});s(),window.addEventListener("scroll",p,!0)}();