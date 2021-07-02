import Title from "../title";

export default function Post({ postData, content, getTags }) {
  const date = new Date(postData.date)
  return (
    <>
      <Title title={postData.title} />
      <div className="article wrap">
        <div
          className="breadcrumb"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <i className="ic i-home"></i>
          <span>
            <a href="/">Home</a>
          </span>
        </div>
        <article
          itemScope
          itemType="http://schema.org/Article"
          className="post block"
          lang="en"
        >
          <link itemProp="mainEntityOfPage" href={`/posts/${postData.id}`} />
          <span
            hidden
            itemProp="author"
            itemScope
            itemType="http://schema.org/Person"
          >
            <meta itemProp="image" content="/images/avatar.jpg" />
            <meta itemProp="name" content="Naughty NooTif" />
            <meta
              itemProp="description"
              content="Young Wild and Free, Naughty"
            />
          </span>
          <span
            hidden
            itemProp="publisher"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <meta itemProp="name" content="NooTif" />
          </span>
          <div
            className="body md"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {postData.tags.length > 0 ? <div className="tags" /> : ""}
          {postData.tags.map(({ tag }) => (
            <a key={tag}>
              <i className="ic i-tag"></i>
              {tag}
            </a>
          ))}
          <footer>
            <div className="meta">
              <span className="item">
                <span className="icon">
                  <i className="ic i-calendar-check"></i>
                </span>
                <span className="text">Edited on </span>
                <span
                  itemProp="dateCreated datePublished">
                  <time className="item" dateTime={date}>
                    {date.toLocaleDateString(undefined,{ year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </span>
              </span>
            </div>
            <div id="copyright">
              <ul>
                <li className="author">
                  <strong>Post author: </strong>Naughty NooTif{" "}
                  <i className="ic i-at">
                    <em>@</em>
                  </i>
                  NooTif
                </li>
                <li className="link">
                  <strong>Post link: </strong>
                  <a href="https://nootif.tk/hello-world/" title="Hello World">
                    https://nootif.tk/hello-world/
                  </a>
                </li>
                <li className="license">
                  <strong>Copyright Notice: </strong>All articles in this blog
                  are licensed under{" "}
                  <span
                    className="exturl"
                    data-url="aHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzQuMC9kZWVkLmVu"
                  >
                    <i className="ic i-creative-commons">
                      <em>(CC)</em>
                    </i>
                    BY-NC-SA
                  </span>{" "}
                  unless stating additionally.
                </li>
              </ul>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
