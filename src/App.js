import Header from "./Header";
import Content from "./Content";
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [currentItem, setCurrentItem] = useState('users')

  const API_URL = 'https://jsonplaceholder.typicode.com'

  useEffect(() => {
    (async () => await fetchItems())()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItem])

  const fetchItems = async () => {
    try {
      const reqUrl = `${API_URL}/${currentItem}`
      const response = await fetch(reqUrl)
      if (!response.ok) throw Error('Did not receive expected data')
      const dataList =  await response.json()
      setData(dataList)
      setFetchError(null)
    } catch (error) {
      setFetchError(error.message)
    }
  }

  const getData = async () => {
    (async () => await fetchItems())()
  }

  const handleClick = (e) => {
    setCurrentItem(e.target.innerHTML)
    getData()
}

  return (
    <div>
      <Header
        currentItem={currentItem}
        handleClick={handleClick}
      />
      <main>
        {
          !fetchError &&
          <Content
            currentItem={currentItem}
            data={data}
          />
        }
      </main>
    </div>
  );
}

export default App;
