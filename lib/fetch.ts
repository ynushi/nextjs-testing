import fetch from "node-fetch"

export const getAllPostData = async () => {
    const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
    )
    const posts = await res.json()
    return posts
}

export const getAllTasksData = async () => {
    const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/todos/?_limit=10')
    )
    const tasks = await res.json()
    return tasks
}

// Dinamuc RouteのためにIDのみを抽出した配列を返す関数を作る
export const getAllPostIds = async () => {
    const res = await fetch (
        new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
    )
    const posts = await res.json()
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            }
        }
    }) 
}

// 指定したIDを使って1つ1つのコンテンツデータを取り出す関数を作る
export const getPostData = async(id: string) => {
    const res = await fetch(
        new URL(`https://jsonplaceholder.typicode.com/posts/${id}`)
    )
    const post = await res.json()
    return post
}