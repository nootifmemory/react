import Link from 'next/link'
import Date from '../date'

export default function Page({
  allStickyPostsData,
  allPostsData,
  StickyPostsData,
  PostsData,
}) {
  return (
    <div className="index wrap">
      {allStickyPostsData.length > 0 ? (
        <h2 className="divider">Sticky Posts</h2>
      ) : (
        ""
      )}
      {/* Sticky Post Render */}
      {allStickyPostsData.length > 0
        ? allStickyPostsData.map(({ id, date, title, tags }, index) => (
            <div className="segments sticky" key={"UID" + id}>
              <article className="item show">
                <div className="cover">
                  {/* <div className="cover min-w-1/2"> */}
                  <Link as={`/posts/${id}`} href="posts/[id]">
                    <a itemProp="url" title={title}>
                      <img
                        data-src={`https://source.unsplash.com/collection/4325322?${
                          99993 - index
                        }`}
                      />
                    </a>
                  </Link>
                </div>
                <div className="info ">
                  <div className="meta">
                    <span className="item" title={`Created: ${date}`}>
                      <span className="icon">
                        <i className="ic i-calendar"></i>
                      </span>
                      <time
                        itemProp="dateCreated datePublished"
                        dateTime={date}
                      >
                        <Date dateString={date} />
                      </time>
                    </span>
                  </div>
                  <h3>
                    <Link as={`/posts/${id}`} href="posts/[id]">
                      <a itemProp="url" title={title}>
                        {title}
                      </a>
                    </Link>
                  </h3>
                  <div className="excerpt">{StickyPostsData[index]}</div>
                </div>
                <Link as={`/posts/${id}`} href="posts/[id]">
                  <a itemProp="url" className="btn">
                    more...
                  </a>
                </Link>
              </article>
            </div>
          ))
        : ""}
      {/* Normal Post Render */}
      {allPostsData.length > 0 ? <h2 className="divider">Post Lists</h2> : ""}
      {allPostsData.length > 0
        ? allPostsData.map(({ id, date, title }, index) => (
            <div className="segments posts" key={"UID" + id}>
              <article className="item show">
                <div className="cover">
                  <Link as={`/posts/${id}`} href="posts/[id]">
                    <a itemProp="url" title={title}>
                      <img
                        data-src={`https://source.unsplash.com/collection/4325322?${
                          99980 - index
                        }`}
                      />
                    </a>
                  </Link>
                </div>
                <div className="info">
                  <div className="meta">
                    <span className="item" title={`Created: ${date}`}>
                      <span className="icon">
                        <i className="ic i-calendar"></i>
                      </span>
                      <time
                        itemProp="dateCreated datePublished"
                        dateTime={date}
                      >
                        <Date dateString={date} />
                      </time>
                    </span>
                  </div>
                  <h3>
                    <Link as={`/posts/${id}`} href="posts/[id]">
                      <a itemProp="url" title={title}>
                        {title}
                      </a>
                    </Link>
                  </h3>
                  <div className="excerpt">{PostsData[index]}</div>
                </div>
                <Link as={`/posts/${id}`} href="posts/[id]">
                  <a itemProp="url" className="btn">
                    more...
                  </a>
                </Link>
              </article>
            </div>
          ))
        : ""}
    </div>
  );
}
