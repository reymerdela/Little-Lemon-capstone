import Card from "./card";
import styles from "./testimonials.module.css";
const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi commodi provident, ab beatae at!",
    image: "https://avatar.iran.liara.run/public",
    rating: 4,
  },
  {
    name: "Jane Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi commodi provident, ab beatae at!",
    image: "https://avatar.iran.liara.run/public",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi commodi provident, ab beatae at!",
    image: "https://avatar.iran.liara.run/public",
    rating: 5,
  },
  {
    name: "Bob Brown",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi commodi provident, ab beatae at!",
    image: "https://avatar.iran.liara.run/public",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className={`${styles.testimonials}`}>
      <h2 className="font-karla">Testimonials</h2>
      <div className={`${styles.testimonialList} container-padding`}>
        {testimonials.map((data, i) => (
          <Card
            key={i}
            name={data.name}
            feedback={data.feedback}
            image={data.image}
            rating={data.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
