const half_arrow_long = [
    [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const half_arrow_short = [
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const zuo3 = [
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
];
const you4 = [
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
];
const zhuan3 = [
    [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0],
    [0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
    [1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0],
    [1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0],
    [0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
]
const xiang4 = [
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0],
    [0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
];
const qian2 = [
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0],
    [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0],
    [0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0],
    [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0],
    [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0],
    [0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0],
    [0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0],
];
const hou4 = [
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0],
    [0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0],
    [1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],
];
const zhu4 = [
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
const yi4 = [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0],
    [0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0],
    [1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
];
const sha1 = [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
    [0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0],
    [0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0],
    [0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0],
    [0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0],
    [1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0],
    [0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0],
    [0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0],
    [0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0],
    [1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0],
    [0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
];
const che1 = [
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
];

const digits = [
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,1,1,1,0,0,1,1,1,0],
        [0,1,1,0,0,0,0,1,1,0],
        [1,1,1,0,0,0,0,1,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,1,0,0,0,0,1,1,1],
        [0,1,1,0,0,0,0,1,1,0],
        [0,1,1,1,0,0,1,1,1,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ], //0
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,0],
        [0,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ], //1
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,0,0,0],
        [0,1,1,1,1,1,1,1,1,0],
        [0,1,1,0,0,0,0,1,1,0],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0],
        [0,1,1,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,0],
    ], //2
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,1,0,0,0,0,1,1,1],
        [0,1,1,1,1,1,1,1,1,0],
        [0,0,0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ], //3
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,1,1,1,0,0],
        [0,0,0,0,0,1,1,1,0,0],
        [0,0,0,0,1,1,1,1,0,0],
        [0,0,0,1,1,0,1,1,0,0],
        [0,0,1,1,0,0,1,1,0,0],
        [0,0,1,1,0,0,1,1,0,0],
        [0,1,1,0,0,0,1,1,0,0],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ], //4
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1],
        [0,1,1,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,0,0,0,0],
        [1,1,0,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,1,1,1,0],
        [1,1,1,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,1,1,0],
        [0,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ], //5
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,0,0],
        [0,0,1,1,1,0,0,0,0,0],
        [0,1,1,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,0,0,0,0],
        [1,1,0,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,1,1,1,0],
        [1,1,1,0,0,0,0,1,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,1,0,0,0,0,1,1,1],
        [0,1,1,1,1,1,1,1,1,0],
        [0,0,0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ], //6
    [
        [0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0],
        [0,0,0,1,1,0,0,0,0,0],
        [0,0,0,1,1,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ], //7
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,1,0],
        [1,1,1,0,0,0,0,1,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [0,1,1,0,0,0,0,1,1,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,1,1,0,0,0,0,1,1,0],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,1,0,0,0,0,1,1,1],
        [0,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ], //8
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,0,0,0],
        [0,1,1,1,1,1,1,1,1,0],
        [1,1,1,0,0,0,0,1,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,1,1],
        [1,1,1,0,0,0,0,1,1,1],
        [0,1,1,1,1,1,1,1,1,1],
        [0,0,0,1,1,1,1,0,1,1],
        [0,0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,1,1,1,0,0],
        [0,0,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ], //9
];

// zuo3 + zhuan3
var zuo3zhuan3 = [];
// var zuo3zhuan3Compact = [];
for(var i = 0; i < 16; i++) {
    var zuo3zhuan3Line = [];
    zuo3zhuan3Line = zuo3zhuan3Line.concat(zuo3[i]);
    // zuo3zhuan3Line = zuo3zhuan3Line.concat(0);
    zuo3zhuan3Line = zuo3zhuan3Line.concat(zhuan3[i]);
    zuo3zhuan3.push(zuo3zhuan3Line);
    // var zuo3zhuan3LineCompact = []
    // zuo3zhuan3LineCompact = zuo3zhuan3LineCompact.concat(zuo3[i]);
    // zuo3zhuan3LineCompact = zuo3zhuan3LineCompact.concat(zhuan3[i]);
    // zuo3zhuan3Compact.push(zuo3zhuan3LineCompact);
}

