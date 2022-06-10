// RichTextItemResponse
export type RichTextItemResponse = {
    type: "text";
    text: {
        content: string;
        link: {
            url: string;
        } | null;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background";
    };
    plain_text: string;
    href: string | null;
} | {
    type: "mention";
    mention: {
        type: "user";
        user: PartialUserObjectResponse;
    } | {
        type: "date";
        date: DateResponse;
    } | {
        type: "link_preview";
        link_preview: {
            url: string;
        };
    } | {
        type: "template_mention";
        template_mention: {
            type: "template_mention_date";
            template_mention_date: "today" | "now";
        } | {
            type: "template_mention_user";
            template_mention_user: "me";
        };
    } | {
        type: "page";
        page: {
            id: string;
        };
    } | {
        type: "database";
        database: {
            id: string;
        };
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background";
    };
    plain_text: string;
    href: string | null;
} | {
    type: "equation";
    equation: {
        expression: string;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background";
    };
    plain_text: string;
    href: string | null;
};

export type PartialUserObjectResponse = {
    id: string;
    object: "user";
} | UserObjectResponse;

export type UserObjectResponse = {
    type: "person";
    person: {
        email?: string;
    };
    name: string | null;
    avatar_url: string | null;
    id: string;
    object: "user";
} | {
    type: "bot";
    bot: EmptyObject | {
        owner: {
            type: "user";
            user: {
                type: "person";
                person: {
                    email: string;
                };
                name: string | null;
                avatar_url: string | null;
                id: string;
                object: "user";
            } | {
                id: string;
                object: "user";
            };
        } | {
            type: "workspace";
            workspace: true;
        };
    };
    name: string | null;
    avatar_url: string | null;
    id: string;
    object: "user";
};

export type EmptyObject = Record<string, never>;

export type TimeZoneRequest = "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Pacific-New" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";

export type DateResponse = {
    start: string;
    end: string | null;
    time_zone: TimeZoneRequest | null;
}

// Blocks
export type ListBlockChildrenResponse = {
    type: "block";
    block: EmptyObject;
    object: "list";
    next_cursor: string | null;
    has_more: boolean;
    results: Array<PartialBlockObjectResponse | BlockObjectResponse>;
};

export type PartialBlockObjectResponse = {
    object: "block";
    id: string;
};

