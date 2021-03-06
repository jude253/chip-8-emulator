import { CHAR_SET } from './constants/charsetConstants';
import { CHAR_SET_ADDRESS } from './constants/memoryConstants';
import { TIMER_60_HZ } from './constants/registerConstants';
import { Display } from './Display'
import { Keyboard } from './Keyboard';
import { Memory } from './Memory';
import { Registers } from './Registers';
import { SoundCard } from './SoundCard';

export class Chip8 {
    constructor(){
        console.log('Create a new Chip-8');
        this.memory = new Memory();
        this.loadCharSet()
        this.registers = new Registers();
        this.keyboard = new Keyboard();
        this.soundCard = new SoundCard();
        this.display = new Display(this.memory);

    }
    sleep(ms = TIMER_60_HZ){
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    loadCharSet(){
        this.memory.memory.set(CHAR_SET, CHAR_SET_ADDRESS);
    }
}