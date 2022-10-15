// Immediatly Invoked Function Expression

((age, height, sex) => {
  // You can set parameters to your IIFE
  const lastname = 'Correia';
  function createName(name) {
    return name + ' ' + lastname;
  }

  function speakName() {
    console.log(createName('Daniel'));
  }

  speakName();
  console.log(age, height, sex);

  // And pass the arguments invoking it
})(18, 1.65, 'M');
