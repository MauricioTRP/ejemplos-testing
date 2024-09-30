// CardComponent.test.js
import { expect, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CardComponent from '@/components/CardComponent.vue'

describe('CardComponent', () => {
  /** código para definir pruebas */
  /** definimos propiedades "dummy" */
  const dummyCardProp = {
    id: '123sds4',
    title: 'Titulo de la Card, desde una propiedad',
    text: 'Texto de la card ...',
    name: 'Juanito',
    enlaces: {
      rrss: 'juanito.tahelao.app'
    }
  }

  /** envoltorio para el componente */
  const wrapper = mount(CardComponent, {
    props: {
      user: dummyCardProp
    }
  })

  /** prueba específica */
  it('Have a card title defined', () => {
    /** Debe cumplir ciertas cosas */
    expect(wrapper.find('h2').text()).toEqual(dummyCardProp.title)
  })

  /** prueba para "cuerpo de la carta" */
  it('El cuerpo de la carta tiene texto definido', () => {
    expect(wrapper.find('.card-text').text()).toEqual(dummyCardProp.text)
  })

  /** Prueba para el texto boton */
  it('Tiene un botón hacia RRSS con el nombre del usuario', () => {
    expect(wrapper.find('button.rrss').text()).toEqual(`RRSS: ${dummyCardProp.name}`)
  })
})
