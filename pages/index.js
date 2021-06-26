import Head from "next/head";
import Layout from "../components/layout";
import { getPostdata, getAuthStrapi , getImgdata} from "../lib/fetchpost";
import Page from "../components/Pages/Page"

function getDescription(data) {
  var data =
    data
      .replace(/(<([^>]+)>)/gi, "")
      .replace(/\n/g, "")
      .substring(0, 100) + "...";
  return data;
}

export default function Home({ allStickyPostsData , allPostsData , StickyPostsData , PostsData , postCount , tagsCount , data,img }) {
  return (
      <Layout postCount={postCount} tagsCount={tagsCount} data={data} img={img}>
        <Head>
          <title>Young Wild and Free</title>
        </Head>
        <Page allStickyPostsData={allStickyPostsData} allPostsData={allPostsData} StickyPostsData={StickyPostsData} PostsData={PostsData} img={img} />
      </Layout>
  );
}

export async function getStaticProps() {
  var jwt = await getAuthStrapi();
  var data = await getPostdata("getpost", jwt);
  var imgs = await getImgdata("getimg", jwt)
  var allPostsData = data.filter((data) => {return data.sticky === false})
  var allStickyPostsData = data.filter((data) => {return data.sticky === true})
  var PostsData = await allPostsData.map(({content})=> getDescription(content));
  var StickyPostsData = await allStickyPostsData.map(({content})=> getDescription(content))
  var postCount = data.length
  var getTags = [...new Set(data.map(({tags})=> tags.map(({tag}) => tag)).flat())]
  var tagsCount = getTags.length
  var img = imgs.map(({url}) => url);
  return {
    props: {
      data,
      img,
      allStickyPostsData,
      allPostsData,
      StickyPostsData,
      PostsData,
      postCount,
      tagsCount,
    },
  };
}
