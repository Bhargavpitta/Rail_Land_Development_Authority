import "./Rlda.css";

const newsletters = [
  { title: "22nd Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/twenty two.pdf" },
  { title: "21st Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/twenty one.pdf" },
  { title: "20th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/twenty.pdf" },
  { title: "19th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/nineteen.pdf" },
  { title: "18th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/eighteen.pdf" },
  { title: "17th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/seventeen.pdf" },
  { title: "16th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/sixteen.pdf" },
  { title: "15th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/fifteen.pdf" },
  { title: "14th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/fourteen.pdf" },
  { title: "13th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/thirteen.pdf" },
  { title: "12th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/twelve.pdf" },
  { title: "11th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/leven.pdf" },
  { title: "10th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/ten.pdf" },
  { title: "9th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/nine.pdf" },
  { title: "8th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/eight.pdf" },
  { title: "7th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/seven.pdf" },
  { title: "6th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/six.pdf" },
  { title: "5th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/five.pdf" },
  { title: "4th Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/four.pdf" },
  { title: "3rd Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/three.pdf" },
  { title: "2nd Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/two.pdf" },
  { title: "1st Edition of RLDA's E-newsletter", file: "/pdfs/rlda_newsletters/one.pdf" }
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