import { mount } from '@vue/test-utils'
import OurInputWrapper from '../OurInputWrapper.vue'

describe('子コンポーネントの中のinputの値を取る', () => {
    it('vm.$childrenで取る', () => {
        const wrapper = mount(OurInputWrapper)
        const child = wrapper.vm.$children[0]
        expect(child.$el.value).toBe('hogehoge')
    })

    it('data-testidで取る', () => {
        const wrapper = mount(OurInputWrapper)
        const child = wrapper.find(`[data-testid="ourInput"]`)
        expect(child.vnode.elm.value).toBe('hogehoge')
    })
})
