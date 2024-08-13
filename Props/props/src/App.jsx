import { useState } from "react";
import "./App.css";
import Cart from "./assets/component/Cart";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    {
      title: "Chai aur code",
      img: "https://images.pexels.com/photos/2078477/pexels-photo-2078477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      para: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      btnText: "Click me",
    },

    {
      title: "Histash",
      img: "https://images.pexels.com/photos/27580386/pexels-photo-27580386/free-photo-of-a-puffin-bird-sitting-on-top-of-a-grassy-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      para: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, nisiesse! Quae quo harum provident omnis quam ab maiores, soluta delectusrerum ipsam tempora voluptatem quia cumque officiis magni atque? Loremipsum dolor ",
      btnText: "Visit me",
    },

    {
      title: "Abdul Haseeb",
      img: "https://images.pexels.com/photos/27580386/pexels-photo-27580386/free-photo-of-a-puffin-bird-sitting-on-top-of-a-grassy-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      para: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, nisiesse! Quae quo harum provident omnis quam ab maiores",
      btnText: "Click me",
    },
    {
      title: "Mohib Ullah Afridi",
      img: "https://images.pexels.com/photos/2078477/pexels-photo-2078477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      para: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, nisiesse! Quae quo harum provident omnis quam ab maiores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, nisiesse! Quae quo harum provident omnis quam ab maiores",
      btnText: "Visit me",
    },
  ];

  return (
    <>
      <Cart data={data} />
    </>
  );
}

export default App;