// you4 + zhuan3
var you4zhuan3 = [];
// var you4zhuan3Compact = [];
for(var i = 0; i < 16; i++) {
    var you4zhuan3Line = [];
    you4zhuan3Line = you4zhuan3Line.concat(you4[i]);
    // you4zhuan3Line = you4zhuan3Line.concat(0);
    you4zhuan3Line = you4zhuan3Line.concat(zhuan3[i]);
    you4zhuan3.push(you4zhuan3Line);
    // var you4zhuan3LineCompact = [];
    // you4zhuan3LineCompact = you4zhuan3LineCompact.concat(you4[i]);
    // you4zhuan3LineCompact = you4zhuan3LineCompact.concat(zhuan3[i]);
    // you4zhuan3Compact.push(you4zhuan3LineCompact);
}

// zhu4 + yi4
var zhu4yi4 = [];
// var zhu4yi4Compact = [];
for(var i = 0; i < 16; i++) {
    var zhu4yi4Line = [];
    zhu4yi4Line = zhu4yi4Line.concat(zhu4[i]);
    // zhu4yi4Line = zhu4yi4Line.concat(0);
    zhu4yi4Line = zhu4yi4Line.concat(yi4[i]);
    zhu4yi4.push(zhu4yi4Line);
    // var zhu4yi4LineCompact = [];
    // zhu4yi4LineCompact = zhu4yi4LineCompact.concat(zhu4[i]);
    // zhu4yi4LineCompact = zhu4yi4LineCompact.concat(yi4[i]);
    // zhu4yi4Compact.push(zhu4yi4LineCompact);
}

// sha1 + che1
var sha1che1 = [];
// var sha1che1Compact = [];
for(var i = 0; i < 16; i++) {
    var sha1che1Line = [];
    sha1che1Line = sha1che1Line.concat(sha1[i]);
    // sha1che1Line = sha1che1Line.concat(0);
    sha1che1Line = sha1che1Line.concat(che1[i]);
    sha1che1.push(sha1che1Line);
    // var sha1che1LineCompact = [];
    // sha1che1LineCompact = sha1che1LineCompact.concat(sha1[i]);
    // sha1che1LineCompact = sha1che1LineCompact.concat(che1[i]);
    // sha1che1Compact.push(sha1che1LineCompact);
}



var timeReload = 180;
// timeRefresh of Bus is 400 
var timeRefresh = 400;
var bitFixed = 3;
setTimeout(function(){location.reload()}, timeReload * 1000);
console.log("The page will refresh " + Math.ceil(timeReload * (1000 / timeRefresh)) + " times and will reload in " + timeReload + "s.");


var tail_v2Number = [];
for(var i = 0; i < 16; i++) {
    var tail_v2NumberLine = [];
    for(var j = 0; j < 32; j++) {
        tail_v2NumberLine = tail_v2NumberLine.concat(0);
    }
    tail_v2Number.push(tail_v2NumberLine);
}

var ifShow = 0, time = 0;

if(sessionStorage.ifLeft == undefined) {
    sessionStorage.ifLeft = 0;
}
var ifLeft = sessionStorage.ifLeft;
if(sessionStorage.ifRight == undefined) {
    sessionStorage.ifRight = 0;
}
var ifRight = sessionStorage.ifRight;
if(sessionStorage.ifForward == undefined) {
    sessionStorage.ifForward = 0;
}
var ifForward = sessionStorage.ifForward;
if(sessionStorage.ifBackward == undefined) {
    sessionStorage.ifBackward = 0;
}
var ifBackward = sessionStorage.ifBackward;
if(sessionStorage.ifTurnLeft == undefined) {
    sessionStorage.ifTurnLeft = 0;
}
var ifTurnLeft = sessionStorage.ifTurnLeft;
if(sessionStorage.ifTurnRight == undefined) {
    sessionStorage.ifTurnRight = 0;
}
var ifTurnRight = sessionStorage.ifTurnRight;
if(sessionStorage.ifMoveForward == undefined) {
    sessionStorage.ifMoveForward = 0;
}
var ifMoveForward = sessionStorage.ifMoveForward;
if(sessionStorage.ifMoveBackward == undefined) {
    sessionStorage.ifMoveBackward = 0;
}
var ifMoveBackward = sessionStorage.ifMoveBackward;

