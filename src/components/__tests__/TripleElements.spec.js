import { mount } from '@vue/test-utils'
import TripleElements from '../TripleElements'

describe('TripleElements', () => {
  it('rotateする毎に、要素がまわる', async () => {
      const wrapper = mount(TripleElements)
      const buttonRotate = wrapper.findComponent({ ref: 'button-rotate' })
      await buttonRotate.trigger('click')
      expect(wrapper.vm.first).toBe('Cyndi')
      expect(wrapper.vm.second).toBe('Alice')
      expect(wrapper.vm.third).toBe('Bob')
      await buttonRotate.trigger('click')
      expect(wrapper.vm.first).toBe('Bob')
      expect(wrapper.vm.second).toBe('Cyndi')
      expect(wrapper.vm.third).toBe('Alice')
  })
})
