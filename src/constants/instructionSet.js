export const MASK_NNN = {mask: 0x0fff};
export const MASK_X = {mask: 0x0f00, shift: 8};
export const MASK_KK = {mask: 0x00ff};

export const INSTRUCTION_SET = [
    {
        key: 2,
        id: 'CLS',
        name: 'CLS',
        mask: 0xffff,
        pattern: 0x00e0,
        arguments: []

    },
    {
        key: 3,
        id: 'RET',
        name: 'RET',
        mask: 0xffff,
        pattern: 0x00ee,
        arguments: []

    },
    {
        key: 4,
        id: 'JP_ADDR',
        name: 'JP',
        mask: 0xf000,
        pattern: 0x1000,
        arguments: [MASK_NNN]
    },
    {
        key: 5,
        id: 'CALL_ADDR',
        name: 'CALL',
        mask: 0xf000,
        pattern: 0x2000,
        arguments: [MASK_NNN]
    },
    {
        key: 6,
        id: 'SE_VX_NN',
        name: 'SE',
        mask: 0xf000,
        pattern: 0x3000,
        arguments: [MASK_X, MASK_KK]
    },
    // {
    //     key: ,
    //     id: '',
    //     name: '',
    //     mask: 0x,
    //     pattern: 0x
    // },
]