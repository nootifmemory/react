import Link from "next/link";
function shuffle(array) {
  var data = array.sort(() => Math.random() - 0.5);
  return data;
}

export default function Footer({ data }) {
  var wordCount = data.map(({ id, title, content }) => content);
  return (
    <footer id="footer" className="">
      <div className="inner">
        <div className="widgets">
          <div className="rpost pjax">
            <h2>Random Posts</h2>
            <ul>
              {data.map(({ id, title }) => (
                <li className="item" key={`FT${id}`}>
                  <div className="breadcrumb"></div>
                  <span>
                    <Link href="/posts/[id]" as={`/posts/${id}`}>
                      <a title={title}>{title}</a>
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="status">
          <div className="copyright">
          <span className="copyrightHolder" title="Copyright">Copyright by NooTif base on Shoka Theme Hexo</span><br></br>
            &copy;
            <span itemProp="copyrightYear">2021</span>
            <span className="with-love">
              <i className="ic i-sakura rotate"></i>
            </span>
            <span className="author" itemProp="copyrightHolder">
              @Naughty NooTif
            </span>
          </div>
          <div className="count">
            <span className="post-meta-item-icon">
              <i className="ic i-chart-area"></i>
            </span>
            <span title="Symbols count total">
              {wordCount.toString().length}
            </span>
            <span className="post-meta-divider">|</span>
            <span className="post-meta-item-icon">
              <i className="ic i-coffee"></i>
            </span>
            <span title="Reading time total">{Math.ceil(wordCount.toString().length / 225)}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}