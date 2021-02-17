import React from "react"; //обязательно! подключение реакта к модулю
import Logo from "./Logo";
import Panel from "./Panel";
import PaintingList from "./PaintingList";
import paintings from "../paintings.json";

const App = () => {
  return (
    <div>
      <Logo text="Главный компонент-контейнер приложения" />
      <PaintingList items={paintings} />
      
      <Panel title="Последние новости">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          obcaecati dolorum assumenda vitae aspernatur, aliquid numquam
          explicabo, facere tenetur unde dolorem quo! Sit iusto natus at,
          aliquam, repellendus repellat ipsa eligendi dolorem tempore atque
          reprehenderit nulla magnam reiciendis, aliquid minus tenetur ipsam
          fuga. Quas vel, sunt voluptatum debitis incidunt numquam?
        </p>

        <a href="">Читать...</a>
      </Panel>

      <Panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          explicabo aperiam architecto perspiciatis quae amet. Porro magni
          laudantium aspernatur debitis deserunt ipsam. Nostrum id accusamus
          praesentium eum incidunt tenetur cum!
        </p>
      </Panel>



      {/* < Painting
        // url="https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg"
        title="Feathers. Art abstract"
        price={500}
        authorUrl="https://pixabay.com/users/ractapopulous-24766/"
        tag="ractapopulous"
        quantity="10"
      />

      < Painting
        url={paintings[1].url}
        title={paintings[1].title}
        price={paintings[1].price}
        authorUrl={paintings[1].author.url}
        tag={paintings[1].author.tag}
        quantity={paintings[1].quantity}
      /> */}
      {/* <ul>
        {paintings.map((painting) => (
          <li key={painting.id}>
            < Painting
              url={painting.url}
              title={painting.title}
              price={painting.price}
              authorUrl={painting.author.url}
              tag={painting.author.tag}
              quantity={painting.quantity}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
