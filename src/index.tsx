import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import Settings from "./Settings";
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { getByName, getByProps } from 'enmity/metro';
import { findInReactTree } from 'enmity/utilities';
import { React, Users } from 'enmity/metro/common';
import { assignExisting, get, patchMap } from './store';
import { get as _get } from 'enmity/api/settings';

const Patcher = create('utils');
const { NativeModules: { DCDChatManager } } = getByProps("View", "Text", "NativeModules");
const FormLabel = getByName("FormLabel", { default: false });
const { Text } = getByProps("TextStyleSheet");
const { getSettingTitle } = getByProps("getSettingTitle");
const SettingsOverviewScreen = getByName("SettingsOverviewScreen", { default: false });
const FilesManager = getByProps("addFiles", "popFirstFile");
const MediaItemManager = getByProps("getNumMediaItemsPerRow");
const Profile = getByProps("getUserProfile");

const AddRoleDot: Plugin = {
    ...manifest,

    onStart() {
        Object.keys(patchMap).forEach(prop => assignExisting(prop as keyof typeof patchMap));

        Patcher.before(DCDChatManager, "updateRows", (_, args) => {
            if (!get("roleDot")) return;

            const rows = JSON.parse(args[1]);

            for (const row of rows) {
                if (row.type === 1) {
                    row.message.shouldShowRoleDot = true
                    row.message.shouldShowRoleOnName = true
                }
            }

            args[1] = JSON.stringify(rows);
        });

        Patcher.after(FormLabel, "default", (_, __, res) => {
            if (!get("headerPrimary")) return;

            res.props.color = "text-normal";
        })

        const unpatch = Patcher.after(SettingsOverviewScreen, "default", (_, __, res) => {
            unpatch();

            const { sections }: { sections: any[] } = findInReactTree(res, r => r.sections);
            const settings = sections
                .map(section => section.settings)
                .reduce((acc, obj) => [...acc, ...obj], [])
                .map(setting => getSettingTitle(setting))

            Patcher.before(Text, "render", (_, args) => {
                if (!get("headerPrimary")) return;

                if (args[0].variant === "text-md/semibold" 
                    && args[0].color === "header-primary"
                    && settings.includes(args[0].children)
                ) args[0].color = "text-normal";
            })
        });

        Patcher.instead(MediaItemManager, "getNumMediaItemsPerRow", (self, args, orig) => get("mediaItems") 
            ? _get(manifest.name, "mediaItemsNumber", 2)
            : orig.apply(self, args));

        Patcher.after(FilesManager, "addFiles", (_, args) => {
            if (!get("jsonFix")) return;

            args[0].files.forEach((file) => {
                file.mimeType === "application/json" && (file.mimeType = "text/plain")
            })
        })

        Patcher.after(Profile, "getUserProfile", (_, args, res) => {
            if (args[0] !== Users.getCurrentUser().id || !get("pronouns")) return;
            res.pronouns ||= _get(manifest.name, "pronouns", "unspecified");
        })
   },

    onStop() {
        Patcher.unpatchAll();
    },

    getSettingsPanel() {
        return <Settings />
    }
};

registerPlugin(AddRoleDot);