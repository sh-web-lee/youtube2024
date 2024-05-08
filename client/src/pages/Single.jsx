import styled from "styled-components";
import { LuFolderEdit } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import MenuCom from '../components/Menu';

const Content = styled.div`
  flex: 5;
  & > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
const Menu = styled.div`
  flex: 2;
`;

const User = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  font: 14px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    font-weight: bold;
  }
`;

const Single = () => {
  return (
    <div className="flex gap-[50px]">
      <Content>
        <img src="../src/assets/imgs/1.png" alt="" />
        <User>
          <img src="../src/assets/imgs/2.png" alt="" />
          <div>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="flex gap-[5px]">
            <Link to={`/write?edit=2`}>
              <LuFolderEdit className="cursor-pointer w-[20px]" />
            </Link>
            <RiDeleteBin5Line className="cursor-pointer" />
          </div>
        </User>
        <h1 className="text-[42px] text-[#333]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h1>
        <p className="text-justify leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea
          dolorem ratione sit debitis deserunt repellendus numquam ab vel
          perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam
          facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus
          numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. A possimus excepturi aliquid nihil
          cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis
          deserunt repellendus numquam ab vel perspiciatis corporis! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea
          dolorem ratione sit debitis deserunt repellendus numquam ab vel
          perspiciatis corporis!
        </p>
      </Content>
      <Menu>
        <MenuCom />
      </Menu>
    </div>
  );
};
export default Single;
