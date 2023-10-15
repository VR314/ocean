import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-page">
      <div className="item">
        <div className="book-info">
          <a
            href="https://www.amazon.com/dp/0143127748?tag=healthline-subtag-20&ascsubtag=52902f39-2078-4bde-822f-f34692773613&correlationId=52902f39-2078-4bde-822f-f34692773613"
            target="_blank"
            className="book-title" // Added a CSS class for styling
          >
            The Body Keeps the Score
          </a>
          <p className="book-description">
            For many people, trauma is part of life, and understanding the science behind how it impacts the body can be a great tool in recovery. Trauma comes in all forms, from near-death experiences to unexpected loss. Dr. Bessel van der Kolk uses recent scientific discoveries to reveal how trauma doesn’t just impact the mind, but also the body.
          </p>
        </div>
      </div>
      <div className="item">
        <div className="book-info">
          <a
            href="https://www.amazon.com/dp/1328662055?tag=healthline-subtag-20&ascsubtag=84513d58-8b99-4527-abd7-914dbf9fff80&correlationId=84513d58-8b99-4527-abd7-914dbf9fff80"
            target="_blank"
            className="book-title" // Added a CSS class for styling
          >
            Maybe You Should Talk to Someone
          </a>
          <p className="book-description">
            Even therapists need to talk with someone, proving that we’re all human and there’s nothing wrong with asking for help when you need it. Psychotherapist Lori Gottlieb was used to being the therapist in the room until she experienced a crisis that led her to change roles and sit on the therapy couch.
          </p>
        </div>
      </div>
      <div className="item">
        <div className="book-info">
          <a
            href="https://www.nami.org/Support-Education/Video-Resource-Library"
            target="_blank"
            className="book-title" // Added a CSS class for styling
          >
            NAMI Video Resource Library
          </a>
          <p className="book-description">
          Many NAMI Affiliates offer an array of outstanding peer-led programs that provide free education, skills training and support. Discover which education program is right for you.
          </p>
        </div>
      </div>
      <div className="item">
        <div className="book-info">
          <a
            href="https://www.amazon.com/s?k=Exactly+What+to+Say&crid=1LX5YRXVNF77R&sprefix=exactly+what+to+say%2Caps%2C141&ref=nb_sb_noss_2"
            target="_blank"
            className="book-title" // Added a CSS class for styling
          >
            Exactly What to Say
          </a>
          <p className="book-description">
          This comes from a perspective of making a sale, but the advice is relevant to many situations in life. Whether it's a casual dinner with old friends or getting to know someone for the first time. Exactly What to Say has a lot of pro-tips for bridging the conversation gap.           </p>
        </div>
      </div>
      <div className="item">
        <div className="book-info">
          <a
            href="https://www.amazon.com/Designing-Your-Work-Life-Happiness/dp/0525655247/ref=sr_1_1?crid=3J9EYRTTFXAFD&keywords=Designing+Your+Work+Life%3A+How+to+Thrive+and+Change+and+Find+Happiness+at+Work&qid=1697376183&sprefix=designing+your+work+life+how+to+thrive+and+change+and+find+happiness+at+work%2Caps%2C154&sr=8-1"
            target="_blank"
            className="book-title" // Added a CSS class for styling
          >
            Designing Your Work Life: How to Thrive and Change and Find Happiness at Work
          </a>
          <p className="book-description">
          Increasingly, it’s up to workers to define their own happiness and success in this ever-moving landscape,” they write, and chapter by chapter, they demonstrate how to build positive change, wherever you are in your career. Whether you want to stay in your job and make it a more meaningful experience, or if you decide it’s time to move on, Evans and Burnett show you how to visualize and build a work-life that is productive, engaged, meaningful, and more fun. 
          </p>
          </div>
      </div>
    </div>
  );
};

export default Resources;
