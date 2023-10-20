const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/products", (req, res) => {
  res.send([
    {
      id: 1,
      title: "How to Build a Successful Blog",
      author: "John Doe",
      date_published: "2022-01-19",
      content:
        "Building a successful blog takes time, effort, and dedication. It's not just about writing; it's about creating valuable content that resonates with your readers. Start by identifying your niche and understanding your audience's needs. Consistency is key – keep a regular posting schedule and always engage with your audience through comments and social media. Remember to promote your blog on various platforms and consider collaborations with other bloggers to expand your reach. Over time, with perseverance and the right strategy, you'll see growth and success in your blogging journey.",
    },
    {
      id: 2,
      title: "The Importance of Self-Care for Bloggers",
      author: "Jane Smith",
      date_published: "2022-01-12",
      content:
        "Blogging, while rewarding, can also be stressful and demanding. That's why self-care is pivotal for bloggers. Many bloggers face burnout, especially when they're juggling their blog with other commitments. It's vital to take breaks, prioritize mental health, and engage in activities outside blogging. Whether it's reading a book, taking a short vacation, or even just a walk in the park, these activities can rejuvenate the mind. Remember, a well-rested and happy blogger produces better content!",
    },
    {
      id: 3,
      title: "Maximizing Engagement on Your Blog",
      author: "John Doe",
      date_published: "2022-01-05",
      content:
        "Engagement is the lifeline of any blog. When readers interact with your content, it's a sign they value your insights. To boost engagement, focus on crafting compelling content that offers solutions to your readers' challenges. Use eye-catching images, infographics, and engaging headlines. Encourage discussions by asking open-ended questions at the end of your posts. Engage with your readers in the comments, showing them you value their opinions. Additionally, sharing your posts on social media and encouraging readers to do the same can significantly boost engagement levels.",
    },
    {
      id: 4,
      title: "How to Monetize Your Blog",
      author: "Jane Smith",
      date_published: "2022-02-03",
      content:
        "Monetizing a blog is a goal for many bloggers. Thankfully, there are numerous ways to achieve this. Ad networks, like Google AdSense, can be a steady revenue source. Affiliate marketing, where you earn a commission for every sale made through a link on your blog, can be lucrative. Sponsored posts and collaborations with brands can also bring in significant income. Additionally, consider creating and selling digital products, like e-books or courses. Remember, while monetization is important, always prioritize delivering quality content to your readers.",
    },
    {
      id: 5,
      title: "Effective Blogging Strategies for Beginners",
      author: "John Doe",
      date_published: "2022-02-10",
      content:
        "Embarking on a blogging journey can seem overwhelming, but with the right strategies, it becomes manageable and enjoyable. First, choose a niche you're passionate about – this will make content creation more authentic. Invest time in keyword research to ensure your posts reach the right audience. Use high-quality images and maintain a clean website layout for a better user experience. Networking with other bloggers can provide valuable insights and potential collaboration opportunities. Lastly, be patient and persistent. Blogging is a marathon, not a sprint, and success often comes to those who persevere.",
    },
    {
      id: 6,
      title: "The Power of Visual Content in Blogging",
      author: "Jane Smith",
      date_published: "2022-02-17",
      content:
        "In today's digital age, visual content has become an indispensable aspect of blogging. Studies have shown that content accompanied by relevant images receives 94% more views than content without. From infographics, GIFs, to high-quality photographs, visuals not only enhance the aesthetic appeal but also improve comprehension. Embedding videos can further boost engagement, with many users preferring video tutorials over written content. However, always ensure the visuals are relevant and of high quality. Remember, the right visual can often convey what words might take paragraphs to explain.",
    },
    {
      id: 7,
      title: "Harnessing Social Media for Blog Growth",
      author: "John Doe",
      date_published: "2022-02-24",
      content:
        "Social media is a potent tool for bloggers. Platforms like Facebook, Twitter, and Instagram can drive significant traffic to your blog. Start by sharing every new post, but don't stop there. Engage with your followers, join relevant groups, and participate in discussions. Use hashtags effectively to expand your reach. Running paid ad campaigns, especially for cornerstone content, can also yield great returns. However, always be genuine. Social media users can easily discern automated posts from genuine interaction. Nurture your community, and they'll become your blog's best promoters.",
    },
    {
      id: 8,
      title: "The Role of SEO in Successful Blogging",
      author: "Jane Smith",
      date_published: "2022-03-03",
      content:
        "Search Engine Optimization (SEO) is the backbone of organic blog growth. A well-optimized blog ensures better rankings on search engines, driving consistent and targeted traffic. Start by understanding keyword research and integrate those keywords naturally within your content. But SEO isn't just about keywords. Optimizing meta descriptions, using proper header tags, and creating quality backlinks are crucial. Moreover, site speed and mobile optimization play a significant role in rankings. Keeping abreast of SEO updates and trends is essential as the digital landscape is ever-evolving.",
    },
    {
      id: 9,
      title: "Guest Blogging: Benefits and Best Practices",
      author: "John Doe",
      date_published: "2022-03-10",
      content:
        "Guest blogging is a two-pronged strategy. For the guest writer, it's an opportunity to tap into a new audience, while for the host blog, it's fresh content from a different perspective. It can boost domain authority through quality backlinks and increase your blog's credibility. When guest blogging, always choose blogs relevant to your niche. Deliver your best content, respecting the guidelines of the host blog. While the primary goal isn't self-promotion, most blogs allow a bio with a link back to your blog, directing potential readers your way.",
    },
    {
      id: 10,
      title: "Understanding Your Blog Analytics",
      author: "Jane Smith",
      date_published: "2022-03-17",
      content:
        "Blog analytics are more than just numbers; they're insights into your blog's performance. Platforms like Google Analytics provide a wealth of information. Understand metrics like bounce rate, average session duration, and page views. Identify which content resonates most with your audience and which sources drive the most traffic. With these insights, you can refine your content strategy, focusing on what works and improving what doesn’t. Regularly reviewing and acting upon these analytics ensures continuous growth and evolution of your blog.",
    },
  ]);
});
app.get("/pokeman", (req, res) => {
  res.send([
    {
      id: 1,
      pokemon: "Bulbasaur",
      type: "Grass",
      abilities: ["Overgrow"],
      hitpoints: 45,
      evolutions: ["Ivysaur", "Venusaur"],
      location: "Kanto region, Route 2",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 2,
      pokemon: "Charmander",
      type: "Fire",
      abilities: ["Blaze"],
      hitpoints: 39,
      evolutions: ["Charmeleon", "Charizard"],
      location: "Kanto region, Route 24",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 3,
      pokemon: "Squirtle",
      type: "Water",
      abilities: ["Torrent"],
      hitpoints: 44,
      evolutions: ["Wartortle", "Blastoise"],
      location: "Kanto region, Route 25",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 4,
      pokemon: "Pikachu",
      type: "Electric",
      abilities: ["Static"],
      hitpoints: 35,
      evolutions: ["Raichu"],
      location: "Kanto region, Route 2",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
      id: 5,
      pokemon: "Gengar",
      type: "Ghost",
      abilities: ["Levitate"],
      hitpoints: 60,
      evolutions: ["Haunter", "Gengar"],
      location: "Kanto region, Pokémon Mansion",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    },
  ]);
});

