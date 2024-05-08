const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "../src/assets/imgs/1.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "../src/assets/imgs/2.png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "../src/assets/imgs/3.png",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "../src/assets/imgs/4.png",
    },
  ];
  return (
    <div className="flex flex-col gap-[25px]">
      <h1 className="text-[20px] text-[#555]">Other post you may like</h1>
      {posts.map(post => (
        <div key={post.id} className="flex flex-col gap-[10px]">
          <img src={post.img} alt="" className="w-full h-[200px] object-contain" />
          <h2 className="text-[#555]">{post.title}</h2>
          <button className="w-fit p-[10px] cursor-pointer border-[1px] text-teal bg-[#fff] border-teal hover:bg-light hover:border-light hover:text-[#000]">Read More</button>
        </div>
      ))}
    </div>
  )
}
export default Menu