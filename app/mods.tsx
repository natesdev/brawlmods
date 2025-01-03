'use client'

interface ModVersion {
    version: string;
    downloadLink: string;
    altDownload?: string;
    changelog?: string;
}

interface Mod {
    name: string;
    shortDescription: string;
    description?: string;
    tags: string[];
    versions: ModVersion[];
    id: string;
}

export const mods: Mod[] = [
    {
        name: "Nulls Brawl",
        description: `
## Unlimited resources

You have unlimited gems, gold and boxes. If you don't want to spend your time there are some free magic boxes waiting you in the shop.

## All Brawlers and Skins

You can choose any brawler and skin to make some screenshots to share with your friends. Let them envy you.
## Multiplayer

Bots are... boring. Luckily, we have great multiplayer support so you can play with you friends without any lag.

## Fast Updates
We are trying to add new brawlers and features as fast as possible. Sometimes it takes only few days!`,
        shortDescription: "Null's Brawl is a Brawl Stars private server with unlimited gems, gold and boxes. Play with friends on any brawler you want.",
        tags: ["Private server", "Supports iOS"],
        id: "nulls",
        versions: [
            {
                version: "V59 for Android",
                downloadLink: "https://dnull.xyz/latest_bs",
                altDownload: "https://dl.natesworks.com/brawlmods/nullsbrawl/nb_59.197_fp.apk"
            },
            {
                version: "V59 for iOS",
                downloadLink: "https://dnull.xyz/latest_bs_i",
                altDownload: "https://dl.natesworks.com/brawlmods/nullsbrawl/nb59.197_ecd6d17a.ipa"
            }
        ]
    },
    {
        name: "Arch Brawl",
        shortDescription: "A V29 private server for iOS and Android with V31 brawlers!",
        tags: ["Private server", "Support iOS"],
        id: "archbtw",
        versions: [
            {
                version: "V29",
                downloadLink: "https://download.natesworks.com/brawlmods/arch/archbrawl.apk"
            },
            {
                version: "V29 for iOS",
                downloadLink: "https://download.natesworks.com/brawlmods/arch/archbrawl.ipa"
            }
        ]
    },
    {
        name: "Magic Brawl",
        shortDescription: "Magic Brawl is the rebirth of Brawl Stars and its best times! All content is available on the server: online battles, all the characters and everything. By downloading this server, you can get great pleasure from the updates, because we update the server every month!",
        tags: ["Private server", "Support iOS"],
        id: "magic",
        versions: [
            {
                version: "V43",
                downloadLink: "https://files.magic-servers.xyz/mb.apk",
                altDownload: "https://download.natesworks.com/brawlmods/magicbrawl/mb.apk"
            },
            {
                version: "V43 for iOS",
                downloadLink: "https://files.magic-servers.xyz/mb.ipa",
                altDownload: "https://download.natesworks.com/brawlmods/magicbrawl/mb.ipa"
            }
        ]
    },
    {
        name: "Retro Brawl",
        shortDescription: "Retro Brawl is the old version of Brawl Stars (2018). Online battles, 21 characters and star powers for them, clans, etc. are available on the server. Feel better times, from the old menu to the atmosphere!",
        tags: ["Private server", "Supports iOS"],
        id: "retro",
        versions: [
            {
                version: "V12 for Android",
                downloadLink: "https://files.magic-servers.xyz/retrobrawl.apk"
            },
            {
                version: "V12 for iOS",
                downloadLink: "https://files.magic-servers.xyz/retrobrawl.ipa"
            }
        ]
    },
    {
        name: "BSD Brawl",
        shortDescription: "Allows changing server region, viewing enemies ammo and more!",
        tags: ["Official server"],
        id: "bsd",
        versions: [
            {
                version: "V59",
                downloadLink: "https://dl.natesworks.com/brawlmods/bsdbrawl/bsd_brawl_v59.197_(28).apk"
            }
        ]
    },
    {
        name: "Gene Brawl",
        shortDescription: "Adds a debug menu allowing you to visually unlock all brawlers and more!",
        tags: ["Official server"],
        id: "gene",
        versions: [
            {
                version: "V59",
                downloadLink: "https://dl.natesworks.com/brawlmods/genebrawl/genebrawl_v59.apk"
            }
        ]
    },
    {
        name: "Switchgear",
        shortDescription: "An official server mod similar to BSD and Gene with more features.",
        tags: ["Official server"],
        id: "switchgear",
        versions: [
            {
                version: "V59",
                downloadLink: "https://dl.natesworks.com/brawlstars/mods/switchgear/Switchgear-59-4.apk",
            }
        ]
    },
    {
        name: "Surge Offline",
        shortDescription: "An offline version of Brawl Stars V29! Allows you to open boxes to unlock brawlers, gain trophies and play any mode. It also adds new skins and 3rd star powers for some brawlers",
        tags: ["Offline"],
        id: "sb",
        versions: [
            {
                version: "V1.3 Amethyst",
                downloadLink: "https://dl.natesworks.com/brawlmods/surgeoffline/surgeoffline-amethyst.apk"
            }
        ]
    },
    {
        name: "Cool Brawl",
        shortDescription: "Adds mod menu, new skins, a new brawler and more.",
        tags: ["Offline"],
        id: "cool",
        versions: [
            {
                version: "V2.1.0",
                downloadLink: "https://dl.natesworks.com/brawlstars/mods/coolbrawl/Cool+Brawl_v2.1.0.apk"
            }
        ]
    },
    {
        name: "Brawler Maker",
        shortDescription: "A tool that can automatically create a brawler from start to finish without any modding knowledge required.",
        tags: ["Utilities"],
        id: "brawler-maker",
        description: "Brawler Maker is a python tool that allows even begginers to create their own brawler. To do that, it presents a UI where the user just have to enter information about the brawler, and a playable apk will be automatically generated, with other customisation settings, such as it can be useful for begginers that don't know how to mod, or for more advanced users that just want to make a base brawler.",
        versions: [
            {
                version: "Latest",
                downloadLink: "https://github.com/AngelFireLA/AngelFire-Brawlermaker/releases"
            }
        ]
    },
    {
        name: "BSL",
        shortDescription: "BSDS ported to newer versions. No online battles or brawler logic.",
        tags: ["Selfhosted"],
        id: "bsl",
        versions: [
            {
                version: "V53 Server",
                downloadLink: "https://github.com/LkPrtctrd/BSL-V53/archive/refs/heads/master.zip"
            },
            {
                version: "V53 Client",
                downloadLink: "https://www.mediafire.com/file/n7gptweb86ncf5a/com.bsl.v53-rev1.apk/file"
            },
            {
                version: "V55 Server",
                downloadLink: "https://github.com/LkPrtctrd/BSL-V55/archive/refs/heads/master.zip"
            },
            {
                version: "V55 Client",
                downloadLink: "https://www.mediafire.com/file/v7zgn71r0gw1nqi/com.bsl.v55.apk/file"
            }
        ]
    },
    {
        name: "BSDS",
        shortDescription: "Selfhost your own private server with working battles. No brawler logic.",
        tags: ["Selfhosted"],
        id: "bsds",
        versions: [
            {
                version: "V41 Server",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/v44server.zip"
            },
            {
                version: "V41 Client",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/com.projectbsds.v41150.apk"
            },
            {
                version: "V44 Server",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/v44server.zip"
            },
            {
                version: "V44 Client",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/com.projectbsds.v44226.apk"
            }
        ]
    },
    {
        name: "Infinity Reverse Brawl",
        shortDescription: "All characters unlocked and third star powers added for some brawlers and new skins.",
        tags: ["Offline"],
        id: "infinity-reverse",
        versions: [
            {
                version: "V15",
                downloadLink: "https://dl.natesworks.com/brawlmods/infinityreverse/Infinity-Reverse-Brawl-15.167.apk"
            }
        ]
    },
    {
        name: "Buster's Brawl",
        shortDescription: "All brawlers unlocked and maxed out. Attempts to recreate brawlers from newer versions of the game.",
        tags: ["Offline"],
        id: "buster",
        versions: [
            {
                version: "V12",
                downloadLink: "https://dl.natesworks.com/brawlmods/bustersbrawl/Buster's%20Brawl_signed.apk"
            }
        ]
    },
    {
        name: "Mechaoffline",
        shortDescription: "An offline version of V19.",
        tags: ["Offline"],
        id: "mechaoffline",
        versions: [
            {
                version: "V19",
                downloadLink: "https://dl.natesworks.com/brawlmods/mechaoffline/mechaoffline_v3%20(1).apk"
            }
        ]
    },
    {
        name: "Multi Brawl",
        shortDescription: "A modified version of V29 that replaces ALL the brawlers will new ones.",
        tags: ["Offline"],
        id: "multi",
        versions: [
            {
                version: "V47 (BS V29)",
                downloadLink: "https://multibrawl.com/download"
            }
        ]
    },
    {
        name: "Brawl Mod Beta",
        shortDescription: "Offline version of V11",
        tags: ["Offline"],
        id: "beta-offline",
        versions: [
            {
                version: "V11",
                downloadLink: "https://dl.natesworks.com/brawlmods/brawlmodbeta/base%20(2).apk"
            }
        ]
    },
    {
        name: "GioBrawl",
        shortDescription: "Offline version of V29 with new skins and... interesting brawler names.",
        tags: ["Offline"],
        id: "gio",
        versions: [
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlmods/giobrawl/GioBrawl_V2.5.apk"
            }
        ]
    },
    {
        name: "Crasher's Brawl",
        shortDescription: "Brawl Stars V29 with 11 brand new brawlers!",
        tags: ["Offline"],
        id: "crasher",
        versions: [
            {
                version: "0.5 (BS V29)",
                downloadLink: "https://drive.google.com/uc?export=download&id=1sMNJzJG61x1swTpiYJfISix-fFwx20uP",
                altDownload: "https://www.mediafire.com/file/ry7k1x0eckdgcr1/Crasher's+Brawl_v0.5.apk/file"
            }
        ]
    },
    {
        name: "Dimensional Brawl",
        shortDescription: "Dimensional Brawl is a small mod made on v29 mainly about custom brawlers",
        tags: ["Offline"],
        id: "dimensional",
        versions: [
            {
                version: "V29",
                downloadLink: "https://drive.google.com/uc?export=download&id=1_90LQFje1W8qDryqBkwxD4GHWuiOBpLC",
                altDownload: "https://www.mediafire.com/file/abe65bxfc6wtcxh/Dimensional_Brawl_V4.apk/file"
            }
        ]
    },
    {
        name: "Mandy's Candy",
        shortDescription: "Ports many brawlers from newer versions of the game.",
        tags: ["Offline"],
        id: "mandy",
        versions: [
            {
                version: "Bizarre circus",
                downloadLink: "https://drive.google.com/uc?export=download&id=1493BbXhEHbgheOb9Ddh0Q3Ybs2Qb8rQR",
            }
        ]
    },
    {
        name: "X-coder",
        shortDescription: "A tool for decoding (sc to png) and encoding (png to sc) sc files used in Supercell games.",
        tags: ["Utilities"],
        id: "x-coder",
        versions: [
            {
                version: "V2.2 for Android",
                downloadLink: "https://github.com/lilmuff2/X-coder/releases/download/v2.2/X-coder.apk",
            },
            {
                version: "V2.2 for Windows",
                downloadLink: "https://github.com/lilmuff2/X-coder/releases/download/v2.2/X-coder_setup.exe",
            }
        ]
    },
    {
        name: "True V53 Offline",
        shortDescription: "Brawl Stars V53 Offline. Doesn't work on Android 14 and Brawl Ball and Showdown don't work.",
        tags: ["Offline"],
        id: "truev53offline",
        versions: [
            {
                version: "V53",
                downloadLink: "https://dl.natesworks.com/brawlmods/truev53offline/truev53offline.apk",
            }
        ]
    },
    {
        name: "Mt Brawl Online",
        shortDescription: "All the cursed brawlers of Mt Brawl, but you can play with friends.",
        tags: ["Private Server"],
        id: "mtbrawl-online",
        versions: [
            {
                version: "V2",
                downloadLink: "https://dl.natesworks.com/brawlstars/mods/mtbrawl/mtbrawl-online.apk",
            }
        ]
    },
    {
        name: "Darryl Stars",
        shortDescription: "Adds 30 new brawlers.",
        tags: ["Offline"],
        id: "darryl",
        versions: [
            {
                version: "V9 (BS V29)",
                downloadLink: "https://www.mediafire.com/file/toku4rrnefxbr8c/Darryl_Stars_V9.apk/file",
            }
        ]
    },
    {
        name: "GTX Brawl",
        shortDescription: "Adds skins from Chinese Brawl Stars, adds new skins, maps and modifiers.",
        tags: ["Offline"],
        id: "gtx",
        versions: [
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlmods/gtxbrawl/GTXBRAWL_Axusterra.apk",
            }
        ]
    },
    {
        name: "Nais Brawl",
        shortDescription: "Replaces all brawlers with new ones!",
        tags: ["Offline"],
        id: "nais",
        versions: [
            {
                version: "V17",
                downloadLink: "https://www.mediafire.com/file/2w2en451dm7haj5/Nais+Brawl+v17.apk/file",
            }
        ]
    },
    {
        name: "Boomerang Brawl",
        shortDescription: "All brawlers attacks return like Carls.",
        tags: ["Offline"],
        id: "boomerang",
        versions: [
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlmods/boomerangbrawl/boomerang.apk",
            }
        ]
    },
    {
        name: "Mt Brawl",
        shortDescription: "All brawlers are cursed.",
        tags: ["Offline"],
        id: "mt",
        versions: [
            {
                version: "Finished",
                downloadLink: "https://dl.natesworks.com/brawlmods/mtbrawl/mtbrawl_finished.apk",
            }
        ]
    },
    {
        name: "Aimbot Brawl",
        shortDescription: "Enables aimbot.",
        tags: ["Offline"],
        id: "aimbot",
        versions: [
            {
                version: "V29",
                downloadLink: "https://www.mediafire.com/file/7gskpz9kijgbpgy/aimbot+brawl.apk/file",
            }
        ]
    },
    {
        name: "TTB Stars",
        shortDescription: "Adds more brawlers.",
        tags: ["Offline"],
        id: "ttb",
        versions: [
            {
                version: "V15",
                downloadLink: "https://www.mediafire.com/file/7gskpz9kijgbpgy/aimbot+brawl.apk/file",
            }
        ]
    },
    {
        name: "GDX Brawl",
        shortDescription: "Offline brawl stars.",
        tags: ["Offline"],
        id: "gdx",
        versions: [
            {
                version: "V19",
                downloadLink: "https://drive.google.com/uc?export=download&id=1EBlqGH_dnIlA5gZ-VeJIrhlpw5bDTHby",
            }
        ]
    },
    {
        name: "Hamster Brawl",
        shortDescription: "A fully functional private server.",
        tags: ["Private server"],
        id: "hamster",
        description: `
Hamster Brawl is a V28 private server!
What works?

- Road of Glory
- Club
- Shop
- Bot fights
- Ratings
and much more!`,
        versions: [
            {
                version: "V28",
                downloadLink: "https://drive.google.com/uc?export=download&id=1WNlX6jEjw2oJUjmzfTjVA9oTHsYBV74j",
            }
        ]
    },
    {
        name: "Pirate Offline",
        shortDescription: "A fully functional V24 offline mod.",
        tags: ["Offline"],
        id: "pirate",
        versions: [
            {
                version: "V3.2 (BS V24)",
                downloadLink: "https://drive.google.com/file/d/19JBTXFFhq05QnU7LWSXrH4rN1PjkU-RM/view?usp=drivesdk",
            }
        ]
    },
    {
        name: "Sigma Brawl",
        shortDescription: "Old movement and OG brawlers!",
        tags: ["Private server"],
        id: "brainrot",
        versions: [
            {
                version: "V28",
                downloadLink: "https://drive.google.com/uc?export=download&id=15Dj2Uhaukvd8L_gZ73uP-N3fCTVOjtYM"
            }
        ]
    },
    {
        name: "Hyper Brawl",
        shortDescription: "V19 private server.",
        tags: ["Private server"],
        id: "hyper",
        versions: [
            {
                version: "V19",
                downloadLink: "https://drive.google.com/file/d/1Uv20bSm88jpoMczJUGH4JCpc3ra2Qoqt/view?usp=sharing"
            }
        ]
    },
    {
        name: "RUID",
        shortDescription: "Based on surge offline v28 has half of all bs skins new brawlers some skills changed and new loading, menu and training ground.",
        tags: ["Private server"],
        id: "ruid",
        versions: [
            {
                version: "V20",
                downloadLink: "https://drive.google.com/uc?export=download&id=19nnBlUXV_CHWiXR9VX1lxIxa_JH3Oy1i"
            }
        ]
    },
    {
        name: "Funneh Brawl",
        shortDescription: "V28 Private server (see full description).",
        description: `Funneh Brawl V28 Release! 😱
What works?;👍
-Clubs ✅
-Battle End ✅
-Trophy Road ✅
-Boxes ✅
-"Daily Deals" ✅
-Brawl Pass ✅
And more! 😜
Check out yourself 🥰
Apk below ❤️
Subscribe! (http://t.me/FunnehBrawl)`,
        tags: ["Private server"],
        id: "funneh",
        versions: [
            {
                version: "V28",
                downloadLink: "https://dl.natesworks.com/brawlstars/mods/funneh-brawl/Funneh-Brawl_v28.apk",
                altDownload: "t.me/FunnehBrawl"
            }
        ]
    }
];
