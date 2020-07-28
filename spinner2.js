let spinSequence = ["\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\n"];

for(let i = 0; i < spinSequence.length; i++){
    setTimeout(() => process.stdout.write(spinSequence[i]), 100 + (200*i));
}
