function N(e){window.enmity.plugins.registerPlugin(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const C=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const f=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const E=o.FormDivider;o.FormHint,o.FormIcon;const P=o.FormInput;o.FormLabel,o.FormRadio;const g=o.FormRow,R=o.FormSection;o.FormSelect,o.FormSubLabel;const I=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const S=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const m=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const B=window.enmity.modules.common.Users;window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack;const x=window.enmity.modules.common.Theme;window.enmity.modules.common.Linking;const D=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const u={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function A(e,t){return window.enmity.modules.getModule(e,t)}function M(...e){return window.enmity.modules.bulk(...e)}function F(...e){return window.enmity.modules.getByProps(...e)}function _(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;var L="UtilityPatches",k="1.1.8",O="Minor patches/fixes all bundled into a single plugin for convenience.",V="#ff91ff",U=[{name:"Rosie<3",id:"581573474296791211"}],h={name:L,version:k,description:O,color:V,authors:U};function H(e,t,n){window.enmity.settings.set(e,t,n)}function z(e,t,n){return window.enmity.settings.get(e,t,n)}const r=(e,t)=>z(h.name,e,t),p=(e,t)=>H(h.name,e,t),J={roleDot:{title:"Add Role Dots",subtitle:"Force-enables role-dots aswell as role-colors disregarding your accessibility settings.",icon:"ic_members"},headerPrimary:{title:"Fix Text Labels",subtitle:"Forces all Text Labels to use 'text-normal' instead of the default 'header-primary'.",icon:"ic_add_text"},earlyPronouns:{title:"Early Pronouns",subtitle:()=>`Set your own pronouns to ${r("pronouns","")} early. Keep in mind others will not be able to see this.`,icon:"ic_accessibility_24px",initCustom:e=>()=>m.createElement(P,{placeholder:"Your pronouns go here",title:"Pronouns",value:r("pronouns",""),onChange:t=>p("pronouns",t),disabled:e,style:{marginTop:-16}})},mediaItems:{title:"Media Items",subtitle:()=>`Changes the amount of media items per row in media picker to '${r("mediaItemsNumber",2)}' instead of the default '3'.`,icon:"ic_image",initCustom:e=>{const t=A(w=>w.render.name==="SliderComponent"),n=_("FormLabel"),{meta:{resolveSemanticColor:i}}=F("colors","meta"),{ThemeColorMap:{HEADER_PRIMARY:l,BACKGROUND_PRIMARY:c}}=S,s=w=>m.createElement(n,{text:w,style:{marginHorizontal:24,opacity:e?.5:1}}),a=1,y=8;return()=>m.createElement(f,{style:{alignItems:"center",flexDirection:"row"}},s(a),m.createElement(t,{value:r("mediaItemsNumber",2),minimumValue:a,maximumValue:y,style:{flex:1},minimumTrackTintColor:i(x.theme,l),maximumTrackTintColor:i(x.theme,c),step:1,onValueChange:w=>p("mediaItemsNumber",w),disabled:e,tapToSeek:!0}),s(y))}},jsonFix:{title:"Upload JSON Files",subtitle:"Fixes a long-lasting bug of Discord where JSON files couldn't be sent properly.",icon:"icon-qs-files"},expandableSheet:{title:"Expandable ActionSheets",subtitle:()=>`Forces any User-Profile Action Sheets to always initially render as ${r("shouldExpand",!1)?"":"non-"}expanded.`,icon:()=>r("shouldExpand",!1)?"ic_chevron_up_24px":"ic_chevron_down_24px",initCustom:e=>{const{BadgableTabBar:t}=F("BadgableTabBar"),n=[{id:"false",title:"Non-expanded"},{id:"true",title:"Expanded"}];return()=>{const[i,l]=m.useState(String(r("shouldExpand",!1)));return m.createElement(f,{style:{opacity:e?.5:1,marginHorizontal:16,marginBottom:12}},m.createElement(t,{tabs:n,activeTab:i,onTabSelected:c=>!e&&(p("shouldExpand",JSON.parse(c)),l(c))}))}}}};function T(e){return window.enmity.assets.getIDByName(e)}const b=D.createThemedStyleSheet({view:{backgroundColor:S.ThemeColorMap.BACKGROUND_SECONDARY_ALT},section:{marginHorizontal:16,borderRadius:12,shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:.15,shadowRadius:4.65,elevation:8},icon:{width:12,height:12}});var $=()=>m.createElement(C,{style:b.view},m.createElement(R,{title:"Preferences",icon:m.createElement(g.Icon,{style:b.icon,source:T("img_nitro_star")}),sectionBodyStyle:b.section,uppercaseTitle:!1},Object.entries(J).map(([e,t],n,i)=>{var l;const{title:c,subtitle:s,icon:a,initCustom:y}=t,w=(l=y==null?void 0:y(!r(e,!0)))!=null?l:()=>m.createElement(m.Fragment,null);return m.createElement(m.Fragment,null,m.createElement(g,{label:c,subLabel:typeof s=="function"?s==null?void 0:s():s,leading:a&&m.createElement(g.Icon,{source:T(typeof a=="function"?a==null?void 0:a():a)}),trailing:()=>m.createElement(I,{value:r(e,!0),onValueChange:v=>p(e,Boolean(v))}),disabled:!r(e,!0)}),m.createElement(w,null),n<i.length-1&&m.createElement(E,null))})));function j(e){return window.enmity.patcher.create(e)}function K(e,t,n){return window.enmity.utilities.findInReactTree(e,t,n)}const[{NativeModules:{DCDChatManager:Y}},G,{Text:q},{getSettingTitle:W},Q,X,Z,ee,{default:oe}]=M(u.byProps("View","Text","NativeModules"),u.byName("FormLabel",!1),u.byProps("TextStyleSheet"),u.byProps("getSettingTitle"),u.byName("SettingsOverviewScreen",!1),u.byProps("getUserProfile"),u.byProps("getNumMediaItemsPerRow"),u.byProps("addFiles","popFirstFile"),e=>{var t,n;return((n=(t=e==null?void 0:e.default)==null?void 0:t.render)==null?void 0:n.name)==="ActionSheet"}),d=j("utils"),te={...h,onStart(){d.before(Y,"updateRows",(t,n)=>{if(!r("roleDot"))return;const i=JSON.parse(n[1]);for(const l of i)l.type===1&&(l.message.shouldShowRoleDot=!0,l.message.shouldShowRoleOnName=!0);n[1]=JSON.stringify(i)}),d.after(G,"default",(t,n,i)=>{!r("headerPrimary")||(i.props.color="text-normal")});const e=d.after(Q,"default",(t,n,i)=>{e();const{sections:l}=K(i,s=>s.sections),c=l.map(s=>s.settings).reduce((s,a)=>[...s,...a],[]).map(s=>W(s));d.before(q,"render",(s,a)=>{!r("headerPrimary")||a[0].variant==="text-md/semibold"&&a[0].color==="header-primary"&&c.includes(a[0].children)&&(a[0].color="text-normal")})});d.after(X,"getUserProfile",(t,n,i)=>{n[0]!==B.getCurrentUser().id||!r("pronouns","")||!i||i.pronouns||(i.pronouns=r("pronouns",""))}),d.instead(Z,"getNumMediaItemsPerRow",(t,n,i)=>r("mediaItems")?r("mediaItemsNumber",2):i.apply(t,n)),d.after(ee,"addFiles",(t,n)=>{!r("jsonFix")||n[0].files.forEach(i=>{i.mimeType==="application/json"&&(i.mimeType="text/plain")})}),d.before(oe,"render",(t,n)=>{!r("expandableSheet")||!n[0].startExpanded||(n[0].startExpanded=r("shouldExpand",!1))})},onStop(){d.unpatchAll()},getSettingsPanel(){return m.createElement($,null)}};N(te);
