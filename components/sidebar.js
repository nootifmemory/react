import { useState, useEffect } from "react";
import * as React from "react";

export default function Sidebar({value,tag}) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

 const scrollBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
 }

  //https://github.com/vercel/next.js/issues/6132
  const handleScroll = () => {
    var headerHight = document.querySelector("#header").height()+height*30/100
    if(window.pageYOffset > headerHight && document.body.offsetWidth > 991){
      document.querySelector('#sidebar').classList.add('affix')
    } else {
      document.querySelector('#sidebar').classList.remove('affix')
    }
  }
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div id="sidebar" className="static">
    <div className="inner ">
      <div className="panels " style={{ height: height }}>
        <div className="inner">
          <div className="contents panel pjax" data-title="Contents"></div>
          <div className="related panel pjax" data-title="Related"></div>
          <div className="overview panel" data-title="Overview">
            <div
              className="author"
              itemProp="author"
              itemScope
              itemType="http://schema.org/Person"
            >
              <img
                className="image"
                itemProp="image"
                alt="Naughty NooTif"
                data-src="/images/avatar.jpg"
              />
              <p className="name" itemProp="name">
                Naughty NooTif
              </p>
              <div className="description" itemProp="description">
                Naughty
              </div>
            </div>
            <nav className="state">
              <div className="item posts">
                <a href="/archives/">
                  <span className="count">{value}</span>
                  <span className="name">posts</span>
                </a>
              </div>
              <div className="item tags">
                <a href="/tags/">
                  <span className="count">{tag}</span>
                  <span className="name">tags</span>
                </a>
              </div>
            </nav>
            <div className="social space-x-4 ">
              <span
                className="exturl item github"
                data-url="aHR0cHM6Ly9naXRodWIuY29tL05vb1RpZk1lbW9yeQ=="
                title="https:&#x2F;&#x2F;github.com&#x2F;NooTifMemory"
              >
                <i className="ic i-github"></i>
              </span>
              <span
                className="exturl item music"
                data-url="aHR0cHM6Ly9tdXNpYy4xNjMuY29tLyMvdXNlci9ob21lP2lkPXlvdXJpZA=="
                title="https:&#x2F;&#x2F;music.163.com&#x2F;#&#x2F;user&#x2F;home?id&#x3D;yourid"
              >
                <i className="ic i-cloud-music"></i>
              </span>
              <span
                className="exturl item email"
                data-url="bWFpbHRvOm5vb3RpZmh1aG9uZ0BtYWlsLmNvbQ=="
                title="mailto:nootifhuhong@mail.com"
              >
                <i className="ic i-envelope"></i>
              </span>
              <span
                className="exturl item youtube"
                data-url="aHR0cHM6Ly95b3V0dWJlLmNvbS9mcmVkZGluZ3V5ZW45NQ=="
                title="https:&#x2F;&#x2F;youtube.com&#x2F;freddinguyen95"
              >
                <i className="ic i-youtube"></i>
              </span>
            </div>
            <ul className="menu">
              <li className="item">
                <a href="/" rel="section">
                  <i className="ic i-home"></i>Home
                </a>
              </li>

              <li className="item">
                <span
                  className="exturl"
                  data-url="aHR0cHM6Ly9jb3ZpZDE5Lm5vb3RpZi50ay8="
                >
                  <i className="ic i-heart"></i>Covid19
                </span>
              </li>

              <li className="item dropdown">
                <a href="">
                  <i className="ic i-feather"></i>Posts
                </a>
                <ul className="submenu">
                  <li className="item">
                    <a rel="section">
                      <i className="ic i-list-alt"></i>Archives
                    </a>
                  </li>
                  <li className="item">
                    <a href="/categories/" rel="section">
                      <i className="ic i-th"></i>Categories
                    </a>
                  </li>
                  <li className="item">
                    <a href="/tags/" rel="section">
                      <i className="ic i-tags"></i>Tags
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul id="quick">
        <li className="prev pjax"></li>
        <li className="up">
          <i className="ic i-arrow-up" onClick={scrollTop}></i>
        </li>
        <li className="down">
          <i className="ic i-arrow-down" onClick={scrollBottom}></i>
        </li>
        <li className="next pjax"></li>
        <li className="percent"></li>
      </ul>
    </div>
    </div>
  );
}