function turnShow() {
    ifLeft = sessionStorage.ifLeft;
    ifRight = sessionStorage.ifRight;
    ifForward = sessionStorage.ifForward;
    ifBackward = sessionStorage.ifBackward;
    ifTurnLeft = sessionStorage.ifTurnLeft;
    ifTurnRight = sessionStorage.ifTurnRight;
    ifMoveForward = sessionStorage.ifMoveForward;
    ifMoveBackward = sessionStorage.ifMoveBackward;
    // ifShow = 0;
}
function turnHide() {
    新刹车隐藏左右上下箭头 || 旧刹车隐藏左右上下箭头
    if((ifAttention == 1 && ((ifLeft == 1 || ifRight == 1) || (ifForward == 1 || ifBackward == 1))) || (ifBrakeCenter == 1 && ((ifLeft == 1 || ifRight == 1) || (ifForward == 1 || ifBackward == 1)))) {
        ifLeft = 0;
        ifRight = 0;
        ifForward = 0;
        ifBackward = 0;
    } else {
        ifShow = 0;
    }

    // ifShow = 0;
    
    ifTurnLeft = 0;
    ifTurnRight = 0;
    ifMoveForward = 0;
    ifMoveBackward = 0;
}

var ifAttention = 0;
var ifBrakeRight = 0;
var ifBrakeCenter = 0;
document.getElementById("brakeBut").onmousedown = function () {
    ifAttention = 1;
    ifBrakeRight = 1;
    // turnHide();
};
document.getElementById("brakeBut").onmouseup = function () {
    ifAttention = 0;
    ifBrakeRight = 0;
    // turnShow();
};
document.getElementById("brakeBut").onmouseout = function () {
    ifAttention = 0;
    ifBrakeRight = 0;
    // turnShow();
};
document.getElementById("brakeOldBut").onmousedown = function () {
    ifBrakeCenter = 1;
    // turnHide();
};
document.getElementById("brakeOldBut").onmouseup = function () {
    ifBrakeCenter = 0;
    // turnShow();
};
document.getElementById("brakeOldBut").onmouseout = function () {
    ifBrakeCenter = 0;
    // turnShow();
};


