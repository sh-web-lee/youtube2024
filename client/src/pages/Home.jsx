import { Link } from "react-router-dom";
import styled from 'styled-components';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "./src/assets/imgs/1.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "./src/assets/imgs/2.png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "./src/assets/imgs/3.png",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "./src/assets/imgs/4.png",
    },
  ];
  return (
    <div className="">
      <div className="mt-[50px] flex flex-col gap-[150px]">
        {posts.map((post, index) => (
          <div key={post.id} className="flex gap-[100px] w-full">
            <div className={`order-${index % 2}`}>
              <img src={post.img} alt="" className="w-full" />
            </div>
            <div className="flex-2 flex flex-col justify-between gap-[20px]">
              <Link to={`/post/${post.id}`}>
                <h1 className="font-semibold text-lg text-[48px] leading-10">{post.title}</h1>
              </Link>
              <p className="text-[18px] mt-[18px]">{post.desc}</p>
              <button className="w-fit p-[10px] cursor-pointer border-[1px] text-teal bg-[#fff] border-teal hover:bg-light hover:border-light hover:text-[#000]">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home