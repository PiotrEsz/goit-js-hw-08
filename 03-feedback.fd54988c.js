function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,f=setTimeout(j,t),c?b(e):a}function w(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function j(){var e=v();if(w(e))return E(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function E(e){return f=void 0,p&&o?b(e):(o=r=void 0,a)}function O(){var e=v(),n=w(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:E(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector("form"),h=JSON.parse(localStorage.getItem("feedback-form-state"));window.addEventListener("load",void(h&&Array.from(b.elements).forEach((e=>e.value=h[e.name]?h[e.name]:"")))),b.addEventListener("input",e(t)((()=>{const{email:e,message:t}=b.elements;let n={email:e.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),b.addEventListener("submit",(e=>{e.preventDefault(),console.log(h),localStorage.remove(),b.reset()})),Array.from(b.elements).forEach((e=>e.value=h[e.name]));
//# sourceMappingURL=03-feedback.fd54988c.js.map