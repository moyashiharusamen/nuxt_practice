export default function({ $axios }) {
    $axios.onRequest((config) => {
        if (process.env.QIITA_TOKEN) {
            config.header.common['Authorization'] = process.env.QIITA_TOKEN
        }

        return config
    })
}