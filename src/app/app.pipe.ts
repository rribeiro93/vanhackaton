import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'AddressFilter'
})
export class AddressFilter implements PipeTransform {

    //Format address
    transform(fullAddress: string) {
        return {
            address: fullAddress.substr(0, fullAddress.lastIndexOf(',')),
            postalCode: fullAddress.substring(fullAddress.lastIndexOf(",") + 2, fullAddress.length)
        };
    }
}