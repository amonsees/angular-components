
export function stringConverter(value: any): string {
    if (value === null || value === undefined || typeof value === 'string') {
        return value;
    }

    return value.toString();
}

export function booleanConverter(value: any): boolean {
    if (value === null || value === undefined || typeof value === 'boolean') {
        return value;
    }

    return value.toString() === 'true';
}


export function floatConverter(value: any, returnNullOnNan: boolean = true): number {
    if (value === null || value === undefined || typeof value === 'boolean') {
        return value;
    }

    const floatValue = parseFloat(value.toString());

    if (isNaN(floatValue) && returnNullOnNan) {
        return null;
    }

    return floatValue;
}


export function intConverter(value: any, returnNullOnNan: boolean = true): number {
    if (value === null || value === undefined || typeof value === 'boolean') {
        return value;
    }

    const intValue = parseInt(value.toString(), 10);

    if (isNaN(intValue) && returnNullOnNan) {
        return null;
    }

    return intValue;
}

