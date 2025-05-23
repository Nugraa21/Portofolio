import React, { useState, useEffect } from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const texts: string[] = ['Back End Dev', 'Content Creator', 'Graphic Designer'];
  const [currentText, setCurrentText] = useState<string>('');
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const typeSpeed = 100;
    const backSpeed = 80;
    const backDelay = 2000;

    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, backDelay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts]);

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Muhammad Warisi</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText">{currentText}</span>
        </div>
        <div className="featured-text-info">
          <p>Seorang Mahasiswa Teknik Informatika yang mempunyai minat di bidang Back End Dev dan Digital Marketing</p>
        </div>
        <div className="featured-text-btn">
          <a href="https://api.whatsapp.com/send/?phone=6285955179126&text&type=phone_number&app_absent=0">
            <button className="btn blue-btn">Hubungi Saya</button>
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1Jb2T4RsIKYrq3_gmkvEdH9ZsWS-GIdbs">
            <button className="btn">
              Download CV <i className="uil uil-file-alt"></i>
            </button>
          </a>
        </div>
        <div className="social_icons">
          {[
            { href: 'https://www.instagram.com/warisii_/', icon: 'uil uil-instagram' },
            { href: 'https://www.linkedin.com/in/muhammad-warisi-5856372b3/', icon: 'uil uil-linkedin-alt' },
            { href: 'https://github.com/muhammadwarisi', icon: 'uil uil-github-alt' },
          ].map((social, index) => (
            <div key={index} className="icon">
              <a href={social.href}>
                <i className={social.icon}></i>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <div className="w-full h-full flex items-center justify-center text-gray-500">[Gambar Avatar]</div>
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default Home;