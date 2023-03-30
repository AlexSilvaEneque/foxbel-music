import axios from "axios"
import { useTrackStore } from "../store/track"

export const useFetch = () => {
    const storeTrack = useTrackStore()

    const options = {
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RapidAPI_Key,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }

    const searchMusic = ( param ) => {
        return new Promise(async (resolve, reject) => {
            try {
                
                const res = await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${param}`,
                    options)
                storeTrack.setData(res.data)
                storeTrack.setResult(res.data)
                resolve(true)
            } catch (error) {
                reject(false)
            }
        })
    }

    const searchArtist = ( id ) => {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`, options)
                storeTrack.setFans(res.data.nb_fan)
                resolve(true)
            } catch (error) {
                reject(false)
            }
        })
    }

    return {
        searchMusic,
        searchArtist
    }
}