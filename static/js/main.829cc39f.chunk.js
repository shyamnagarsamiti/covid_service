(this.webpackJsonpcovid_service=this.webpackJsonpcovid_service||[]).push([[0],{217:function(e,t,i){},320:function(e,t,i){},382:function(e,t,i){"use strict";i.r(t);var r=i(0),a=i.n(r),n=i(16),c=i.n(n),s=(i(217),i(194)),d=i(54),o=i(430),l=i(431),h=i(433),m=i(438),j=i(439),u=i(440),p=i(441),b=i(149),g=(i(47),i(429),i(444),i(446),i(432),i(442),i(12),i(29),i(434),i(435),i(436),i(437),i(380),i(24)),x=(i(191),i(319),i(320),i(5));g.c({id:g.d().required("Required"),idNumber:g.d().required("Required").when("id",{is:"aadhar",then:g.d().matches(/^[2-9]{1}[0-9]{3}\s?[0-9]{4}\s?[0-9]{4}$/,"Must be 12 digits"),otherwise:g.d().matches(/^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/,"Invalid format")}),name:g.d().required("Required"),slot:g.d().required("Required"),gender:g.d().required("Required"),nagarNigam:g.d().required("Required"),house:g.d().required("Required"),lane:g.d().required("Required"),colony:g.d().required("Required"),city:g.d().required("Required"),sampleMode:g.d().required("Required"),dob:g.a().required("Required").nullable(),emailID:g.d().email("Invalid email format").required("Required"),wardNumber:g.b().positive().integer().min(10).max(999),mobileNumber:g.b().required("Required").test("len","Must be 10 digits",(function(e){return e&&10===e.toString().length}))});Object(o.a)((function(e){return{paper:{display:"flex",flexDirection:"column",padding:"0 16px"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var O=Object(o.a)({root:{maxWidth:345},media:{height:140},heading:{color:"white",fontSize:"2em",textAlign:"center"}});var v=function(){var e=O(),t=Object(r.useState)(!1),i=Object(d.a)(t,2),a=(i[0],i[1],Object(r.useState)(!0)),n=Object(d.a)(a,2);return n[0],n[1],Object(r.useEffect)((function(){document.title="Shyam Nagar Vikas Samiti Covid Help Service"}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:{backgroundColor:"darkBlue"},children:Object(x.jsxs)("div",{style:{alignItems:"center",flexDirection:"column",alignContent:"space-between",height:"65vh",display:"flex",justifyContent:"center",width:"100vw"},children:[Object(x.jsx)("h1",{className:e.heading,children:"SHYAM NAGAR VIKAS SAMITI COVID HELP SERVICES"}),Object(x.jsxs)("h4",{style:{color:"white",textAlign:"center",padding:"0 16px"},children:["Shyam Nagar Vikas Samiti is a 34yrs old registered society with 2000+ registered members & provisionally registered for 80G exemption with Income Tax Department. For more details pl. connect with",Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:Object(x.jsx)("i",{children:"President: Er. Pradeip Gugalia - +91-9530147007"})})]}),Object(x.jsx)(l.a,{variant:"contained",href:"https://sheltered-plains-50229.herokuapp.com/covid_service",children:"BOOK NOW"})]})}),Object(x.jsxs)("div",{style:{paddingLeft:"2em"},children:[Object(x.jsx)("h3",{children:"Services offered like:"}),Object(x.jsxs)(h.a,{container:!0,spacing:3,children:[Object(x.jsx)(h.a,{item:!0,xs:12,sm:4,children:Object(x.jsx)(m.a,{href:"https://sheltered-plains-50229.herokuapp.com/covid_service",style:{textDecoration:"none"},children:Object(x.jsxs)(j.a,{className:e.root,children:[Object(x.jsx)(u.a,{className:e.media,image:"https://images.cnbctv18.com/wp-content/uploads/2021/02/COVID19test_swab-768x432.jpg",title:"Contemplative Reptile"}),Object(x.jsx)(p.a,{children:Object(x.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"RT-PCR TEST"})})]})})}),Object(x.jsx)(h.a,{item:!0,xs:12,sm:4,children:Object(x.jsxs)(j.a,{className:e.root,children:[Object(x.jsx)(u.a,{className:e.media,image:"https://wwwassets.rand.org/content/rand/blog/2020/08/its-going-to-be-the-vaccination-stupid/jcr:content/par/blogpost.aspectcrop.868x455.lt.jpg/x1598055738172.jpg.pagespeed.ic.WPm0htSOxE.jpg",title:"Contemplative Reptile"}),Object(x.jsx)(p.a,{children:Object(x.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"VACCINATION"})})]})}),Object(x.jsx)(h.a,{item:!0,xs:12,sm:4,children:Object(x.jsxs)(j.a,{className:e.root,children:[Object(x.jsx)(u.a,{className:e.media,image:"https://www.sheppardhealthlaw.com/wp-content/uploads/sites/25/2020/11/Global-Trade-Blog-Image_Covid-2-660x283-1.png",title:"Contemplative Reptile"}),Object(x.jsx)(p.a,{children:Object(x.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"OTHERS"})})]})})]})]})]})},q=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,449)).then((function(t){var i=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),r(e),a(e),n(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(v,{})})}),document.getElementById("root")),q()}},[[382,1,2]]]);
//# sourceMappingURL=main.829cc39f.chunk.js.map