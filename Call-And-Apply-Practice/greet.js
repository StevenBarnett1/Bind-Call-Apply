// DO NOT MODIFY `say`
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = {message: 'Hello,'}
heyThereMessage = {message: 'Hey there,'}

say(helloMessage, "John");  // 'Hello, John'
say(heyThereMessage, "Michael");   // 'Hey there, Michael'
