import { useEffect, useState } from 'react'
import axios from 'axios'
import Pages from './Pages';

function SearchPage({search}) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/product?keyword=${search}`)
        setData(result.data.product);
      }
      catch (err) {
        console.log(err)
      }
    }
    fetch()
  }, [search])


  
  return (
    <div>
      <Pages data={Data}/>
    </div>
  )
}

export default SearchPage