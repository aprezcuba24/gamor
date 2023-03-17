import { useEffect, useState } from "react"

type UseCategories = () => [boolean, any[]]

export const useCateogries: UseCategories = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([])
  useEffect(() => {
    setLoading(true)
    fetch('/api/categories', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setItems(res))
      .then(() => setLoading(false))
  }, [])

  return [loading, items]
}