
/**
 * Converts any vaule to a string
 * @param value value
 */
export function stringConverter(value: any): string {
    if (value === null || value === undefined || typeof value === 'string') {
        return value;
    }

    return value.toString();
}

/**
 * Converts any vaue to a boolean
 * @param value value
 */
export function booleanConverter(value: any): boolean {
    if (value === null || value === undefined || typeof value === 'boolean') {
        return value;
    }

    return value.toString() === 'true';
}

/**
 * Converts any value to a float
 * @param value value
 * @param returnNullOnNan if the number is not invalid, return as null?
 */
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

/**
 * Convert a value to an int
 * @param value value
 * @param returnNullOnNan if the number is not invalid, return as null?
 */
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