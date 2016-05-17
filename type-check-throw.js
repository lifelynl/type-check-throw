'use strict';

import t from 'type-check';

export const VERSION = t.VERSION;

export function typeCheck (type, input, options) {
    if (!t.typeCheck.call(t.typeCheck, type, input, options)) {
        throw new Error(`Failed checking type. Expected "${type}" but got "${typeof input}"`);
    }
};

export const parseType = t.parseType;

export function parsedTypeCheck (parsedType, input, options) {
    if (!t.parsedTypeCheck.call(t.parsedTypeCheck, parsedType, input, options)) {
        throw new Error(`Failed checking type. Expected [parsed type] but got "${typeof input}"`);
    }
};
