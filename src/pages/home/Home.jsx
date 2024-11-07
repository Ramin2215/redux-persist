import { addBasket, getDAta } from '@/redux/feature/counterSlice';
import { allFetch } from '@/service';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

  const { count, basket, data } = useSelector((state) => state.allState)

  const [value, setValue] = useState(0);
  const btn = ["one", "two", "three"]

  console.log(basket);



  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let getdata = await allFetch.GET_PRODUCTS();
        dispatch(getDAta(getdata));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: "100vh", backgroundColor: "blue", padding: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "30px" }}>

      {data?.map((item) => (
        <div className="box" style={{ width: "200px", height: "200px" }}>
          <div style={{ width: "200px", height: "170px" }}>
            <img style={{ width: "100%", height: "100%" }} src={item.image} alt="" />
          </div>
          <button onClick={() => dispatch(addBasket(item.id))} style={{ marginTop: "10px" }}>add</button>
        </div>
      ))}

    </div>
  )
}

export default Home