import styles from "./BlogandNews.module.css";
import auth_image from "../../assets/author_icon.png";
import blog_image from "../../assets/blog_image.png";

// {
//             category:"Medical",
//             date:"March 31, 2022",
//             heading:"6 Tips To Protect Your Mental Health When You’re Sick",
//             image:blog_image,
//             auth_image:auth_image,
//             auth_name:"Rebecca Lee"
//         },
const Card = ({ image, date, category, heading, imageicon, name }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_image}>
        <img src={image} alt="blog" />
      </div>
      <div className={styles.card_info}>
        <p className={styles.category_date}>
          {category} | {date}
        </p>
        <h4 className={styles.card_heading}>{heading}</h4>
        <div className={styles.author_div}>
          <img src={imageicon} alt="author" />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
const BlogandNews = () => {
  return (
    <div>
      <div className={styles.section_wrapper}>
        <h4>Blog and News</h4>
        <h1>Read Our Latest News</h1>
        <div className={styles.cards_wrapper}>
          <Card
            image={blog_image}
            imageicon={auth_image}
            category="Medical"
            name="Rebecca Lee"
            date="March 31, 2022"
            heading="6 Tips To Protect Your Mental Health When You’re Sick"
          />
          <Card
            image={blog_image}
            imageicon={auth_image}
            category="Medical"
            name="Rebecca Lee"
            date="March 31, 2022"
            heading="6 Tips To Protect Your Mental Health When You’re Sick"
          />
          <Card
            image={blog_image}
            imageicon={auth_image}
            category="Medical"
            name="Rebecca Lee"
            date="March 31, 2022"
            heading="6 Tips To Protect Your Mental Health When You’re Sick"
          />
        </div>
      </div>
    </div>
  );
};
export default BlogandNews;
