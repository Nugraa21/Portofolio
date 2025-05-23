import React, { useState } from 'react';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const emailBody = `Nama: ${formData.name}\nEmail: ${formData.email}\nPesan: ${formData.message}`;
    window.location.href = `mailto:mw.a.seven.one@gmail.com?subject=Pesan dari Website&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Contact</h1>
        <span>Jika ingin bekerja sama bisa hubungi kontak di bawah</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Hubungi Saya <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelope"></i> Email: mw.a.seven.one@gmail.com
            </p>
            <p>
              <i className="uil uil-phone"></i> Telp: +6285 9551 7926
            </p>
          </div>
        </div>
        <div className="col">
          <div className="form-control">
            <div className="form-inputs">
              <input
                type="text"
                className="input-field"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-area">
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-button">
              <button className="btn" onClick={handleSubmit}>
                Send <i className="uil uil-message"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;