import { useEffect, useState } from "react"
import axios from "axios"

const useOrder = id => {
  const [order, setOrder] = useState([])
  const [loaded, setLoaded] = useState(false)

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://andnone.co/saintcenter/wp-json/wc/v1/orders/${id}?consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`
    )
    setOrder(data)
    setLoaded(true)
  }

  useEffect(() => {
    if (!loaded) {
      fetchData()
    }
  })

  return {
    loaded,
    order,
    fetchData,
  }
}

export default useOrder
