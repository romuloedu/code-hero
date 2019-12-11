import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Search from '../../components/Search';
import ResultsList from '../../components/ResultsList';
// import Pagination from '../../components/Pagination';

export default class Home extends Component {

    state = {
        apikey: "fa3d1ecfc313657edd64bd5eeb726f6c",
        ts: "1576086904",
        hash: "41c520a5e9364f81ddc2dd2ecef47d80",
        limit: 4,
        page: 1,
        querySearch: null,
        data: {
            "code": 200,
            "status": "Ok",
            "copyright": "© 2019 MARVEL",
            "attributionText": "Data provided by Marvel. © 2019 MARVEL",
            "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2019 MARVEL</a>",
            "etag": "e8674b74a08aa3e3035761e715d395adba931bf6",
            "data": {
                "offset": 10,
                "limit": 4,
                "total": 1493,
                "count": 4,
                "results": [
                    {
                        "id": 1010354,
                        "name": "Adam Warlock",
                        "description": "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
                        "modified": "2013-08-07T13:49:06-0400",
                        "thumbnail": {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
                            "extension": "jpg"
                        },
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010354",
                        "comics": {
                            "available": 187,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/comics",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/62151",
                                    "name": "All-New Guardians of the Galaxy Vol. 3: Infinity Quest (Trade Paperback)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17271",
                                    "name": "Annihilation: Conquest (2007) #1"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17405",
                                    "name": "Annihilation: Conquest (2007) #2"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17645",
                                    "name": "Annihilation: Conquest (2007) #3"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/20686",
                                    "name": "Annihilation: Conquest (2007) #4"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/20885",
                                    "name": "Annihilation: Conquest (2007) #5"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/21016",
                                    "name": "Annihilation: Conquest (2007) #6"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12412",
                                    "name": "Avengers Forever (1998) #9"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1033",
                                    "name": "Avengers Legends Vol. I: Avengers Forever (Trade Paperback)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/20731",
                                    "name": "Clandestine Classic Premiere (Hardcover)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/20187",
                                    "name": "Doctor Strange, Sorcerer Supreme (1988) #27"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/20193",
                                    "name": "Doctor Strange, Sorcerer Supreme (1988) #32"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/20197",
                                    "name": "Doctor Strange, Sorcerer Supreme (1988) #36"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/8552",
                                    "name": "Earth X (1999) #2"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/8550",
                                    "name": "Earth X (1999) #11"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/4241",
                                    "name": "Earth X (New (Trade Paperback)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12975",
                                    "name": "Fantastic Four (1961) #172"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13195",
                                    "name": "Fantastic Four (1961) #370"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/25305",
                                    "name": "Guardians of the Galaxy (2008) #17"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/65547",
                                    "name": "All-New Guardians of the Galaxy (2017) #150"
                                }
                            ],
                            "returned": 20
                        },
                        "series": {
                            "available": 81,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/series",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/23058",
                                    "name": "All-New Guardians of the Galaxy (2017)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/22778",
                                    "name": "All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3061",
                                    "name": "Annihilation: Conquest (2007)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
                                    "name": "Avengers Forever (1998 - 2001)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/93",
                                    "name": "Avengers Legends Vol. I: Avengers Forever (2002)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3874",
                                    "name": "Clandestine Classic Premiere (2008)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
                                    "name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
                                    "name": "Earth X (1999)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
                                    "name": "Earth X (New (2006)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
                                    "name": "Fantastic Four (1961 - 1998)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/4885",
                                    "name": "Guardians of the Galaxy (2008 - 2010)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/27554",
                                    "name": "Guardians Of The Galaxy Annual (2019)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/22422",
                                    "name": "GUARDIANS OF THE GALAXY: ROAD TO ANNIHILATION VOL. 2 TPB (2017)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
                                    "name": "Incredible Hulk (1962 - 1999)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2983",
                                    "name": "Incredible Hulk Annual (1976 - 1994)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/26307",
                                    "name": "Infinity By Starlin & Hickman (2019)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/24050",
                                    "name": "Infinity Countdown (2018)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/24300",
                                    "name": "Infinity Countdown Prime (2018)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/23991",
                                    "name": "Infinity Countdown: Adam Warlock (2018)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/6673",
                                    "name": "Infinity Crusade (1993)"
                                }
                            ],
                            "returned": 20
                        },
                        "stories": {
                            "available": 217,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/stories",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1412",
                                    "name": "Cover #1412",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1602",
                                    "name": "Cover #1602",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1800",
                                    "name": "Cover #1800",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1842",
                                    "name": "Cover #1842",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3758",
                                    "name": "WARLOCK (2004) #3",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3760",
                                    "name": "WARLOCK (2004) #1",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3762",
                                    "name": "WARLOCK (2004) #2",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3764",
                                    "name": "WARLOCK (2004) #4",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/12568",
                                    "name": "Fantastic Four (1961) #172",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/12569",
                                    "name": "Cry, the Bedeviled Planet!",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/13121",
                                    "name": "Forever Evil",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/18500",
                                    "name": "Incredible Hulk (1962) #177",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/18501",
                                    "name": "Peril of the Paired Planets",
                                    "type": ""
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/18503",
                                    "name": "Triumph On Terra-Two",
                                    "type": ""
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19847",
                                    "name": "Cover #19847",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19848",
                                    "name": "Performance",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19859",
                                    "name": "Days of Future Present Part 4",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19860",
                                    "name": "You Must Remember This",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19883",
                                    "name": "The Adventures of Lockheed the Space Dragon and His Pet Girl, Kitty",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19884",
                                    "name": "The Saga of Storm: Goddess of Thunder",
                                    "type": "cover"
                                }
                            ],
                            "returned": 20
                        },
                        "events": {
                            "available": 8,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/events",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/events/293",
                                    "name": "Annihilation: Conquest"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
                                    "name": "Atlantis Attacks"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/events/235",
                                    "name": "Blood and Thunder"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
                                    "name": "Days of Future Present"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                                    "name": "Infinity War"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
                                    "name": "Mutant Massacre"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
                                    "name": "Secret Wars II"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/events/280",
                                    "name": "X-Tinction Agenda"
                                }
                            ],
                            "returned": 8
                        },
                        "urls": [
                            {
                                "type": "detail",
                                "url": "http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            },
                            {
                                "type": "wiki",
                                "url": "http://marvel.com/universe/Warlock,_Adam?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            },
                            {
                                "type": "comiclink",
                                "url": "http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            }
                        ]
                    },
                    {
                        "id": 1010846,
                        "name": "Aegis (Trey Rollins)",
                        "description": "",
                        "modified": "1969-12-31T19:00:00-0500",
                        "thumbnail": {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d",
                            "extension": "gif"
                        },
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010846",
                        "comics": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/comics",
                            "items": [],
                            "returned": 0
                        },
                        "series": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/series",
                            "items": [],
                            "returned": 0
                        },
                        "stories": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/stories",
                            "items": [],
                            "returned": 0
                        },
                        "events": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/events",
                            "items": [],
                            "returned": 0
                        },
                        "urls": [
                            {
                                "type": "detail",
                                "url": "http://marvel.com/characters/95/aegis?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            },
                            {
                                "type": "wiki",
                                "url": "http://marvel.com/universe/Aegis_%28Trey_Rollins%29?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            },
                            {
                                "type": "comiclink",
                                "url": "http://marvel.com/comics/characters/1010846/aegis_trey_rollins?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            }
                        ]
                    },
                    {
                        "id": 1011297,
                        "name": "Agent Brand",
                        "description": "",
                        "modified": "2013-10-24T13:09:30-0400",
                        "thumbnail": {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e",
                            "extension": "jpg"
                        },
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011297",
                        "comics": {
                            "available": 17,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/comics",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/5477",
                                    "name": "Astonishing X-Men (2004) #19 (Variant)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6120",
                                    "name": "Astonishing X-Men (2004) #21"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6309",
                                    "name": "Astonishing X-Men (2004) #22"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16119",
                                    "name": "Astonishing X-Men (2004) #23"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17353",
                                    "name": "Astonishing X-Men (2004) #24"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24503",
                                    "name": "Astonishing X-Men (2004) #32"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24504",
                                    "name": "Astonishing X-Men (2004) #33"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/38318",
                                    "name": "Astonishing X-Men (2004) #38"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/38319",
                                    "name": "Astonishing X-Men (2004) #40"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40024",
                                    "name": "Astonishing X-Men (2004) #40 (I Am Captain America Variant)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/45950",
                                    "name": "Cable and X-Force (2012) #8"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/39890",
                                    "name": "Heralds (Trade Paperback)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/26232",
                                    "name": "S.W.O.R.D. (2009) #2"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/26233",
                                    "name": "S.W.O.R.D. (2009) #3"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/26234",
                                    "name": "S.W.O.R.D. (2009) #4"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/30518",
                                    "name": "S.W.O.R.D. (2009) #5"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/61430",
                                    "name": "The Mighty Captain Marvel (2017) #5"
                                }
                            ],
                            "returned": 17
                        },
                        "series": {
                            "available": 5,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/series",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
                                    "name": "Astonishing X-Men (2004 - 2013)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/16907",
                                    "name": "Cable and X-Force (2012 - 2014)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13065",
                                    "name": "Heralds (2010)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/8233",
                                    "name": "S.W.O.R.D. (2009 - 2010)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/22551",
                                    "name": "The Mighty Captain Marvel (2017 - 2018)"
                                }
                            ],
                            "returned": 5
                        },
                        "stories": {
                            "available": 20,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/stories",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3353",
                                    "name": "Interior #3353",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/7670",
                                    "name": "ASTONISHING X-MEN (2004) #21",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/8144",
                                    "name": "ASTONISHING X-MEN (2004) #22",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/32919",
                                    "name": "ASTONISHING X-MEN (2004) #23",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/36374",
                                    "name": "ASTONISHING X-MEN (2004) #24",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/54039",
                                    "name": "ASTONISHING X-MEN (2004) #32",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/54041",
                                    "name": "ASTONISHING X-MEN (2004) #33",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/57763",
                                    "name": "S.W.O.R.D. (2009) #2",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/57765",
                                    "name": "S.W.O.R.D. (2009) #3",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/57767",
                                    "name": "S.W.O.R.D. (2009) #4",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69862",
                                    "name": "S.W.O.R.D. (2009) #5",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/89830",
                                    "name": "ASTONISHING X-MEN (2004) #38",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/89900",
                                    "name": "Astonishing X-Men (2004) #38",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90548",
                                    "name": "Heralds TPB",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90819",
                                    "name": "Interior #90819",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90853",
                                    "name": " Interior  Astonishing X-Men (2004) #40",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90944",
                                    "name": "ASTONISHING X-MEN (2004) #40",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/103418",
                                    "name": "Cable and X-Force (2012) #8",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/103419",
                                    "name": "story from Cable and X-Force (2012) #8",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/133289",
                                    "name": "cover from Captain Marvel (2016) #5",
                                    "type": "cover"
                                }
                            ],
                            "returned": 20
                        },
                        "events": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/events",
                            "items": [],
                            "returned": 0
                        },
                        "urls": [
                            {
                                "type": "detail",
                                "url": "http://marvel.com/comics/characters/1011297/agent_brand?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            },
                            {
                                "type": "wiki",
                                "url": "http://marvel.com/universe/Agent_Brand?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            },
                            {
                                "type": "comiclink",
                                "url": "http://marvel.com/comics/characters/1011297/agent_brand?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            }
                        ]
                    },
                    {
                        "id": 1011031,
                        "name": "Agent X (Nijo)",
                        "description": "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
                        "modified": "1969-12-31T19:00:00-0500",
                        "thumbnail": {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                            "extension": "jpg"
                        },
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011031",
                        "comics": {
                            "available": 18,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/comics",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17702",
                                    "name": "Agent X (2002) #1"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17709",
                                    "name": "Agent X (2002) #2"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17710",
                                    "name": "Agent X (2002) #3"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17711",
                                    "name": "Agent X (2002) #4"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17712",
                                    "name": "Agent X (2002) #5"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17713",
                                    "name": "Agent X (2002) #6"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17714",
                                    "name": "Agent X (2002) #7"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17715",
                                    "name": "Agent X (2002) #8"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17716",
                                    "name": "Agent X (2002) #9"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17703",
                                    "name": "Agent X (2002) #10"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17704",
                                    "name": "Agent X (2002) #11"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17705",
                                    "name": "Agent X (2002) #12"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17706",
                                    "name": "Agent X (2002) #13"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17707",
                                    "name": "Agent X (2002) #14"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/394",
                                    "name": "Agent X (2002) #15"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1649",
                                    "name": "Cable & Deadpool (2004) #12"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/21845",
                                    "name": "Cable & Deadpool (2004) #46 (Zombie Variant)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/5761",
                                    "name": "Cable & Deadpool Vol. 2: The Burnt Offering (Trade Paperback)"
                                }
                            ],
                            "returned": 18
                        },
                        "series": {
                            "available": 3,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/series",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/459",
                                    "name": "Agent X (2002 - 2004)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/693",
                                    "name": "Cable & Deadpool (2004 - 2008)"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1338",
                                    "name": "Cable & Deadpool Vol. 2: The Burnt Offering (2007)"
                                }
                            ],
                            "returned": 3
                        },
                        "stories": {
                            "available": 23,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/stories",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1135",
                                    "name": "AGENT X (2002) #15",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/2484",
                                    "name": "CABLE & DEADPOOL (2004) #12",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37514",
                                    "name": "AGENT X (2002) #1",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37515",
                                    "name": "Dead Man's Switch Part One",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37516",
                                    "name": "AGENT X (2002) #10",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37518",
                                    "name": "AGENT X (2002) #11",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37521",
                                    "name": "AGENT X (2002) #13",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37523",
                                    "name": "AGENT X (2002) #14",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37525",
                                    "name": "AGENT X (2002) #2",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37526",
                                    "name": "Dead Man's Switch Part Two",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37527",
                                    "name": "AGENT X (2002) #3",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37528",
                                    "name": "Dead Man's Switch Part Three",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37529",
                                    "name": "AGENT X (2002) #4",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37530",
                                    "name": "Dead Man's Switch Part Four",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37531",
                                    "name": "AGENT X (2002) #5",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37532",
                                    "name": "Dead Man's Switch Part Five",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37533",
                                    "name": "AGENT X (2002) #6",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37534",
                                    "name": "Dead Man's Switch Part Six",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37535",
                                    "name": "AGENT X (2002) #7",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/67703",
                                    "name": "AGENT X (2002) #12",
                                    "type": "cover"
                                }
                            ],
                            "returned": 20
                        },
                        "events": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/events",
                            "items": [],
                            "returned": 0
                        },
                        "urls": [
                            {
                                "type": "detail",
                                "url": "http://marvel.com/characters/101/agent_x?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            },
                            {
                                "type": "wiki",
                                "url": "http://marvel.com/universe/Agent_X_(Nijo)?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            },
                            {
                                "type": "comiclink",
                                "url": "http://marvel.com/comics/characters/1011031/agent_x_nijo?utm_campaign=apiRef&utm_source=fa3d1ecfc313657edd64bd5eeb726f6c"
                            }
                        ]
                    }
                ]
            }
        },
        filteredCharacters: null
    }

    fetchData = () => {
        api.get("/characters", {
            params: {
                apikey: this.state.apikey,
                ts: this.state.ts,
                hash: this.state.hash,
                offset: ((this.state.page - 1) * this.state.limit),
                limit: this.state.limit,
                name: this.state.querySearch
            }
        }).then(res => {
            this.setState({ data: res.data })
        });
    }

    handleSearch = (query) => {

        let filteredCharacters = null;

        if (query) {
            const formatQuery = query.toLowerCase();
            filteredCharacters = this.state.data.data.results
                .filter(result => result.name
                    .toLowerCase()
                    .includes(formatQuery));
        } else {
            filteredCharacters = this.state.data.data.results;
        }

        this.setState({ filteredCharacters });
    }

    componentDidMount = () => {
        // this.fetchData();
        this.handleSearch();
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Search filterCharacters={this.handleSearch} />
                <ResultsList {...this.state.filteredCharacters} />
            </View>
        );
    }
}
