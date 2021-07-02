import { useEffect, useState } from "react";
import anime from "animejs";
import Link from "next/link";
import WaveTop from "./wavetop";
const NavBar = function () {
  const [type, setType] = useState(undefined);

  const transition = function (target, type, complete) {
    var animation = {};
    var display = "none";
    switch (type) {
      case 0:
        animation = {
          opacity: [1, 0],
        };
        break;
      case 1:
        animation = {
          opacity: [0, 1],
        };
        display = "block";
        break;
      case "bounceUpIn":
        animation = {
          begin: function (anim) {
            target.display("block");
          },
          translateY: [
            {
              value: -60,
              duration: 200,
            },
            {
              value: 10,
              duration: 200,
            },
            {
              value: -5,
              duration: 200,
            },
            {
              value: 0,
              duration: 200,
            },
          ],
          opacity: [0, 1],
        };
        display = "block";
        break;
      case "shrinkIn":
        animation = {
          begin: function (anim) {
            target.display("block");
          },
          scale: [
            {
              value: 1.1,
              duration: 300,
            },
            {
              value: 1,
              duration: 200,
            },
          ],
          opacity: 1,
        };
        display = "block";
        break;
      case "slideRightIn":
        animation = {
          begin: function (anim) {
            target.display("block");
          },
          translateX: [100, 0],
          opacity: [0, 1],
        };
        display = "block";
        break;
      case "slideRightOut":
        animation = {
          translateX: [0, 100],
          opacity: [1, 0],
        };
        break;
      default:
        animation = type;
        display = type.display;
        break;
    }
    anime(
      Object.assign(
        {
          targets: target,
          duration: 200,
          easing: "linear",
        },
        animation
      )
    ).finished.then(function () {
      target.display(display);
      complete && complete();
    });
  };
  const handleToggle = (type) => {
    setType(document.documentElement.getAttribute("data-theme"));
  };
  const changeTheme = function (type) {
    if (type !== undefined) {
      if (type) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.querySelector(".theme .ic").classList.remove("i-sun");
        document.querySelector(".theme .ic").classList.add("i-moon");
      } else {
        document.documentElement.setAttribute("data-theme", "");
        document.querySelector(".theme .ic").classList.remove("i-moon");
        document.querySelector(".theme .ic").classList.add("i-sun");
      }
    }
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addListener(function (mediaQueryList) {
        if (mediaQueryList.matches) {
          console.log(mediaQueryList.matches);
          changeTheme("dark");
        } else {
          console.log(mediaQueryList.matches);
          changeTheme("");
        }
      });

    var t = window.localStorage.getItem("theme");
    if (t) {
      changeTheme(t);
    } else {
      changeTheme();
    }
    document
      .querySelector(".theme")
      .addEventListener("click", function (event) {
        var btn = document.querySelector(".theme").childNodes.item("");
        var g = document.createElement("div");
        g.id = "neko";
        g.innerHTML =
          '<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>';
        var neko = document.getElementsByTagName("body")[0].appendChild(g);

        var hideNeko = function () {
          transition(
            neko,
            {
              delay: 1500,
              opacity: 0,
            },
            function () {
              document.getElementsByTagName("body")[0].removeChild(neko);
            }
          );
        };

        if (
          document
            .querySelector(".theme")
            .childNodes.item("")
            .classList.contains("i-sun")
        ) {
          var c = function () {
            neko.classList.add("dark");
            changeTheme("dark");
            window.localStorage.setItem("theme", "dark");
            hideNeko();
          };
        } else {
          neko.classList.add("dark");
          var c = function () {
            neko.classList.remove("dark");
            changeTheme("");
            window.localStorage.setItem("theme", "");
            hideNeko();
          };
        }
        transition(neko, 1, function () {
          setTimeout(c, 210);
        });
      });

    Object.assign(HTMLElement.prototype, {
      createChild: function (tag, obj, positon) {
        var child = document.createElement(tag);
        Object.assign(child, obj);
        switch (positon) {
          case "after":
            this.insertAfter(child);
            break;
          case "replace":
            this.innerHTML = "";
          default:
            this.appendChild(child);
        }
        return child;
      },
      wrap: function (obj) {
        var box = document.createElement("div");
        Object.assign(box, obj);
        this.parentNode.insertBefore(box, this);
        this.parentNode.removeChild(this);
        box.appendChild(this);
      },
      height: function (h) {
        if (h) {
          this.style.height = typeof h == "number" ? h + "rem" : h;
        }
        return this.getBoundingClientRect().height;
      },
      width: function (w) {
        if (w) {
          this.style.width = typeof w == "number" ? w + "rem" : w;
        }
        return this.getBoundingClientRect().width;
      },
      top: function () {
        return this.getBoundingClientRect().top;
      },
      left: function () {
        return this.getBoundingClientRect().left;
      },
      attr: function (type, value) {
        if (value === null) {
          return this.removeAttribute(type);
        }

        if (value) {
          this.setAttribute(type, value);
          return this;
        } else {
          return this.getAttribute(type);
        }
      },
      insertAfter: function (element) {
        var parent = this.parentNode;
        if (parent.lastChild == this) {
          parent.appendChild(element);
        } else {
          parent.insertBefore(element, this.nextSibling);
        }
      },
      display: function (d) {
        if (d == null) {
          return this.style.display;
        } else {
          this.style.display = d;
          return this;
        }
      },
      child: function (selector) {
        return $(selector, this);
      },
      find: function (selector) {
        return $.all(selector, this);
      },
      _class: function (type, className, display) {
        var classNames = className.indexOf(" ")
          ? className.split(" ")
          : [className];
        var that = this;
        classNames.forEach(function (name) {
          if (type == "toggle") {
            that.classList.toggle(name, display);
          } else {
            that.classList[type](name);
          }
        });
      },
      addClass: function (className) {
        this._class("add", className);
        return this;
      },
      removeClass: function (className) {
        this._class("remove", className);
        return this;
      },
      toggleClass: function (className, display) {
        this._class("toggle", className, display);
        return this;
      },
      hasClass: function (className) {
        return this.classList.contains(className);
      },
    });
  }, [type]);

  return (
    <header id="header" itemScope itemType="http://schema.org/WPHeader">
      <div className="inner">
        <div id="brand" className="affix">
          <div className="pjax">
            <Link href="/" rel="start" passHref>
              <a className="logo">
                <p className="artboard">NooTif</p>
                <h1 itemProp="name headline" className="title">
                  NooTif
                </h1>
              </a>
            </Link>
            <p className="meta" itemProp="description">
              = Young Wild and Free =
            </p>
          </div>
        </div>
        <nav id="nav" className="bg-black bg-opacity-25">
          <div className="inner">
            <div className="toggle">
              <div className="lines" aria-label="Toggle navigation bar">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
            <ul className="menu">
              <li className="item title">
                <a href="/" rel="start"></a>
              </li>
            </ul>
            <ul className="right">
              <li className="item theme">
                <i className="ic i-sun" onClick={handleToggle}></i>
              </li>
              <li className="item search">
                <i className="ic i-search"></i>
              </li>
            </ul>
          </div>
        </nav>
{/* <nav><WaveTop/></nav> */}
      </div>
    </header>
  );
};
export default NavBar;
