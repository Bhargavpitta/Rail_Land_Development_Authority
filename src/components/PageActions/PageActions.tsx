import "./PageActions.css";

const PageActions = () => {

  const handleBookmark = () => {
    alert("Press Ctrl + D to bookmark this page.");
  };

  const handleMail = () => {
    const subject = "Check this page";
    const body = window.location.href;

    window.location.href =
      `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-actions">

      <button onClick={handleBookmark} className="action-btn">
        📑 <span>Bookmark</span>
      </button>

      <button onClick={handleMail} className="action-btn">
        ✉️ <span>Mail this page</span>
      </button>

      <button onClick={handlePrint} className="action-btn">
        🖨 <span>Print this page</span>
      </button>

    </div>
  );
};

export default PageActions;