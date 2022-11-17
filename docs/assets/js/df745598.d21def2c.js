"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[71398],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35893:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"pitest",title:"Pitest",sidebar_label:"Pitest",slug:"pitest.html"},l=void 0,p={unversionedId:"extensions/pitest",id:"version-5.2/extensions/pitest",title:"Pitest",description:"The Mutation Testing tool Pitest is integrated with Kotest via an extension module.",source:"@site/versioned_docs/version-5.2/extensions/pitest.md",sourceDirName:"extensions",slug:"/extensions/pitest.html",permalink:"/docs/5.2/extensions/pitest.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/extensions/pitest.md",tags:[],version:"5.2",frontMatter:{id:"pitest",title:"Pitest",sidebar_label:"Pitest",slug:"pitest.html"},sidebar:"extensions",previous:{title:"Robolectric",permalink:"/docs/5.2/extensions/robolectric.html"}},u={},c=[],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Mutation Testing tool ",(0,i.kt)("a",{parentName:"p",href:"https://pitest.org/"},"Pitest")," is integrated with Kotest via an extension module."),(0,i.kt)("p",null,"After ",(0,i.kt)("a",{parentName:"p",href:"https://gradle-pitest-plugin.solidsoft.info/"},"configuring")," Pitest,\nadd the ",(0,i.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-extensions-pitest")," module to your dependencies as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    testImplementation("io.kotest.extensions:kotest-extensions-pitest:<version>")\n')),(0,i.kt)("p",null,"Note: Since pitest is an extension, we use a different maven group name (io.kotest.extensions) from the core modules."),(0,i.kt)("p",null,"After doing that, we need to inform Pitest that we're going to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Kotest")," as a ",(0,i.kt)("inlineCode",{parentName:"p"},"testPlugin"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Assuming that you have already configured the Gradle/Maven extension\nconfigure<PitestPluginExtension> {\n    // testPlugin.set("Kotest")    // needed only with old PIT <1.6.7, otherwise having kotest-extensions-pitest on classpath is enough\n    targetClasses.set(listOf("my.company.package.*"))\n}\n')),(0,i.kt)("p",null,"This should set everything up, and running ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew pitest")," will generate reports in the way you configured."))}f.isMDXComponent=!0}}]);