import { Chip8 } from './Chip8';

const chip8 = new Chip8();
async function runChip8(){
    chip8.display.drawSprite(10,1,0,5)
    chip8.display.drawSprite(10,6,5,5)
    chip8.display.drawSprite(10,11,10,5)
    chip8.display.drawSprite(10,16,15,5)
}

runChip8()