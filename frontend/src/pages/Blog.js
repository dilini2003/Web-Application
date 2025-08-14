import React from 'react'
import Footer from '../components/Footer'
import './Blog.css';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="blog-title">LATEST BLOG</div>
      <div className="blog-grid">
        <BlogCard
  title="5 Common Symptoms You Should Never Ignore"
  snippet="Early detection can save lives. In this article, we discuss common symptoms like persistent cough, "
  fullText="unexplained weight loss, chest pain, fatigue, and changes in bowel habits. These symptoms may seem minor but could signal serious conditions like infections, heart issues, or even cancer. Early medical attention can lead to faster diagnosis and better outcomes."
  image="/images/blog_photo1.jpeg"
/>

          <BlogCard
  title="10 Healthy Habits for a Better Life"
  snippet="Building healthy habits like drinking enough water, getting regular exercise and practicing mindfulness"
  fullText="can greatly improve your well-being. Other key habits include eating balanced meals, getting enough sleep, managing stress, limiting screen time, avoiding smoking, and maintaining regular medical checkups. Small, consistent changes lead to long-term health benefits."
  image="/images/blog_photo2.jpg"
/>

<BlogCard
  title="Why Online Doctor Appointments Are the Future"
  snippet="Online consultations save time, reduce travel stress, and offer privacy.Learn how virtual healthcare"
  fullText=" is transforming patient care. Virtual appointments allow faster access to doctors, especially in rural or busy areas. They reduce waiting times, support chronic care management, and offer flexibility for follow-ups. As technology advances, online care is becoming safer, smarter, and more convenient."
  image="/images/blog_photo3.jpg"
/>

<BlogCard
  title="How Stress Affects Your Body — And What You Can Do About It"
  snippet="Chronic stress doesn't just affect your mind—it impacts your heart, immune system, and digestive "
  fullText="system as well. Long-term stress can lead to high blood pressure, weakened immunity, sleep problems, and digestive issues. To manage stress, try regular exercise, deep breathing, healthy sleep habits, and taking breaks. Seeking support from professionals also makes a big difference."
  image="/images/blog_photo4.jpg"
/>
        
          <BlogCard
  title="When Should You Take Your Child to the Doctor?"
  snippet="From fevers to behavioral changes, knowing when to seek medical help for your child can be challenging"
  fullText="but important. Seek medical advice if your child has a high fever, trouble breathing, rash, persistent pain, or sudden behavioral changes. Unusual sleepiness, dehydration, or refusal to eat are also warning signs. Trust your instincts—early care helps prevent complications."
  image="/images/blog_photo5.jpg"
/>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog
