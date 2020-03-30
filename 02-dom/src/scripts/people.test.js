
test('Does the plumbing work?', () => {
  console.log('hey now from people.test')
});

test('Playing with the DOM', () => {
  const group = document.createElement('div');

  let div, txt;

  div = document.createElement('div');
  txt = document.createTextNode('First');
  div.append(txt);
  group.append(div);

  div = document.createElement('div');
  txt = document.createTextNode('Second');
  div.append(txt);
  group.append(div);

  console.log(group.children.length);
  console.log(group.children[0].textContent);
  console.log(group.children[1].textContent);

});