app.get("/movies", (req, res) => {
  mcq_data = [
    {
      id: 1,
      movie: "The Shawshank Redemption",
      rating: 9.2,
      image: "images/shawshank.jpg",
      imdb_url: "https://www.imdb.com/title/tt0111161/",
    },
    {
      id: 2,
      movie: "The Godfather",
      rating: 9.2,
      image: "images/godfather.jpg",
      imdb_url: "https://www.imdb.com/title/tt0068646/",
    },
    {
      id: 3,
      movie: "The Dark Knight",
      rating: 9,
      image: "images/dark_knight.jpg",
      imdb_url: "https://www.imdb.com/title/tt0468569/",
    },
    {
      id: 4,
      movie: "Pulp Fiction",
      rating: 8.9,
      image: "images/pulp_fiction.jpg",
      imdb_url: "https://www.imdb.com/title/tt0110912/",
    },
    {
      id: 5,
      movie: "The Lord of the Rings: The Return of the King",
      rating: 9,
      image: "images/lotr_return_king.jpg",
      imdb_url: "https://www.imdb.com/title/tt0167260/",
    },
    {
      id: 6,
      movie: "The Good, the Bad and the Ugly",
      rating: 8.8,
      image: "images/good_bad_ugly.jpg",
      imdb_url: "https://www.imdb.com/title/tt0060196/",
    },
    {
      id: 7,
      movie: "Fight Club",
      rating: 8.8,
      image: "images/fight_club.jpg",
      imdb_url: "https://www.imdb.com/title/tt0137523/",
    },
    {
      id: 8,
      movie: "The Lord of the Rings: The Fellowship of the Ring",
      rating: 8.8,
      image: "images/lotr_fellowship.jpg",
      imdb_url: "https://www.imdb.com/title/tt0120737/",
    },
    {
      id: 9,
      movie: "Forrest Gump",
      rating: 8.8,
      image: "images/forrest_gump.jpg",
      imdb_url: "https://www.imdb.com/title/tt0109830/",
    },
    {
      id: 10,
      movie: "Inception",
      rating: 8.8,
      image: "images/inception.jpg",
      imdb_url: "https://www.imdb.com/title/tt1375666/",
    },
  ];
  res.send(mcq_data);
});
app.get("/", (req, res) => {
  res.send("Latest Brand Smart Phone");
});

app.listen(6060, () => {
  console.log("Write something");
});
