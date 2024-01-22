import 'bootstrap'

import Filter from './filter/Filter'

window.addEventListener('DOMContentLoaded', function () {
  Filter()

  const navigationDropdown = document.querySelectorAll('.nav-item.dropdown')

  navigationDropdown.forEach(function (ele) {
    ele.addEventListener('mouseover', function (e) {
      ele.querySelector('.sub-menu').classList.add('show')
    })

    ele.addEventListener('mouseleave', function (e) {
      ele.querySelector('.sub-menu').classList.remove('show')
    })
  })
})
