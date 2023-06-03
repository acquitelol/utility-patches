const T=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const r=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const P=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const A=window.enmity.modules.common.Users;window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack;const v=window.enmity.modules.common.Theme;window.enmity.modules.common.Linking;const B=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles;const _=window.enmity.modules.common.Lodash;window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function O(e){window.enmity.plugins.registerPlugin(e)}function $(e){return window.enmity.patcher.create(e)}const{components:t}=window.enmity;t.Alert,t.Button,t.FlatList,t.Image,t.ImageBackground,t.KeyboardAvoidingView,t.Modal,t.Pressable,t.RefreshControl;const D=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch,t.Text,t.TextInput,t.TouchableHighlight;const M=t.TouchableOpacity;t.TouchableWithoutFeedback,t.Touchable;const d=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox;const L=t.FormDivider;t.FormHint,t.FormIcon;const V=t.FormInput,H=t.FormLabel;t.FormRadio;const g=t.FormRow,U=t.FormSection;t.FormSelect,t.FormSubLabel;const j=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function S(e){return window.enmity.assets.getIDByName(e)}var z="UtilityPatches",G="1.2.2",Y="Minor patches/fixes all bundled into a single plugin for convenience.",J="#ff91ff",K=[{name:"Rosie<3",id:"581573474296791211"}],w={name:z,version:G,description:Y,color:J,authors:K};function q(e,n,o){window.enmity.settings.set(e,n,o)}function W(e,n,o){return window.enmity.settings.get(e,n,o)}const a=(e,n=!0)=>W(w.name,e,n),b=(e,n)=>q(w.name,e,n);function F(e,n){return window.enmity.modules.getModule(e,n)}function m(...e){return window.enmity.modules.getByProps(...e)}function E(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const{NativeModules:{DCDChatManager:X}}=m("View","Text");var Q={key:"roleDots",title:"Add Role Dots",subtitle:"Force-enables role-dots aswell as role-colors disregarding your accessibility settings.",icon:"ic_members",patch(e){e.before(X,"updateRows",(n,o)=>{if(!a(this.key))return;const i=JSON.parse(o[1]);for(const s of i)s.type===1&&(s.message.shouldShowRoleDot=!0,s.message.shouldShowRoleOnName=!0);o[1]=JSON.stringify(i)})}};function Z(e,n,o){return window.enmity.utilities.findInReactTree(e,n,o)}const{BadgableTabBar:ee}=m("BadgableTabBar"),te=F(e=>e.render.name==="SliderComponent"),oe=m("TextStyleSheet","Text"),{colors:Ce,meta:C}=m("colors","meta"),{GenericHeaderTitle:ne,GenericSubHeaderTitle:ie}=m("GenericHeaderTitle"),{LayoutAnimation:{configureNext:re}}=m("View","Text"),{Text:ae}=oe,se=E("SettingsOverviewScreen",{default:!1}),le=E("FormLabel",{default:!1}),{getSettingTitle:me}=m("getSettingTitle");var ce={key:"headerPrimary",title:"Fix Text Labels",subtitle:"Forces all Text Labels to use 'text-normal' instead of the default 'header-primary'.",icon:"ic_add_text",patch(e){e.after(le,"default",(o,i,s)=>{!a(this.key)||s.props.color==="header-primary"&&(s.props.color="text-normal")});const n=e.after(se,"default",(o,i,s)=>{n();const{sections:y}=Z(s,l=>l.sections),f=y.map(l=>l.settings).reduce((l,c)=>[...l,...c],[]).map(l=>me(l));e.before(ae,"render",(l,c)=>{!a(this.key)||c[0].variant==="text-md/semibold"&&c[0].color==="header-primary"&&f.includes(c[0].children)&&(c[0].color="text-normal")})})}};const de=m("getUserProfile");var ue={key:"earlyPronouns",title:"Early Pronouns",subtitle:()=>`Set your own pronouns to ${a("pronouns","")} early. Keep in mind others will not be able to see this.`,icon:"ic_accessibility_24px",patch(e){e.after(de,"getUserProfile",(n,o,i)=>{o[0]!==A.getCurrentUser().id||!i||!a(this.key)||!a("pronouns","")||i.pronouns||(i.pronouns=a("pronouns",""))})},render(e){return r.createElement(V,{placeholder:"Your pronouns go here",title:"Pronouns",value:a("pronouns",""),onChange:n=>b("pronouns",n),disabled:e,style:{marginTop:-16}})}};const ye=m("getNumMediaItemsPerRow"),{ThemeColorMap:{HEADER_PRIMARY:pe,BACKGROUND_PRIMARY:we}}=T,k=(e,n)=>r.createElement(H,{text:e,color:"text-normal",style:{marginHorizontal:24,opacity:n?.5:1}});var he={key:"mediaItems",title:"Media Items",subtitle:()=>`Changes the amount of media items per row in media picker to '${a("mediaItemsNumber",2)}' instead of the default '3'.`,icon:"ic_image",patch(e){e.instead(ye,"getNumMediaItemsPerRow",(n,o,i)=>a(this.key)?a("mediaItemsNumber",2):i.apply(n,o))},render(e){return r.createElement(d,{style:{alignItems:"center",flexDirection:"row"}},k(1,e),r.createElement(te,{value:a("mediaItemsNumber",2),minimumValue:1,maximumValue:8,style:{flex:1},minimumTrackTintColor:C.resolveSemanticColor(v.theme,pe),maximumTrackTintColor:C.resolveSemanticColor(v.theme,we),step:1,onValueChange:n=>b("mediaItemsNumber",n),disabled:e,tapToSeek:!0}),k(8,e))}};const ge=m("addFiles","popFirstFile");var be={key:"jsonFix",title:"Upload JSON Files",subtitle:"Fixes a long-lasting bug of Discord where JSON files couldn't be sent properly.",icon:"icon-qs-files",patch(e){e.after(ge,"addFiles",(n,o)=>{!a(this.key)||o[0].files.forEach(i=>{i.mimeType==="application/json"&&(i.mimeType="text/plain")})})}},fe={key:"toastFix",title:"Format Toasts",subtitle:"Adds a key to toasts when opened (if it doesn't exist) and renames 'source' to 'icon'.",icon:"ic_feedback_24px",patch(e){e.before(P,"open",(n,o)=>{var i;!a(this.key)||(o[0].source&&(o[0].icon=o[0].source,delete o[0].source),(i=o[0]).key||(i.key=Math.random().toString()))})}};const{default:Se}=F(e=>{var n,o;return((o=(n=e==null?void 0:e.default)==null?void 0:n.render)==null?void 0:o.name)==="ActionSheet"});var xe={key:"expandableSheet",title:"Expandable ActionSheets",subtitle:()=>`Forces any User-Profile Action Sheets to always initially render as ${a("shouldExpand",!1)?"":"non-"}expanded.`,icon:()=>`ic_chevron_${a("shouldExpand",!1)?"up":"down"}_24px`,patch(e){e.before(Se,"render",(n,o)=>{!o[0].startExpanded||!a(this.key)||(o[0].startExpanded=a("shouldExpand",!1))})},render(e){const[n,o]=r.useState(String(!!a("shouldExpand",!1)));return r.createElement(d,{style:{opacity:e?.5:1,marginHorizontal:16,marginBottom:12}},r.createElement(ee,{tabs:[{id:"false",title:"Non-expanded"},{id:"true",title:"Expanded"}],activeTab:n,onTabSelected:i=>!e&&(b("shouldExpand",JSON.parse(i)),o(i))}))}};const I={recommended:{icon:"img_nitro_star",patches:{headerPrimary:ce,jsonFix:be,toastFix:fe}},preferences:{icon:"ic_pencil_24px",patches:{roleDots:Q,mediaItems:he,earlyPronouns:ue,expandableSheet:xe}}},Te=e=>Object.values(I).forEach(n=>{Object.values(n.patches).forEach(o=>{var i;try{o.patch(e)}catch(s){console.error(`Patch '${o.title}' (${o.key}) errored with '${(i=s.message)!=null?i:s}'.`)}})}),u=B.createThemedStyleSheet({view:{backgroundColor:T.ThemeColorMap.BACKGROUND_SECONDARY_ALT},titles:{display:"flex",flex:1,alignItems:"center",justifyContent:"center",marginTop:25,marginBottom:-15},section:{marginHorizontal:16,shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:.15,shadowRadius:4.65,elevation:8},icon:{width:16,height:16,marginHorizontal:4},space:{marginBottom:50}}),ve=({icon:e,children:n,...o})=>{const[i,s]=r.useState(!1);return r.createElement(U,{icon:r.createElement(d,{style:{flexDirection:"row"}},e,r.createElement(M,{onPress:()=>{s(y=>!y),re({duration:300,create:{type:"keyboard",property:"scaleXY"},update:{type:"easeInEaseOut",property:"scaleY"},delete:{type:"easeInEaseOut",property:"opacity"}})}},r.createElement(g.Icon,{source:S(`ic_arrow${i?"":"_down"}`),style:u.icon}))),...o},i||n)};var Fe=()=>r.createElement(D,{style:u.view},r.createElement(d,{style:u.titles},r.createElement(ne,{title:"Customize your ideal experience."}),r.createElement(ie,{subtitle:w.description})),r.createElement(d,{style:u.section},Object.entries(I).map(([e,{icon:n,patches:o}])=>r.createElement(ve,{title:_.capitalize(e),icon:r.createElement(g.Icon,{style:u.icon,source:S(n)}),inset:!0,sectionBodyStyle:{borderRadius:12},uppercaseTitle:!1},Object.entries(o).map(([i,s],y,f)=>{var l;const{title:c,subtitle:h,icon:p,render:x}=s;return r.createElement(r.Fragment,null,r.createElement(g,{label:c,subLabel:typeof h=="function"?h==null?void 0:h():h,leading:p&&r.createElement(g.Icon,{source:S(typeof p=="function"?p==null?void 0:p():p)}),trailing:()=>r.createElement(j,{value:!!a(i,!0),onValueChange:R=>b(i,!!R)}),disabled:!a(i,!0)}),(l=x==null?void 0:x(!a(i,!0)))!=null?l:r.createElement(r.Fragment,null),y<f.length-1&&r.createElement(L,null))})))),r.createElement(d,{style:u.space}));const N=$(w.name),Ee={...w,onStart(){Te(N)},onStop(){N.unpatchAll()},getSettingsPanel(){return r.createElement(Fe,null)}};O(Ee);
