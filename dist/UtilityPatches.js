function S(o){window.enmity.plugins.registerPlugin(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const T=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const v=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const x=e.FormDivider;e.FormHint,e.FormIcon;const C=e.FormInput;e.FormLabel,e.FormRadio;const f=e.FormRow,N=e.FormSection;e.FormSelect,e.FormSubLabel;const I=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const R=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const r=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const P=window.enmity.modules.common.Users;window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack;const b=window.enmity.modules.common.Theme;window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function E(o,t){return window.enmity.modules.getModule(o,t)}function u(...o){return window.enmity.modules.getByProps(...o)}function p(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common;var M="UtilityPatches",D="1.1.5",L="Minor patches/fixes all bundled into a single plugin for convenience.",A="#ff0069",k=[{name:"Rosie<3",id:"581573474296791211"}],g={name:M,version:D,description:L,color:A,authors:k};function h(o,t,n){window.enmity.settings.set(o,t,n)}function B(o,t,n){return window.enmity.settings.get(o,t,n)}const s=(o,t)=>B(g.name,o,t),V=(o,t)=>h(g.name,o,t),O={roleDot:{title:"Add Role Dots",subtitle:"Force-enables role-dots aswell as role-colors disregarding your accessibility settings.",icon:"ic_members"},headerPrimary:{title:"Fix Text Labels",subtitle:"Forces all Text Labels use the 'text-normal' color instead of the default 'header-primary'.",icon:"ic_add_text"},earlyPronouns:{title:"Early Pronouns",subtitle:()=>`Set your own pronouns to ${s("pronouns","unspecified")}. Keep in mind others will not be able to see this.`,icon:"ic_accessibility_24px",custom:o=>r.createElement(C,{placeholder:"Your pronouns go here",title:"Pronouns",value:s("pronouns","unspecified"),onChange:t=>h(g.name,"pronouns",t),disabled:o,style:{marginTop:-16}})},mediaItems:{title:"Media Items",subtitle:()=>`Changes the amount of media items per row in media picker to '${s("mediaItemsNumber",2)}' instead of the default '3'.`,icon:"ic_image",custom:o=>{const t=E(d=>d.render.name==="SliderComponent"),n=p("FormLabel"),{meta:{resolveSemanticColor:i}}=u("colors","meta"),{ThemeColorMap:{HEADER_PRIMARY:a,BACKGROUND_PRIMARY:w}}=R,m=d=>r.createElement(n,{text:d,style:{marginHorizontal:24,opacity:o?.5:1}}),l=1,y=8;return r.createElement(v,{style:{alignItems:"center",flexDirection:"row"}},m(l),r.createElement(t,{value:s("mediaItemsNumber",2),minimumValue:l,maximumValue:y,style:{flex:1},minimumTrackTintColor:i(b.theme,a),maximumTrackTintColor:i(b.theme,w),step:1,onValueChange:d=>h(g.name,"mediaItemsNumber",d),key:"media-items-number",disabled:o,tapToSeek:!0}),m(y))}},jsonFix:{title:"Upload JSON Files",subtitle:"Fixes a long-lasting bug of Discord where JSON files couldn't be uploaded and sent properly.",icon:"icon-qs-files"}};function _(o){return window.enmity.assets.getIDByName(o)}var U=()=>r.createElement(T,null,r.createElement(N,{title:"Preferences"},Object.entries(O).map(([o,t],n,i)=>{var a;const{title:w,subtitle:m,icon:l,custom:y}=t,d=!s(o,!0);return r.createElement(r.Fragment,null,r.createElement(f,{label:w,subLabel:typeof m=="function"?m==null?void 0:m():m,leading:l&&r.createElement(f.Icon,{source:_(l)}),trailing:()=>r.createElement(I,{value:s(o,!0),onValueChange:F=>V(o,F)}),disabled:d}),(a=y==null?void 0:y(d))!=null?a:r.createElement(r.Fragment,null),n<i.length-1&&r.createElement(x,null))})));function j(o){return window.enmity.patcher.create(o)}function H(o,t,n){return window.enmity.utilities.findInReactTree(o,t,n)}const c=j("utils"),{NativeModules:{DCDChatManager:J}}=u("View","Text","NativeModules"),$=p("FormLabel",{default:!1}),{Text:z}=u("TextStyleSheet"),{getSettingTitle:K}=u("getSettingTitle"),Y=p("SettingsOverviewScreen",{default:!1}),G=u("addFiles","popFirstFile"),q=u("getNumMediaItemsPerRow"),W=u("getUserProfile"),Q={...g,onStart(){c.before(J,"updateRows",(t,n)=>{if(!s("roleDot"))return;const i=JSON.parse(n[1]);for(const a of i)a.type===1&&(a.message.shouldShowRoleDot=!0,a.message.shouldShowRoleOnName=!0);n[1]=JSON.stringify(i)}),c.after($,"default",(t,n,i)=>{!s("headerPrimary")||(i.props.color="text-normal")});const o=c.after(Y,"default",(t,n,i)=>{o();const{sections:a}=H(i,m=>m.sections),w=a.map(m=>m.settings).reduce((m,l)=>[...m,...l],[]).map(m=>K(m));c.before(z,"render",(m,l)=>{!s("headerPrimary")||l[0].variant==="text-md/semibold"&&l[0].color==="header-primary"&&w.includes(l[0].children)&&(l[0].color="text-normal")})});c.instead(q,"getNumMediaItemsPerRow",(t,n,i)=>s("mediaItems")?s("mediaItemsNumber",2):i.apply(t,n)),c.after(G,"addFiles",(t,n)=>{!s("jsonFix")||n[0].files.forEach(i=>{i.mimeType==="application/json"&&(i.mimeType="text/plain")})}),c.after(W,"getUserProfile",(t,n,i)=>{n[0]!==P.getCurrentUser().id||!s("pronouns")||i.pronouns||(i.pronouns=s("pronouns","unspecified"))})},onStop(){c.unpatchAll()},getSettingsPanel(){return r.createElement(U,null)}};S(Q);
