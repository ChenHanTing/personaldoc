"use strict";(self.webpackChunkpersonaldoc=self.webpackChunkpersonaldoc||[]).push([[7854],{3398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=t(4848),s=t(8453);const i={},r="Questions Completed on 2024-07-07",c={id:"ccna/questions-review-20240707",title:"Questions Completed on 2024-07-07",description:"SSH",source:"@site/docs/ccna/questions-review-20240707.md",sourceDirName:"ccna",slug:"/ccna/questions-review-20240707",permalink:"/personaldoc/docs/ccna/questions-review-20240707",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ccna/questions-review-20240707.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Questions Completed on 2024-07-05",permalink:"/personaldoc/docs/ccna/questions-review-20240705"},next:{title:"Questions Completed on 2024-07-13",permalink:"/personaldoc/docs/ccna/questions-review-20240713"}},a={},u=[{value:"SSH",id:"ssh",level:2},{value:"IPv6 &amp; IPv4",id:"ipv6--ipv4",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"questions-completed-on-2024-07-07",children:"Questions Completed on 2024-07-07"}),"\n",(0,o.jsx)(n.h2,{id:"ssh",children:"SSH"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Router(config)# hostname Router\nRouter(config)# ip domain-name example.com\nRouter(config)# crypto key generate rsa\nThe name for the keys will be: Router.example.com\nChoose the size of the key modulus in the range of 360 to 4096 for your\nGeneral Purpose Keys. Choosing a key modulus greater than 512 may take\na few minutes.\n\nHow many bits in the modulus [512]: 2048\nGenerating RSA keys ...\n[OK]\n\nRouter(config)# username admin privilege 15 secret YourPassword\nRouter(config)# ip ssh version 2\nRouter(config)# line vty 0 4\nRouter(config-line)# transport input ssh\nRouter(config-line)# login local\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ipv6--ipv4",children:"IPv6 & IPv4"}),"\n",(0,o.jsx)(n.p,{children:"To verify the configuration, you can use the ping command to ensure connectivity between the\nrouters."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://img.examtopics.com/200-301/image119.png",alt:"image-20240707183223929"})}),"\n",(0,o.jsx)(n.p,{children:"Router R1 Configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"ipv6 unicast-routing\ninterface Ethernet0/1\nip address 192.168.180.17 255.255.255.240\nipv6 address 2001:db8:acca::1/64\nno shutdown\n"})}),"\n",(0,o.jsx)(n.p,{children:"Router R2 Configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"ipv6 unicast-routing\ninterface Ethernet0/1\nip address 192.168.180.30 255.255.255.240\nipv6 address 2001:db8:acca::2/64\nno shutdown\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);