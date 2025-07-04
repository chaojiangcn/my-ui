import{n as ce}from"./_plugin-vue2_normalizer-2bbd088e.js";const pe={name:"MyCard",props:{title:{type:String,default:""},size:{type:String,default:"medium",validator:a=>["small","medium","large"].includes(a)},primary:{type:Boolean,default:!1},backgroundColor:{type:String,default:""},disabled:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},rounded:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},type:{type:String,default:"default",validator:a=>["default","primary","success","warning","danger"].includes(a)}},computed:{cardClasses(){return{[`card--${this.size}`]:!0,[`card--${this.type}`]:this.type!=="default","card--primary":this.primary,"card--clickable":this.clickable&&!this.disabled,"card--bordered":this.bordered,"card--shadow":this.shadow,"card--rounded":this.rounded,"card--disabled":this.disabled,"card--loading":this.loading}},cardStyles(){const a={};return this.backgroundColor&&(a.backgroundColor=this.backgroundColor),a}},methods:{handleClick(a){this.disabled||this.loading||this.$emit("onClick",a)}}};var me=function(){var e=this,r=e._self._c;return r("div",{staticClass:"card",class:e.cardClasses,style:e.cardStyles,on:{click:e.handleClick}},[e.$slots.header||e.title?r("div",{staticClass:"card-header"},[e._t("header",function(){return[e.title?r("h3",{staticClass:"card-title"},[e._v(e._s(e.title))]):e._e()]})],2):e._e(),r("div",{staticClass:"card-body"},[e._t("default")],2),e.$slots.footer?r("div",{staticClass:"card-footer"},[e._t("footer")],2):e._e(),e.loading?r("div",{staticClass:"card-loading"},[r("div",{staticClass:"loading-spinner"})]):e._e(),e.disabled?r("div",{staticClass:"card-overlay"}):e._e()])},fe=[],le=ce(pe,me,fe,!1,null,"b955f6f1",null,null);const m=le.exports;le.exports.__docgenInfo={displayName:"MyCard",description:"Card 组件",tags:{description:[{description:"一个高可用的卡片组件，支持多种样式和状态",title:"description"}]},exportName:"default",props:[{name:"title",description:"卡片标题",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",description:"卡片尺寸",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"primary",description:"是否为主要样式",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"backgroundColor",description:"背景颜色",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"是否禁用",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clickable",description:"是否可点击",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bordered",description:"是否显示边框",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"shadow",description:"是否显示阴影",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"rounded",description:"是否圆角",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",description:"加载状态",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",description:"卡片类型",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","primary","success","warning","danger"]}],events:[{name:"onClick",type:{names:["undefined"]}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/my-ui/my-ui/src/components/Card/Card.vue"]};const ye={title:"Components/Card",component:m,tags:["autodocs"],render:(a,{argTypes:e})=>({props:Object.keys(e),components:{MyCard:m},template:'<my-card v-bind="$props" @click="handleClick" />'}),argTypes:{title:{control:"text",description:"卡片标题"},type:{control:{type:"select"},options:["default","primary","success","warning","danger"],description:"卡片类型"},size:{control:{type:"select"},options:["small","medium","large"],description:"卡片尺寸"},disabled:{control:"boolean",description:"是否禁用卡片"},loading:{control:"boolean",description:"是否显示加载状态"},clickable:{control:"boolean",description:"是否可点击"},shadow:{control:"boolean",description:"是否显示阴影"}},parameters:{docs:{description:{component:`Card 组件的 Storybook 配置
@description 为 Card 组件创建各种使用场景的示例`}}}},s={args:{title:"基础卡片",size:"medium",type:"default"}},t={args:{title:"主要卡片",type:"primary",size:"medium"}},o={args:{title:"成功卡片",type:"success",size:"medium"}},i={args:{title:"警告卡片",type:"warning",size:"medium"}},n={args:{title:"危险卡片",type:"danger",size:"medium"}},u={args:{title:"小尺寸卡片",size:"small",type:"default"}},d={args:{title:"大尺寸卡片",size:"large",type:"default"}},l={args:{title:"可点击卡片",clickable:!0,shadow:!0,size:"medium"}},c={args:{title:"加载中...",loading:!0,size:"medium"}},p={args:{title:"禁用卡片",disabled:!0,size:"medium"}};var f,g,y,b,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: '基础卡片',
    size: 'medium',
    type: 'default'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"基础卡片",...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.description}}};var _,h,v,F,z;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: '主要卡片',
    type: 'primary',
    size: 'medium'
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"主要卡片",...(z=(F=t.parameters)==null?void 0:F.docs)==null?void 0:z.description}}};var k,B,S,A,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: '成功卡片',
    type: 'success',
    size: 'medium'
  }
}`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:"成功卡片",...(w=(A=o.parameters)==null?void 0:A.docs)==null?void 0:w.description}}};var E,D,V,x,$;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: '警告卡片',
    type: 'warning',
    size: 'medium'
  }
}`,...(V=(D=i.parameters)==null?void 0:D.docs)==null?void 0:V.source},description:{story:"警告卡片",...($=(x=i.parameters)==null?void 0:x.docs)==null?void 0:$.description}}};var L,M,N,O,P;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: '危险卡片',
    type: 'danger',
    size: 'medium'
  }
}`,...(N=(M=n.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:"危险卡片",...(P=(O=n.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var W,j,I,R,T;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: '小尺寸卡片',
    size: 'small',
    type: 'default'
  }
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source},description:{story:"小尺寸卡片",...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};var q,G,H,J,K;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: '大尺寸卡片',
    size: 'large',
    type: 'default'
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"大尺寸卡片",...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,U,X,Y,Z;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: '可点击卡片',
    clickable: true,
    shadow: true,
    size: 'medium'
  }
}`,...(X=(U=l.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:"可点击卡片",...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,re,se,te;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    title: '加载中...',
    loading: true,
    size: 'medium'
  }
}`,...(re=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:"加载状态卡片",...(te=(se=c.parameters)==null?void 0:se.docs)==null?void 0:te.description}}};var oe,ie,ne,ue,de;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    title: '禁用卡片',
    disabled: true,
    size: 'medium'
  }
}`,...(ne=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ne.source},description:{story:"禁用状态卡片",...(de=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:de.description}}};const be=["Default","Primary","Success","Warning","Danger","Small","Large","Clickable","Loading","Disabled"];export{l as Clickable,n as Danger,s as Default,p as Disabled,d as Large,c as Loading,t as Primary,u as Small,o as Success,i as Warning,be as __namedExportsOrder,ye as default};
