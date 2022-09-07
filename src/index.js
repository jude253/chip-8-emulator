import { Chip8 } from './Chip8';

const chip8 = new Chip8();
async function runChip8(){
    chip8.disassembler.disassemble(0x3f09);
    chip8.disassembler.disassemble(0x1009);


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