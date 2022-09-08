import "./App.css";
import Homepage from "./components/Homepage";

export function getApiDomain() {
  const apiPort = process.env.REACT_APP_API_PORT || 3001;
  const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
  const websiteUrl =
    process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
  return websiteUrl;
}

function App() {
  const apiClickHandler = async () => {
    const data = await fetch("/api/hello");
    console.log(data);
    const printData = await data.json();
    console.log(printData);
  };
  return (
    <>
      <Homepage />
      <button onClick={apiClickHandler}>Click for API</button>
    </>
  );
}

export default App;
