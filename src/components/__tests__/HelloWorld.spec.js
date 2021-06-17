import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld'

describe('HelloWorld', () => {
  test('DOMに展開した最上部の<div>にはclass="hello"があるはず', () => {
    const wrapper = mount(HelloWorld)
    const attributes = wrapper.attributes()
    expect(attributes.class).toBe('hello')
  })
  test('<h1>の中にはprops msgが展開されているはず', async () => {
    const wrapper = mount(HelloWorld)
    await wrapper.setProps({ msg: '<われは海の子>' })
    const html = wrapper.html()
    expect(html.includes('&lt;われは海の子&gt;')).toBe(true)
  })
})
