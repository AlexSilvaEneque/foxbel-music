import { defineStore } from 'pinia'
import { createData, selectMusic } from '../transform/createData'

export const useTrackStore = defineStore('track', {
    state: () => ({
        music: [],
        results: [],
        selectSong: [],
        isPlay: false,
        currentSong: '',
        fans: 0,
        isLoading: true
    }),

    actions: {

        setData ( array ) {
            this.music = createData(array)
        },

        setResult ( array ) {
            this.results = array.data.slice(1, 11)
        },
        
        setPlay ( bol ) {
            this.isPlay = bol
        },

        setCurrentSong ( song ) {
            this.currentSong = song
        },

        setSelectSong ( param ) {
            if (!param.id) {
                this.selectSong = { ...param }
            } else {
                this.selectSong = selectMusic(param)
            }
        },

        setFans ( nro ) {
            this.fans = nro
        },

        setLoading ( bol ) {
            this.isLoading = bol
        },

        load ( current ) {
            if (this.currentSong && this.currentSong.src) {
                this.currentSong.pause()
                this.isPlay = false
                this.currentSong.src = ''
            }

            this.currentSong = new Audio()
            this.currentSong.src = current

            setTimeout(() => {
                this.isPlay = true
                this.currentSong.play()
            }, 200);
        },

        pause () {
            this.isPlay = false
            this.currentSong.pause()
        }
    }
})