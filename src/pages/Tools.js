import Footer from "../components/Footer";
import Header from "../components/Header";
import ToolProInfo from "../components/ToolProInfo";


const Tools = ({tool}) => {
  return(
    <div>
      <Header/>
      <div className="tool-product-container">
        <div className="tool-product-row">
          {tool.map((data, i) => {
            return (
              <ToolProInfo data={data} key={i} />
            )
          })
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Tools;