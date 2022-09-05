import { useEffect, useState } from "react"
import { Comment } from "../types/types"
const URL = 'https://express-server-space-x.vercel.app/comments/'

export const useComments = (id: string) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState<Comment[]>([])
    const [errorComment, setErrorComment] = useState('')
    const fetchData = async () => {
        setLoading(true)
        setError(null)
        try{
            const res = await fetch(URL+id)
            if (!res.ok){throw new Error('Error')}
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (err: any) {
            setLoading(false)
            setError(err)
        }
        
    }
    useEffect(()=>{fetchData()},[])
    const addComment = async (comment: Comment) => {
        setErrorComment('')
        try {
            const res = await fetch(URL,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(comment)
            });
            if (res.ok){
                const data = await res.json()
                console.log(data);
                setData((prev: Comment[])=> [...prev,comment])
            } else {
                throw new Error('Error')
            }
        } catch (err: any) {
            setErrorComment(err.error)
        }
    }
    return {loading,error,data,addComment,errorComment}
}