import{M as s}from"./Button-9af59b47.js";import"./_plugin-vue2_normalizer-2bbd088e.js";const x={title:"Example/Button",component:s,tags:["autodocs"],render:(S,{argTypes:B})=>({props:Object.keys(B),components:{MyButton:s},template:'<my-button @onClick="onClick" v-bind="$props" />'}),argTypes:{backgroundColor:{control:"color"},size:{control:{type:"select"},options:["small","medium","large"]}}},r={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}};var t,n,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,i,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,b,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const C=["Primary","Secondary","Large","Small"];export{a as Large,r as Primary,e as Secondary,o as Small,C as __namedExportsOrder,x as default};
