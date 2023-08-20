const burger_icon = document.querySelector('.menu_small_icon')
const mob_menu = document.querySelector('.menu-small')
let is_hide_mob_menu = true

function show_mob_menu() {
  mob_menu.animate( {
    'right': -2100%
  })
  is_hide_mob_menu = false
}

burger_icon.on('click', function () {
  
})