import { Chip8 } from './Chip8';

async function runChip8(){
    const rom = await fetch('./roms/test_opcode.ch8');
    const arrayBuffer = await rom.arrayBuffer();
    const romBuffer = new Uint8Array(arrayBuffer);
    const chip8 = new Chip8(romBuffer);
    console.log(romBuffer);
    console.log(chip8.memory.getMemory(0x200));
    console.log(chip8.memory.getMemory(0x201));
    console.log(chip8.memory.getMemory(0x202));
    console.log(chip8.memory.getMemory(0x203));




    // chip8.registers.ST = 10
    // while(1){
    //     await chip8.sleep(200);
    //     if(chip8.registers.DT > 0){
    //         await chip8.sleep();
    //         chip8.registers.DT--;
    //     }
    //     if (chip8.registers.ST > 0) {
    //         chip8.soundCard.enableSound();
    //         await chip8.sleep();
    //         chip8.registers.ST--;
    //     }
    //     if (chip8.registers.ST === 0){
    //         chip8.soundCard.disableSound()
    //     }
    //     console.log(chip8.registers.ST)
    // }
}

runChip8()