import { SiteType } from "../models/site-type.enum";
import { Site } from '../models/site.model';

export const chicagoSiteList: Site[] = 
[
    {
        id: 1,
        name: 'Field Museum',
        siteType: SiteType.museum,
        description: 'Natural History Museum'
    },
    {
        id: 2,
        name: 'Art Institute of Chicago',
        siteType: SiteType.museum,
        description: 'One of the oldest art museums in the US'
    },
    {
        id: 3,
        name: 'Museum of Science and Industry',
        siteType: SiteType.museum,
        description: 'Largest science center in the Western Hemisphere'
    },
    {
        id: 4,
        name: 'Willis Tower',
        siteType: SiteType.building,
        height: 1453,
        description: 'Former known as the Sears Tower and tallest building in the world until 1998'
    },
    {
        id: 5,
        name: 'John Hancock Center',
        siteType: SiteType.building,
        height: 1127,
        description: 'Iconic skyscaper on Michigan Avenue'
    },
    {
        id: 6,
        name: 'Wrigley Building',
        siteType: SiteType.building,
        height: 425,
        description: "Chicago's first air-conditioned office building",
    },
    {
        id: 7,
        name: 'Wrigley Field',
        siteType: SiteType.stadium,
        description: 'Iconic ballpark and home of the Chicago Cubs'
    },
    {
        id: 8,
        name: 'Soldier Field',
        siteType: SiteType.stadium,
        description: 'Home of the Chicago Bears'
    },
    {
        id: 9,
        name: 'Comiskey Park',
        siteType: SiteType.stadium,
        description: 'Home of the Chicago Whitesox'
    },
    {
        id: 10,
        name: 'Grant Park',
        siteType: SiteType.park,
        description: 'Beautiful park along Lake Michegan'
    },
];
