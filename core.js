// core.js – LE Stations-System (RAW, gültig)

export const STATION = {
    POS: 6,
    WECHSEL: 9,
    T: 8,
    GO: 8,
    LE: 6,
    Z: 9
};

export const PIPELINE = [
    "POS",
    "WECHSEL",
    "T",
    "GO",
    "LE",
    "Z"
];

export const CACHE = {
    pos: null,
    wechsel: null,
    t: null,
    go: null,
    le: null,
    z: null
};

export const BENCH = {
    POS: [],
    WECHSEL: [],
    T: [],
    Z: []
};
