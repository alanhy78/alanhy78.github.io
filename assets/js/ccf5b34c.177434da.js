"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[837],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),s=n,k=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={description:"Docker part1",id:"part1"},i="\u57fa\u672c\u4f7f\u7528",p={unversionedId:"Docker/part1",id:"Docker/part1",title:"\u57fa\u672c\u4f7f\u7528",description:"Docker part1",source:"@site/docs/Docker/part1.md",sourceDirName:"Docker",slug:"/Docker/part1",permalink:"/Docker/part1",draft:!1,tags:[],version:"current",frontMatter:{description:"Docker part1",id:"part1"},sidebar:"tutorialSidebar",previous:{title:"Fbase111",permalink:"/Flutter/fbase"},next:{title:"\u57fa\u672c\u4f7f\u75282",permalink:"/Docker/part2"}},o={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,n.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Ubuntu"),"\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u952e\u5b89\u88c5\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"bash <(curl -Ls https://get.docker.com)")),(0,n.kt)("li",{parentName:"ul"},"\u624b\u52a8\u5b89\u88c5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sudo apt update")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sudo apt install apt-transport-https ca-certificates curl software-properties-common")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apt-cache policy docker-ce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sudo apt install docker-ce")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"CentOS"),"\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u952e\u5b89\u88c5\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"bash <(curl -Ls https://get.docker.com)")),(0,n.kt)("li",{parentName:"ul"},"\u624b\u52a8\u5b89\u88c5\uff1a"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Debian"),"\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u952e\u5b89\u88c5\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"bash <(curl -Ls https://get.docker.com)")),(0,n.kt)("li",{parentName:"ul"},"\u624b\u52a8\u5b89\u88c5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sudo apt update")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sudo apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sudo apt update")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apt-cache policy docker-ce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sudo apt install docker-ce"))))))),(0,n.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u505c\u6b62\u6240\u6709\u5bb9\u5668"),"\uff1a ",(0,n.kt)("inlineCode",{parentName:"p"},"docker stop $(docker ps -aq)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5220\u9664\u6240\u6709\u5bb9\u5668"),"\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"docker rm $(docker ps -aq)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5220\u9664\u6240\u6709\u955c\u50cf"),"\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"docker rmi  $(docker images -q)")))))}d.isMDXComponent=!0}}]);