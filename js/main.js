document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body')
  const test_btn =document.querySelector('.header_logo')
  const header_nav_buttons = document.querySelectorAll('.header_nav_buttons')
  const page_not_ready = document.querySelector('.not_ready')
  const page_ready = document.querySelector('.ready')
  const page_add_order = document.querySelector('.add_order')
  const page_progress = document.querySelector('.orders_in_progress')
  const header_nav_elements = document.querySelectorAll('.header_nav_element')
  const order_window = document.querySelector('.order')
  const order_ready_window = document.querySelector('.order_ready')
  const order_progress_window = document.querySelector('.order_progress')
  const order_back_button = document.querySelector('.order_back')
  const order_ready_back_button = document.querySelector('.order_ready_back')
  const order_progress_back_button = document.querySelector('.order_progress_back')
  const order_ready_button = document.querySelector('.order_ready_button')
  const order_ready_give_button = document.querySelector('.order_ready_give')
  const order_progress_ready_button = document.querySelector('.order_progress_ready')
  const add_order_form_button =document.querySelector('.add_order_form_button')
  const add_order_form_checkbox = document.querySelector('.add_order_form_checkbox_wrapper')
  const add_order_form_adress = document.querySelector('.add_order_form_adress')
  const order_delete_button = document.querySelector('.order_delete')
  const order_ready_delete_button = document.querySelector('.order_ready_delete')
  const order_progress_delete_button = document.querySelector('.order_progress_delete')
  const modal_order_delete_accept = document.querySelector('.modal_order_delete_accept')
  const modal_order_delete_cancel = document.querySelector('.modal_order_delete_cancel')
  const modal_order_delete = document.querySelector('.modal_order_delete')
  const modal_protection = document.querySelector('.modal_protection')
  const sort_btns = document.querySelectorAll('.sort_btn')
  const modal_sort = document.querySelector('.modal_sort')
  const modal_sort_btns = document.querySelectorAll('.modal_sort_element_btn')
  
  const pages = [page_not_ready, page_add_order, page_progress, page_ready]
  
  let checkbox_add_order = false
  let not_ready_orders
  let page_now = 0
  let order_now = 0
  let orders_not_ready = []
  let orders_ready = []
  let orders_progress_array = []
  // ==========================================================================



















  function open_page_not_ready() {
    orders_not_ready = JSON.parse(localStorage.getItem('orders_not_ready'))
    document.querySelector('.not_ready_orders').innerHTML = ''
    for (let i = 0; i < orders_not_ready.length; i++) {
      let li = document.createElement('li')
      li.classList.add('not_ready_order')
      let delivery_sity_words = orders_not_ready[i].delivery.split(' ');
      let delivery_sity = delivery_sity_words[0];
      let time_var = orders_not_ready[i].time.split('-')
      let time_var_2 = time_var[2].split('T')
      let time = `${time_var_2[0]}.${time_var[1]} ${time_var_2[1]}`
      li.innerHTML = `
        <div class="not_ready_order_wrapper">
          <p class="not_ready_order_time text">Время: ${time}</p>
          <p class="not_ready_order_price text">Сумма заказа: ${orders_not_ready[i].price} руб</p>
        </div>
        <div class="not_ready_order_wrapper">
          <p class="not_ready_order_client text">Клиент: ${orders_not_ready[i].client}</p>
          <p class="not_ready_order_delivery text">Доставка: ${delivery_sity}</p>
        </div>
      `
      document.querySelector('.not_ready_orders').append(li)
    }

    not_ready_orders = document.querySelectorAll('.not_ready_order')
    for (let i = 0; i < not_ready_orders.length; i++) {
      const order = not_ready_orders[i];
      order.addEventListener('click', function () {
        order_now = i
        page_not_ready.classList.add('window--close')
        order_window.classList.remove('window--close')
        let time_var = orders_not_ready[i].time.split('-')
        let time_var_2 = time_var[2].split('T')
        let time = `${time_var_2[0]}.${time_var[1]} ${time_var_2[1]}`
        order_window.querySelector('.order_wrapper').innerHTML = `
        <p class="order_client text">Клиент: ${orders_not_ready[i].client}</p>
        <p class="order_number text">Номер заказа: ${orders_not_ready[i].number}</p>
        <p class="order_price text">Сумма заказа: ${orders_not_ready[i].price} руб</p>
        <p class="order_time text">Время: ${time}</p>
        <p class="order_delivery text">Доставка: ${orders_not_ready[i].delivery}</p>
        <p class="order_text text">Заказ: ${orders_not_ready[i].order}</p>
        <p class="order_connetion text">Связь с клиентом: ${orders_not_ready[i].connection}</p>
        `
      })
    }

  }
  open_page_not_ready()

  function open_page_ready() {
    document.querySelector('.ready_orders').innerHTML = ''
    orders_ready = JSON.parse(localStorage.getItem('orders_ready'))
    for (let i = 0; i < orders_ready.length; i++) {
      let li = document.createElement('li')
      li.classList.add('ready_order')
      let time_var = orders_ready[i].time.split('-')
      let time_var_2 = time_var[2].split('T')
      let time = `${time_var_2[0]}.${time_var[1]} ${time_var_2[1]}`
      let delivery = orders_ready[i].delivery.split(' ')[0]
      li.innerHTML = `
        <div class="ready_order_wrapper">
          <p class="ready_order_time text">Время: ${time}</p>
          <p class="ready_order_price text">Сумма заказа: ${orders_ready[i].price} руб</p>
        </div>
        <div class="ready_order_wrapper">
          <p class="ready_order_client text">Клиент: ${orders_ready[i].client}</p>
          <p class="ready_order_delivery text">Доставка: ${delivery}</p>
        </div>
      `
      document.querySelector('.ready_orders').append(li)
    }
    ready_orders = document.querySelectorAll('.ready_order')
    for (let i = 0; i < ready_orders.length; i++) {
      const order = ready_orders[i];
      order.addEventListener('click', function () {
        order_now = i
        page_ready.classList.add('window--close')
        order_ready_window.classList.remove('window--close')
        let time_var = orders_ready[i].time.split('-')
        let time_var_2 = time_var[2].split('T')
        let time = `${time_var_2[0]}.${time_var[1]} ${time_var_2[1]}`
        order_ready_window.querySelector('.order_ready_wrapper').innerHTML = `
        <p class="order_client text">Клиент: ${orders_ready[i].client}</p>
        <p class="order_number text">Номер заказа: ${orders_ready[i].number}</p>
        <p class="order_price text">Сумма заказа: ${orders_ready[i].price} руб</p>
        <p class="order_time text">Время: ${time}</p>
        <p class="order_delivery text">Доставка: ${orders_ready[i].delivery}</p>
        <p class="order_text text">Заказ: ${orders_ready[i].order}</p>
        <p class="order_connetion text">Связь с клиентом: ${orders_ready[i].connection}</p>
        `
      })
    }
  }

  function open_page_progress() {
    document.querySelector('.progress_orders').innerHTML = ''
    orders_progress_array = JSON.parse(localStorage.getItem('orders_progress_array'))
    for (let i = 0; i < orders_progress_array.length; i++) {
      let li = document.createElement('li')
      li.classList.add('progress_order')
      let delivery_sity_words = orders_progress_array[i].delivery.split(' ');
      let delivery_sity = delivery_sity_words[0];
      let time_var = orders_progress_array[i].time.split('-')
      let time_var_2 = time_var[2].split('T')
      let time = `${time_var_2[0]}.${time_var[1]} ${time_var_2[1]}`
      li.innerHTML = `
        <div class="not_ready_order_wrapper">
          <p class="not_ready_order_time text">Время: ${time}</p>
          <p class="not_ready_order_price text">Сумма заказа: ${orders_progress_array[i].price} руб</p>
        </div>
        <div class="not_ready_order_wrapper">
          <p class="not_ready_order_client text">Клиент: ${orders_progress_array[i].client}</p>
          <p class="not_ready_order_delivery text">Доставка: ${delivery_sity}</p>
        </div>
      `
      document.querySelector('.progress_orders').append(li)
    }
    progress_orders = document.querySelectorAll('.progress_order')
    for (let i = 0; i < progress_orders.length; i++) {
      const order = progress_orders[i];
      order.addEventListener('click', function () {
        order_now = i
        page_progress.classList.add('window--close')
        order_progress_window.classList.remove('window--close')
        let time_var = orders_progress_array[i].time.split('-')
        let time_var_2 = time_var[2].split('T')
        let time = `${time_var_2[0]}.${time_var[1]} ${time_var_2[1]}`
        order_progress_window.querySelector('.order_progress_wrapper').innerHTML = `
        <p class="order_client text">Клиент: ${orders_progress_array[i].client}</p>
        <p class="order_number text">Номер заказа: ${orders_progress_array[i].number}</p>
        <p class="order_price text">Сумма заказа: ${orders_progress_array[i].price} руб</p>
        <p class="order_time text">Время: ${time}</p>
        <p class="order_delivery text">Доставка: ${orders_progress_array[i].delivery}</p>
        <p class="order_text text">Заказ: ${orders_progress_array[i].order}</p>
        <p class="order_connetion text">Связь с клиентом: ${orders_progress_array[i].connection}</p>
        `
      })
    }
  }

  function delete_accept(i, window, page, array) {
      array.splice(i, 1)
      localStorage.setItem(`${array}`, JSON.stringify(array))
      modal_order_delete.classList.add('window--close')
      modal_protection.classList.add('window--close')
      window.classList.add('window--close')
      page.classList.remove('window--close')
      if (page != page_ready) {
        if (page != page_not_ready) {
          if (page == page_progress) {
            open_page_progress()
          }
        } else {open_page_not_ready()}
      } else {open_page_ready()}

  }

  function sort(parameter, direction, array) {
    let length = array.length
    while(length != 0) {
      let max_index = 0
      for (let i = 1; i < length; i++) {
        if (parameter != 'price') {
          if (parameter != 'time') {
            if (parameter != 'client') {
              if (parameter != 'delivery suxodol') {
                if (parameter != 'delivery sergievsk') {
                  if (parameter != 'delivery kalinovka') {
                    if (parameter != 'delivery surgut') {
                      if (parameter != 'delivery sernovodsk') {
                        if (parameter != 'delivery not') {
                          print('ERROR')
                        } else {
                          if (array[i].delivery.split(' ')[0] == 'Нет' && array[i -1].delivery.split(' ')[0] != 'Нет') {
                            let buffer = array[i - 1]
                            array[i - 1] = array[i]
                            array[i] = buffer
                            max_index = i
                          }
                        }
                      } else {
                        if (array[i].delivery.split(' ')[0] == 'Серноводск' && array[i -1].delivery.split(' ')[0] != 'Серноводск') {
                          let buffer = array[i - 1]
                          array[i - 1] = array[i]
                          array[i] = buffer
                          max_index = i
                        }
                      }
                    } else {
                      if (array[i].delivery.split(' ')[0] == 'Сургут' && array[i -1].delivery.split(' ')[0] != 'Сургут') {
                        let buffer = array[i - 1]
                        array[i - 1] = array[i]
                        array[i] = buffer
                        max_index = i
                      }
                    }
                  } else {
                    if (array[i].delivery.split(' ')[0] == 'Калиновка' && array[i -1].delivery.split(' ')[0] != 'Калиновка') {
                      let buffer = array[i - 1]
                      array[i - 1] = array[i]
                      array[i] = buffer
                      max_index = i
                    }
                  }
                } else {
                  if (array[i].delivery.split(' ')[0] == 'Сергиевск' && array[i -1].delivery.split(' ')[0] != 'Сергиевск') {
                    let buffer = array[i - 1]
                    array[i - 1] = array[i]
                    array[i] = buffer
                    max_index = i
                  }
                }
              } else {
                if (array[i].delivery.split(' ')[0] == 'Суходол' && array[i -1].delivery.split(' ')[0] != 'Суходол') {
                  let buffer = array[i - 1]
                  array[i - 1] = array[i]
                  array[i] = buffer
                  max_index = i
                }
              }
            } else {
              if (array[i - 1].client > array[i].client && direction == 1 || array[i - 1].client < array[i].client && direction == 0) {
                let buffer = array[i - 1]
                array[i - 1] = array[i]
                array[i] = buffer
                max_index = i
              }
            }
          } else {
            if (array[i - 1].time > array[i].time && direction == 1 || array[i - 1].time < array[i].time && direction == 0) {
              let buffer = array[i - 1]
              array[i - 1] = array[i]
              array[i] = buffer
              max_index = i
            }
          }
        } else {
          if (array[i - 1].price > array[i].price && direction == 1 || array[i - 1].price < array[i].price && direction == 0) {
            let buffer = array[i - 1]
            array[i - 1] = array[i]
            array[i] = buffer
            max_index = i
          }
        }
      }
      length = max_index
    }
    orders_not_ready = JSON.parse(localStorage.getItem('orders_not_ready'))
    if (array == orders_not_ready) {
      open_page_not_ready()
    } else {
      orders_ready = JSON.parse(localStorage.getItem('orders_ready'))
      if (array == orders_ready) {
        open_page_ready()
      }
    }
  }

  // ============================================================================
  for (let i = 0; i < modal_sort_btns.length; i++) {
    let page
    if (page_not_ready.classList.contains('window--close')) {
      if (!page_ready.classList.contains('window--close')) {
      orders_not_ready = JSON.parse(localStorage.getItem('orders_not_ready'))
        page = orders_not_ready
      }
    } else {
      orders_ready = JSON.parse(localStorage.getItem('orders_ready'))
      page = orders_ready
    }
    const btn = modal_sort_btns[i];
    btn.addEventListener('click', function () {
      if (btn.innerHTML != 'Сумма заказа(возр.)') {
        if (btn.innerHTML != 'Сумма заказа(убыв.)') {
          if (btn.innerHTML != 'Дата(возр.)') {
            if (btn.innerHTML != 'Дата(убыв.)') {
              if (btn.innerHTML != 'ФИО(возр.)') {
                if (btn.innerHTML != 'ФИО(убыв.)') {
                  if (btn.innerHTML != 'Доставка: Нет') {
                    if (btn.innerHTML != 'Доставка: Суходол') {
                      if (btn.innerHTML != 'Доставка: Сергиевск') {
                        if (btn.innerHTML != 'Доставка: Калиновка') {
                          if (btn.innerHTML != 'Доставка: Сургут') {
                            if (btn.innerHTML == 'Доставка: Серноводск') {
                              sort('delivery sernovodsk', 1, page)
                            }
                          } else {
                            sort('delivery surgut', 1, page)
                          }
                        } else {
                          sort('delivery kalinovka', 1, page)
                        }
                      } else {
                        sort('delivery sergievsk', 1, page)
                      }
                    } else {
                      sort('delivery suxodol', 1, page)
                    }
                  } else {
                    sort('delivery not', 1, page)
                  }
                } else {
                  sort('client', 0, page)
                }
              } else {
                sort('client', 1, page)
              }
            } else {
              sort('time', 0, page)
            }
          } else {
            sort('time', 1, page)
          }
        } else {
          sort('price', 0, page)
        }
      } else {
        sort('price', 1, page)
      }
      modal_sort.classList.add('window--close')
      modal_protection.classList.add('window--close')
      body.style.overflow = 'auto'
    })
  }

  for (let i = 0; i < sort_btns.length; i++) {
    sort_btns[i].addEventListener('click', function () {
      modal_sort.classList.remove('window--close')
      modal_protection.classList.remove('window--close')
      body.style.overflow = 'hidden'
    })
  }

  for (let i = 0; i < header_nav_buttons.length; i++) {
    const button = header_nav_buttons[i];
    button.addEventListener('click', function () {
      if (i != page_now) {
        pages[i].classList.remove('window--close')
        pages[page_now].classList.add('window--close')
        header_nav_elements[i].classList.add('header_nav_element--active')
        header_nav_elements[page_now].classList.remove('header_nav_element--active')
        if (!order_window.classList.contains('window--close')) {
          order_window.classList.add('window--close')
        }
        if (i == 3) {
          open_page_ready()
        }
        if (i == 2) {
          open_page_progress()
        }
        if (i == 0) {
          open_page_not_ready()
        }
        page_now = i
      }
    })
  }

  modal_order_delete_accept.addEventListener('click', function () {
    if (order_window.classList.contains('window--close')) {
      if (order_ready_window.classList.contains('window--close')) {
        if (!order_progress_window.classList.contains('window--close')) {
          orders_progress_array = JSON.parse(localStorage.getItem('orders_progress_array'))
          delete_accept(order_now, order_progress_window, page_progress, orders_progress_array)
        }
      } else {
        orders_ready = JSON.parse(localStorage.getItem('orders_ready'))
        delete_accept(order_now, order_ready_window, page_ready, orders_ready)
      }
    } else {
      orders_not_ready = JSON.parse(localStorage.getItem('orders_not_ready'))
      delete_accept(order_now, order_window, page_not_ready, orders_not_ready)
    }
    
  })
  modal_order_delete_cancel.addEventListener('click', function () {
    modal_order_delete.classList.add('window--close')
    modal_protection.classList.add('window--close')
  })

  order_delete_button.addEventListener('click', function () {
    modal_order_delete.classList.remove('window--close')
    modal_protection.classList.remove('window--close')
    
  })
  order_ready_delete_button.addEventListener('click', function () {
    modal_order_delete.classList.remove('window--close')
    modal_protection.classList.remove('window--close')
    
  })
  order_progress_delete_button.addEventListener('click', function () {
    modal_order_delete.classList.remove('window--close')
    modal_protection.classList.remove('window--close')
    
  })  

  order_back_button.addEventListener('click', function () {
    order_ready_window.classList.add('window--close')
    page_not_ready.classList.remove('window--close')
    open_page_not_ready()
  })
  order_ready_back_button.addEventListener('click', function () {
    order_ready_window.classList.add('window--close')
    page_ready.classList.remove('window--close')
    open_page_ready()
  })
  order_progress_back_button.addEventListener('click', function () {
    order_progress_window.classList.add('window--close')
    page_progress.classList.remove('window--close')
    open_page_progress()
  })

  order_ready_button.addEventListener('click', function () {
    orders_not_ready = JSON.parse(localStorage.getItem('orders_not_ready'))
    order_buffer = orders_not_ready[order_now]
    orders_not_ready.splice(order_now, 1)
    localStorage.setItem('orders_not_ready', JSON.stringify(orders_not_ready))
    orders_progress_array = JSON.parse(localStorage.getItem('orders_progress_array'))
    orders_progress_array.push(order_buffer)
    localStorage.setItem('orders_progress_array', JSON.stringify(orders_progress_array))
    order_window.classList.add('window--close')
    page_not_ready.classList.remove('window--close')
    open_page_not_ready()
  })
  order_ready_give_button.addEventListener('click', function () {
    orders_ready = JSON.parse(localStorage.getItem('orders_ready'))
    orders_ready.splice(order_now, 1)
    localStorage.setItem('orders_ready', JSON.stringify(orders_ready))
    order_ready_window.classList.add('window--close')
    page_ready.classList.remove('window--close')
    open_page_ready()
  })
  order_progress_ready_button.addEventListener('click', function () {
    orders_progress_array = JSON.parse(localStorage.getItem('orders_progress_array'))
    order_buffer = orders_progress_array[order_now]
    orders_progress_array.splice(order_now, 1)
    localStorage.setItem('orders_progress_array', JSON.stringify(orders_progress_array))
    orders_ready = JSON.parse(localStorage.getItem('orders_ready'))
    orders_ready.push(order_buffer)
    localStorage.setItem('orders_ready', JSON.stringify(orders_ready))
    order_progress_window.classList.add('window--close')
    page_progress.classList.remove('window--close')
    open_page_progress()
  })

  add_order_form_checkbox.addEventListener('click', function () {
    add_order_form_adress.classList.toggle('window--close')
    add_order_form_checkbox.classList.toggle('checkbox--active')
    if (checkbox_add_order) {
      checkbox_add_order = false
    } else {
      checkbox_add_order = true
    }
  })

  add_order_form_button.addEventListener('click', function () {
    let client = document.querySelector('.add_order_form_client').value
    let number = document.querySelector('.add_order_form_number').value
    let price = document.querySelector('.add_order_form_price').value
    let time = document.querySelector('.add_order_form_time').value
    let delivery = 'Нет'
    if (checkbox_add_order) {
      delivery = document.querySelector('.add_order_form_adress').value
    }
    let order = document.querySelector('.add_order_form_order').value
    let connection = document.querySelector('.add_order_form_connection').value
    let order__object = {
      client: client,
      number: number,
      price: price,
      time: time,
      delivery: delivery,
      order: order,
      connection: connection
    }
    orders_not_ready = JSON.parse(localStorage.getItem('orders_not_ready'))
    orders_not_ready.push(order__object)
    localStorage.setItem('orders_not_ready', JSON.stringify(orders_not_ready))
    page_add_order.classList.add('window--close')
    page_not_ready.classList.remove('window--close')
    header_nav_elements[0].classList.add('header_nav_element--active')
    header_nav_elements[1].classList.remove('header_nav_element--active')
    page_now = 0
    open_page_not_ready()
  })
})