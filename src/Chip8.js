import { Disassembler } from './Disassembler';
import { CHAR_SET } from './constants/charsetConstants';
import { CHAR_SET_ADDRESS, LOAD_PROGRAM_ADDRESS, MEMORY_SIZE } from './constants/memoryConstants';
import { TIMER_60_HZ } from './constants/registerConstants';
import { Display } from './Display'
import { Keyboard } from './Keyboard';
import { Memory } from './Memory';
import { Registers } from './Registers';
import { SoundCard } from './SoundCard';

export class Chip8 {
    constructor(romBuffer){
        console.log('Create a new Chip-8');
        this.memory = new Memory();
        this.registers = new Registers();
        this.loadCharSet();
        this.loadRom(romBuffer);
        this.keyboard = new Keyboard();
        this.soundCard = new SoundCard();
        this.disassembler = new Disassembler();
        this.display = new Display(this.memory);

    }
    sleep(ms = TIMER_60_HZ){
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    loadCharSet(){
        this.memory.memory.set(CHAR_SET, CHAR_SET_ADDRESS);
    }
    loadRom(romBuffer){
        console.assert(romBuffer.length + LOAD_PROGRAM_ADDRESS <= MEMORY_SIZE, 'This rom is too large.');
        this.memory.memory.set(romBuffer, LOAD_PROGRAM_ADDRESS);
        this.registers.PC = LOAD_PROGRAM_ADDRESS
    }
}