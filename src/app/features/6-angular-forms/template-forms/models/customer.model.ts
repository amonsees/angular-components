import { CustomerStatus } from './customer.status.enum';
import { Address } from './address.model';


export interface Customer {
    name: string;
    mainPhone: string;
    status: CustomerStatus;

    billingAddress: Address;
}
