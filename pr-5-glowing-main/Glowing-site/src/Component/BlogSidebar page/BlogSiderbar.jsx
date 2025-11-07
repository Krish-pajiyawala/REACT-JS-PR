import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import "./news.css";
const articles = [
  {
    id: 1,
    title: "Tips & Procedure To Apply Luxury Beauty Cosmetic Cream",
    category: "Natural Cleansers",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-15_4d658481-8c58-411b-b345-175deb65ae9b.jpg?v=1741940833&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 2,
    title: "The Best Way To Select Good High-End Cosmetic Products",
    category: "Cosmetics",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-14.jpg?v=1736505547&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 3,
    title: "Lightweight Makeup To Enhance Your Natural Beauty",
    category: "Make Up",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-13.jpg?v=1736505518&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 4,
    title: "Herbal Ingredients And Their Role In Beauty Creams",
    category: "Natural Cleansers",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-12.jpg?v=1736505484&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 5,
    title: "All Essential Nutrients Your Skin Requires At Night",
    category: "Natural Cleansers",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-11.jpg?v=1736505449&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 6,
    title: "How To Find The Best Brow Shape For Your Face",
    category: "Make Up",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-10.jpg?v=1736505416&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 7,
    title: "Perfect Way To Find Your Lip Combo For Everyday Lip Makeup",
    category: "Make Up",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-09.jpg?v=1736505362&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 8,
    title: "Morning beauty routine: our main rules",
    category: "Make Up",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-08.jpg?v=1736505317&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 9,
    title: "Some beauty secrets from our editor in chief",
    category: "Make Up",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-07_df403935-86e0-4615-aa7d-1db427a33011.jpg?v=1740042753&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 10,
    title: "Easy affordable make up look",
    category: "Make Up",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-06.jpg?v=1736505218&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 11,
    title: "When The Eye Makes A Statement, The Lips Should",
    category: "Make Up",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-05.jpg?v=1736505150&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
  {
    id: 12,
    title: "I Believe That All Women Are Pretty Without Makeup",
    category: "Make Up",
    image:
      "https://glowing-theme.myshopify.com/cdn/shop/articles/blog-04.jpg?v=1736505037&width=720",
    author: "Hiếu Bùi",
    date: "Jan 10, 2025",
  },
];

const BlogSiderbar = () => {
  return (
    <>
    <Container  className="news-container py-5">
      <Row>
        {/* Sidebar */}
        <Col lg={3} md={4} sm={12} className="news-sidebar mb-4  py-5">
        <div className="position-sticky top-0">
          <h5 className="mb-3">Search</h5>
          <Form.Control type="text" placeholder="Search..." className="mb-4" />

          <h5 className="mb-3">Recent Posts</h5>
          {articles.slice(0, 4).map((post) => (
            <div key={post.id} className="recent-post d-flex mb-3">
              <img
                src={post.image}
                alt={post.title}
                className="recent-img me-3"
              />
              <div>
                <small className="text-muted">{post.category}</small>
                <p className="mb-0 small">{post.title}</p>
              </div>
            </div>
          ))}

          <h5 className="mt-4 mb-3">Tags</h5>
          <div className="tags">
            {["Cosmetics", "Make Up", "Natural Cleansers", "Skin Care"].map(
              (tag, i) => (
                <span key={i} className="tag-item">
                  {tag}
                </span>
              )
            )}
          </div>

          <h6 className="mt-4 text-muted">Follow us on Instagram</h6>
</div>
        </Col>
        {/* News Cards */}
        <Col lg={9} md={8} sm={12}>
          <h2 className="heading fw-bold mb-4 ms-5 ps-5">News</h2>
          <Row className="pe-5">
            {articles.map((post) => (
              <Col lg={4} md={6} sm={12} key={post.id} className="mb-4">
                <Card className="news-card h-100 border-0 ">
                  <div className="overflow-hidden ">
                    <Card.Img
                      variant="top"
                      src={post.image}
                      className="news-img"
                      alt={post.title}
                    />
                  </div>
                  <Card.Body>
                    <small className="text-muted d-block mb-1">
                      {post.category}
                    </small>
                    <Card.Title className="fs-6">{post.title}</Card.Title>
                    <Card.Text className="text-muted small mt-2">
                      By {post.author} | {post.date}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

      </Row>
    </Container>
    </>
  );
};

export default BlogSiderbar;
