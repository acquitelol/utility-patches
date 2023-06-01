function v(e){window.enmity.plugins.registerPlugin(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const N=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const f=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const C=o.FormDivider;o.FormHint,o.FormIcon;const E=o.FormInput;o.FormLabel,o.FormRadio;const g=o.FormRow,P=o.FormSection;o.FormSelect,o.FormSubLabel;const R=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const S=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const r=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const I=window.enmity.modules.common.Users;window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack;const x=window.enmity.modules.common.Theme;window.enmity.modules.common.Linking;const B=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const c={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function D(e,t){return window.enmity.modules.getModule(e,t)}function A(...e){return window.enmity.modules.bulk(...e)}function F(...e){return window.enmity.modules.getByProps(...e)}function M(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;var _="UtilityPatches",L="1.1.8",k="Minor patches/fixes all bundled into a single plugin for convenience.",O="#ff91ff",V=[{name:"Rosie<3",id:"581573474296791211"}],h={name:_,version:L,description:k,color:O,authors:V};function U(e,t,n){window.enmity.settings.set(e,t,n)}function H(e,t,n){return window.enmity.settings.get(e,t,n)}const m=(e,t)=>H(h.name,e,t),p=(e,t)=>U(h.name,e,t),z={roleDot:{title:"Add Role Dots",subtitle:"Force-enables role-dots aswell as role-colors disregarding your accessibility settings.",icon:"ic_members"},headerPrimary:{title:"Fix Text Labels",subtitle:"Forces all Text Labels to use 'text-normal' instead of the default 'header-primary'.",icon:"ic_add_text"},earlyPronouns:{title:"Early Pronouns",subtitle:()=>`Set your own pronouns to ${m("pronouns","")} early. Keep in mind others will not be able to see this.`,icon:"ic_accessibility_24px",custom:e=>r.createElement(E,{placeholder:"Your pronouns go here",title:"Pronouns",value:m("pronouns",""),onChange:t=>p("pronouns",t),disabled:e,style:{marginTop:-16}})},mediaItems:{title:"Media Items",subtitle:()=>`Changes the amount of media items per row in media picker to '${m("mediaItemsNumber",2)}' instead of the default '3'.`,icon:"ic_image",custom:e=>{const t=D(u=>u.render.name==="SliderComponent"),n=M("FormLabel"),{meta:{resolveSemanticColor:i}}=F("colors","meta"),{ThemeColorMap:{HEADER_PRIMARY:l,BACKGROUND_PRIMARY:w}}=S,s=u=>r.createElement(n,{text:u,style:{marginHorizontal:24,opacity:e?.5:1}}),a=1,y=8;return r.createElement(f,{style:{alignItems:"center",flexDirection:"row"}},s(a),r.createElement(t,{value:m("mediaItemsNumber",2),minimumValue:a,maximumValue:y,style:{flex:1},minimumTrackTintColor:i(x.theme,l),maximumTrackTintColor:i(x.theme,w),step:1,onValueChange:u=>p("mediaItemsNumber",u),disabled:e,tapToSeek:!0}),s(y))}},jsonFix:{title:"Upload JSON Files",subtitle:"Fixes a long-lasting bug of Discord where JSON files couldn't be sent properly.",icon:"icon-qs-files"},expandableSheet:{title:"Expandable ActionSheets",subtitle:()=>`Forces any User-Profile Action Sheets to always initially render as ${m("shouldExpand",!1)?"":"non-"}expanded.`,icon:()=>m("shouldExpand",!1)?"ic_chevron_up_24px":"ic_chevron_down_24px",custom:e=>{const{BadgableTabBar:t}=F("BadgableTabBar"),[n,i]=r.useState(String(m("shouldExpand",!1)));return r.createElement(f,{style:{opacity:e?.5:1,marginHorizontal:16,marginBottom:12}},r.createElement(t,{tabs:[{id:"false",title:"Non-expanded"},{id:"true",title:"Expanded"}],activeTab:n,onTabSelected:l=>!e&&(p("shouldExpand",JSON.parse(l)),i(l))}))}}};function T(e){return window.enmity.assets.getIDByName(e)}const b=B.createThemedStyleSheet({view:{backgroundColor:S.ThemeColorMap.BACKGROUND_SECONDARY_ALT},section:{marginHorizontal:16,borderRadius:12,shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:.15,shadowRadius:4.65,elevation:8},icon:{width:12,height:12}});var J=()=>r.createElement(N,{style:b.view},r.createElement(P,{title:"Preferences",icon:r.createElement(g.Icon,{style:b.icon,source:T("img_nitro_star")}),sectionBodyStyle:b.section,uppercaseTitle:!1},Object.entries(z).map(([e,t],n,i)=>{var l;const{title:w,subtitle:s,icon:a,custom:y}=t;return r.createElement(r.Fragment,null,r.createElement(g,{label:w,subLabel:typeof s=="function"?s==null?void 0:s():s,leading:a&&r.createElement(g.Icon,{source:T(typeof a=="function"?a==null?void 0:a():a)}),trailing:()=>r.createElement(R,{value:m(e,!0),onValueChange:u=>p(e,Boolean(u))}),disabled:!m(e,!0)}),(l=y==null?void 0:y(!m(e,!0)))!=null?l:r.createElement(r.Fragment,null),n<i.length-1&&r.createElement(C,null))})));function $(e){return window.enmity.patcher.create(e)}function j(e,t,n){return window.enmity.utilities.findInReactTree(e,t,n)}const[{NativeModules:{DCDChatManager:K}},Y,{Text:G},{getSettingTitle:q},W,Q,X,Z,{default:ee}]=A(c.byProps("View","Text","NativeModules"),c.byName("FormLabel",!1),c.byProps("TextStyleSheet"),c.byProps("getSettingTitle"),c.byName("SettingsOverviewScreen",!1),c.byProps("getUserProfile"),c.byProps("getNumMediaItemsPerRow"),c.byProps("addFiles","popFirstFile"),e=>{var t,n;return((n=(t=e==null?void 0:e.default)==null?void 0:t.render)==null?void 0:n.name)==="ActionSheet"}),d=$("utils"),oe={...h,onStart(){d.before(K,"updateRows",(t,n)=>{if(!m("roleDot"))return;const i=JSON.parse(n[1]);for(const l of i)l.type===1&&(l.message.shouldShowRoleDot=!0,l.message.shouldShowRoleOnName=!0);n[1]=JSON.stringify(i)}),d.after(Y,"default",(t,n,i)=>{!m("headerPrimary")||(i.props.color="text-normal")});const e=d.after(W,"default",(t,n,i)=>{e();const{sections:l}=j(i,s=>s.sections),w=l.map(s=>s.settings).reduce((s,a)=>[...s,...a],[]).map(s=>q(s));d.before(G,"render",(s,a)=>{!m("headerPrimary")||a[0].variant==="text-md/semibold"&&a[0].color==="header-primary"&&w.includes(a[0].children)&&(a[0].color="text-normal")})});d.after(Q,"getUserProfile",(t,n,i)=>{n[0]!==I.getCurrentUser().id||!m("pronouns","")||!i||i.pronouns||(i.pronouns=m("pronouns",""))}),d.instead(X,"getNumMediaItemsPerRow",(t,n,i)=>m("mediaItems")?m("mediaItemsNumber",2):i.apply(t,n)),d.after(Z,"addFiles",(t,n)=>{!m("jsonFix")||n[0].files.forEach(i=>{i.mimeType==="application/json"&&(i.mimeType="text/plain")})}),d.before(ee,"render",(t,n)=>{!m("expandableSheet")||!n[0].startExpanded||(n[0].startExpanded=m("shouldExpand",!1))})},onStop(){d.unpatchAll()},getSettingsPanel(){return r.createElement(J,null)}};v(oe);
