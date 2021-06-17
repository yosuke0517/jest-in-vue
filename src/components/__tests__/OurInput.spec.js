import { mount } from '@vue/test-utils'
import OurInput from '../OurInput'

describe('OurInput', () => {
  test('props', () => {
    const wrapper = mount(OurInput, {
      propsData: {
        value: 'test'
      }
    })
    expect(wrapper.vnode.elm.value).toBe('test')
  })
})
