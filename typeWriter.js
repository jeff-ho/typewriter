const sentence = "hello there from lighthouse labs";

const typeWriter = function (sentence) {
  let time = 100;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 50;
  }
};

typeWriter(sentence) 

