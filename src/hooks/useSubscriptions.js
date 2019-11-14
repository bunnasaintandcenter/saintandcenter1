import { useEffect, useState } from "react"
import axios from "axios"

const useSubscriptions = id => {
  const [subscriptions, setSubscriptions] = useState([])
  const [loaded, setLoaded] = useState(false)

  const fetchData = async () => {
    console.log("hey")
    const { data } = await axios.get(
      `https://andnone.co/saintcenter/wp-json/wc/v1/subscriptions?customer=${id}&consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`
    )
    console.log(data)
    setSubscriptions(data)
    setLoaded(true)
  }

  useEffect(() => {
    if (!loaded) {
      fetchData()
    }
  })

  return {
    loaded,
    subscriptions,
    fetchData,
  }
}

export default useSubscriptions