function printTail() {
    if(ifShow == 1) {
        ifShow = 0;
        console.log(time.toFixed(bitFixed), ifShow);
    } else {
        ifShow = 1;
        console.log(time.toFixed(bitFixed), ifShow, Number(ifLeft), Number(ifRight), Number(ifForward), Number(ifBackward), Number(ifTurnLeft), Number(ifTurnRight), Number(ifMoveForward), Number(ifMoveBackward), Number(ifBrakeCenter), Number(ifAttention), Number(ifBrakeRight));
    }
    
    var tailHTML = "";
    // 每行
    for(var i = 0; i < 16; i++) {
        var tailHTMLLine = "";
        // 每列
        for(var j = 0; j < 72; j++) {
            if(j >=0 && j < 24) {
                if(ifLeft == 1 && i >= 2 && i < 8 && half_arrow_long[i - 2][j] == 1 && ifShow == 1 && ifAttention != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifLeft == 1 && i >= 8 && i < 14 && half_arrow_long[15 - i - 2][j] == 1 && ifShow == 1 && ifAttention != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifTurnRight == 1 && you4zhuan3[i][j] == 1 && ifAttention != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifMoveForward == 1 && j >= 8 && xiang4[i][j - 8] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifMoveBackward == 1 && j >= 8 && xiang4[i][j - 8] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifAttention == 1 && zhu4yi4[i][j] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifBrakeCenter == 1 && j >= 20 && sha1che1[i][j - 20] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else {
                    tailHTMLLine = tailHTMLLine + "<div class='off-yellow'></div>";
                }
            } else if(j >= 24 && j < 48) {
                if(ifLeft == 1 && i >= 2 && i < 8 && j < 28 && half_arrow_long[i - 2][j] == 1 && ifShow == 1 && ifAttention != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifLeft == 1 && i >= 8 && i < 14 && j < 28 && half_arrow_long[15 - i - 2][j] == 1 && ifShow == 1 && ifAttention != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifRight == 1 && i >= 2 && i < 8 && j >= 44 && half_arrow_long[i - 2][71 - j] == 1 && ifShow == 1 && ifBrakeRight != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifRight == 1 && i >= 8 && i < 14 && j >= 44 && half_arrow_long[15 - i - 2][71 - j] == 1 && ifShow == 1 && ifBrakeRight != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifTurnLeft == 1 && j >= 40 && zuo3zhuan3[i][j - 40] == 1 && ifBrakeRight != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifTurnRight == 1 && j < 32 && you4zhuan3[i][j] == 1 && ifAttention != 1 && ifBrakeCenter != 1){
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifForward == 1 && i >= 1 && i < 15 && j >= 30 && j < 36 && half_arrow_short[j - 30][i - 1] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifForward == 1 && i >= 1 && i < 15 && j >= 36 && j < 42 && half_arrow_short[41 - j][i - 1] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifBackward == 1 && i >= 1 && i < 15 && j >= 30 && j < 36 &&  half_arrow_short[j - 30][15 - i - 1] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifBackward == 1 && i >= 1 && i < 15 && j >= 36 && j < 42 &&  half_arrow_short[41 - j][15 - i - 1] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifAttention == 1 && j < 32 && zhu4yi4[i][j] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifBrakeRight == 1 && j >= 40 && sha1che1[i][j - 40] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifBrakeCenter == 1 && sha1che1[i][j - 20] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else {
                    tailHTMLLine = tailHTMLLine + "<div class='off-red'></div>";
                }
            } else if(j >= 48 && j < 72) {
                if(ifRight == 1 && i >= 2 && i < 8 && half_arrow_long[i - 2][71 - j] == 1 && ifShow == 1 && ifBrakeRight != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifRight == 1 && i >= 8 && i < 14 && half_arrow_long[15 - i - 2][71 - j] == 1 && ifShow == 1 && ifBrakeRight != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifTurnLeft == 1 && zuo3zhuan3[i][j - 40] == 1 && ifBrakeRight != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifMoveForward == 1 && j < 64 && qian2[i][j - 48] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifMoveBackward == 1 && j < 64 && hou4[i][j - 48] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifBrakeRight == 1 && sha1che1[i][j - 40] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifBrakeCenter == 1 && j < 51 && sha1che1[i][j - 21] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else {
                    tailHTMLLine = tailHTMLLine + "<div class='off-yellow'></div>";
                }
            }
        }
        tailHTML = tailHTML + "<div class='line'>" + tailHTMLLine + "</div>";
    }
    document.getElementById("tailOut").innerHTML = tailHTML;

    var tailHTML_v2 = "";
    // 每行
    for(var i = 0; i < 16; i++) {
        var tailHTMLLine_v2 = "";
        // 每列
        for(var j = 0; j < 96; j++) {
            if(j >=0 && j < 32) {
                if(ifLeft == 1 && i >= 2 && i < 8 && j >= 2 && j < 30 &&half_arrow_long[i - 2][j - 2] == 1 && ifShow == 1 && ifAttention != 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifLeft == 1 && i >= 8 && j >= 2 && j < 30 && i < 14 && half_arrow_long[15 - i - 2][j - 2] == 1 && ifShow == 1 && ifAttention != 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifTurnRight == 1 && you4zhuan3[i][j] == 1 && ifAttention != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifMoveForward == 1 && j >= 8 && xiang4[i][j - 8] == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifMoveBackward == 1 && j >= 8 && xiang4[i][j - 8] == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifAttention == 1 && zhu4yi4[i][j] == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='off-yellow'></div>";
                }
            } else if(j >= 32 && j < 64) {
                if(ifForward == 1 && i >= 1 && i < 15 && j >= 30 && j < 36 && half_arrow_short[j - 30][i - 1] == 1 && ifShow == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-red'></div>";
                } else if(ifForward == 1 && i >= 1 && i < 15 && j >= 36 && j < 42 && half_arrow_short[41 - j][i - 1] == 1 && ifShow == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-red'></div>";
                } else if(ifBackward == 1 && i >= 1 && i < 15 && j >= 30 && j < 36 &&  half_arrow_short[j - 30][15 - i - 1] == 1 && ifShow == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-red'></div>";
                } else if(ifBackward == 1 && i >= 1 && i < 15 && j >= 36 && j < 42 &&  half_arrow_short[41 - j][15 - i - 1] == 1 && ifShow == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-red'></div>";
                } else if(ifBrakeCenter == 1 && sha1che1[i][j - 32] == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-red'></div>";
                } else if (tail_v2Number[i][j - 32] == 1 && ifBrakeCenter != 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-red'></div>";
                } else {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='off-red'></div>";
                }
            } else if(j >= 64 && j < 96) {
                if(ifRight == 1 && ifShow == 1 && i >= 2 && i < 8 && j >= 66 && j < 94 && half_arrow_long[i - 2][93 - j] == 1 && ifBrakeRight != 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifRight == 1 && ifShow == 1 && i >= 8 && i < 14 && j >= 66 && j < 94 && half_arrow_long[15 - i - 2][93 - j] == 1 && ifBrakeRight != 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifTurnLeft == 1 && zuo3zhuan3[i][j - 64] == 1 && ifBrakeRight != 1 && ifBrakeCenter != 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifMoveForward == 1 && j < 64 && qian2[i][j - 48] == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifMoveBackward == 1 && j < 64 && hou4[i][j - 48] == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else if(ifBrakeRight == 1 && sha1che1[i][j - 64] == 1) {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='on-yellow'></div>";
                } else {
                    tailHTMLLine_v2 = tailHTMLLine_v2 + "<div class='off-yellow'></div>";
                }
            }
        }
        tailHTML_v2 = tailHTML_v2 + "<div class='line'>" + tailHTMLLine_v2 + "</div>";
    }
    document.getElementById("tailOut_v2").innerHTML = tailHTML_v2;

    time = time + (timeRefresh / 1000);
}

for(var x = 0; x < timeReload * (1000 / timeRefresh); x++) {
    setTimeout(printTail, x * timeRefresh);
    // console.log("Registering: Run printTail() at " + (x * 0.5).toFixed(bitFixed) + "s.");
}

function setTurn(left, right, forward, backward, turnLeft, turnRight, moveForward, moveBackward) {
    if(left == 1) {
        ifLeft = 1;
    } else {
        ifLeft = 0;
    }
    sessionStorage.ifLeft = ifLeft;

    if(right == 1) {
        ifRight = 1;
    } else {
        ifRight = 0;
    }
    sessionStorage.ifRight = ifRight;
    
    if(forward == 1) {
        ifForward = 1;
    } else {
        ifForward = 0;
    }
    sessionStorage.ifForward = ifForward;

    if(backward == 1) {
        ifBackward = 1;
    } else {
        ifBackward = 0;
    }
    sessionStorage.ifBackward = ifBackward;

    if(turnLeft == 1) {
        ifTurnLeft = 1;
    } else {
        ifTurnLeft = 0;
    }
    sessionStorage.ifTurnLeft = ifTurnLeft;

    if(turnRight == 1) {
        ifTurnRight = 1;
    } else {
        ifTurnRight = 0;
    }
    sessionStorage.ifTurnRight = ifTurnRight;

    if(moveForward == 1) {
        ifMoveForward = 1;
    } else {
        ifMoveForward = 0;
    }
    sessionStorage.ifMoveForward = ifMoveForward;

    if(moveBackward == 1) {
        ifMoveBackward = 1;
    } else {
        ifMoveBackward = 0;
    }
    sessionStorage.ifMoveBackward = ifMoveBackward;

    // ifShow = 0;
}

var tail_v2Char;

function tail_v2Input() {
    tail_v2Char = document.getElementById("tail_v2Input").value;
    tail_v2Char = tail_v2Char.replace(/[^\d]/g, '');
    document.getElementById("tail_v2Input").value = tail_v2Char;
    sessionStorage.tail_v2Char = tail_v2Char;
    if(tail_v2Char != "") {
        tail_v2Number = [];
        if(tail_v2Char.length == 1) {
            var tail_v2Digit_1 = Number(tail_v2Char.charAt(0));
            for(var i = 0; i < 16; i++) {
                var tail_v2NumberLine = [];
                for(var j = 0; j < 11; j++) {
                    tail_v2NumberLine = tail_v2NumberLine.concat(0);
                }
                tail_v2NumberLine = tail_v2NumberLine.concat(digits[tail_v2Digit_1][i]);
                for(var j = 0; j < 11; j++) {
                    tail_v2NumberLine = tail_v2NumberLine.concat(0);
                }
                tail_v2Number.push(tail_v2NumberLine);
            }
        } else if(tail_v2Char.length == 2) {
            var tail_v2Digit_1 = Number(tail_v2Char.charAt(0));
            var tail_v2Digit_2 = Number(tail_v2Char.charAt(1));
            for(var i = 0; i < 16; i++) {
                var tail_v2NumberLine = [];
                for(var j = 0; j < 3; j++) {
                    tail_v2NumberLine = tail_v2NumberLine.concat(0);
                }
                tail_v2NumberLine = tail_v2NumberLine.concat(digits[tail_v2Digit_1][i]);
                for(var j = 0; j < 6; j++) {
                    tail_v2NumberLine = tail_v2NumberLine.concat(0);
                }
                tail_v2NumberLine = tail_v2NumberLine.concat(digits[tail_v2Digit_2][i]);
                for(var j = 0; j < 3; j++) {
                    tail_v2NumberLine = tail_v2NumberLine.concat(0);
                }
                tail_v2Number.push(tail_v2NumberLine);
            }
        } else if(tail_v2Char.length == 3) {
            var tail_v2Digit_1 = Number(tail_v2Char.charAt(0));
            var tail_v2Digit_2 = Number(tail_v2Char.charAt(1));
            var tail_v2Digit_3 = Number(tail_v2Char.charAt(2));
            for(var i = 0; i < 16; i++) {
                var tail_v2NumberLine = [];
                tail_v2NumberLine = tail_v2NumberLine.concat(digits[tail_v2Digit_1][i]);
                tail_v2NumberLine = tail_v2NumberLine.concat(0);
                tail_v2NumberLine = tail_v2NumberLine.concat(digits[tail_v2Digit_2][i]);
                tail_v2NumberLine = tail_v2NumberLine.concat(0);
                tail_v2NumberLine = tail_v2NumberLine.concat(digits[tail_v2Digit_3][i]);
                tail_v2Number.push(tail_v2NumberLine);
            }
        }
    } else {
        tail_v2Number = [];
        for(var i = 0; i < 16; i++) {
            var tail_v2NumberLine = [];
            for(var j = 0; j < 32; j++) {
                tail_v2NumberLine = tail_v2NumberLine.concat(0);
            }
            tail_v2Number.push(tail_v2NumberLine);
        }
    }
}
function tail_v2Clear() {
    document.getElementById("tail_v2Input").value = "";
    tail_v2Input();
}

if(sessionStorage.tail_v2Char == undefined) {
    sessionStorage.tail_v2Char = "";
}
document.getElementById("tail_v2Input").value = sessionStorage.tail_v2Char;
tail_v2Input();