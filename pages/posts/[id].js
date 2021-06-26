import Layout from "../../components/layout";
import { getPostdata, getAuthStrapi ,getImgdata } from "../../lib/fetchpost";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import Post from "../../components/Pages/Post"
// ---------------*** NO ISR ***---------------//
async function getHTMLpostdata(data) {
  const matterResult = matter(data);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return contentHtml;
}

export default function MyPost({ postData, content, postCount, tagsCount ,getTags, data, img}) {
  return (
      <Layout postCount={postCount} tagsCount={tagsCount} data={data} img={img}>
        <Post postData={postData} content={content} getTags={getTags} />
      </Layout>
  );
}

export async function getStaticProps({ params }) {
  var jwt = await getAuthStrapi();
  var data = await getPostdata("getpost", jwt);
  var postCount = data.length;
  var getTags = [...new Set(data.map(({tags})=> tags.map(({tag}) => tag)).flat())]
  var tagsCount = getTags.length;
  var postData = await Object.assign(
    {},
    ...data.filter((data) => {
      return data.id == params.id;
    })
  );
  var content = await getHTMLpostdata(postData.content);
  var imgs = await getImgdata("getimg", jwt)
  var img = imgs.map(({url}) => url);
  return {
    props: {
      data,
      img,
      postData,
      content,
      postCount,
      tagsCount,
      getTags
    },
  };
}

export async function getStaticPaths() {
  var jwt = await getAuthStrapi();
  var data = await getPostdata("getpost", jwt);
  const paths = await data.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    fallback: false,
    paths,
  };
}
