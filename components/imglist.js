
const ImgList = function ({img}) {
    var arr = img.slice(0,6)
    var arr = arr.map((img) => "https://strapi-nootif-db.herokuapp.com"+img)
    return (
        <div id="imgs" className="pjax">
          <ul>
            {arr.map((value, index) => (
              <li
                key={index}
                className="item lozaded"
                data-background-image={value}
              ></li>
            ))}
          </ul>
        </div>
      );
    };
    
    
    export default ImgList;