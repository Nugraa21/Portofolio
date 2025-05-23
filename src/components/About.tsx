import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Saya seorang mahasiswa semester 5 jurusan Teknik Informatika. Saya memiliki ketertarikan dan kemampuan di bidang Web Development dan Mobile Development. <br />
              Saya telah memperoleh keterampilan dalam membangun sebuah website secara native programming maupun menggunakan framework dan pembuatan aplikasi mobile dari beberapa kursus dan tugas akhir semester di perguruan tinggi. Selain itu, saya juga aktif terlibat dalam kegiatan non-akademik, seperti bergabung dengan organisasi
            </p>
            <div className="about-btn">
              <a href="https://drive.google.com/uc?export=download&id=1Jb2T4RsIKYrq3_gmkvEdH9ZsWS-GIdbs">
                <button className="btn">
                  Download CV <i className="uil uil-file-alt"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="about-info">
            <h3>Skill Programming</h3>
            {[
              { title: 'Frontend', skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript Dasar', 'Vue JS'] },
              { title: 'Backend', skills: ['PHP', 'Laravel'] },
              { title: 'Database', skills: ['MySQL', 'Sqlite'] },
            ].map((skillSet, index) => (
              <div key={index} className="skills-box">
                <div className="skills-header">
                  <h3>{skillSet.title}</h3>
                </div>
                <div className="skills-list">
                  {skillSet.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="about-btn">
              <a href="https://github.com/muhammadwarisi">
                <button className="btn">
                  Lihat Github <i className="uil uil-github-alt"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="about-info">
            <h3>Skill Desain</h3>
            {[
              { title: 'Desain Grafis', skills: ['CorelDraw', 'Adobe Illustrator', 'Canva'] },
              { title: 'Editing Video', skills: ['Adobe Premiere Pro', 'Capcut'] },
            ].map((skillSet, index) => (
              <div key={index} className="skills-box">
                <div className="skills-header">
                  <h3>{skillSet.title}</h3>
                </div>
                <div className="skills-list">
                  {skillSet.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="about-btn">
              <a href="https://www.canva.com/design/DAGcpj8e6Ic/wYW4sg3XRSvtXtlS69vGyQ/edit?utm_content=DAGcpj8e6Ic&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                <button className="btn">
                  Lihat Portofolio <i className="uil uil-file-alt"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;