import { SiteType } from './site-type.enum';

export interface Site {
    id: number;
    name: string;
    siteType: SiteType;

    height?: number;

    description?: string;
}
