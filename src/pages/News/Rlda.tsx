import "./Rlda.css";

const newsletters = [
  { title: "22nd Edition of RLDA's E-newsletter", file: "/pdfs/22.pdf" },
  { title: "21st Edition of RLDA's E-newsletter", file: "/pdfs/21.pdf" },
  { title: "20th Edition of RLDA's E-newsletter", file: "/pdfs/20.pdf" },
  { title: "19th Edition of RLDA's E-newsletter", file: "/pdfs/19.pdf" },
  { title: "18th Edition of RLDA's E-newsletter", file: "/pdfs/18.pdf" },
  { title: "17th Edition of RLDA's E-newsletter", file: "/pdfs/17.pdf" },
  { title: "16th Edition of RLDA's E-newsletter", file: "/pdfs/16.pdf" },
  { title: "15th Edition of RLDA's E-newsletter", file: "/pdfs/15.pdf" },
  { title: "14th Edition of RLDA's E-newsletter", file: "/pdfs/14.pdf" },
  { title: "13th Edition of RLDA's E-newsletter", file: "/pdfs/13.pdf" },
  { title: "12th Edition of RLDA's E-newsletter", file: "/pdfs/12.pdf" },
  { title: "11th Edition of RLDA's E-newsletter", file: "/pdfs/11.pdf" },
  { title: "10th Edition of RLDA's E-newsletter", file: "/pdfs/10.pdf" },
  { title: "9th Edition of RLDA's E-newsletter", file: "/pdfs/9.pdf" },
  { title: "8th Edition of RLDA's E-newsletter", file: "/pdfs/8.pdf" },
  { title: "7th Edition of RLDA's E-newsletter", file: "/pdfs/7.pdf" },
  { title: "6th Edition of RLDA's E-newsletter", file: "/pdfs/6.pdf" },
  { title: "5th Edition of RLDA's E-newsletter", file: "/pdfs/5.pdf" },
  { title: "4th Edition of RLDA's E-newsletter", file: "/pdfs/4.pdf" },
  { title: "3rd Edition of RLDA's E-newsletter", file: "/pdfs/3.pdf" },
  { title: "2nd Edition of RLDA's E-newsletter", file: "/pdfs/2.pdf" },
  { title: "1st Edition of RLDA's E-newsletter", file: "/pdfs/1.pdf" }
];

const Rlda = () => {
  return (
    <div className="news-page">
      <div className="news-banner">
        <h1>RLDA E-News Letter</h1>
      </div>

      <div className="news-content">
        <p>
          RLDA publishes periodic e-newsletters highlighting major projects,
          developments and achievements.
        </p>

        <div className="newsletter-list">
          {newsletters.map((item, index) => (
            <div key={index} className="newsletter-item">
              <a href={item.file} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rlda;