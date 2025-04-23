import Header from "../../components/header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import "./style.css";
export default function Home() {
  return (
    <div className="cc">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
