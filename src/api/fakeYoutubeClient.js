import axios from 'axios';

export default class FakeYoutubeClient {
    constructor() {}

    async search({params}) {
        return params.relatedToVideoId ? axios.get('/data/related.json') : axios.get('/data/search.json')
    }

    async videos() {
        return axios.get('/data/popular.json')
    }

    async channels() {
        return axios.get('/data/channel.json')
    }

    async view() {
        return axios.get('/data/view.json')
    }
}