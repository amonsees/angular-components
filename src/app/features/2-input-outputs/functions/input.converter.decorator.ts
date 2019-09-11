import { stringConverter, booleanConverter, intConverter } from './input-converters.function';

export function InputConverter(converter?: (value: any) => any) {
    return (target: Object, key: string) => {
        if (converter === undefined) {
            const metadata: any = (<any>Reflect).getMetadata('design:type', target, key);

            if (metadata === undefined || metadata === null) {
                throw new Error('The reflection metadata could not be found.');
            }

            if (metadata.name === 'String') {
                converter = stringConverter;
            } else if (metadata.name === 'Boolean') {
                converter = booleanConverter;
            } else if (metadata.name === 'Number') {
                converter = intConverter;
            } else {
                throw new Error(`There is no converter for the given property type ${metadata.name} '' + metadata.name + ''.`);
            }
        }

        const definition = Object.getOwnPropertyDescriptor(target, key);
        if (definition) {
            Object.defineProperty(target, key, {
                get: definition.get,
                set: newValue => {
                    definition.set(converter(newValue));
                },
                enumerable: true,
                configurable: true
            });
        } else {
            Object.defineProperty(target, key, {
                get: function () {
                    return this['__' + key];
                },
                set: function (newValue) {
                    this['__' + key] = converter(newValue);
                },
                enumerable: true,
                configurable: true
            });
        }
    };
}
