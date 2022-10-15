import { LinksFunction } from "@remix-run/node";
import mainStyle from "../styles/main.css"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: mainStyle },
    { rel: "preconnect", href: "https://fonts.googleapis.com"},
    { rel: "preconnect", href: "https://fonts.gstatic.com"},
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"}
  ]
}

export default function Index() {
  return (
    <div>
      <header style={headerStyle}>
        <div className="content" style={{height: "100%", display: "flex", padding: "0 21px"}}>
          <div className="site-name" style={siteNameStyle}>Dev For Humans</div>
        </div>
      </header>
      <main>
        <section id="search-section" style={searchSectionStyle}>
          <div>The tech, <br/>minus the computerese</div>

          <form action="">
            <label htmlFor="search-input"></label>
            <input type="text" id="search-input" name="q" />
          </form>
        </section>
      </main>
    </div>
  );
}

const headerStyle = {
  backgroundColor: "#3CB35A",
  height: "60px"
}

const siteNameStyle = {
  fontFamily: "'Bebas Neue', cursive",
  color: "white",
  alignSelf: "center",
  fontSize: "30px"
}

const searchSectionStyle = {
  backgroundColor: "#635E79",
  height: "221px"
}