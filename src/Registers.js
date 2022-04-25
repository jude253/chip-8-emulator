import { LOAD_PROGRAM_ADDRESS, NUMBER_OF_REGISTERS, STACK_DEPTH } from "./constants/registerConstants";

export class Registers{
    constructor(){
        this.V = new Uint8Array(NUMBER_OF_REGISTERS);
        this.I = 0;
        this.delayTimer = 0;
        this.soundTimer = 0;
        this.PC = LOAD_PROGRAM_ADDRESS;
        this.SP = -1;
        this.stack = new Uint16Array(STACK_DEPTH);
        this.reset()
    }
    reset(){
        this.V.fill(0);
        this.I = 0
        this.delayTimer = 0;
        this.soundTimer = 0;
        this.PC = LOAD_PROGRAM_ADDRESS;
        this.SP = -1;
        this.stack.fill(0);
    }

    stackPush(value){
        this.SP++;
        this.assertStackOverflow();
        this.stack[this.SP] = value;
    }

    stackPop(){
        const value = this.stack[this.SP];
        this.SP--;
        this.assertStackUnderflow();
        return value;
    }

    assertStackUnderflow(){
        console.assert(this.SP >= -1, 'Error stack Underflow');
    }

    assertStackOverflow(){
        console.assert(this.SP < STACK_DEPTH, 'Error stack Overflow');
    }
}