export type BlockObjectResponse = {
    type: "paragraph";
    paragraph: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "heading_1";
    heading_1: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "heading_2";
    heading_2: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "heading_3";
    heading_3: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "bulleted_list_item";
    bulleted_list_item: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "numbered_list_item";
    numbered_list_item: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "quote";
    quote: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "to_do";
    to_do: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        checked: boolean;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "toggle";
    toggle: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "template";
    template: {
        rich_text: Array<RichTextItemResponse>;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "synced_block";
    synced_block: {
        synced_from: {
            type: "block_id";
            block_id: string;
        } | null;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "child_page";
    child_page: {
        title: string;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "child_database";
    child_database: {
        title: string;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "equation";
    equation: {
        expression: string;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "code";
    code: {
        rich_text: Array<RichTextItemResponse>;
        caption: Array<RichTextItemResponse>;
        language: LanguageRequest;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "callout";
    callout: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        icon: {
            type: "emoji";
            emoji: EmojiRequest;
        } | null | {
            type: "external";
            external: {
                url: string;
            };
        } | null | {
            type: "file";
            file: {
                url: string;
                expiry_time: string;
            };
        } | null;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "divider";
    divider: EmptyObject;
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "breadcrumb";
    breadcrumb: EmptyObject;
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "table_of_contents";
    table_of_contents: {
        color: ApiColor;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "column_list";
    column_list: EmptyObject;
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "column";
    column: EmptyObject;
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "link_to_page";
    link_to_page: {
        type: "page_id";
        page_id: string;
    } | {
        type: "database_id";
        database_id: string;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "table";
    table: {
        has_column_header: boolean;
        has_row_header: boolean;
        table_width: number;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "table_row";
    table_row: {
        cells: Array<Array<RichTextItemResponse>>;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "embed";
    embed: {
        url: string;
        caption: Array<RichTextItemResponse>;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "bookmark";
    bookmark: {
        url: string;
        caption: Array<RichTextItemResponse>;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "image";
    image: {
        type: "external";
        external: {
            url: string;
        };
        caption: Array<RichTextItemResponse>;
    } | {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
        caption: Array<RichTextItemResponse>;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "video";
    video: {
        type: "external";
        external: {
            url: string;
        };
        caption: Array<RichTextItemResponse>;
    } | {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
        caption: Array<RichTextItemResponse>;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "pdf";
    pdf: {
        type: "external";
        external: {
            url: string;
        };
        caption: Array<RichTextItemResponse>;
    } | {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
        caption: Array<RichTextItemResponse>;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "file";
    file: {
        type: "external";
        external: {
            url: string;
        };
        caption: Array<RichTextItemResponse>;
    } | {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
        caption: Array<RichTextItemResponse>;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "audio";
    audio: {
        type: "external";
        external: {
            url: string;
        };
        caption: Array<RichTextItemResponse>;
    } | {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
        caption: Array<RichTextItemResponse>;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "link_preview";
    link_preview: {
        url: string;
    };
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
} | {
    type: "unsupported";
    unsupported: EmptyObject;
    object: "block";
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
};


export type ApiColor = "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background";

export type LanguageRequest = "abap" | "arduino" | "bash" | "basic" | "c" | "clojure" | "coffeescript" | "c++" | "c#" | "css" | "dart" | "diff" | "docker" | "elixir" | "elm" | "erlang" | "flow" | "fortran" | "f#" | "gherkin" | "glsl" | "go" | "graphql" | "groovy" | "haskell" | "html" | "java" | "javascript" | "json" | "julia" | "kotlin" | "latex" | "less" | "lisp" | "livescript" | "lua" | "makefile" | "markdown" | "markup" | "matlab" | "mermaid" | "nix" | "objective-c" | "ocaml" | "pascal" | "perl" | "php" | "plain text" | "powershell" | "prolog" | "protobuf" | "python" | "r" | "reason" | "ruby" | "rust" | "sass" | "scala" | "scheme" | "scss" | "shell" | "solidity" | "sql" | "swift" | "typescript" | "vb.net" | "verilog" | "vhdl" | "visual basic" | "webassembly" | "xml" | "yaml" | "java/c/c++/c#";

export type EmojiRequest = "😀" | "😃" | "😄" | "😁" | "😆" | "😅" | "🤣" | "😂" | "🙂" | "🙃" | "😉" | "😊" | "😇" | "🥰" | "😍" | "🤩" | "😘" | "😗" | "☺️" | "☺" | "😚" | "😙" | "🥲" | "😋" | "😛" | "😜" | "🤪" | "😝" | "🤑" | "🤗" | "🤭" | "🤫" | "🤔" | "🤐" | "🤨" | "😐" | "😑" | "😶" | "😶‍🌫️" | "😶‍🌫" | "😏" | "😒" | "🙄" | "😬" | "😮‍💨" | "🤥" | "😌" | "😔" | "😪" | "🤤" | "😴" | "😷" | "🤒" | "🤕" | "🤢" | "🤮" | "🤧" | "🥵" | "🥶" | "🥴" | "😵" | "😵‍💫" | "🤯" | "🤠" | "🥳" | "🥸" | "😎" | "🤓" | "🧐" | "😕" | "😟" | "🙁" | "☹️" | "☹" | "😮" | "😯" | "😲" | "😳" | "🥺" | "😦" | "😧" | "😨" | "😰" | "😥" | "😢" | "😭" | "😱" | "😖" | "😣" | "😞" | "😓" | "😩" | "😫" | "🥱" | "😤" | "😡" | "😠" | "🤬" | "😈" | "👿" | "💀" | "☠️" | "☠" | "💩" | "🤡" | "👹" | "👺" | "👻" | "👽" | "👾" | "🤖" | "😺" | "😸" | "😹" | "😻" | "😼" | "😽" | "🙀" | "😿" | "😾" | "🙈" | "🙉" | "🙊" | "💋" | "💌" | "💘" | "💝" | "💖" | "💗" | "💓" | "💞" | "💕" | "💟" | "❣️" | "❣" | "💔" | "❤️‍🔥" | "❤‍🔥" | "❤️‍🩹" | "❤‍🩹" | "❤️" | "❤" | "🧡" | "💛" | "💚" | "💙" | "💜" | "🤎" | "🖤" | "🤍" | "💯" | "💢" | "💥" | "💫" | "💦" | "💨" | "🕳️" | "🕳" | "💣" | "💬" | "👁️‍🗨️" | "🗨️" | "🗨" | "🗯️" | "🗯" | "💭" | "💤" | "👋🏻" | "👋🏼" | "👋🏽" | "👋🏾" | "👋🏿" | "👋" | "🤚🏻" | "🤚🏼" | "🤚🏽" | "🤚🏾" | "🤚🏿" | "🤚" | "🖐🏻" | "🖐🏼" | "🖐🏽" | "🖐🏾" | "🖐🏿" | "🖐️" | "🖐" | "✋🏻" | "✋🏼" | "✋🏽" | "✋🏾" | "✋🏿" | "✋" | "🖖🏻" | "🖖🏼" | "🖖🏽" | "🖖🏾" | "🖖🏿" | "🖖" | "👌🏻" | "👌🏼" | "👌🏽" | "👌🏾" | "👌🏿" | "👌" | "🤌🏻" | "🤌🏼" | "🤌🏽" | "🤌🏾" | "🤌🏿" | "🤌" | "🤏🏻" | "🤏🏼" | "🤏🏽" | "🤏🏾" | "🤏🏿" | "🤏" | "✌🏻" | "✌🏼" | "✌🏽" | "✌🏾" | "✌🏿" | "✌️" | "✌" | "🤞🏻" | "🤞🏼" | "🤞🏽" | "🤞🏾" | "🤞🏿" | "🤞" | "🤟🏻" | "🤟🏼" | "🤟🏽" | "🤟🏾" | "🤟🏿" | "🤟" | "🤘🏻" | "🤘🏼" | "🤘🏽" | "🤘🏾" | "🤘🏿" | "🤘" | "🤙🏻" | "🤙🏼" | "🤙🏽" | "🤙🏾" | "🤙🏿" | "🤙" | "👈🏻" | "👈🏼" | "👈🏽" | "👈🏾" | "👈🏿" | "👈" | "👉🏻" | "👉🏼" | "👉🏽" | "👉🏾" | "👉🏿" | "👉" | "👆🏻" | "👆🏼" | "👆🏽" | "👆🏾" | "👆🏿" | "👆" | "🖕🏻" | "🖕🏼" | "🖕🏽" | "🖕🏾" | "🖕🏿" | "🖕" | "👇🏻" | "👇🏼" | "👇🏽" | "👇🏾" | "👇🏿" | "👇" | "☝🏻" | "☝🏼" | "☝🏽" | "☝🏾" | "☝🏿" | "☝️" | "☝" | "👍🏻" | "👍🏼" | "👍🏽" | "👍🏾" | "👍🏿" | "👍" | "👎🏻" | "👎🏼" | "👎🏽" | "👎🏾" | "👎🏿" | "👎" | "✊🏻" | "✊🏼" | "✊🏽" | "✊🏾" | "✊🏿" | "✊" | "👊🏻" | "👊🏼" | "👊🏽" | "👊🏾" | "👊🏿" | "👊" | "🤛🏻" | "🤛🏼" | "🤛🏽" | "🤛🏾" | "🤛🏿" | "🤛" | "🤜🏻" | "🤜🏼" | "🤜🏽" | "🤜🏾" | "🤜🏿" | "🤜" | "👏🏻" | "👏🏼" | "👏🏽" | "👏🏾" | "👏🏿" | "👏" | "🙌🏻" | "🙌🏼" | "🙌🏽" | "🙌🏾" | "🙌🏿" | "🙌" | "👐🏻" | "👐🏼" | "👐🏽" | "👐🏾" | "👐🏿" | "👐" | "🤲🏻" | "🤲🏼" | "🤲🏽" | "🤲🏾" | "🤲🏿" | "🤲" | "🤝" | "🙏🏻" | "🙏🏼" | "🙏🏽" | "🙏🏾" | "🙏🏿" | "🙏" | "✍🏻" | "✍🏼" | "✍🏽" | "✍🏾" | "✍🏿" | "✍️" | "✍" | "💅🏻" | "💅🏼" | "💅🏽" | "💅🏾" | "💅🏿" | "💅" | "🤳🏻" | "🤳🏼" | "🤳🏽" | "🤳🏾" | "🤳🏿" | "🤳" | "💪🏻" | "💪🏼" | "💪🏽" | "💪🏾" | "💪🏿" | "💪" | "🦾" | "🦿" | "🦵🏻" | "🦵🏼" | "🦵🏽" | "🦵🏾" | "🦵🏿" | "🦵" | "🦶🏻" | "🦶🏼" | "🦶🏽" | "🦶🏾" | "🦶🏿" | "🦶" | "👂🏻" | "👂🏼" | "👂🏽" | "👂🏾" | "👂🏿" | "👂" | "🦻🏻" | "🦻🏼" | "🦻🏽" | "🦻🏾" | "🦻🏿" | "🦻" | "👃🏻" | "👃🏼" | "👃🏽" | "👃🏾" | "👃🏿" | "👃" | "🧠" | "🫀" | "🫁" | "🦷" | "🦴" | "👀" | "👁️" | "👁" | "👅" | "👄" | "👶🏻" | "👶🏼" | "👶🏽" | "👶🏾" | "👶🏿" | "👶" | "🧒🏻" | "🧒🏼" | "🧒🏽" | "🧒🏾" | "🧒🏿" | "🧒" | "👦🏻" | "👦🏼" | "👦🏽" | "👦🏾" | "👦🏿" | "👦" | "👧🏻" | "👧🏼" | "👧🏽" | "👧🏾" | "👧🏿" | "👧" | "🧑🏻" | "🧑🏼" | "🧑🏽" | "🧑🏾" | "🧑🏿" | "🧑" | "👱🏻" | "👱🏼" | "👱🏽" | "👱🏾" | "👱🏿" | "👱" | "👨🏻" | "👨🏼" | "👨🏽" | "👨🏾" | "👨🏿" | "👨" | "🧔🏻" | "🧔🏼" | "🧔🏽" | "🧔🏾" | "🧔🏿" | "🧔" | "🧔🏻‍♂️" | "🧔🏼‍♂️" | "🧔🏽‍♂️" | "🧔🏾‍♂️" | "🧔🏿‍♂️" | "🧔‍♂️" | "🧔‍♂" | "🧔🏻‍♀️" | "🧔🏼‍♀️" | "🧔🏽‍♀️" | "🧔🏾‍♀️" | "🧔🏿‍♀️" | "🧔‍♀️" | "🧔‍♀" | "👨🏻‍🦰" | "👨🏼‍🦰" | "👨🏽‍🦰" | "👨🏾‍🦰" | "👨🏿‍🦰" | "👨‍🦰" | "👨🏻‍🦱" | "👨🏼‍🦱" | "👨🏽‍🦱" | "👨🏾‍🦱" | "👨🏿‍🦱" | "👨‍🦱" | "👨🏻‍🦳" | "👨🏼‍🦳" | "👨🏽‍🦳" | "👨🏾‍🦳" | "👨🏿‍🦳" | "👨‍🦳" | "👨🏻‍🦲" | "👨🏼‍🦲" | "👨🏽‍🦲" | "👨🏾‍🦲" | "👨🏿‍🦲" | "👨‍🦲" | "👩🏻" | "👩🏼" | "👩🏽" | "👩🏾" | "👩🏿" | "👩" | "👩🏻‍🦰" | "👩🏼‍🦰" | "👩🏽‍🦰" | "👩🏾‍🦰" | "👩🏿‍🦰" | "👩‍🦰" | "🧑🏻‍🦰" | "🧑🏼‍🦰" | "🧑🏽‍🦰" | "🧑🏾‍🦰" | "🧑🏿‍🦰" | "🧑‍🦰" | "👩🏻‍🦱" | "👩🏼‍🦱" | "👩🏽‍🦱" | "👩🏾‍🦱" | "👩🏿‍🦱" | "👩‍🦱" | "🧑🏻‍🦱" | "🧑🏼‍🦱" | "🧑🏽‍🦱" | "🧑🏾‍🦱" | "🧑🏿‍🦱" | "🧑‍🦱" | "👩🏻‍🦳" | "👩🏼‍🦳" | "👩🏽‍🦳" | "👩🏾‍🦳" | "👩🏿‍🦳" | "👩‍🦳" | "🧑🏻‍🦳" | "🧑🏼‍🦳" | "🧑🏽‍🦳" | "🧑🏾‍🦳" | "🧑🏿‍🦳" | "🧑‍🦳" | "👩🏻‍🦲" | "👩🏼‍🦲" | "👩🏽‍🦲" | "👩🏾‍🦲" | "👩🏿‍🦲" | "👩‍🦲" | "🧑🏻‍🦲" | "🧑🏼‍🦲" | "🧑🏽‍🦲" | "🧑🏾‍🦲" | "🧑🏿‍🦲" | "🧑‍🦲" | "👱🏻‍♀️" | "👱🏼‍♀️" | "👱🏽‍♀️" | "👱🏾‍♀️" | "👱🏿‍♀️" | "👱‍♀️" | "👱‍♀" | "👱🏻‍♂️" | "👱🏼‍♂️" | "👱🏽‍♂️" | "👱🏾‍♂️" | "👱🏿‍♂️" | "👱‍♂️" | "👱‍♂" | "🧓🏻" | "🧓🏼" | "🧓🏽" | "🧓🏾" | "🧓🏿" | "🧓" | "👴🏻" | "👴🏼" | "👴🏽" | "👴🏾" | "👴🏿" | "👴" | "👵🏻" | "👵🏼" | "👵🏽" | "👵🏾" | "👵🏿" | "👵" | "🙍🏻" | "🙍🏼" | "🙍🏽" | "🙍🏾" | "🙍🏿" | "🙍" | "🙍🏻‍♂️" | "🙍🏼‍♂️" | "🙍🏽‍♂️" | "🙍🏾‍♂️" | "🙍🏿‍♂️" | "🙍‍♂️" | "🙍‍♂" | "🙍🏻‍♀️" | "🙍🏼‍♀️" | "🙍🏽‍♀️" | "🙍🏾‍♀️" | "🙍🏿‍♀️" | "🙍‍♀️" | "🙍‍♀" | "🙎🏻" | "🙎🏼" | "🙎🏽" | "🙎🏾" | "🙎🏿" | "🙎" | "🙎🏻‍♂️" | "🙎🏼‍♂️" | "🙎🏽‍♂️" | "🙎🏾‍♂️" | "🙎🏿‍♂️" | "🙎‍♂️" | "🙎‍♂" | "🙎🏻‍♀️" | "🙎🏼‍♀️" | "🙎🏽‍♀️" | "🙎🏾‍♀️" | "🙎🏿‍♀️" | "🙎‍♀️" | "🙎‍♀" | "🙅🏻" | "🙅🏼" | "🙅🏽" | "🙅🏾" | "🙅🏿" | "🙅" | "🙅🏻‍♂️" | "🙅🏼‍♂️" | "🙅🏽‍♂️" | "🙅🏾‍♂️" | "🙅🏿‍♂️" | "🙅‍♂️" | "🙅‍♂" | "🙅🏻‍♀️" | "🙅🏼‍♀️" | "🙅🏽‍♀️" | "🙅🏾‍♀️" | "🙅🏿‍♀️" | "🙅‍♀️" | "🙅‍♀" | "🙆🏻" | "🙆🏼" | "🙆🏽" | "🙆🏾" | "🙆🏿" | "🙆" | "🙆🏻‍♂️" | "🙆🏼‍♂️" | "🙆🏽‍♂️" | "🙆🏾‍♂️" | "🙆🏿‍♂️" | "🙆‍♂️" | "🙆‍♂" | "🙆🏻‍♀️" | "🙆🏼‍♀️" | "🙆🏽‍♀️" | "🙆🏾‍♀️" | "🙆🏿‍♀️" | "🙆‍♀️" | "🙆‍♀" | "💁🏻" | "💁🏼" | "💁🏽" | "💁🏾" | "💁🏿" | "💁" | "💁🏻‍♂️" | "💁🏼‍♂️" | "💁🏽‍♂️" | "💁🏾‍♂️" | "💁🏿‍♂️" | "💁‍♂️" | "💁‍♂" | "💁🏻‍♀️" | "💁🏼‍♀️" | "💁🏽‍♀️" | "💁🏾‍♀️" | "💁🏿‍♀️" | "💁‍♀️" | "💁‍♀" | "🙋🏻" | "🙋🏼" | "🙋🏽" | "🙋🏾" | "🙋🏿" | "🙋" | "🙋🏻‍♂️" | "🙋🏼‍♂️" | "🙋🏽‍♂️" | "🙋🏾‍♂️" | "🙋🏿‍♂️" | "🙋‍♂️" | "🙋‍♂" | "🙋🏻‍♀️" | "🙋🏼‍♀️" | "🙋🏽‍♀️" | "🙋🏾‍♀️" | "🙋🏿‍♀️" | "🙋‍♀️" | "🙋‍♀" | "🧏🏻" | "🧏🏼" | "🧏🏽" | "🧏🏾" | "🧏🏿" | "🧏" | "🧏🏻‍♂️" | "🧏🏼‍♂️" | "🧏🏽‍♂️" | "🧏🏾‍♂️" | "🧏🏿‍♂️" | "🧏‍♂️" | "🧏‍♂" | "🧏🏻‍♀️" | "🧏🏼‍♀️" | "🧏🏽‍♀️" | "🧏🏾‍♀️" | "🧏🏿‍♀️" | "🧏‍♀️" | "🧏‍♀" | "🙇🏻" | "🙇🏼" | "🙇🏽" | "🙇🏾" | "🙇🏿" | "🙇" | "🙇🏻‍♂️" | "🙇🏼‍♂️" | "🙇🏽‍♂️" | "🙇🏾‍♂️" | "🙇🏿‍♂️" | "🙇‍♂️" | "🙇‍♂" | "🙇🏻‍♀️" | "🙇🏼‍♀️" | "🙇🏽‍♀️" | "🙇🏾‍♀️" | "🙇🏿‍♀️" | "🙇‍♀️" | "🙇‍♀" | "🤦🏻" | "🤦🏼" | "🤦🏽" | "🤦🏾" | "🤦🏿" | "🤦" | "🤦🏻‍♂️" | "🤦🏼‍♂️" | "🤦🏽‍♂️" | "🤦🏾‍♂️" | "🤦🏿‍♂️" | "🤦‍♂️" | "🤦‍♂" | "🤦🏻‍♀️" | "🤦🏼‍♀️" | "🤦🏽‍♀️" | "🤦🏾‍♀️" | "🤦🏿‍♀️" | "🤦‍♀️" | "🤦‍♀" | "🤷🏻" | "🤷🏼" | "🤷🏽" | "🤷🏾" | "🤷🏿" | "🤷" | "🤷🏻‍♂️" | "🤷🏼‍♂️" | "🤷🏽‍♂️" | "🤷🏾‍♂️" | "🤷🏿‍♂️" | "🤷‍♂️" | "🤷‍♂" | "🤷🏻‍♀️" | "🤷🏼‍♀️" | "🤷🏽‍♀️" | "🤷🏾‍♀️" | "🤷🏿‍♀️" | "🤷‍♀️" | "🤷‍♀" | "🧑🏻‍⚕️" | "🧑🏼‍⚕️" | "🧑🏽‍⚕️" | "🧑🏾‍⚕️" | "🧑🏿‍⚕️" | "🧑‍⚕️" | "🧑‍⚕" | "👨🏻‍⚕️" | "👨🏼‍⚕️" | "👨🏽‍⚕️" | "👨🏾‍⚕️" | "👨🏿‍⚕️" | "👨‍⚕️" | "👨‍⚕" | "👩🏻‍⚕️" | "👩🏼‍⚕️" | "👩🏽‍⚕️" | "👩🏾‍⚕️" | "👩🏿‍⚕️" | "👩‍⚕️" | "👩‍⚕" | "🧑🏻‍🎓" | "🧑🏼‍🎓" | "🧑🏽‍🎓" | "🧑🏾‍🎓" | "🧑🏿‍🎓" | "🧑‍🎓" | "👨🏻‍🎓" | "👨🏼‍🎓" | "👨🏽‍🎓" | "👨🏾‍🎓" | "👨🏿‍🎓" | "👨‍🎓" | "👩🏻‍🎓" | "👩🏼‍🎓" | "👩🏽‍🎓" | "👩🏾‍🎓" | "👩🏿‍🎓" | "👩‍🎓" | "🧑🏻‍🏫" | "🧑🏼‍🏫" | "🧑🏽‍🏫" | "🧑🏾‍🏫" | "🧑🏿‍🏫" | "🧑‍🏫" | "👨🏻‍🏫" | "👨🏼‍🏫" | "👨🏽‍🏫" | "👨🏾‍🏫" | "👨🏿‍🏫" | "👨‍🏫" | "👩🏻‍🏫" | "👩🏼‍🏫" | "👩🏽‍🏫" | "👩🏾‍🏫" | "👩🏿‍🏫" | "👩‍🏫" | "🧑🏻‍⚖️" | "🧑🏼‍⚖️" | "🧑🏽‍⚖️" | "🧑🏾‍⚖️" | "🧑🏿‍⚖️" | "🧑‍⚖️" | "🧑‍⚖" | "👨🏻‍⚖️" | "👨🏼‍⚖️" | "👨🏽‍⚖️" | "👨🏾‍⚖️" | "👨🏿‍⚖️" | "👨‍⚖️" | "👨‍⚖" | "👩🏻‍⚖️" | "👩🏼‍⚖️" | "👩🏽‍⚖️" | "👩🏾‍⚖️" | "👩🏿‍⚖️" | "👩‍⚖️" | "👩‍⚖" | "🧑🏻‍🌾" | "🧑🏼‍🌾" | "🧑🏽‍🌾" | "🧑🏾‍🌾" | "🧑🏿‍🌾" | "🧑‍🌾" | "👨🏻‍🌾" | "👨🏼‍🌾" | "👨🏽‍🌾" | "👨🏾‍🌾" | "👨🏿‍🌾" | "👨‍🌾" | "👩🏻‍🌾" | "👩🏼‍🌾" | "👩🏽‍🌾" | "👩🏾‍🌾" | "👩🏿‍🌾" | "👩‍🌾" | "🧑🏻‍🍳" | "🧑🏼‍🍳" | "🧑🏽‍🍳" | "🧑🏾‍🍳" | "🧑🏿‍🍳" | "🧑‍🍳" | "👨🏻‍🍳" | "👨🏼‍🍳" | "👨🏽‍🍳" | "👨🏾‍🍳" | "👨🏿‍🍳" | "👨‍🍳" | "👩🏻‍🍳" | "👩🏼‍🍳" | "👩🏽‍🍳" | "👩🏾‍🍳" | "👩🏿‍🍳" | "👩‍🍳" | "🧑🏻‍🔧" | "🧑🏼‍🔧" | "🧑🏽‍🔧" | "🧑🏾‍🔧" | "🧑🏿‍🔧" | "🧑‍🔧" | "👨🏻‍🔧" | "👨🏼‍🔧" | "👨🏽‍🔧" | "👨🏾‍🔧" | "👨🏿‍🔧" | "👨‍🔧" | "👩🏻‍🔧" | "👩🏼‍🔧" | "👩🏽‍🔧" | "👩🏾‍🔧" | "👩🏿‍🔧" | "👩‍🔧" | "🧑🏻‍🏭" | "🧑🏼‍🏭" | "🧑🏽‍🏭" | "🧑🏾‍🏭" | "🧑🏿‍🏭" | "🧑‍🏭" | "👨🏻‍🏭" | "👨🏼‍🏭" | "👨🏽‍🏭" | "👨🏾‍🏭" | "👨🏿‍🏭" | "👨‍🏭" | "👩🏻‍🏭" | "👩🏼‍🏭" | "👩🏽‍🏭" | "👩🏾‍🏭" | "👩🏿‍🏭" | "👩‍🏭" | "🧑🏻‍💼" | "🧑🏼‍💼" | "🧑🏽‍💼" | "🧑🏾‍💼" | "🧑🏿‍💼" | "🧑‍💼" | "👨🏻‍💼" | "👨🏼‍💼" | "👨🏽‍💼" | "👨🏾‍💼" | "👨🏿‍💼" | "👨‍💼" | "👩🏻‍💼" | "👩🏼‍💼" | "👩🏽‍💼" | "👩🏾‍💼" | "👩🏿‍💼" | "👩‍💼" | "🧑🏻‍🔬" | "🧑🏼‍🔬" | "🧑🏽‍🔬" | "🧑🏾‍🔬" | "🧑🏿‍🔬" | "🧑‍🔬" | "👨🏻‍🔬" | "👨🏼‍🔬" | "👨🏽‍🔬" | "👨🏾‍🔬" | "👨🏿‍🔬" | "👨‍🔬" | "👩🏻‍🔬" | "👩🏼‍🔬" | "👩🏽‍🔬" | "👩🏾‍🔬" | "👩🏿‍🔬" | "👩‍🔬" | "🧑🏻‍💻" | "🧑🏼‍💻" | "🧑🏽‍💻" | "🧑🏾‍💻" | "🧑🏿‍💻" | "🧑‍💻" | "👨🏻‍💻" | "👨🏼‍💻" | "👨🏽‍💻" | "👨🏾‍💻" | "👨🏿‍💻" | "👨‍💻" | "👩🏻‍💻" | "👩🏼‍💻" | "👩🏽‍💻" | "👩🏾‍💻" | "👩🏿‍💻" | "👩‍💻" | "🧑🏻‍🎤" | "🧑🏼‍🎤" | "🧑🏽‍🎤" | "🧑🏾‍🎤" | "🧑🏿‍🎤" | "🧑‍🎤" | "👨🏻‍🎤" | "👨🏼‍🎤" | "👨🏽‍🎤" | "👨🏾‍🎤" | "👨🏿‍🎤" | "👨‍🎤" | "👩🏻‍🎤" | "👩🏼‍🎤" | "👩🏽‍🎤" | "👩🏾‍🎤" | "👩🏿‍🎤" | "👩‍🎤" | "🧑🏻‍🎨" | "🧑🏼‍🎨" | "🧑🏽‍🎨" | "🧑🏾‍🎨" | "🧑🏿‍🎨" | "🧑‍🎨" | "👨🏻‍🎨" | "👨🏼‍🎨" | "👨🏽‍🎨" | "👨🏾‍🎨" | "👨🏿‍🎨" | "👨‍🎨" | "👩🏻‍🎨" | "👩🏼‍🎨" | "👩🏽‍🎨" | "👩🏾‍🎨" | "👩🏿‍🎨" | "👩‍🎨" | "🧑🏻‍✈️" | "🧑🏼‍✈️" | "🧑🏽‍✈️" | "🧑🏾‍✈️" | "🧑🏿‍✈️" | "🧑‍✈️" | "🧑‍✈" | "👨🏻‍✈️" | "👨🏼‍✈️" | "👨🏽‍✈️" | "👨🏾‍✈️" | "👨🏿‍✈️" | "👨‍✈️" | "👨‍✈" | "👩🏻‍✈️" | "👩🏼‍✈️" | "👩🏽‍✈️" | "👩🏾‍✈️" | "👩🏿‍✈️" | "👩‍✈️" | "👩‍✈" | "🧑🏻‍🚀" | "🧑🏼‍🚀" | "🧑🏽‍🚀" | "🧑🏾‍🚀" | "🧑🏿‍🚀" | "🧑‍🚀" | "👨🏻‍🚀" | "👨🏼‍🚀" | "👨🏽‍🚀" | "👨🏾‍🚀" | "👨🏿‍🚀" | "👨‍🚀" | "👩🏻‍🚀" | "👩🏼‍🚀" | "👩🏽‍🚀" | "👩🏾‍🚀" | "👩🏿‍🚀" | "👩‍🚀" | "🧑🏻‍🚒" | "🧑🏼‍🚒" | "🧑🏽‍🚒" | "🧑🏾‍🚒" | "🧑🏿‍🚒" | "🧑‍🚒" | "👨🏻‍🚒" | "👨🏼‍🚒" | "👨🏽‍🚒" | "👨🏾‍🚒" | "👨🏿‍🚒" | "👨‍🚒" | "👩🏻‍🚒" | "👩🏼‍🚒" | "👩🏽‍🚒" | "👩🏾‍🚒" | "👩🏿‍🚒" | "👩‍🚒" | "👮🏻" | "👮🏼" | "👮🏽" | "👮🏾" | "👮🏿" | "👮" | "👮🏻‍♂️" | "👮🏼‍♂️" | "👮🏽‍♂️" | "👮🏾‍♂️" | "👮🏿‍♂️" | "👮‍♂️" | "👮‍♂" | "👮🏻‍♀️" | "👮🏼‍♀️" | "👮🏽‍♀️" | "👮🏾‍♀️" | "👮🏿‍♀️" | "👮‍♀️" | "👮‍♀" | "🕵🏻" | "🕵🏼" | "🕵🏽" | "🕵🏾" | "🕵🏿" | "🕵️" | "🕵" | "🕵🏻‍♂️" | "🕵🏼‍♂️" | "🕵🏽‍♂️" | "🕵🏾‍♂️" | "🕵🏿‍♂️" | "🕵️‍♂️" | "🕵🏻‍♀️" | "🕵🏼‍♀️" | "🕵🏽‍♀️" | "🕵🏾‍♀️" | "🕵🏿‍♀️" | "🕵️‍♀️" | "💂🏻" | "💂🏼" | "💂🏽" | "💂🏾" | "💂🏿" | "💂" | "💂🏻‍♂️" | "💂🏼‍♂️" | "💂🏽‍♂️" | "💂🏾‍♂️" | "💂🏿‍♂️" | "💂‍♂️" | "💂‍♂" | "💂🏻‍♀️" | "💂🏼‍♀️" | "💂🏽‍♀️" | "💂🏾‍♀️" | "💂🏿‍♀️" | "💂‍♀️" | "💂‍♀" | "🥷🏻" | "🥷🏼" | "🥷🏽" | "🥷🏾" | "🥷🏿" | "🥷" | "👷🏻" | "👷🏼" | "👷🏽" | "👷🏾" | "👷🏿" | "👷" | "👷🏻‍♂️" | "👷🏼‍♂️" | "👷🏽‍♂️" | "👷🏾‍♂️" | "👷🏿‍♂️" | "👷‍♂️" | "👷‍♂" | "👷🏻‍♀️" | "👷🏼‍♀️" | "👷🏽‍♀️" | "👷🏾‍♀️" | "👷🏿‍♀️" | "👷‍♀️" | "👷‍♀" | "🤴🏻" | "🤴🏼" | "🤴🏽" | "🤴🏾" | "🤴🏿" | "🤴" | "👸🏻" | "👸🏼" | "👸🏽" | "👸🏾" | "👸🏿" | "👸" | "👳🏻" | "👳🏼" | "👳🏽" | "👳🏾" | "👳🏿" | "👳" | "👳🏻‍♂️" | "👳🏼‍♂️" | "👳🏽‍♂️" | "👳🏾‍♂️" | "👳🏿‍♂️" | "👳‍♂️" | "👳‍♂" | "👳🏻‍♀️" | "👳🏼‍♀️" | "👳🏽‍♀️" | "👳🏾‍♀️" | "👳🏿‍♀️" | "👳‍♀️" | "👳‍♀" | "👲🏻" | "👲🏼" | "👲🏽" | "👲🏾" | "👲🏿" | "👲" | "🧕🏻" | "🧕🏼" | "🧕🏽" | "🧕🏾" | "🧕🏿" | "🧕" | "🤵🏻" | "🤵🏼" | "🤵🏽" | "🤵🏾" | "🤵🏿" | "🤵" | "🤵🏻‍♂️" | "🤵🏼‍♂️" | "🤵🏽‍♂️" | "🤵🏾‍♂️" | "🤵🏿‍♂️" | "🤵‍♂️" | "🤵‍♂" | "🤵🏻‍♀️" | "🤵🏼‍♀️" | "🤵🏽‍♀️" | "🤵🏾‍♀️" | "🤵🏿‍♀️" | "🤵‍♀️" | "🤵‍♀" | "👰🏻" | "👰🏼" | "👰🏽" | "👰🏾" | "👰🏿" | "👰" | "👰🏻‍♂️" | "👰🏼‍♂️" | "👰🏽‍♂️" | "👰🏾‍♂️" | "👰🏿‍♂️" | "👰‍♂️" | "👰‍♂" | "👰🏻‍♀️" | "👰🏼‍♀️" | "👰🏽‍♀️" | "👰🏾‍♀️" | "👰🏿‍♀️" | "👰‍♀️" | "👰‍♀" | "🤰🏻" | "🤰🏼" | "🤰🏽" | "🤰🏾" | "🤰🏿" | "🤰" | "🤱🏻" | "🤱🏼" | "🤱🏽" | "🤱🏾" | "🤱🏿" | "🤱" | "👩🏻‍🍼" | "👩🏼‍🍼" | "👩🏽‍🍼" | "👩🏾‍🍼" | "👩🏿‍🍼" | "👩‍🍼" | "👨🏻‍🍼" | "👨🏼‍🍼" | "👨🏽‍🍼" | "👨🏾‍🍼" | "👨🏿‍🍼" | "👨‍🍼" | "🧑🏻‍🍼" | "🧑🏼‍🍼" | "🧑🏽‍🍼" | "🧑🏾‍🍼" | "🧑🏿‍🍼" | "🧑‍🍼" | "👼🏻" | "👼🏼" | "👼🏽" | "👼🏾" | "👼🏿" | "👼" | "🎅🏻" | "🎅🏼" | "🎅🏽" | "🎅🏾" | "🎅🏿" | "🎅" | "🤶🏻" | "🤶🏼" | "🤶🏽" | "🤶🏾" | "🤶🏿" | "🤶" | "🧑🏻‍🎄" | "🧑🏼‍🎄" | "🧑🏽‍🎄" | "🧑🏾‍🎄" | "🧑🏿‍🎄" | "🧑‍🎄" | "🦸🏻" | "🦸🏼" | "🦸🏽" | "🦸🏾" | "🦸🏿" | "🦸" | "🦸🏻‍♂️" | "🦸🏼‍♂️" | "🦸🏽‍♂️" | "🦸🏾‍♂️" | "🦸🏿‍♂️" | "🦸‍♂️" | "🦸‍♂" | "🦸🏻‍♀️" | "🦸🏼‍♀️" | "🦸🏽‍♀️" | "🦸🏾‍♀️" | "🦸🏿‍♀️" | "🦸‍♀️" | "🦸‍♀" | "🦹🏻" | "🦹🏼" | "🦹🏽" | "🦹🏾" | "🦹🏿" | "🦹" | "🦹🏻‍♂️" | "🦹🏼‍♂️" | "🦹🏽‍♂️" | "🦹🏾‍♂️" | "🦹🏿‍♂️" | "🦹‍♂️" | "🦹‍♂" | "🦹🏻‍♀️" | "🦹🏼‍♀️" | "🦹🏽‍♀️" | "🦹🏾‍♀️" | "🦹🏿‍♀️" | "🦹‍♀️" | "🦹‍♀" | "🧙🏻" | "🧙🏼" | "🧙🏽" | "🧙🏾" | "🧙🏿" | "🧙" | "🧙🏻‍♂️" | "🧙🏼‍♂️" | "🧙🏽‍♂️" | "🧙🏾‍♂️" | "🧙🏿‍♂️" | "🧙‍♂️" | "🧙‍♂" | "🧙🏻‍♀️" | "🧙🏼‍♀️" | "🧙🏽‍♀️" | "🧙🏾‍♀️" | "🧙🏿‍♀️" | "🧙‍♀️" | "🧙‍♀" | "🧚🏻" | "🧚🏼" | "🧚🏽" | "🧚🏾" | "🧚🏿" | "🧚" | "🧚🏻‍♂️" | "🧚🏼‍♂️" | "🧚🏽‍♂️" | "🧚🏾‍♂️" | "🧚🏿‍♂️" | "🧚‍♂️" | "🧚‍♂" | "🧚🏻‍♀️" | "🧚🏼‍♀️" | "🧚🏽‍♀️" | "🧚🏾‍♀️" | "🧚🏿‍♀️" | "🧚‍♀️" | "🧚‍♀" | "🧛🏻" | "🧛🏼" | "🧛🏽" | "🧛🏾" | "🧛🏿" | "🧛" | "🧛🏻‍♂️" | "🧛🏼‍♂️" | "🧛🏽‍♂️" | "🧛🏾‍♂️" | "🧛🏿‍♂️" | "🧛‍♂️" | "🧛‍♂" | "🧛🏻‍♀️" | "🧛🏼‍♀️" | "🧛🏽‍♀️" | "🧛🏾‍♀️" | "🧛🏿‍♀️" | "🧛‍♀️" | "🧛‍♀" | "🧜🏻" | "🧜🏼" | "🧜🏽" | "🧜🏾" | "🧜🏿" | "🧜" | "🧜🏻‍♂️" | "🧜🏼‍♂️" | "🧜🏽‍♂️" | "🧜🏾‍♂️" | "🧜🏿‍♂️" | "🧜‍♂️" | "🧜‍♂" | "🧜🏻‍♀️" | "🧜🏼‍♀️" | "🧜🏽‍♀️" | "🧜🏾‍♀️" | "🧜🏿‍♀️" | "🧜‍♀️" | "🧜‍♀" | "🧝🏻" | "🧝🏼" | "🧝🏽" | "🧝🏾" | "🧝🏿" | "🧝" | "🧝🏻‍♂️" | "🧝🏼‍♂️" | "🧝🏽‍♂️" | "🧝🏾‍♂️" | "🧝🏿‍♂️" | "🧝‍♂️" | "🧝‍♂" | "🧝🏻‍♀️" | "🧝🏼‍♀️" | "🧝🏽‍♀️" | "🧝🏾‍♀️" | "🧝🏿‍♀️" | "🧝‍♀️" | "🧝‍♀" | "🧞" | "🧞‍♂️" | "🧞‍♂" | "🧞‍♀️" | "🧞‍♀" | "🧟" | "🧟‍♂️" | "🧟‍♂" | "🧟‍♀️" | "🧟‍♀" | "💆🏻" | "💆🏼" | "💆🏽" | "💆🏾" | "💆🏿" | "💆" | "💆🏻‍♂️" | "💆🏼‍♂️" | "💆🏽‍♂️" | "💆🏾‍♂️" | "💆🏿‍♂️" | "💆‍♂️" | "💆‍♂" | "💆🏻‍♀️" | "💆🏼‍♀️" | "💆🏽‍♀️" | "💆🏾‍♀️" | "💆🏿‍♀️" | "💆‍♀️" | "💆‍♀" | "💇🏻" | "💇🏼" | "💇🏽" | "💇🏾" | "💇🏿" | "💇" | "💇🏻‍♂️" | "💇🏼‍♂️" | "💇🏽‍♂️" | "💇🏾‍♂️" | "💇🏿‍♂️" | "💇‍♂️" | "💇‍♂" | "💇🏻‍♀️" | "💇🏼‍♀️" | "💇🏽‍♀️" | "💇🏾‍♀️" | "💇🏿‍♀️" | "💇‍♀️" | "💇‍♀" | "🚶🏻" | "🚶🏼" | "🚶🏽" | "🚶🏾" | "🚶🏿" | "🚶" | "🚶🏻‍♂️" | "🚶🏼‍♂️" | "🚶🏽‍♂️" | "🚶🏾‍♂️" | "🚶🏿‍♂️" | "🚶‍♂️" | "🚶‍♂" | "🚶🏻‍♀️" | "🚶🏼‍♀️" | "🚶🏽‍♀️" | "🚶🏾‍♀️" | "🚶🏿‍♀️" | "🚶‍♀️" | "🚶‍♀" | "🧍🏻" | "🧍🏼" | "🧍🏽" | "🧍🏾" | "🧍🏿" | "🧍" | "🧍🏻‍♂️" | "🧍🏼‍♂️" | "🧍🏽‍♂️" | "🧍🏾‍♂️" | "🧍🏿‍♂️" | "🧍‍♂️" | "🧍‍♂" | "🧍🏻‍♀️" | "🧍🏼‍♀️" | "🧍🏽‍♀️" | "🧍🏾‍♀️" | "🧍🏿‍♀️" | "🧍‍♀️" | "🧍‍♀" | "🧎🏻" | "🧎🏼" | "🧎🏽" | "🧎🏾" | "🧎🏿" | "🧎" | "🧎🏻‍♂️" | "🧎🏼‍♂️" | "🧎🏽‍♂️" | "🧎🏾‍♂️" | "🧎🏿‍♂️" | "🧎‍♂️" | "🧎‍♂" | "🧎🏻‍♀️" | "🧎🏼‍♀️" | "🧎🏽‍♀️" | "🧎🏾‍♀️" | "🧎🏿‍♀️" | "🧎‍♀️" | "🧎‍♀" | "🧑🏻‍🦯" | "🧑🏼‍🦯" | "🧑🏽‍🦯" | "🧑🏾‍🦯" | "🧑🏿‍🦯" | "🧑‍🦯" | "👨🏻‍🦯" | "👨🏼‍🦯" | "👨🏽‍🦯" | "👨🏾‍🦯" | "👨🏿‍🦯" | "👨‍🦯" | "👩🏻‍🦯" | "👩🏼‍🦯" | "👩🏽‍🦯" | "👩🏾‍🦯" | "👩🏿‍🦯" | "👩‍🦯" | "🧑🏻‍🦼" | "🧑🏼‍🦼" | "🧑🏽‍🦼" | "🧑🏾‍🦼" | "🧑🏿‍🦼" | "🧑‍🦼" | "👨🏻‍🦼" | "👨🏼‍🦼" | "👨🏽‍🦼" | "👨🏾‍🦼" | "👨🏿‍🦼" | "👨‍🦼" | "👩🏻‍🦼" | "👩🏼‍🦼" | "👩🏽‍🦼" | "👩🏾‍🦼" | "👩🏿‍🦼" | "👩‍🦼" | "🧑🏻‍🦽" | "🧑🏼‍🦽" | "🧑🏽‍🦽" | "🧑🏾‍🦽" | "🧑🏿‍🦽" | "🧑‍🦽" | "👨🏻‍🦽" | "👨🏼‍🦽" | "👨🏽‍🦽" | "👨🏾‍🦽" | "👨🏿‍🦽" | "👨‍🦽" | "👩🏻‍🦽" | "👩🏼‍🦽" | "👩🏽‍🦽" | "👩🏾‍🦽" | "👩🏿‍🦽" | "👩‍🦽" | "🏃🏻" | "🏃🏼" | "🏃🏽" | "🏃🏾" | "🏃🏿" | "🏃" | "🏃🏻‍♂️" | "🏃🏼‍♂️" | "🏃🏽‍♂️" | "🏃🏾‍♂️" | "🏃🏿‍♂️" | "🏃‍♂️" | "🏃‍♂" | "🏃🏻‍♀️" | "🏃🏼‍♀️" | "🏃🏽‍♀️" | "🏃🏾‍♀️" | "🏃🏿‍♀️" | "🏃‍♀️" | "🏃‍♀" | "💃🏻" | "💃🏼" | "💃🏽" | "💃🏾" | "💃🏿" | "💃" | "🕺🏻" | "🕺🏼" | "🕺🏽" | "🕺🏾" | "🕺🏿" | "🕺" | "🕴🏻" | "🕴🏼" | "🕴🏽" | "🕴🏾" | "🕴🏿" | "🕴️" | "🕴" | "👯" | "👯‍♂️" | "👯‍♂" | "👯‍♀️" | "👯‍♀" | "🧖🏻" | "🧖🏼" | "🧖🏽" | "🧖🏾" | "🧖🏿" | "🧖" | "🧖🏻‍♂️" | "🧖🏼‍♂️" | "🧖🏽‍♂️" | "🧖🏾‍♂️" | "🧖🏿‍♂️" | "🧖‍♂️" | "🧖‍♂" | "🧖🏻‍♀️" | "🧖🏼‍♀️" | "🧖🏽‍♀️" | "🧖🏾‍♀️" | "🧖🏿‍♀️" | "🧖‍♀️" | "🧖‍♀" | "🧗🏻" | "🧗🏼" | "🧗🏽" | "🧗🏾" | "🧗🏿" | "🧗" | "🧗🏻‍♂️" | "🧗🏼‍♂️" | "🧗🏽‍♂️" | "🧗🏾‍♂️" | "🧗🏿‍♂️" | "🧗‍♂️" | "🧗‍♂" | "🧗🏻‍♀️" | "🧗🏼‍♀️" | "🧗🏽‍♀️" | "🧗🏾‍♀️" | "🧗🏿‍♀️" | "🧗‍♀️" | "🧗‍♀" | "🤺" | "🏇🏻" | "🏇🏼" | "🏇🏽" | "🏇🏾" | "🏇🏿" | "🏇" | "⛷️" | "⛷" | "🏂🏻" | "🏂🏼" | "🏂🏽" | "🏂🏾" | "🏂🏿" | "🏂" | "🏌🏻" | "🏌🏼" | "🏌🏽" | "🏌🏾" | "🏌🏿" | "🏌️" | "🏌" | "🏌🏻‍♂️" | "🏌🏼‍♂️" | "🏌🏽‍♂️" | "🏌🏾‍♂️" | "🏌🏿‍♂️" | "🏌️‍♂️" | "🏌🏻‍♀️" | "🏌🏼‍♀️" | "🏌🏽‍♀️" | "🏌🏾‍♀️" | "🏌🏿‍♀️" | "🏌️‍♀️" | "🏄🏻" | "🏄🏼" | "🏄🏽" | "🏄🏾" | "🏄🏿" | "🏄" | "🏄🏻‍♂️" | "🏄🏼‍♂️" | "🏄🏽‍♂️" | "🏄🏾‍♂️" | "🏄🏿‍♂️" | "🏄‍♂️" | "🏄‍♂" | "🏄🏻‍♀️" | "🏄🏼‍♀️" | "🏄🏽‍♀️" | "🏄🏾‍♀️" | "🏄🏿‍♀️" | "🏄‍♀️" | "🏄‍♀" | "🚣🏻" | "🚣🏼" | "🚣🏽" | "🚣🏾" | "🚣🏿" | "🚣" | "🚣🏻‍♂️" | "🚣🏼‍♂️" | "🚣🏽‍♂️" | "🚣🏾‍♂️" | "🚣🏿‍♂️" | "🚣‍♂️" | "🚣‍♂" | "🚣🏻‍♀️" | "🚣🏼‍♀️" | "🚣🏽‍♀️" | "🚣🏾‍♀️" | "🚣🏿‍♀️" | "🚣‍♀️" | "🚣‍♀" | "🏊🏻" | "🏊🏼" | "🏊🏽" | "🏊🏾" | "🏊🏿" | "🏊" | "🏊🏻‍♂️" | "🏊🏼‍♂️" | "🏊🏽‍♂️" | "🏊🏾‍♂️" | "🏊🏿‍♂️" | "🏊‍♂️" | "🏊‍♂" | "🏊🏻‍♀️" | "🏊🏼‍♀️" | "🏊🏽‍♀️" | "🏊🏾‍♀️" | "🏊🏿‍♀️" | "🏊‍♀️" | "🏊‍♀" | "⛹🏻" | "⛹🏼" | "⛹🏽" | "⛹🏾" | "⛹🏿" | "⛹️" | "⛹" | "⛹🏻‍♂️" | "⛹🏼‍♂️" | "⛹🏽‍♂️" | "⛹🏾‍♂️" | "⛹🏿‍♂️" | "⛹️‍♂️" | "⛹🏻‍♀️" | "⛹🏼‍♀️" | "⛹🏽‍♀️" | "⛹🏾‍♀️" | "⛹🏿‍♀️" | "⛹️‍♀️" | "🏋🏻" | "🏋🏼" | "🏋🏽" | "🏋🏾" | "🏋🏿" | "🏋️" | "🏋" | "🏋🏻‍♂️" | "🏋🏼‍♂️" | "🏋🏽‍♂️" | "🏋🏾‍♂️" | "🏋🏿‍♂️" | "🏋️‍♂️" | "🏋🏻‍♀️" | "🏋🏼‍♀️" | "🏋🏽‍♀️" | "🏋🏾‍♀️" | "🏋🏿‍♀️" | "🏋️‍♀️" | "🚴🏻" | "🚴🏼" | "🚴🏽" | "🚴🏾" | "🚴🏿" | "🚴" | "🚴🏻‍♂️" | "🚴🏼‍♂️" | "🚴🏽‍♂️" | "🚴🏾‍♂️" | "🚴🏿‍♂️" | "🚴‍♂️" | "🚴‍♂" | "🚴🏻‍♀️" | "🚴🏼‍♀️" | "🚴🏽‍♀️" | "🚴🏾‍♀️" | "🚴🏿‍♀️" | "🚴‍♀️" | "🚴‍♀" | "🚵🏻" | "🚵🏼" | "🚵🏽" | "🚵🏾" | "🚵🏿" | "🚵" | "🚵🏻‍♂️" | "🚵🏼‍♂️" | "🚵🏽‍♂️" | "🚵🏾‍♂️" | "🚵🏿‍♂️" | "🚵‍♂️" | "🚵‍♂" | "🚵🏻‍♀️" | "🚵🏼‍♀️" | "🚵🏽‍♀️" | "🚵🏾‍♀️" | "🚵🏿‍♀️" | "🚵‍♀️" | "🚵‍♀" | "🤸🏻" | "🤸🏼" | "🤸🏽" | "🤸🏾" | "🤸🏿" | "🤸" | "🤸🏻‍♂️" | "🤸🏼‍♂️" | "🤸🏽‍♂️" | "🤸🏾‍♂️" | "🤸🏿‍♂️" | "🤸‍♂️" | "🤸‍♂" | "🤸🏻‍♀️" | "🤸🏼‍♀️" | "🤸🏽‍♀️" | "🤸🏾‍♀️" | "🤸🏿‍♀️" | "🤸‍♀️" | "🤸‍♀" | "🤼" | "🤼‍♂️" | "🤼‍♂" | "🤼‍♀️" | "🤼‍♀" | "🤽🏻" | "🤽🏼" | "🤽🏽" | "🤽🏾" | "🤽🏿" | "🤽" | "🤽🏻‍♂️" | "🤽🏼‍♂️" | "🤽🏽‍♂️" | "🤽🏾‍♂️" | "🤽🏿‍♂️" | "🤽‍♂️" | "🤽‍♂" | "🤽🏻‍♀️" | "🤽🏼‍♀️" | "🤽🏽‍♀️" | "🤽🏾‍♀️" | "🤽🏿‍♀️" | "🤽‍♀️" | "🤽‍♀" | "🤾🏻" | "🤾🏼" | "🤾🏽" | "🤾🏾" | "🤾🏿" | "🤾" | "🤾🏻‍♂️" | "🤾🏼‍♂️" | "🤾🏽‍♂️" | "🤾🏾‍♂️" | "🤾🏿‍♂️" | "🤾‍♂️" | "🤾‍♂" | "🤾🏻‍♀️" | "🤾🏼‍♀️" | "🤾🏽‍♀️" | "🤾🏾‍♀️" | "🤾🏿‍♀️" | "🤾‍♀️" | "🤾‍♀" | "🤹🏻" | "🤹🏼" | "🤹🏽" | "🤹🏾" | "🤹🏿" | "🤹" | "🤹🏻‍♂️" | "🤹🏼‍♂️" | "🤹🏽‍♂️" | "🤹🏾‍♂️" | "🤹🏿‍♂️" | "🤹‍♂️" | "🤹‍♂" | "🤹🏻‍♀️" | "🤹🏼‍♀️" | "🤹🏽‍♀️" | "🤹🏾‍♀️" | "🤹🏿‍♀️" | "🤹‍♀️" | "🤹‍♀" | "🧘🏻" | "🧘🏼" | "🧘🏽" | "🧘🏾" | "🧘🏿" | "🧘" | "🧘🏻‍♂️" | "🧘🏼‍♂️" | "🧘🏽‍♂️" | "🧘🏾‍♂️" | "🧘🏿‍♂️" | "🧘‍♂️" | "🧘‍♂" | "🧘🏻‍♀️" | "🧘🏼‍♀️" | "🧘🏽‍♀️" | "🧘🏾‍♀️" | "🧘🏿‍♀️" | "🧘‍♀️" | "🧘‍♀" | "🛀🏻" | "🛀🏼" | "🛀🏽" | "🛀🏾" | "🛀🏿" | "🛀" | "🛌🏻" | "🛌🏼" | "🛌🏽" | "🛌🏾" | "🛌🏿" | "🛌" | "🧑🏻‍🤝‍🧑🏻" | "🧑🏻‍🤝‍🧑🏼" | "🧑🏻‍🤝‍🧑🏽" | "🧑🏻‍🤝‍🧑🏾" | "🧑🏻‍🤝‍🧑🏿" | "🧑🏼‍🤝‍🧑🏻" | "🧑🏼‍🤝‍🧑🏼" | "🧑🏼‍🤝‍🧑🏽" | "🧑🏼‍🤝‍🧑🏾" | "🧑🏼‍🤝‍🧑🏿" | "🧑🏽‍🤝‍🧑🏻" | "🧑🏽‍🤝‍🧑🏼" | "🧑🏽‍🤝‍🧑🏽" | "🧑🏽‍🤝‍🧑🏾" | "🧑🏽‍🤝‍🧑🏿" | "🧑🏾‍🤝‍🧑🏻" | "🧑🏾‍🤝‍🧑🏼" | "🧑🏾‍🤝‍🧑🏽" | "🧑🏾‍🤝‍🧑🏾" | "🧑🏾‍🤝‍🧑🏿" | "🧑🏿‍🤝‍🧑🏻" | "🧑🏿‍🤝‍🧑🏼" | "🧑🏿‍🤝‍🧑🏽" | "🧑🏿‍🤝‍🧑🏾" | "🧑🏿‍🤝‍🧑🏿" | "🧑‍🤝‍🧑" | "👭" | "👫" | "👬" | "💏" | "💑" | "👪" | "👨‍👩‍👦" | "👨‍👩‍👧" | "👨‍👩‍👧‍👦" | "👨‍👩‍👦‍👦" | "👨‍👩‍👧‍👧" | "👨‍👨‍👦" | "👨‍👨‍👧" | "👨‍👨‍👧‍👦" | "👨‍👨‍👦‍👦" | "👨‍👨‍👧‍👧" | "👩‍👩‍👦" | "👩‍👩‍👧" | "👩‍👩‍👧‍👦" | "👩‍👩‍👦‍👦" | "👩‍👩‍👧‍👧" | "👨‍👦" | "👨‍👦‍👦" | "👨‍👧" | "👨‍👧‍👦" | "👨‍👧‍👧" | "👩‍👦" | "👩‍👦‍👦" | "👩‍👧" | "👩‍👧‍👦" | "👩‍👧‍👧" | "🗣️" | "🗣" | "👤" | "👥" | "🫂" | "👣" | "🐵" | "🐒" | "🦍" | "🦧" | "🐶" | "🐕" | "🦮" | "🐕‍🦺" | "🐩" | "🐺" | "🦊" | "🦝" | "🐱" | "🐈" | "🐈‍⬛" | "🦁" | "🐯" | "🐅" | "🐆" | "🐴" | "🐎" | "🦄" | "🦓" | "🦌" | "🦬" | "🐮" | "🐂" | "🐃" | "🐄" | "🐷" | "🐖" | "🐗" | "🐽" | "🐏" | "🐑" | "🐐" | "🐪" | "🐫" | "🦙" | "🦒" | "🐘" | "🦣" | "🦏" | "🦛" | "🐭" | "🐁" | "🐀" | "🐹" | "🐰" | "🐇" | "🐿️" | "🐿" | "🦫" | "🦔" | "🦇" | "🐻" | "🐻‍❄️" | "🐻‍❄" | "🐨" | "🐼" | "🦥" | "🦦" | "🦨" | "🦘" | "🦡" | "🐾" | "🦃" | "🐔" | "🐓" | "🐣" | "🐤" | "🐥" | "🐦" | "🐧" | "🕊️" | "🕊" | "🦅" | "🦆" | "🦢" | "🦉" | "🦤" | "🪶" | "🦩" | "🦚" | "🦜" | "🐸" | "🐊" | "🐢" | "🦎" | "🐍" | "🐲" | "🐉" | "🦕" | "🦖" | "🐳" | "🐋" | "🐬" | "🦭" | "🐟" | "🐠" | "🐡" | "🦈" | "🐙" | "🐚" | "🐌" | "🦋" | "🐛" | "🐜" | "🐝" | "🪲" | "🐞" | "🦗" | "🪳" | "🕷️" | "🕷" | "🕸️" | "🕸" | "🦂" | "🦟" | "🪰" | "🪱" | "🦠" | "💐" | "🌸" | "💮" | "🏵️" | "🏵" | "🌹" | "🥀" | "🌺" | "🌻" | "🌼" | "🌷" | "🌱" | "🪴" | "🌲" | "🌳" | "🌴" | "🌵" | "🌾" | "🌿" | "☘️" | "☘" | "🍀" | "🍁" | "🍂" | "🍃" | "🍇" | "🍈" | "🍉" | "🍊" | "🍋" | "🍌" | "🍍" | "🥭" | "🍎" | "🍏" | "🍐" | "🍑" | "🍒" | "🍓" | "🫐" | "🥝" | "🍅" | "🫒" | "🥥" | "🥑" | "🍆" | "🥔" | "🥕" | "🌽" | "🌶️" | "🌶" | "🫑" | "🥒" | "🥬" | "🥦" | "🧄" | "🧅" | "🍄" | "🥜" | "🌰" | "🍞" | "🥐" | "🥖" | "🫓" | "🥨" | "🥯" | "🥞" | "🧇" | "🧀" | "🍖" | "🍗" | "🥩" | "🥓" | "🍔" | "🍟" | "🍕" | "🌭" | "🥪" | "🌮" | "🌯" | "🫔" | "🥙" | "🧆" | "🥚" | "🍳" | "🥘" | "🍲" | "🫕" | "🥣" | "🥗" | "🍿" | "🧈" | "🧂" | "🥫" | "🍱" | "🍘" | "🍙" | "🍚" | "🍛" | "🍜" | "🍝" | "🍠" | "🍢" | "🍣" | "🍤" | "🍥" | "🥮" | "🍡" | "🥟" | "🥠" | "🥡" | "🦀" | "🦞" | "🦐" | "🦑" | "🦪" | "🍦" | "🍧" | "🍨" | "🍩" | "🍪" | "🎂" | "🍰" | "🧁" | "🥧" | "🍫" | "🍬" | "🍭" | "🍮" | "🍯" | "🍼" | "🥛" | "☕" | "🫖" | "🍵" | "🍶" | "🍾" | "🍷" | "🍸" | "🍹" | "🍺" | "🍻" | "🥂" | "🥃" | "🥤" | "🧋" | "🧃" | "🧉" | "🧊" | "🥢" | "🍽️" | "🍽" | "🍴" | "🥄" | "🔪" | "🏺" | "🌍" | "🌎" | "🌏" | "🌐" | "🗺️" | "🗺" | "🗾" | "🧭" | "🏔️" | "🏔" | "⛰️" | "⛰" | "🌋" | "🗻" | "🏕️" | "🏕" | "🏖️" | "🏖" | "🏜️" | "🏜" | "🏝️" | "🏝" | "🏞️" | "🏞" | "🏟️" | "🏟" | "🏛️" | "🏛" | "🏗️" | "🏗" | "🧱" | "🪨" | "🪵" | "🛖" | "🏘️" | "🏘" | "🏚️" | "🏚" | "🏠" | "🏡" | "🏢" | "🏣" | "🏤" | "🏥" | "🏦" | "🏨" | "🏩" | "🏪" | "🏫" | "🏬" | "🏭" | "🏯" | "🏰" | "💒" | "🗼" | "🗽" | "⛪" | "🕌" | "🛕" | "🕍" | "⛩️" | "⛩" | "🕋" | "⛲" | "⛺" | "🌁" | "🌃" | "🏙️" | "🏙" | "🌄" | "🌅" | "🌆" | "🌇" | "🌉" | "♨️" | "♨" | "🎠" | "🎡" | "🎢" | "💈" | "🎪" | "🚂" | "🚃" | "🚄" | "🚅" | "🚆" | "🚇" | "🚈" | "🚉" | "🚊" | "🚝" | "🚞" | "🚋" | "🚌" | "🚍" | "🚎" | "🚐" | "🚑" | "🚒" | "🚓" | "🚔" | "🚕" | "🚖" | "🚗" | "🚘" | "🚙" | "🛻" | "🚚" | "🚛" | "🚜" | "🏎️" | "🏎" | "🏍️" | "🏍" | "🛵" | "🦽" | "🦼" | "🛺" | "🚲" | "🛴" | "🛹" | "🛼" | "🚏" | "🛣️" | "🛣" | "🛤️" | "🛤" | "🛢️" | "🛢" | "⛽" | "🚨" | "🚥" | "🚦" | "🛑" | "🚧" | "⚓" | "⛵" | "🛶" | "🚤" | "🛳️" | "🛳" | "⛴️" | "⛴" | "🛥️" | "🛥" | "🚢" | "✈️" | "✈" | "🛩️" | "🛩" | "🛫" | "🛬" | "🪂" | "💺" | "🚁" | "🚟" | "🚠" | "🚡" | "🛰️" | "🛰" | "🚀" | "🛸" | "🛎️" | "🛎" | "🧳" | "⌛" | "⏳" | "⌚" | "⏰" | "⏱️" | "⏱" | "⏲️" | "⏲" | "🕰️" | "🕰" | "🕛" | "🕧" | "🕐" | "🕜" | "🕑" | "🕝" | "🕒" | "🕞" | "🕓" | "🕟" | "🕔" | "🕠" | "🕕" | "🕡" | "🕖" | "🕢" | "🕗" | "🕣" | "🕘" | "🕤" | "🕙" | "🕥" | "🕚" | "🕦" | "🌑" | "🌒" | "🌓" | "🌔" | "🌕" | "🌖" | "🌗" | "🌘" | "🌙" | "🌚" | "🌛" | "🌜" | "🌡️" | "🌡" | "☀️" | "☀" | "🌝" | "🌞" | "🪐" | "⭐" | "🌟" | "🌠" | "🌌" | "☁️" | "☁" | "⛅" | "⛈️" | "⛈" | "🌤️" | "🌤" | "🌥️" | "🌥" | "🌦️" | "🌦" | "🌧️" | "🌧" | "🌨️" | "🌨" | "🌩️" | "🌩" | "🌪️" | "🌪" | "🌫️" | "🌫" | "🌬️" | "🌬" | "🌀" | "🌈" | "🌂" | "☂️" | "☂" | "☔" | "⛱️" | "⛱" | "⚡" | "❄️" | "❄" | "☃️" | "☃" | "⛄" | "☄️" | "☄" | "🔥" | "💧" | "🌊" | "🎃" | "🎄" | "🎆" | "🎇" | "🧨" | "✨" | "🎈" | "🎉" | "🎊" | "🎋" | "🎍" | "🎎" | "🎏" | "🎐" | "🎑" | "🧧" | "🎀" | "🎁" | "🎗️" | "🎗" | "🎟️" | "🎟" | "🎫" | "🎖️" | "🎖" | "🏆" | "🏅" | "🥇" | "🥈" | "🥉" | "⚽" | "⚾" | "🥎" | "🏀" | "🏐" | "🏈" | "🏉" | "🎾" | "🥏" | "🎳" | "🏏" | "🏑" | "🏒" | "🥍" | "🏓" | "🏸" | "🥊" | "🥋" | "🥅" | "⛳" | "⛸️" | "⛸" | "🎣" | "🤿" | "🎽" | "🎿" | "🛷" | "🥌" | "🎯" | "🪀" | "🪁" | "🎱" | "🔮" | "🪄" | "🧿" | "🎮" | "🕹️" | "🕹" | "🎰" | "🎲" | "🧩" | "🧸" | "🪅" | "🪆" | "♠️" | "♠" | "♥️" | "♥" | "♦️" | "♦" | "♣️" | "♣" | "♟️" | "♟" | "🃏" | "🀄" | "🎴" | "🎭" | "🖼️" | "🖼" | "🎨" | "🧵" | "🪡" | "🧶" | "🪢" | "👓" | "🕶️" | "🕶" | "🥽" | "🥼" | "🦺" | "👔" | "👕" | "👖" | "🧣" | "🧤" | "🧥" | "🧦" | "👗" | "👘" | "🥻" | "🩱" | "🩲" | "🩳" | "👙" | "👚" | "👛" | "👜" | "👝" | "🛍️" | "🛍" | "🎒" | "🩴" | "👞" | "👟" | "🥾" | "🥿" | "👠" | "👡" | "🩰" | "👢" | "👑" | "👒" | "🎩" | "🎓" | "🧢" | "🪖" | "⛑️" | "⛑" | "📿" | "💄" | "💍" | "💎" | "🔇" | "🔈" | "🔉" | "🔊" | "📢" | "📣" | "📯" | "🔔" | "🔕" | "🎼" | "🎵" | "🎶" | "🎙️" | "🎙" | "🎚️" | "🎚" | "🎛️" | "🎛" | "🎤" | "🎧" | "📻" | "🎷" | "🪗" | "🎸" | "🎹" | "🎺" | "🎻" | "🪕" | "🥁" | "🪘" | "📱" | "📲" | "☎️" | "☎" | "📞" | "📟" | "📠" | "🔋" | "🔌" | "💻" | "🖥️" | "🖥" | "🖨️" | "🖨" | "⌨️" | "⌨" | "🖱️" | "🖱" | "🖲️" | "🖲" | "💽" | "💾" | "💿" | "📀" | "🧮" | "🎥" | "🎞️" | "🎞" | "📽️" | "📽" | "🎬" | "📺" | "📷" | "📸" | "📹" | "📼" | "🔍" | "🔎" | "🕯️" | "🕯" | "💡" | "🔦" | "🏮" | "🪔" | "📔" | "📕" | "📖" | "📗" | "📘" | "📙" | "📚" | "📓" | "📒" | "📃" | "📜" | "📄" | "📰" | "🗞️" | "🗞" | "📑" | "🔖" | "🏷️" | "🏷" | "💰" | "🪙" | "💴" | "💵" | "💶" | "💷" | "💸" | "💳" | "🧾" | "💹" | "✉️" | "✉" | "📧" | "📨" | "📩" | "📤" | "📥" | "📦" | "📫" | "📪" | "📬" | "📭" | "📮" | "🗳️" | "🗳" | "✏️" | "✏" | "✒️" | "✒" | "🖋️" | "🖋" | "🖊️" | "🖊" | "🖌️" | "🖌" | "🖍️" | "🖍" | "📝" | "💼" | "📁" | "📂" | "🗂️" | "🗂" | "📅" | "📆" | "🗒️" | "🗒" | "🗓️" | "🗓" | "📇" | "📈" | "📉" | "📊" | "📋" | "📌" | "📍" | "📎" | "🖇️" | "🖇" | "📏" | "📐" | "✂️" | "✂" | "🗃️" | "🗃" | "🗄️" | "🗄" | "🗑️" | "🗑" | "🔒" | "🔓" | "🔏" | "🔐" | "🔑" | "🗝️" | "🗝" | "🔨" | "🪓" | "⛏️" | "⛏" | "⚒️" | "⚒" | "🛠️" | "🛠" | "🗡️" | "🗡" | "⚔️" | "⚔" | "🔫" | "🪃" | "🏹" | "🛡️" | "🛡" | "🪚" | "🔧" | "🪛" | "🔩" | "⚙️" | "⚙" | "🗜️" | "🗜" | "⚖️" | "⚖" | "🦯" | "🔗" | "⛓️" | "⛓" | "🪝" | "🧰" | "🧲" | "🪜" | "⚗️" | "⚗" | "🧪" | "🧫" | "🧬" | "🔬" | "🔭" | "📡" | "💉" | "🩸" | "💊" | "🩹" | "🩺" | "🚪" | "🛗" | "🪞" | "🪟" | "🛏️" | "🛏" | "🛋️" | "🛋" | "🪑" | "🚽" | "🪠" | "🚿" | "🛁" | "🪤" | "🪒" | "🧴" | "🧷" | "🧹" | "🧺" | "🧻" | "🪣" | "🧼" | "🪥" | "🧽" | "🧯" | "🛒" | "🚬" | "⚰️" | "⚰" | "🪦" | "⚱️" | "⚱" | "🗿" | "🪧" | "🏧" | "🚮" | "🚰" | "♿" | "🚹" | "🚺" | "🚻" | "🚼" | "🚾" | "🛂" | "🛃" | "🛄" | "🛅" | "⚠️" | "⚠" | "🚸" | "⛔" | "🚫" | "🚳" | "🚭" | "🚯" | "🚱" | "🚷" | "📵" | "🔞" | "☢️" | "☢" | "☣️" | "☣" | "⬆️" | "⬆" | "↗️" | "↗" | "➡️" | "➡" | "↘️" | "↘" | "⬇️" | "⬇" | "↙️" | "↙" | "⬅️" | "⬅" | "↖️" | "↖" | "↕️" | "↕" | "↔️" | "↔" | "↩️" | "↩" | "↪️" | "↪" | "⤴️" | "⤴" | "⤵️" | "⤵" | "🔃" | "🔄" | "🔙" | "🔚" | "🔛" | "🔜" | "🔝" | "🛐" | "⚛️" | "⚛" | "🕉️" | "🕉" | "✡️" | "✡" | "☸️" | "☸" | "☯️" | "☯" | "✝️" | "✝" | "☦️" | "☦" | "☪️" | "☪" | "☮️" | "☮" | "🕎" | "🔯" | "♈" | "♉" | "♊" | "♋" | "♌" | "♍" | "♎" | "♏" | "♐" | "♑" | "♒" | "♓" | "⛎" | "🔀" | "🔁" | "🔂" | "▶️" | "▶" | "⏩" | "⏭️" | "⏭" | "⏯️" | "⏯" | "◀️" | "◀" | "⏪" | "⏮️" | "⏮" | "🔼" | "⏫" | "🔽" | "⏬" | "⏸️" | "⏸" | "⏹️" | "⏹" | "⏺️" | "⏺" | "⏏️" | "⏏" | "🎦" | "🔅" | "🔆" | "📶" | "📳" | "📴" | "♀️" | "♀" | "♂️" | "♂" | "⚧️" | "⚧" | "✖️" | "✖" | "➕" | "➖" | "➗" | "♾️" | "♾" | "‼️" | "‼" | "⁉️" | "⁉" | "❓" | "❔" | "❕" | "❗" | "〰️" | "〰" | "💱" | "💲" | "⚕️" | "⚕" | "♻️" | "♻" | "⚜️" | "⚜" | "🔱" | "📛" | "🔰" | "⭕" | "✅" | "☑️" | "☑" | "✔️" | "✔" | "❌" | "❎" | "➰" | "➿" | "〽️" | "〽" | "✳️" | "✳" | "✴️" | "✴" | "❇️" | "❇" | "©️" | "©" | "®️" | "®" | "™️" | "™" | "#️⃣" | "#⃣" | "*️⃣" | "*⃣" | "0️⃣" | "0⃣" | "1️⃣" | "1⃣" | "2️⃣" | "2⃣" | "3️⃣" | "3⃣" | "4️⃣" | "4⃣" | "5️⃣" | "5⃣" | "6️⃣" | "6⃣" | "7️⃣" | "7⃣" | "8️⃣" | "8⃣" | "9️⃣" | "9⃣" | "🔟" | "🔠" | "🔡" | "🔢" | "🔣" | "🔤" | "🅰️" | "🅰" | "🆎" | "🅱️" | "🅱" | "🆑" | "🆒" | "🆓" | "ℹ️" | "ℹ" | "🆔" | "Ⓜ️" | "Ⓜ" | "🆕" | "🆖" | "🅾️" | "🅾" | "🆗" | "🅿️" | "🅿" | "🆘" | "🆙" | "🆚" | "🈁" | "🈂️" | "🈂" | "🈷️" | "🈷" | "🈶" | "🈯" | "🉐" | "🈹" | "🈚" | "🈲" | "🉑" | "🈸" | "🈴" | "🈳" | "㊗️" | "㊗" | "㊙️" | "㊙" | "🈺" | "🈵" | "🔴" | "🟠" | "🟡" | "🟢" | "🔵" | "🟣" | "🟤" | "⚫" | "⚪" | "🟥" | "🟧" | "🟨" | "🟩" | "🟦" | "🟪" | "🟫" | "⬛" | "⬜" | "◼️" | "◼" | "◻️" | "◻" | "◾" | "◽" | "▪️" | "▪" | "▫️" | "▫" | "🔶" | "🔷" | "🔸" | "🔹" | "🔺" | "🔻" | "💠" | "🔘" | "🔳" | "🔲" | "🏁" | "🚩" | "🎌" | "🏴" | "🏳️" | "🏳" | "🏳️‍🌈" | "🏳‍🌈" | "🏳️‍⚧️" | "🏴‍☠️" | "🏴‍☠" | "🇦🇨" | "🇦🇩" | "🇦🇪" | "🇦🇫" | "🇦🇬" | "🇦🇮" | "🇦🇱" | "🇦🇲" | "🇦🇴" | "🇦🇶" | "🇦🇷" | "🇦🇸" | "🇦🇹" | "🇦🇺" | "🇦🇼" | "🇦🇽" | "🇦🇿" | "🇧🇦" | "🇧🇧" | "🇧🇩" | "🇧🇪" | "🇧🇫" | "🇧🇬" | "🇧🇭" | "🇧🇮" | "🇧🇯" | "🇧🇱" | "🇧🇲" | "🇧🇳" | "🇧🇴" | "🇧🇶" | "🇧🇷" | "🇧🇸" | "🇧🇹" | "🇧🇻" | "🇧🇼" | "🇧🇾" | "🇧🇿" | "🇨🇦" | "🇨🇨" | "🇨🇩" | "🇨🇫" | "🇨🇬" | "🇨🇭" | "🇨🇮" | "🇨🇰" | "🇨🇱" | "🇨🇲" | "🇨🇳" | "🇨🇴" | "🇨🇵" | "🇨🇷" | "🇨🇺" | "🇨🇻" | "🇨🇼" | "🇨🇽" | "🇨🇾" | "🇨🇿" | "🇩🇪" | "🇩🇬" | "🇩🇯" | "🇩🇰" | "🇩🇲" | "🇩🇴" | "🇩🇿" | "🇪🇦" | "🇪🇨" | "🇪🇪" | "🇪🇬" | "🇪🇭" | "🇪🇷" | "🇪🇸" | "🇪🇹" | "🇪🇺" | "🇫🇮" | "🇫🇯" | "🇫🇰" | "🇫🇲" | "🇫🇴" | "🇫🇷" | "🇬🇦" | "🇬🇧" | "🇬🇩" | "🇬🇪" | "🇬🇫" | "🇬🇬" | "🇬🇭" | "🇬🇮" | "🇬🇱" | "🇬🇲" | "🇬🇳" | "🇬🇵" | "🇬🇶" | "🇬🇷" | "🇬🇸" | "🇬🇹" | "🇬🇺" | "🇬🇼" | "🇬🇾" | "🇭🇰" | "🇭🇲" | "🇭🇳" | "🇭🇷" | "🇭🇹" | "🇭🇺" | "🇮🇨" | "🇮🇩" | "🇮🇪" | "🇮🇱" | "🇮🇲" | "🇮🇳" | "🇮🇴" | "🇮🇶" | "🇮🇷" | "🇮🇸" | "🇮🇹" | "🇯🇪" | "🇯🇲" | "🇯🇴" | "🇯🇵" | "🇰🇪" | "🇰🇬" | "🇰🇭" | "🇰🇮" | "🇰🇲" | "🇰🇳" | "🇰🇵" | "🇰🇷" | "🇰🇼" | "🇰🇾" | "🇰🇿" | "🇱🇦" | "🇱🇧" | "🇱🇨" | "🇱🇮" | "🇱🇰" | "🇱🇷" | "🇱🇸" | "🇱🇹" | "🇱🇺" | "🇱🇻" | "🇱🇾" | "🇲🇦" | "🇲🇨" | "🇲🇩" | "🇲🇪" | "🇲🇫" | "🇲🇬" | "🇲🇭" | "🇲🇰" | "🇲🇱" | "🇲🇲" | "🇲🇳" | "🇲🇴" | "🇲🇵" | "🇲🇶" | "🇲🇷" | "🇲🇸" | "🇲🇹" | "🇲🇺" | "🇲🇻" | "🇲🇼" | "🇲🇽" | "🇲🇾" | "🇲🇿" | "🇳🇦" | "🇳🇨" | "🇳🇪" | "🇳🇫" | "🇳🇬" | "🇳🇮" | "🇳🇱" | "🇳🇴" | "🇳🇵" | "🇳🇷" | "🇳🇺" | "🇳🇿" | "🇴🇲" | "🇵🇦" | "🇵🇪" | "🇵🇫" | "🇵🇬" | "🇵🇭" | "🇵🇰" | "🇵🇱" | "🇵🇲" | "🇵🇳" | "🇵🇷" | "🇵🇸" | "🇵🇹" | "🇵🇼" | "🇵🇾" | "🇶🇦" | "🇷🇪" | "🇷🇴" | "🇷🇸" | "🇷🇺" | "🇷🇼" | "🇸🇦" | "🇸🇧" | "🇸🇨" | "🇸🇩" | "🇸🇪" | "🇸🇬" | "🇸🇭" | "🇸🇮" | "🇸🇯" | "🇸🇰" | "🇸🇱" | "🇸🇲" | "🇸🇳" | "🇸🇴" | "🇸🇷" | "🇸🇸" | "🇸🇹" | "🇸🇻" | "🇸🇽" | "🇸🇾" | "🇸🇿" | "🇹🇦" | "🇹🇨" | "🇹🇩" | "🇹🇫" | "🇹🇬" | "🇹🇭" | "🇹🇯" | "🇹🇰" | "🇹🇱" | "🇹🇲" | "🇹🇳" | "🇹🇴" | "🇹🇷" | "🇹🇹" | "🇹🇻" | "🇹🇼" | "🇹🇿" | "🇺🇦" | "🇺🇬" | "🇺🇲" | "🇺🇳" | "🇺🇸" | "🇺🇾" | "🇺🇿" | "🇻🇦" | "🇻🇨" | "🇻🇪" | "🇻🇬" | "🇻🇮" | "🇻🇳" | "🇻🇺" | "🇼🇫" | "🇼🇸" | "🇽🇰" | "🇾🇪" | "🇾🇹" | "🇿🇦" | "🇿🇲" | "🇿🇼" | "🏴󠁧󠁢󠁥󠁮󠁧󠁿" | "🏴󠁧󠁢󠁳󠁣󠁴󠁿" | "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
