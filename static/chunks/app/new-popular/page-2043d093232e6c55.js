(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{2616:function(e,s,l){Promise.resolve().then(l.bind(l,1084))},1084:function(e,s,l){"use strict";var i=l(7437),t=l(2265),a=l(1401);s.default=()=>{let[e,s]=(0,t.useState)([]),[l,r]=(0,t.useState)(null),[n,d]=(0,t.useState)(!1);(0,t.useEffect)(()=>{fetch("https://movies-api14.p.rapidapi.com/shows",{method:"GET",headers:{"X-RapidAPI-Key":"fc0da3898emsha61223a5e2ffb97p115272jsn674763750f44","X-RapidAPI-Host":"movies-api14.p.rapidapi.com"}}).then(e=>e.json()).then(e=>{console.log(e),s(e.movies)}).catch(e=>console.error(e))},[]);let c=e=>{r(e),d(!0),document.body.classList.add("overflow-hidden")},o=()=>{r(null),d(!1),document.body.classList.remove("overflow-hidden")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"container pt-28 pb-8",children:[(0,i.jsx)("h1",{className:"text-2xl md:text-4xl font-bold mb-8 text-center",children:"New & Popular Movies"}),(0,i.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center",children:e.map(e=>(0,i.jsxs)("div",{className:"relative rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-125 duration-150 ease-in-out hover:z-10 NewPopular-card mb-6 md:mb-10",children:[(0,i.jsx)("img",{src:e.backdrop_path,alt:e.original_title,className:"w-full h-60 object-cover"}),(0,i.jsxs)("div",{className:"px-4 py-2 NewPopular-details md:hidden absolute bottom-0 inset-x-0 bg-[#141414]",children:[(0,i.jsx)("h2",{className:"text-xs md:text-sm font-bold mb-2",children:e.original_title}),(0,i.jsxs)("div",{className:"flex items-center mb-2 justify-between",children:[(0,i.jsxs)("div",{className:"space-x-3",children:[(0,i.jsx)(a.e,{showArrow:!0,className:"text-black font-semibold bg-[#E6E6E6]",content:"Play",children:(0,i.jsx)("button",{className:"w-6 h-6 md:w-8 md:h-8 border rounded-full bg-white inline-flex items-center justify-center",children:(0,i.jsx)("img",{src:"/icon/play.svg",alt:"play icon",className:"md:w-5 md:h-5 w-3 h-3"})})}),(0,i.jsx)(a.e,{showArrow:!0,className:"text-black font-semibold bg-[#E6E6E6]",content:"Like",children:(0,i.jsx)("button",{className:"w-6 h-6 md:w-8 md:h-8 border rounded-full inline-flex items-center justify-center",children:(0,i.jsx)("img",{src:"/icon/heart.svg",alt:"heart icon",className:"md:w-4 md:h-4 w-3 h-3 brightness-0 invert-[1]"})})})]}),(0,i.jsx)(a.e,{showArrow:!0,className:"text-black font-semibold bg-[#E6E6E6]",content:"View More",children:(0,i.jsx)("button",{onClick:()=>c(e),className:"w-6 h-6 md:w-8 md:h-8 border rounded-full inline-flex items-center justify-center",children:(0,i.jsx)("img",{src:"/icon/angle-down.svg",alt:"down icon",className:"md:w-4 md:h-4 w-3 h-3 brightness-0 invert-[1]"})})})]}),(0,i.jsx)("p",{className:"text-sm text-gray-700 mb-4 hidden",children:e.overview}),(0,i.jsx)("ul",{className:"flex flex-wrap",children:e.genres.map((e,s)=>(0,i.jsx)("li",{className:"mr-2 inline-flex items-center text-white text-[10px] leading-4 rounded-full after:w-1 after:h-1 after:bg-white after:inline-block after:ml-2 after:rounded-full last:after:content-[none]",children:e},s))})]})]},e._id))})]}),n&&l&&(0,i.jsxs)("div",{className:"fixed w-full h-full z-50 inset-0 view-more--popup overflow-y-auto",children:[(0,i.jsxs)("div",{className:"max-w-[800px] mx-auto bg-[#181818] z-10 relative overflow-hidden rounded-xl mt-28",children:[(0,i.jsxs)("div",{className:"relative before:absolute before:inset-0 before:bg-[linear-gradient(0deg,_rgba(24,24,24,1)_0%,_rgba(24,24,24,0)_100%)]",children:[(0,i.jsx)("img",{src:l.backdrop_path,alt:l.original_title}),(0,i.jsx)("button",{onClick:o,className:"w-8 h-8 md:w-12 md:h-12 items-center inline-flex justify-center rounded-full absolute right-5 top-5 md:right-7 md:top-7 bg-[#181818]",children:(0,i.jsx)("img",{className:"md:w-4 md:h-4 w-3 h-3 brightness-0 invert-[1]",src:"/icon/cross.svg",alt:"close icon"})})]}),(0,i.jsxs)("div",{className:"px-5 md:px-10 pb-14",children:[(0,i.jsx)("h2",{className:"text-3xl md:text-4xl font-semibold mb-5",children:l.original_title}),(0,i.jsxs)("div",{className:"flex flex-wrap mb-8",children:[(0,i.jsx)("div",{className:"w-1/2",children:(0,i.jsx)("p",{className:"text-xs",children:l.overview})}),(0,i.jsxs)("div",{className:"w-1/2 text-right",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"opacity-60",children:"First Aired :"})," ",l.first_aired]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"opacity-60",children:"Genres :"})," ",l.genres.join(", ")]})]})]}),(0,i.jsx)("div",{className:"flex flex-wrap mt-2",children:l.genres.map((s,t)=>(0,i.jsxs)("div",{className:"mr-4 mb-2",children:[(0,i.jsx)("h4",{className:"text-2xl font-semibold",children:s}),(0,i.jsx)("div",{className:"grid grid-cols-3 gap-4 mt-2 mb-8",children:e.filter(e=>e._id!==l._id&&e.genres.includes(s)).map(e=>(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:e.backdrop_path,alt:e.original_title,className:"w-full h-44 rounded-md object-cover"}),(0,i.jsx)("p",{className:"text-sm mt-1",children:e.original_title})]},e._id))})]},t))})]})]}),(0,i.jsx)("div",{className:"bg-black fixed inset-0 bg-opacity-40",onClick:o})]})]})}}},function(e){e.O(0,[401,971,23,744],function(){return e(e.s=2616)}),_N_E=e.O()}]);