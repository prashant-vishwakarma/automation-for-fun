//Part 1: To Enable all Remove Buttons

let btns = document.getElementsByTagName('button')

for(let i = 0; i < btns.length; i++){
  if(btns[i].innerHTML.includes('img sp_lFwffOkkE26_1_5x sx_c5abd7')){
    btns[i].click();
  }
}
// '_54nc' Is the ClassName for Menu Items in @btns children
let list = document.getElementsByClassName('_54nc')
for(let i = 0; i< list.length; i++){
  if(list[i].innerHTML.includes('Remove from Group')){
    list[i].click();
  }
}

//Part 2: To Submit all Confirm Dialog Boxes at Once

let c = document.getElementsByTagName('button')
for(let i = 0; i< c.length; i++)
if(c[i].innerHTML.includes('Confirm'))
c[i].click();
