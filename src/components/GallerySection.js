import "./GallerySection.scss";

function GallerySection() {
  return (
    <div className="Section-btn">
      <div className="Collection_Browser_Tabs">
        <div className="Collection_Browser_Tab_Button-Cookies">
          <button>
            <span>COOKIES</span>
          </button>
        </div>
        <div className="Collection_Browser_Tab_Button-Cake">
          <button>
            <span>CAKES</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
