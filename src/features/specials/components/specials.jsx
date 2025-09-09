import Card from "./card";
import styles from "./specials.module.css";
import { Button } from "@/components";
import greekSalad from "@/assets/greek salad.jpg";
const SpecialsData = [
  {
    title: "Special Dish 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam illo optio, commodi dolorum nobis corporis vero! Voluptate, eos, maxime rem molestiae iste earum veniam officiis",
    price: "$12.99",
    imageUrl: greekSalad,
  },
  {
    title: "Special Dish 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam illo optio, commodi dolorum nobis corporis vero! Voluptate, eos, maxime rem molestiae iste earum veniam officiis quam, necessitatibus corrupti ullam distinctio",
    price: "$14.99",
    imageUrl: greekSalad,
  },
  {
    title: "Special Dish 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam illo optio, commodi dolorum nobis corporis vero! Voluptate, eos, maxime rem molestiae iste earum veniam officiis quam, necessitatibus corrupti ullam distinctio",
    price: "$11.99",
    imageUrl: greekSalad,
  },
];
const Specials = () => {
  return (
    <section className={`container-padding ${styles.specials}`}>
      <div className={`${styles.header}`}>
        <h2 className="font-markazi">This weeks specials</h2>
        <Button>Online Menu</Button>
      </div>
      <div className={`${styles.content}`}>
        {SpecialsData.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
