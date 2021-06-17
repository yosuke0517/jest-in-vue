<template>
    <div>
        <div>
            {{ first }}
        </div>
        <div>
            {{ second }}
        </div>
        <div>
            {{ third }}
        </div>
        <button ref="button-rotate" @click="rotate">Rotate</button>
    </div>
</template>

<script>
export default {
    name: 'TripleElements',
    data () {
        return {
            first: 'Alice',
            second: 'Bob',
            third: 'Cyndi'
        }
    },
    methods: {
        rotate () {
            const last = this.third
            this.third = this.second
            this.second = this.first
            this.first = last
        }
    } 
}
</script>