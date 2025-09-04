import React from "react";
import Container from "../component/Container";
import SmallList from "../component/SmallList";
import CommonHeading from "../component/CommonHeading";

export const Journal = () => {
  return (
    <div>
      <Container className="flex flex-col items-center">
        <CommonHeading className="my-10" text="Welcome to Journal" />
        <SmallList
          className=" my-10 leading-7 w-[60%] text-lg"
          text="We are more than just an online shop we are a team committed to making your shopping experience simple, reliable, and enjoyable. This journal is our way of sharing our values and policies with you, so you can shop with full confidence.

Our Commitment to Customers

At the heart of our business is you, our customer. We believe trust is the foundation of every good relationship, and we work hard every day to earn and keep yours. From the moment you visit our website to the time your order arrives at your doorstep, we strive to provide a smooth and worry-free journey.

Secure Shopping Experience

We take online safety seriously. Every transaction made on our platform is protected by trusted payment gateways and industry-standard encryption. Your personal information and payment details remain private and secure at all times.

Fair and Transparent Policies

We believe in honesty and transparency. The prices you see on our platform are exactly what you pay—no hidden costs or surprise charges. We make sure all our policies are clear and easy to understand so that you always know what to expect.

Fast and Reliable Delivery

We know how exciting it is to receive your order, which is why we work with reliable delivery partners to ensure fast and safe shipping. Our goal is to get your purchases to you in the shortest possible time without compromising quality.

Easy Returns and Refunds

Sometimes things do not go as planned, and that is okay. If you are not fully satisfied with your purchase, our return and refund policy is designed to be simple and stress-free. You can return products within [X] days, and we will ensure a smooth process to either replace the item or refund your money.

Dedicated Customer Support

Our support team is always here to help. Whether you have a question about a product, need assistance with an order, or want guidance on returns, our team is available to provide friendly and effective service whenever you need it.

Building Long-Term Trust

Our vision is not just to sell products but to build lasting relationships with our customers. We want you to feel confident every time you shop with us and know that we stand behind the quality of our products and services.

Thank you for choosing [Your Store Name]. Your trust inspires us to grow, improve, and deliver the best online shopping experience possible."
        />
      </Container>
    </div>
  );
};
